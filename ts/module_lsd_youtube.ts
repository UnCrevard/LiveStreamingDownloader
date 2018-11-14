import * as lsd from "./module_lsd"
import * as _youtube from "./__shared__/module_youtube"
import {HlsTS} from "./__shared__/module_hls"
import {downloadMultipart} from "./__shared__/module_download"
import {log,error,debug} from "./__shared__/module_log"

export async function search(query: string): Promise<Array<Broadcast>> {

	let results=await _youtube.search(query)

	debug("youtube results",results.length)

	return results.filter(result=>result)
	.map(result=>
	{
		let broadcast:Broadcast={
			archived:false, // @todo
			broadcastId:result.videoId,
			isGone:false,
			service:Services.youtube,
			viewers:parseInt(result.views),
			title:result.title,
			thumbnail:result.thumbnail,
			nickname:result.author,
			username:result.author,
			userId:result.channelId,
			url:null
		}

		return broadcast
	})
}

export function filenameGenerator(infos:Youtube.VideoInfos)
{
	let fi:FilenameInformations={
		broadcastId:infos.video_id,
		service:Services.youtube,
		language:"xx",
		title:infos.title,
		userId:infos.ucid,
		country:"xx",
		username:infos.author,
		type:infos.details.isLive?"live":"replay",
		date:infos.published
	}

	return fi
}

export function getBroadcast(id:string):Promise<Youtube.VideoInfos>
{
	return _youtube.getInfos(id)
}

/* @wtf */

export async function downloadBroadcast(infos:Youtube.VideoInfos){

	let basename = lsd.createFilename(filenameGenerator(infos), global.vue.settings.pathDownload)

	if (infos.m3u8) { // live

		// @todo : quality settings for youtube

		let itag = [
			"267", // 2160p
			"265", // 1440p
			"264", //
			"300", // 1080p60
			"96", // 1080p
			"95", // 720p
			"94", // 480p
			"93", // 360p
			"92", // 240p
			"91" // 144p
			].find(itag=>itag in infos.m3u8)

		if (!itag) throw "no format available"

		let format = infos.m3u8[itag]

		// slow timeout for youtube cuz youtube caches a lot.

		return new HlsTS(10000, 25).play(format.url, basename+".ts")
	}
	else
	{
		// first try highest quality (dash)

		try {
			// 133,134,135,136,137,140,160,171,242,243,244,247,248,249,250,251,271,278,313

			await _youtube.downloadDash(infos, basename, [138, 137, 136, 135, 134, 133, 160], "bin/ffmpeg")
		}
		catch (err) {

			debug("dash fail with", err, "trying urls")

			try {
				// 720p & 360p
				await _youtube.downloadUrls(infos, basename, [22, 18], global.system.maxParallelDownload)
			}
			catch (err)
			{
				throw "no format available"
			}
		}
	}
}

export function createFilename(broadcast: Youtube.VideoInfos): string {
	return lsd.createFilename(filenameGenerator(broadcast), global.vue.settings.pathDownload)
}

// resolveReplay

// return url to m3u8 (dash not supported by hls.js video player)

export function resolveLive(infos:Youtube.VideoInfos): Youtube.Format {

	let format

	// @todo quality selection

	if (infos.m3u8)
	{
		format=infos.m3u8[Youtube.ITAG.LIVE_360]||infos.m3u8[Youtube.ITAG.LIVE_240]
	}
	else if (infos.downloadUrls)
	{
		format=infos.downloadUrls[Youtube.ITAG.REPLAY_720]||infos.downloadUrls[Youtube.ITAG.REPLAY_360]
	}

	if (!format) throw "no format available"


	return format
}

export function fillBroadcast(infos:Youtube.VideoInfos):Broadcast
{
	let broadcast:Broadcast=
	{
		archived:!infos.hlsvp,
		broadcastId:infos.video_id,
		isGone:false,
		title:infos.title,
		userId:infos.ucid,
		service:Services.youtube,
		url:infos.loaderUrl,
		viewers:0,
		thumbnail:infos.thumbnail_url,
		username:infos.author,
		nickname:infos.author
	}

	return broadcast
}
