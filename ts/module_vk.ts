import { log, debug, error } from "./__shared__/module_log"
import { HlsTS } from "./__shared__/module_hls"
import * as lsd from "./module_lsd"
import * as utils from "./__shared__/module_utils"
import { downloadMultipart } from "./__shared__/module_download"

// user == url:string as https://vk.com/video_ext.php?oid=${broadcastId}&id=${userId}&hash=${wtf}
//
/**
 * get broadcast from page
 * @param  {string}                url [description]
 * @return {Promise<VK.Broadcast>}     [description]
 */
export function getBroadcast(url: string): Promise<VK.Broadcast> {
	return fetch(url)
		.then(res => {

			if (!res.ok) throw res.statusText
			return res.arrayBuffer()
		})
		.then(buffer => {

			// vk uses windows-1251

			let body = new TextDecoder("windows-1251").decode(buffer)

			let m = body.match(/playerParams.=.(.+?);\n/)

			if (!m) throw utils.cleanHTML(body.match(/<div.id="video_ext_msg">\s*(.+?)\s*<\/div>/)[1]) || "broadcast is missing";

			let params: VK.VarParams = JSON.parse(m[1])

			let broadcast = params.params[0]

			broadcast.md_title = broadcast.md_title.replace(/\s*[-—]+\s*live$/i, "")

			return broadcast
		})
}

/* API proto */

export function filenameGenerator(broadcast: VK.Broadcast): FilenameInformations {

	return {
		userId: broadcast.oid,
		broadcastId: broadcast.vid,
		// no language/country available so everybody is russian by now.
		country: "ru",
		language: "ru",
		username: utils.cleanHTML(broadcast.md_author),
		service: "vk",
		title: utils.cleanHTML(broadcast.md_title),
		type: broadcast.mp4 || broadcast.postlive_mp4 ? "replay" : "live",
		date: new Date(broadcast.date * utils.Time.MILLI)
	}
}

export function createFilename(broadcast: VK.Broadcast) {
	return lsd.createFilename(filenameGenerator(broadcast), global.vue.settings.pathDownload)
}

export async function resolveLive(broadcast: Broadcast): Promise<VK.Broadcast> {

	debug("vk.resolveLive", broadcast.url)

	//@todo regex
	if (!broadcast.url) throw "invalid url"

	return getBroadcast(broadcast.url)
}

export const resolveReplay = resolveLive

export async function downloadLive(live: VK.Broadcast,
	filename: string,
	useFFMPEG) {

	if (live.mp4 || live.postlive_mp4) return false

	if (!live.hls) throw "downloadLive hls url is missing"


	return new HlsTS(5000, 10).play(live.hls, filename)
}

export async function downloadReplay(live: VK.Broadcast,
	pathDownload: string): Promise<boolean> {

	let url = live.mp4 || live.postlive_mp4

	if (!url) return false

	debug("vk.downloadReplay", url)

	let videoFilename = lsd.createFilename(filenameGenerator(live), pathDownload)+".mp4"

	return downloadMultipart(url, videoFilename, global.system.maxParallelDownload)
}

export async function resolveUser(broadcast: Broadcast): Promise<UserInformations> {

	let live = await getBroadcast(broadcast.url)

	let userInfos: UserInformations = {
		username: "?",
		profilePicture: live.author_photo,
		nickname: live.md_author,
		country: "?",
		language: "?",
		location: "?",
		userId: live.author_id,
		started: new Date(live.date * utils.Time.MILLI).toString(),
		title: live.md_title
	}

	return userInfos
}

export function fillBroadcast(infos: VK.Broadcast): Broadcast {
	let broadcast = {
		archived: !!infos.live,
		broadcastId: infos.vid,
		isGone: false,
		title: infos.md_title,
		viewers: 0,
		thumbnail: infos.thumb,
		service: Services.vk,
		url: null,
		userId: infos.oid,
		username: infos.md_author,
		nickname: infos.md_author
	}

	return broadcast
}
