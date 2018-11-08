/// <reference path="../../../__typing/periscope.d.ts" />

import * as path from "path"
import * as url from "url"
import { formatDateTime, cleanFilename,prettify } from "./module_utils"
import { log, error } from "./module_log"
import * as P from "./module_fs"
import { HlsTS } from "./module_hls"

import * as Net from "./module_net"
import * as Download from "./module_download"

export const PERISCOPE_URL = "www.pscp.tv"
export const API = "https://proxsee.pscp.tv/api/v2/"

export function getBroadcast(bid): Promise<Periscope.VideoPublic> {
	return Net.getJSON(`${API}accessVideoPublic?broadcast_id=${bid}`)
}

export function createFilename(broadcast: Periscope.Broadcast,pathDownload:string,filenameTemplate:string) {

	return path.join(pathDownload,cleanFilename(filenameTemplate
		.replace("service","Periscope")
		.replace("country", broadcast.iso_code||broadcast.language||"XX")
		.replace("username", broadcast.username)
		.replace("title", broadcast.status)
		.replace("date", formatDateTime(new Date(broadcast.created_at)))
		.replace("bid", broadcast.id)
		.replace("type",broadcast.state=="ENDED"?"replay":"live")
		))
}

export function downloadVideo(filename: string, video: Periscope.VideoPublic) {

	if (!video.replay_url && !video.https_hls_url)
	{
		error(prettify(video))
	}

	if (video.replay_url) {

		return new HlsTS(0, 0).play(video.replay_url, filename)
	}
	else {
		return new HlsTS(5000, 25)
			.play(video.https_hls_url, filename)
	}
}

export async function downloadThumbnail(filename, broadcast: Periscope.Broadcast) {

	if (!broadcast.image_url) return false

	return Download.downloadSingle(broadcast.image_url, filename)
}

export function downloadProfile(filename:string,broadcast: Periscope.Broadcast) {
	return Net.getBinary(broadcast.profile_image_url)
		.then(data => {
			return P.writeFile(filename, data)
		})
}

export function parseURL(user: string): String | null {
	let u = url.parse(user)

	/*
	www.pscp.tv

	https://.../username
	https://.../username/broadcast
	https://.../w/broadcast
	 */

	if (u.hostname) {
		if (u.hostname != PERISCOPE_URL) {
			error(url);
			return null
		}
		else {
			return user
		}
	}
	else {
		return `https://${PERISCOPE_URL}/${user}`
	}
}
