/// <reference path="../../../__typing/youtube.d.ts" />

import { getJSON, getText, getBinary } from "./module_net"
import { downloadMultipart } from "./module_download"
import { prettify, noop, jsonDeepSearch, promisify } from "./module_utils"
import {spawn} from "child_process"
import * as querystring from "querystring"
import { log, debug, warn, error } from "./module_log"
import * as P from "./module_fs"

import * as _fs from "fs"
import * as _url from "url"
import * as _os from "os"
import * as _path from "path"

// @todo : keep up to date

export const YOUTUBE_CLIENT = {
	"x-youtube-client-name": "1",
	"x-youtube-client-version": "2.20180808"
}

// so many format. av01 & caption are missing

export const FORMATS: Record<string, Youtube.Format> = {

	// ???

	'5': {
		container: 'flv',
		resolution: '240p',
		encoding: 'Sorenson H.283',
		profile: null,
		bitrate: '0.25',
		audioEncoding: 'mp3',
		audioBitrate: 64,
	},

	'6': {
		container: 'flv',
		resolution: '270p',
		encoding: 'Sorenson H.263',
		profile: null,
		bitrate: '0.8',
		audioEncoding: 'mp3',
		audioBitrate: 64,
	},

	'13': {
		container: '3gp',
		resolution: null,
		encoding: 'MPEG-4 Visual',
		profile: null,
		bitrate: '0.5',
		audioEncoding: 'aac',
		audioBitrate: null,
	},

	'17': {
		container: '3gp',
		resolution: '144p',
		encoding: 'MPEG-4 Visual',
		profile: 'simple',
		bitrate: '0.05',
		audioEncoding: 'aac',
		audioBitrate: 24,
	},

	'18': {
		container: 'mp4',
		resolution: '360p',
		encoding: 'H.264',
		profile: 'baseline',
		bitrate: '0.5',
		audioEncoding: 'aac',
		audioBitrate: 96,
	},

	'22': {
		container: 'mp4',
		resolution: '720p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '2-3',
		audioEncoding: 'aac',
		audioBitrate: 192,
	},

	'34': {
		container: 'flv',
		resolution: '360p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.5',
		audioEncoding: 'aac',
		audioBitrate: 128,
	},

	'35': {
		container: 'flv',
		resolution: '480p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.8-1',
		audioEncoding: 'aac',
		audioBitrate: 128,
	},

	'36': {
		container: '3gp',
		resolution: '240p',
		encoding: 'MPEG-4 Visual',
		profile: 'simple',
		bitrate: '0.175',
		audioEncoding: 'aac',
		audioBitrate: 32,
	},

	'37': {
		container: 'mp4',
		resolution: '1080p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '3-5.9',
		audioEncoding: 'aac',
		audioBitrate: 192,
	},

	'38': {
		container: 'mp4',
		resolution: '3072p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '3.5-5',
		audioEncoding: 'aac',
		audioBitrate: 192,
	},

	'43': {
		container: 'webm',
		resolution: '360p',
		encoding: 'VP8',
		profile: null,
		bitrate: '0.5-0.75',
		audioEncoding: 'vorbis',
		audioBitrate: 128,
	},

	'44': {
		container: 'webm',
		resolution: '480p',
		encoding: 'VP8',
		profile: null,
		bitrate: '1',
		audioEncoding: 'vorbis',
		audioBitrate: 128,
	},

	'45': {
		container: 'webm',
		resolution: '720p',
		encoding: 'VP8',
		profile: null,
		bitrate: '2',
		audioEncoding: 'vorbis',
		audioBitrate: 192,
	},

	'46': {
		container: 'webm',
		resolution: '1080p',
		encoding: 'vp8',
		profile: null,
		bitrate: null,
		audioEncoding: 'vorbis',
		audioBitrate: 192,
	},

	'82': {
		container: 'mp4',
		resolution: '360p',
		encoding: 'H.264',
		profile: '3d',
		bitrate: '0.5',
		audioEncoding: 'aac',
		audioBitrate: 96,
	},

	'83': {
		container: 'mp4',
		resolution: '240p',
		encoding: 'H.264',
		profile: '3d',
		bitrate: '0.5',
		audioEncoding: 'aac',
		audioBitrate: 96,
	},

	'84': {
		container: 'mp4',
		resolution: '720p',
		encoding: 'H.264',
		profile: '3d',
		bitrate: '2-3',
		audioEncoding: 'aac',
		audioBitrate: 192,
	},

	'85': {
		container: 'mp4',
		resolution: '1080p',
		encoding: 'H.264',
		profile: '3d',
		bitrate: '3-4',
		audioEncoding: 'aac',
		audioBitrate: 192,
	},

	'100': {
		container: 'webm',
		resolution: '360p',
		encoding: 'VP8',
		profile: '3d',
		bitrate: null,
		audioEncoding: 'vorbis',
		audioBitrate: 128,
	},

	'101': {
		container: 'webm',
		resolution: '360p',
		encoding: 'VP8',
		profile: '3d',
		bitrate: null,
		audioEncoding: 'vorbis',
		audioBitrate: 192,
	},

	'102': {
		container: 'webm',
		resolution: '720p',
		encoding: 'VP8',
		profile: '3d',
		bitrate: null,
		audioEncoding: 'vorbis',
		audioBitrate: 192,
	},

	// DASH (video only)

	'133': {
		container: 'mp4',
		resolution: '240p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.2-0.3',
		audioEncoding: null,
		audioBitrate: null,
	},

	'134': {
		container: 'mp4',
		resolution: '360p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.3-0.4',
		audioEncoding: null,
		audioBitrate: null,
	},

	'135': {
		container: 'mp4',
		resolution: '480p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.5-1',
		audioEncoding: null,
		audioBitrate: null,
	},

	'136': {
		container: 'mp4',
		resolution: '720p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '1-1.5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'137': {
		container: 'mp4',
		resolution: '1080p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '2.5-3',
		audioEncoding: null,
		audioBitrate: null,
	},

	'138': {
		container: 'mp4',
		resolution: '4320p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '13.5-25',
		audioEncoding: null,
		audioBitrate: null,
	},

	'160': {
		container: 'mp4',
		resolution: '144p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.1',
		audioEncoding: null,
		audioBitrate: null,
	},

	'242': {
		container: 'webm',
		resolution: '240p',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '0.1-0.2',
		audioEncoding: null,
		audioBitrate: null,
	},

	'243': {
		container: 'webm',
		resolution: '360p',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '0.25',
		audioEncoding: null,
		audioBitrate: null,
	},

	'244': {
		container: 'webm',
		resolution: '480p',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '0.5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'247': {
		container: 'webm',
		resolution: '720p',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '0.7-0.8',
		audioEncoding: null,
		audioBitrate: null,
	},

	'248': {
		container: 'webm',
		resolution: '1080p',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '1.5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'264': {
		container: 'mp4',
		resolution: '1440p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '4-4.5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'266': {
		container: 'mp4',
		resolution: '2160p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '12.5-16',
		audioEncoding: null,
		audioBitrate: null,
	},

	'271': {
		container: 'webm',
		resolution: '1440p',
		encoding: 'VP9',
		profile: 'profle 0',
		bitrate: '9',
		audioEncoding: null,
		audioBitrate: null,
	},

	'272': {
		container: 'webm',
		resolution: '4320p',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '20-25',
		audioEncoding: null,
		audioBitrate: null,
	},

	'278': {
		container: 'webm',
		resolution: '144p 15fps',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '0.08',
		audioEncoding: null,
		audioBitrate: null,
	},

	'298': {
		container: 'mp4',
		resolution: '720p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '3-3.5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'299': {
		container: 'mp4',
		resolution: '1080p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '5.5',
		audioEncoding: null,
		audioBitrate: null,
	},
	'300': {
		container: '',
		resolution: '1080p',
		encoding: '',
		profile: '',
		bitrate: '',
		audioEncoding: null,
		audioBitrate: null,
	},
	'301': {
		container: '',
		resolution: '',
		encoding: '',
		profile: '',
		bitrate: '',
		audioEncoding: null,
		audioBitrate: null,
	},

	'302': {
		container: 'webm',
		resolution: '720p HFR',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '2.5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'303': {
		container: 'webm',
		resolution: '1080p HFR',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'308': {
		container: 'webm',
		resolution: '1440p HFR',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '10',
		audioEncoding: null,
		audioBitrate: null,
	},

	'313': {
		container: 'webm',
		resolution: '2160p',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '13-15',
		audioEncoding: null,
		audioBitrate: null,
	},

	'315': {
		container: 'webm',
		resolution: '2160p HFR',
		encoding: 'VP9',
		profile: 'profile 0',
		bitrate: '20-25',
		audioEncoding: null,
		audioBitrate: null,
	},

	'330': {
		container: 'webm',
		resolution: '144p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '0.08',
		audioEncoding: null,
		audioBitrate: null,
	},

	'331': {
		container: 'webm',
		resolution: '240p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '0.1-0.15',
		audioEncoding: null,
		audioBitrate: null,
	},

	'332': {
		container: 'webm',
		resolution: '360p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '0.25',
		audioEncoding: null,
		audioBitrate: null,
	},

	'333': {
		container: 'webm',
		resolution: '240p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '0.5',
		audioEncoding: null,
		audioBitrate: null,
	},

	'334': {
		container: 'webm',
		resolution: '720p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '1',
		audioEncoding: null,
		audioBitrate: null,
	},

	'335': {
		container: 'webm',
		resolution: '1080p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '1.5-2',
		audioEncoding: null,
		audioBitrate: null,
	},

	'336': {
		container: 'webm',
		resolution: '1440p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '5-7',
		audioEncoding: null,
		audioBitrate: null,
	},

	'337': {
		container: 'webm',
		resolution: '2160p HDR, HFR',
		encoding: 'VP9',
		profile: 'profile 2',
		bitrate: '12-14',
		audioEncoding: null,
		audioBitrate: null,
	},

	/* adaptives */

	"394":
	{
		container: "mp4",
		resolution: "256x144",
		audioBitrate: null,
		audioEncoding: null,
		bitrate: "?",
		encoding: "H.264",
		profile: "?"
	},

	"395": {
		container: "mp4",
		resolution: "426x240",
		audioBitrate: null,
		audioEncoding: null,
		bitrate: "?",
		encoding: "H.264",
		profile: "?"
	},

	"396": {
		container: "mp4",
		resolution: "640x360",
		audioBitrate: null,
		audioEncoding: null,
		bitrate: "?",
		encoding: "H.264",
		profile: "?"

	},

	"397": {
		container: "mp4",
		resolution: "854x480",
		encoding: "H.264",
		profile: "?",
		audioBitrate: null,
		audioEncoding: null,
		bitrate: "?"
	},

	// DASH (audio only)

	'139': {
		container: 'mp4',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'aac',
		audioBitrate: 48,
	},

	'140': {
		container: 'm4a',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'aac',
		audioBitrate: 128,
	},

	'141': {
		container: 'mp4',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'aac',
		audioBitrate: 256,
	},

	'171': {
		container: 'webm',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'vorbis',
		audioBitrate: 128,
	},

	'172': {
		container: 'webm',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'vorbis',
		audioBitrate: 192,
	},

	'249': {
		container: 'webm',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'opus',
		audioBitrate: 48,
	},
	'250': {
		container: 'webm',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'opus',
		audioBitrate: 64,
	},
	'251': {
		container: 'webm',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'opus',
		audioBitrate: 160,
	},

	// m3u8

	'91': {
		container: 'ts',
		resolution: '144p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.1',
		audioEncoding: 'aac',
		audioBitrate: 48,
	},

	'92': {
		container: 'ts',
		resolution: '240p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.15-0.3',
		audioEncoding: 'aac',
		audioBitrate: 48,
	},

	'93': {
		container: 'ts',
		resolution: '360p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.5-1',
		audioEncoding: 'aac',
		audioBitrate: 128,
	},

	'94': {
		container: 'ts',
		resolution: '480p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '0.8-1.25',
		audioEncoding: 'aac',
		audioBitrate: 128,
	},

	'95': {
		container: 'ts',
		resolution: '720p',
		encoding: 'H.264',
		profile: 'main',
		bitrate: '1.5-3',
		audioEncoding: 'aac',
		audioBitrate: 256,
	},
	'96': {
		container: 'ts',
		resolution: '1080p',
		encoding: 'H.264',
		profile: 'high',
		bitrate: '2.5-6',
		audioEncoding: 'aac',
		audioBitrate: 256,
	},
	"265": {
		container: "ts",
		resolution: "2560x1440",
		encoding: "H.264",
		profile: "?",
		bitrate: "?",
		audioEncoding: "aac",
		audioBitrate: 256
	},
	"267": {
		container: "ts",
		resolution: "3840x2160",
		encoding: "H.264",
		profile: "high",
		bitrate: "?",
		audioEncoding: "aac",
		audioBitrate: 128
	},
	/*

	*/
	'120': {
		container: 'flv',
		resolution: '720p',
		encoding: 'H.264',
		profile: 'Main@L3.1',
		bitrate: '2',
		audioEncoding: 'aac',
		audioBitrate: 128,
	},

	'127': {
		container: 'ts',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'aac',
		audioBitrate: 96,
	},

	'128': {
		container: 'ts',
		resolution: null,
		encoding: null,
		profile: null,
		bitrate: null,
		audioEncoding: 'aac',
		audioBitrate: 96,
	},

	'132': {
		container: 'ts',
		resolution: '240p',
		encoding: 'H.264',
		profile: 'baseline',
		bitrate: '0.15-0.2',
		audioEncoding: 'aac',
		audioBitrate: 48,
	},

	'151': {
		container: 'ts',
		resolution: '720p',
		encoding: 'H.264',
		profile: 'baseline',
		bitrate: '0.05',
		audioEncoding: 'aac',
		audioBitrate: 24,
	}
}

// from ytdl-core

/**
 * Get video ID.
 *
 * There are a few type of video URL formats.
 *  - http://www.youtube.com/watch?v=VIDEO_ID
 *  - http://m.youtube.com/watch?v=VIDEO_ID
 *  - http://youtu.be/VIDEO_ID
 *  - http://www.youtube.com/v/VIDEO_ID
 *  - http://www.youtube.com/embed/VIDEO_ID
 *
 * @param {String} link
 * @return {String|Error}
 */
export function getIdFromURL(link) {

	const parsed = _url.parse(link, true);

	let id = parsed.query.v as string;

	if ((parsed.hostname === 'youtu.be' || parsed.hostname === 'youtube.com' || parsed.hostname === 'www.youtube.com') && !id) {
		const s = parsed.pathname.split('/');
		id = s[s.length - 1];
	}

	if (!id) throw 'No video id found: ' + link;

	id = id.substring(0, 11);

	if (!validateID(id)) throw "Invalid id " + id;

	return id;
}

/**
 * Gets video ID either from a url or by checking if the given string
 * matches the video ID format.
 *
 * @param {String} str
 * @return {String|Error}
 */
export function getVideoID(str) {
	if (validateID(str)) {
		return str;
	} else {
		return getIdFromURL(str);
	}
}


/**
 * Returns true if given id satifies YouTube's id format.
 *
 * @param {String} id
 * @return {Boolean}
 */
function validateID(id: string) {
	return id.match(/^[a-zA-Z0-9-_]{11}$/)
}

/* @test get channel */

function getChannelID(url: string): string {
	if (!url) throw "empty"

	let parsedUrl = new URL(url)

	log(parsedUrl)

	// https://www.youtube.com/channel/UC.../videos

	log(parsedUrl.pathname.match(/^UC[a-zA-Z0-9-_]{22}$/))

	return parsedUrl.search
}

/* @test get playlist */

function getPlaylistID(url: string): string {
	if (!url) throw "empty"

	let parsedUrl = new URL(url)

	log(parsedUrl)

	return parsedUrl.search
}
/*

	fast way to resolve a video

 */
export async function getInfos(id: string): Promise<Youtube.VideoInfos> {

	if (!validateID(id)) throw "invalid video id"

	let infos: Array<any> = await getJSON(`https://www.youtube.com/watch?v=${id}&pbj=1`, YOUTUBE_CLIENT)

	let videoInfos = {} as Youtube.VideoInfos

	for (let info of infos) {
		if ("player" in info) {
			videoInfos = info.player.args
		}
		else {
			if ("playerResponse" in info) {
				videoInfos.playabilityStatus = info.playerResponse.playabilityStatus
				videoInfos.details = info.playerResponse.videoDetails
			}
		}
	}


	/*

	ERROR & "This video has been removed by the user"
	ERROR & "This video has been removed for violating YouTube's Community Guidelines.""
	ERROR & "Sign in to confirm your age"

	OK & "We\'re experiencing technical difficulties."
	OK & "This live event has ended."

	*/

	if (!videoInfos.playabilityStatus) throw "playbilityStatus is missing"

	if (videoInfos.playabilityStatus.status != "OK") {
		if (videoInfos.playabilityStatus.reason == "Sign in to confirm your age") {

			//@hack

			warn("try to bypass age via embed")

			let text = await getText(`https://www.youtube.com/get_video_info?html5=1&video_id=${id}`)

			videoInfos = querystring.parse(text) as any

			let status = JSON.parse(videoInfos.player_response)

			videoInfos.playabilityStatus = status.playabilityStatus
			videoInfos.details = status.videoDetails
		}
		else {
			throw videoInfos.playabilityStatus.reason || videoInfos.playabilityStatus.status
		}
	}

	if (videoInfos.playabilityStatus.reason) warn("reason", videoInfos.playabilityStatus.reason)

	if (!videoInfos.details) throw "details is missing"

	// video & audio muxer downloadable url. up to 720p.

	if (videoInfos.url_encoded_fmt_stream_map) {

		// debug("parse url_encoded_fmt_stream_map")

		let downloadUrls = {}

		videoInfos.url_encoded_fmt_stream_map
			.split(",")
			.map(s => querystring.parse(s))
			.forEach((o: any) => downloadUrls[o.itag] = o)

		videoInfos.downloadUrls = downloadUrls
	}
	else {
		videoInfos.downloadUrls = null
	}

	/*

		.adaptives aka dash video & audio are splitted. all resolutions/codecs are availables.

		+live

	*/

	if (videoInfos.adaptive_fmts) {

		// debug("parse adaptive_fmts")

		let adaptives = {}

		videoInfos.adaptive_fmts
			.split(",")
			.map(s => querystring.parse(s))
			.forEach((o: any) => {

				if (!(o.itag in FORMATS)) error("adaptive unknown itag", prettify(o))

				adaptives[o.itag] = o
			})

		videoInfos.adaptives = adaptives
	}
	else {
		videoInfos.adaptives = null
	}

	/*

		HLS streams. up to 1080p60 (not so sure)

		download playlist and extract formats.

	*/

	if (videoInfos.hlsvp) {

		debug("download hlsvp")

		let m3u8 = await getText(videoInfos.hlsvp)

		// the good old shitty hls format

		videoInfos.m3u8 = m3u8.split("\n")
			.filter(line => line.length != 0 && !line.startsWith("#"))
			.reduce((arr, url) => {
				let itag = parseInt(url.match(/\/itag\/(\d+)\//)[1])

				let fmt: Youtube.Format = null

				if (itag in FORMATS) {
					fmt = FORMATS[itag]
				}
				else {
					fmt = {} as any
					error("m3u8 unknown itag", itag)
				}

				fmt.url = url
				fmt.itag = itag

				arr[itag] = fmt

				return arr

			}, {})
	}
	else {
		videoInfos.m3u8 = null
	}

	// remove useless stuff
	delete videoInfos.fflags
	delete videoInfos.messages
	delete videoInfos.player_response
	delete videoInfos.url_encoded_fmt_stream_map
	delete videoInfos.adaptive_fmts

	/*
		resolve published date from lmt (lastmodifiedtime?)
	*/

	try {
		if (videoInfos.adaptives) {
			videoInfos.published = new Date(parseInt(Object.values(videoInfos.adaptives)[0].lmt) / 1000)
		}
		else if (videoInfos.downloadUrls) {
			let lmt = Object.values(videoInfos.downloadUrls)[0].url.match(/lmt=(\d+)/)

			if (lmt) {
				videoInfos.published = new Date(parseInt(lmt[1]) / 1000)
			}
		}
	}
	catch (e) {
		error("fail to extract published", e)
	}

	if (!videoInfos.published) {
		videoInfos.published = new Date()
	}

	return videoInfos
}


/*

	fast way to search on youtube (1 request)

 */
export async function search(text: string): Promise<Array<Youtube.SearchResult>> {

	/*

	https://www.youtube.com/results?search_query=${text}
	&sp=
	&pbj=1 // return json object
	&page=int

	search_sort=video_date_uploaded
	search_query=${text}

	 */

	let url = `https://www.youtube.com/results?search_query=${text.replace(/\s/g, "+")}&pbj=1`

	let json = await getJSON(url, YOUTUBE_CLIENT)

	if (json.length != 2) throw "fail"

	// data.response.estimatedResults

	let results: Array<Youtube.SearchQuery> = jsonDeepSearch("videoRenderer", json[1])

	return results.map(result => {
		try {
			let searchResult: Youtube.SearchResult = {
				author: result.shortBylineText.runs[0].text,
				channelId: jsonDeepSearch("browseId", result)[0],
				description: result.descriptionSnippet ? result.descriptionSnippet.simpleText : "",
				thumbnail: result.thumbnail.thumbnails[0].url,
				title: result.title.simpleText,
				videoId: result.videoId,
				views: result.viewCountText ? result.viewCountText.simpleText.replace(/,/g, "").split(" ")[0] : "0"
			}
			return searchResult
		}
		catch (err) {
			error(result)
			return null
		}
	})
}

// helper to download videos

export async function downloadUrls(video: Youtube.VideoInfos,
	basename: string,
	formatsRestriction: Array<number>,
	maxParallelDownload: number) {

	// first check if downloadUrls url contains the needed signature

	if (video.downloadUrls && Object.values(video.downloadUrls)[0].url.includes("signature")) {

		debug("downloadUrls formats", Object.keys(video.downloadUrls))

		// try to download one of requested format

		for (let itag of formatsRestriction) {

			if (itag in video.downloadUrls) {
				try {
					await downloadMultipart(video.downloadUrls[itag].url, basename + ".mp4", maxParallelDownload)
					return true
				}
				catch (err) {
					error("downloadUrls fail", itag)
				}
			}
		}

		throw "downloadUrls no format available."
	}
	else {
		throw "downloadUrls without signature."
	}
}

// helper to download dash video

export async function downloadDash(video: Youtube.VideoInfos,
	basename: string,
	formatsRestriction: Array<number>,
	ffmpegPath:string) {

	let videoFilename = basename + ".video"
	let audioFilename = basename + ".audio"

	let videoDone = false
	let audioDone = false

	if (video.adaptives) {
		debug("adaptives formats", Object.keys(video.adaptives).join(","))

		// unknown itag ?

		for (let itag in video.adaptives) {
			if (!(itag in FORMATS)) debug(prettify(video.adaptives[itag]))
		}

		for (let itag of formatsRestriction) {
			if (itag in video.adaptives) {
				let a = video.adaptives[itag]

				try {
					debug("adaptive download", itag)
					let url = a.url

					if ("sp" in a) throw "no signature"

					await downloadMultipart(a.url, videoFilename, global.system.maxParallelDownload)
					videoDone = true
					break;
				}
				catch (err) {
					error(`adaptives ${itag} fail ${err}`)
				}
			}
		}

		// use 128k aac by default

		if (140 in video.adaptives) {
			try {
				debug("adaptive download audio")
				await downloadMultipart(video.adaptives[140].url, audioFilename, global.system.maxParallelDownload)
				audioDone = true
			}
			catch (err) {
				error("adaptive audio fail", err)
			}
		}

	}

	// no other method is working so try dash

	if (!videoDone) {

		if (!video.dashmpd) throw "dashmpd is missing"

		let dash = await getText(video.dashmpd)

		// some xml crap

		let re = /<representation.+?id="(\d+?)".+?<baseurl>(.+?)<\/baseurl>/gi

		let formats: Record<string, string> = {}

		let m: RegExpExecArray

		while (m = re.exec(dash)) {
			formats[m[1]] = m[2]
		}

		debug("dash formats available", Object.keys(formats), "req", formatsRestriction)

		// unknown itag ?

		for (let itag in formats) {
			if (!(itag in FORMATS)) debug(prettify(formats[itag]))
		}

		// try to download video

		for (let itag of formatsRestriction) {
			if (itag in formats) {

				let retry = 2

				// debug("dash trying", itag)

				try {

					let url = formats[itag]

					await downloadMultipart(url, videoFilename, global.system.maxParallelDownload)
					videoDone = true
					break;
				}
				catch (err) {
					retry--
					error(itag, "fail", err)
				}
			}
		}

		if (!videoDone) throw "no video available"

		if (!audioDone) {
			if ("140" in formats) {
				await downloadMultipart(formats[140], audioFilename, global.system.maxParallelDownload)
				audioDone = true
			}
		}
	}

	// mux audio & video @todo : clean up

	if (videoDone && audioDone) {

		// debug("merge video & audio")

		let ffmpeg = spawn(ffmpegPath || "ffmpeg", ["-loglevel", "error", "-i", videoFilename, "-i", audioFilename, "-c", "copy", "-y", basename + ".mkv"])

		return promisify((resolve, reject) => {

			ffmpeg.on("error", reject) // fatal

			ffmpeg.stderr.pipe(process.stdout)

			ffmpeg.on("exit", async code => {

				if (code) {

					reject(`ffmpeg returns ${code}`)
				}
				else {

					try {

						// don't know why but sometimes nodejs is not delete anything...

						if (await P.exists(videoFilename))
						{
							log("del",videoFilename,await P.del(videoFilename))
						}

						if (await P.exists(audioFilename))
						{
							log("del",audioFilename,await P.del(audioFilename))
						}
					}
					catch (err) {
						error("del fail", err)
					}

					resolve()
				}
			})
		})
	}
	else {
		if(audioDone) P.del(audioFilename)
		error("fail to download video",videoDone,audioDone)
	}
}
