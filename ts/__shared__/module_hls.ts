import * as _fs from "fs"
import * as _cp from "child_process"
import * as _os from "os"
import * as _path from "path"

import { getJSON, getText, getBinary } from "./module_net"
import { log, debug, error } from "./module_log"
import { noop, promisify } from "./module_utils"
import { ffmpeg } from "./module_ffmpeg"
import * as P from "./module_fs"

let currentConnections = 0

const enum RET_CODE {
	OK = 0,
	ERROR = -1,
	DELETED = -2
}

function parsePlaylist(playlist: string, head: string, tail: string): { endlist: boolean, urls: Array<string> } {

	if (!playlist) throw "playlist empty"

	let lines = playlist.split("\n")

	if (lines.shift() != "#EXTM3U") throw "playlist invalid"

	let segments = []
	let endlist = false

	for (let line of lines) {

		if (line.length) {
			if (line.startsWith("#")) {

				let m = line.match(/#(EXT-X-|EXT)([A-Z0-9-]+)(?::(.*))?/)

				if (!m) {
					debug("error", line)
				}
				else {
					switch (m[2]) {

						case "ENDLIST":
							endlist = true; // Youtube
							break;

						// another shitty protocol full of gibberish

						case "M3U":
						case "INF":
						case "VERSION":
						case "MEDIA-SEQUENCE":
						case "TARGETDURATION":
						case "PROGRAM-DATE-TIME":
						case "INDEPENDENT-SEGMENTS":
						case "START":
						case "DISCONTINUITY-SEQUENCE":
						case "DISCONTINUITY":
						case "CUEPOINT":
						case "DATERANGE":

						// twitch
						case "TWITCH-ELAPSED-SECS":
						case "TWITCH-TOTAL-SECS":
						case "TWITCH-PREFETCH":
						case "SCTE35-OUT":
							break;

						case "DYNAMICALLY-GENERATED": // playlist @todo
							throw "EXT-X-DYNAMICALLY-GENERATED";
						default:
							debug("not supported", line)
					}
				}
			}
			else {
				if (line.match(/.+:\/\/.+/)) {
					segments.push(line)
				}
				else {
					segments.push(head + "/" + line + tail)
				}
			}
		}
	}

	if (segments.length == 0) throw "playlist invalid"

	return { endlist: endlist, urls: segments }
}

/*

	ffmpeg version

	+ez coding
	-no parallelism
	-no rewind
	-buggy
	-no retry

*/
export class HlsWithFFMPEG {
	constructor(timeout: number, maxParallel: number) {

	}

	play(url: string, outfile: string): Promise<boolean> {
		return ffmpeg(url, outfile, "-loglevel error -c copy -y")
	}
}

/*

	current hls implementation

	+retry
	+parallelism
	+deletion support
	+stable
	-output only TS no transcoding

*/

export class HlsTS {

	private stream: _fs.WriteStream
	private updateInterval: number
	private maxIdle: number

	// timeout = 0 for replay

	constructor(updateInterval: number, maxIdle:number) {

		// @todo ignore requested timeout cuz it needs more test

		// total timeout = maxIdle*updateInterval

		this.updateInterval = updateInterval
		//this.maxIdle = updateInterval?1000 / updateInterval * 100:1
		this.maxIdle=maxIdle

		debug(`hls timeout ${this.updateInterval} maxIdle ${this.maxIdle}`)
	}

	play(url: string, filename: string): Promise<boolean> {

		let exitCode = null

		return new Promise(async (resolve, reject) => {

			if (!url) throw "bad url"

			let m3u8 = url.match(/(.+)\/.+\.m3u8(.+|)/i)

			if (!m3u8) throw "m3u8 url is invalid"

			this.stream = null;

			let oldSegments: Record<string, boolean> = {}
			let cache: Array<string> = []

			let doneSegment = 0
			let currentSegment = 0
			let waitingSegment = 0
			let hTimeout = null

			let updated=false

			let idle = 0

			// unsorted segments to flush

			let queue: Record<number, Buffer> = {}

			if (this.stream === null) {
				this.stream = _fs.createWriteStream(filename)
				this.stream.on("error", err => {
					error("createWriteStream",err.code)

					if (err.code != "ERR_STREAM_WRITE_AFTER_END") exitCode = RET_CODE.ERROR
				})
			}

			// update list of segment

			const updateSegments = async () => {

				if (exitCode !== null) return

				/*

					update segments from m3u8 (once for replay)

					403/404 is fatal

				*/

				try {

					let text=await getText(url)


					let { endlist: endOfStream, urls: segments } = parsePlaylist(text, m3u8[1], m3u8[2])

					// ignore endOfStream

					// merge segments

					let fresh = 0

					for (let segment of segments) {
						if (!(segment in oldSegments)) {
							oldSegments[segment] = true
							cache.push(segment)
							fresh++
						}
					}

					// twitch : replay=all / live=16
					// youtube live : up to 4 hours then ~ 2
					// periscope : ~10
					// vk : ~10

					debug(`hls cache updated ${fresh}/${segments.length} cached ${cache.length} endlist ${exitCode} eos ${endOfStream} idle ${idle}`)

					updated=true

					if (this.updateInterval) {



						// idle timeout

						if (cache.length==0 && waitingSegment==0)
						{
							idle++

							if (idle > this.maxIdle) {
								exitCode = RET_CODE.OK
								return
							}
						}
						else{
							idle=0
						}

						hTimeout = setTimeout(updateSegments, this.updateInterval)
					}
				}
				catch (err) {
					error("updateSegments", err)

					/*

						404 end of stream
						403 forbidden/broadcaster banned

					*/
					exitCode = RET_CODE.OK
				}
			}

			try {

				// download m3u

				updateSegments()

				// main loop

				while (exitCode === null) {

					// download segments with limits

					while (waitingSegment < global.system.maxParallelDownload && cache.length && exitCode === null) {

						let segmentUrl = cache.shift()

						let request = {
							idx: currentSegment,
							url: segmentUrl,
							retry: 0
						}

						waitingSegment++
						currentSegment++

						// debug("done", doneSegment, "curr", currentSegment, "waiting", waitingSegment,	"available", cache.length, "queue", Object.keys(queue).length)

						// download a segment

						async function downloadSegment(request, ffmpeg: _fs.WriteStream) {

							// retry/abort loop

							while (exitCode === null) {


								/*

								how to catch fetch-error ?

								*/

								let chunk:Buffer

								try
								{
									chunk=await getBinary(request.url)
								}
								catch(err)
								{
									chunk=null

									if (err==403 || err==404 || err==503)
									{
										exitCode=RET_CODE.ERROR
									}
									else
									{
										error("get chunk fail",err)
									}
								}


								if (chunk) {

									// a segment is complete. write it or cache it.

									// @optim : sorting cached segments

									//log("loaded", request.idx)

									waitingSegment--

									if (doneSegment == request.idx) {

										//log("writing", doneSegment)

										if (exitCode === null) ffmpeg.write(chunk)

										do {
											doneSegment++

											// flush queue

											if (doneSegment in queue) {

												//log("flush", doneSegment)

												let chunk = queue[doneSegment]

												if (chunk && exitCode === null) ffmpeg.write(chunk)

												delete queue[doneSegment]
											}
											else {
												break;
											}
										}
										while (exitCode === null)

										return
									}
									else {

										// chunk not ordered. queue it

										queue[request.idx] = chunk

										return
									}
								}
								else {

									// retry on error

									request.retry++

									error("segment", request.idx, "fail", "retry", request.retry)

									if (request.retry >= 5) {
										// give it up. segment is gone
										queue[request.idx] = null
										waitingSegment--
										return
									}
									else
									{
										await P.timeout(1000)
									}
								}
							}
						}



						downloadSegment(request, this.stream)
					}

					// debug(`waiting ${waitingSegment} cache ${cache.length} ${exitCode}`)

					// if the file is deleted abort

					if (this.stream)
					{
						P.exists(filename)
						.then(bool=>
						{
							// file deleted

							if (!bool) exitCode=RET_CODE.DELETED
						})
						.catch(noop)
					}

					// eos replay

					if (updated) {
						if (waitingSegment == 0 && cache.length == 0 && this.updateInterval == 0) {
							exitCode = RET_CODE.OK
						}
					}

					await P.timeout(100)
				}

				// kill updateSegment timeout

				if (hTimeout) clearTimeout(hTimeout)
			}
			catch (err) {

				error("fatal", err)
				exitCode = RET_CODE.ERROR
			}

			if (this.stream) this.stream.end()

			if (cache.length && waitingSegment) error("not flushed",cache.length,waitingSegment)

			if (exitCode != RET_CODE.OK && exitCode != RET_CODE.DELETED) error("RET_CODE", exitCode)

			resolve(exitCode === RET_CODE.OK)
		})
	}
}
