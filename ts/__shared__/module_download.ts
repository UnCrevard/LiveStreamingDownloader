import * as _fs from "fs"
import { getJSON, getText, getBinary, head, getResponse } from "./module_net"
import { log, debug, error, cbError } from "./module_log"
import * as P from "./module_fs"

const BLOCK_SIZE = 512 * 1024

// no parallel download

export async function downloadSingle(url: string, filename: string):Promise<any> {

	if (!url || !filename) throw "downloadSingle bad params";

	debug(url,filename)

	return getBinary(url)
		.then(buffer=>
		{
			return !P.writeFile(filename,buffer)
		})


	// node-fetch not supporting body streaming

/*
	let res:Response = await getResponse(url)

	let stream = _fs.createWriteStream(filename)

	//debug(`download type`, res.headers.get("content-type"))

	let totalLen = 0

	let start = Date.now()

	let reader = res.body.getReader()

	while (true) {
		let result = await reader.read()

		if (result.done) break;

		totalLen += result.value.length

		stream.write(Buffer.from(result.value))
	}

	let secs = (Date.now() - start) / 1000

	debug(`download speed ${Math.floor(totalLen / secs)} bytes/s`)
	return true
*/
}

export async function downloadMultipart(url: string, filename: string, maxParallelDownload: number):Promise<any> {

	if (!url || !filename) throw "downloadMultipart bad params";

	if (!maxParallelDownload)
	{
		debug(global.system)
	}


	debug(url, filename)

	/*
		check support for range download

		'last-modified': 'Sun, 29 Jul 2018 HH:MM:SS GMT',
		'content-type': 'video/mp4',

	 */

	let retry = 5;
	let res:Response

	while (true)
	{
		try
		{
			res=await head(url)
			break;
		}
		catch(err)
		{
			error("head",retry,err.errno)
		}

		retry--

		if (retry==0) throw "downloadMultipart head fail"
	}

	if (!res.ok) throw res.status

	/*

	@todo : this can't work on electron cuz some fetch bullshit limitation can't get all headers !!!

	blablabla https://www.w3.org/TR/cors/#terminology

	fuck it !!! that's piss me off. it works on nodejs.

	so multipart download is disabled for now. I'll use electron net api for this (probably some crappy stuff too)

	*/

	if (res.headers.has("Accept-Ranges")) {

		let len: number

		if (res.headers.has("content-range")) {
			len = parseInt(res.headers.get("content-range").split("/")[1])
		}
		else {
			len = parseInt(res.headers.get("content-length"))
		}

		let block = BLOCK_SIZE
		let total = Math.ceil(len / block)
		let remainder = len % block

		let stream = _fs.createWriteStream(filename)

		let start = 0

		debug(`multipart started size ${len} blocks ${block}*${total} parallel ${maxParallelDownload}`)

		let startTime=Date.now()

		while (total) {
			let max = Math.min(total, maxParallelDownload) || 1

			let requests: Array<Promise<Buffer>> = []

			let size

			for (let i = 0; i < max; i++) {
				size = total == 1 ? remainder : block
				let range = "bytes=" + start + "-" + (start + size - 1)

				if (size) {


					/*

					download part and retry on any error

					*/

					async function downloadPart()
					{
						for (let i = 0; i < global.system.maxRetry;i++)
						{
							try
							{
								let chunk:Buffer=await getBinary(url,{
									"Range":range
								})
								return chunk
							}
							catch(err)
							{
								error(err.errno)
								debug("downloadPart retry",i)
							}
						}

						return null // give it up
					}

					requests.push(downloadPart())
				}

				total--
				start += size
			}

			await Promise.all(requests)
				.then(buffers => {
					for (let buffer of buffers) {
						buffer && stream.write(buffer)
					}
				})
		}

		stream.close()

		debug(`multipart finished ${len/(Date.now()-startTime+1) | 0} kb/s`)
	}
	else {

		//@todo : memory problem. better API on electron ?
		
		error("range not available",url)

		return downloadSingle(url, filename)
	}
}
