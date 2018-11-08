import { debug, error } from "./__shared__/module_log"
import { HlsTS } from "./__shared__/module_hls"
import * as lsd from "./module_lsd"
import {postJSON} from "./__shared__/module_net"

export const PERISCOPE_URL = "www.pscp.tv"

// https://api.periscope.tv/api/v2/
export const PERISCOPE_API = "https://proxsee.pscp.tv/api/v2/"

/**
 * parse url or id and returns the id
 * @param  {string} url [description]
 * @return {string}     [description]
 */
export function parseURL(url:string):string
{
	/*
		id
		https://.../username
		https://.../username/broadcast
		https://.../w/broadcast
	 */

	return url.substring(url.lastIndexOf("/")+1)
}

export function extractDataStore(body: string): Periscope.DataStore {

	let m = body.toString().match(/data\-store\=\"(.+?)\"/i)

	if (!m) throw "fail to extract data-store"

	let dataStore = m[1].replace(/&quot;/gi, `"`).replace(/&amp;/gi, `&`)

	return JSON.parse(dataStore)
}

export function getBroadcast(bid): Promise<Periscope.VideoPublic> {
	return fetch(`${PERISCOPE_API}accessVideoPublic?broadcast_id=${bid}`)
		.then(res => {
			if (!res.ok) throw res.statusText;

			return res.json()
		})
}

/* API Proto */

export function filenameGenerator(broadcast: Periscope.Broadcast): FilenameInformations {

	return {
		userId: broadcast.user_id,
		broadcastId: broadcast.id,
		country: (broadcast.iso_code || broadcast.country || broadcast.language || "xx").toLocaleLowerCase(),
		language: (broadcast.language || broadcast.iso_code || broadcast.country || "xx").toLocaleLowerCase(),
		username: broadcast.username,
		service: "periscope",
		title: broadcast.status,
		type: broadcast.state == "ENDED" ? "replay" : "live",
		date: new Date(broadcast.created_at)
	}
}

export function createFilename(broadcast: Periscope.Broadcast): string {
	return lsd.createFilename(filenameGenerator(broadcast), global.vue.settings.pathDownload)
}

export async function resolveLive(broadcast: Broadcast): Promise<Periscope.VideoPublic> {

	debug("pscp.resolveLive", broadcast.url)

	//@todo regex
	if (!broadcast.url) throw "invalid url"

	return getBroadcast(broadcast.url)
}

export const resolveReplay = resolveLive

export async function downloadLive(live: Periscope.VideoPublic, filename: string, useFFMPEG): Promise<any> {

	if (live.replay_url || !live.https_hls_url) return false

	return new HlsTS(5000,25).play(live.https_hls_url,filename)
}

export async function downloadReplay(live: Periscope.VideoPublic, pathDownload: string,
	useFFMPEG, videoFormat): Promise<any> {

	debug("pscp.downloadReplay", live.broadcast.id)

	if (!live.replay_url) return false

	let videoFilename = lsd.createFilename(filenameGenerator(live.broadcast), pathDownload)+".ts"

	return new HlsTS(0,0).play(live.replay_url, videoFilename)
}

export async function resolveUser(broadcast: Broadcast): Promise<UserInformations> {
	let live = await getBroadcast(broadcast.broadcastId)

	let userInfos: UserInformations = {
		username: live.broadcast.username,
		profilePicture: live.broadcast.profile_image_url,
		nickname: live.broadcast.user_display_name,
		country: live.broadcast.country || null,
		language: live.broadcast.language,
		location: `${live.broadcast.country_state} ${live.broadcast.city} ${live.broadcast.country}`,
		userId: live.broadcast.user_id,
		started: live.broadcast.created_at,
		title: live.broadcast.status
	}

	return userInfos
}

// periscope search sucks.

export function broadcastSearchPublic(search: string): Promise<Array<Periscope.Broadcast>>
{
	return postJSON(`${PERISCOPE_API}broadcastSearchPublic`, {},
		{
			search: search,
			include_replay: true
		})
}

/**
 * periscope:tag[:TAG:LOCALE]
 *
 * periscope search via tag sucks too
 *
 * @param  {string}        tag       [description]
 * @param  {Array<string>} languages [description]
 * @return {Promise}                 [description]
 */
export async function searchTag(tag: string, languages: Array<string>): Promise<Array<Broadcast>> {
	try {

		// extract dataStore & token & official channels

		let body = await fetch("https://www.pscp.tv").then(res => res.text())

		let dataStore = extractDataStore(body)

		let channel_id = "9567331147320489995" // channel by default #talk

		let channel = dataStore.Channel.channels.find(channel => channel.slug == tag)

		if (channel) channel_id = channel.id

		// ?languages=${language} totally ignored. so non english peoples can learn some english :P

		let locale = languages.map(language => `languages=${language}`).join("&")

		// get current lives by id
		let listBroadcasts: Periscope.LiveBroadcasts = await fetch(`https://channels.pscp.tv/v1/channels/${channel_id}/broadcasts?${locale}`,
			{
				headers:
				{
					authorization: dataStore.ServiceToken.channels.token
				}
			}).then(res => res.json())

		// get more informations on broadcasts
		let bids = listBroadcasts.Broadcasts.map(broadcast => broadcast.BID)

		// retrieve ALL broadcast infos. it's gonna be huge to download this everytime. but periscope api sucks

		let lives: Array<Periscope.Broadcast> = await fetch(`https://api.periscope.tv/api/v2/getBroadcastsPublic?broadcast_ids=${bids.join(",")}&only_public_publish=true`).then(res => res.json())

		let broadcasts: Array<Broadcast> = lives.map(live => {
			let broadcast: Broadcast = {
				broadcastId: live.id,
				viewers: live.n_total_watching,
				isGone: false,
				service: Services.periscope,
				userId: live.user_id,
				username: live.username,
				nickname: live.user_display_name,
				thumbnail: live.image_url,
				url: `https://www.pscp.tv/${live.username}/${live.id}`,
				archived: live.state != "RUNNING",
				title: live.status
			}

			return broadcast
		})

		return broadcasts
	}
	catch (err) {
		error(err)
		return null
	}
}

export function fillBroadcast(infos:Periscope.VideoPublic):Broadcast
{
	debug(infos)

	let broadcast={
				archived:!!infos.replay_url,
				broadcastId:infos.broadcast.id,
				title:infos.broadcast.status,
				isGone:false,
				url:null,
				viewers:infos.broadcast.n_total_watching,
				userId:infos.broadcast.user_id,
				service:Services.periscope,
				thumbnail:infos.broadcast.image_url,
				username:infos.broadcast.username,
				nickname:infos.broadcast.username
			}

	return broadcast
}
