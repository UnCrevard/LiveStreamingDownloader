import { log, error } from "./__shared__/module_log"
import * as _url from "url"

import * as _youtube from "./__shared__/module_youtube"

import * as _lsdYoutube from "./module_lsd_youtube"
import * as _lsdYounow from "./module_lsd_younow"
import * as _lsdVk from "./module_vk"
import * as _lsdPscp from "./module_lsd_periscope"

/*

	direct download

*/

export async function downloadURL(url: string): Promise<Broadcast> {
	let parsedUrl = _url.parse(url)

	log(parsedUrl)

	let domain = parsedUrl.hostname.match(/(.+\.|)([a-z]+\.[a-z]+)/)

	let broadcast: Broadcast

	switch (domain[2]) {

		case "younow.com":
			{
				let id = _lsdYounow.getIdFromURL(url)
				let live=await (isNaN(id as any)?_lsdYounow.getLiveBroadcastByUsername(id):_lsdYounow.getLiveBroadcastByUID(id))
				return _lsdYounow.fillBroadcast(live)
			}

		case "vk.com":
			{
				let infos = await _lsdVk.getBroadcast(url)
				return _lsdVk.fillBroadcast(infos)
			}

		case "pscp.tv":
			{
				let id = _lsdPscp.parseURL(url)
				let infos = await _lsdPscp.getBroadcast(id)
				return _lsdPscp.fillBroadcast(infos)
			}

		case "youtube.com":
		case "youtube.be":
			{
				let id = _youtube.getIdFromURL(url)
				let infos = await _youtube.getInfos(id)
				return _lsdYoutube.fillBroadcast(infos)
			}
		default:
			throw `${domain} not supported`
	}
}
