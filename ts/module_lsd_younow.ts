import { log, error, debug } from "./__shared__/module_log"
import { formatDate, formatTime, formatDateTime, Time } from "./__shared__/module_utils"
import {ffmpeg} from "./module_lsd_ffmpeg"
import { HlsTS } from "./__shared__/module_hls"
import {createFilename} from "./module_lsd"

// CDN=400 API=200 https://cdn.younow.com/php/api/broadcast/info/user=XXX

// api.younow.com = amazon
// cdn.younow.com = cloudflare

const YOUNOW_API = "https://api.younow.com"
const CDN = "https://cdn.younow.com"

export function getIdFromURL(user): string {
	/*
		userId:number
		or username:string
		or https://younow.com/username
	 */
	return isNaN(user)?user.substring(user.lastIndexOf("/")+1):user
}

export function errortoString(result: { errorCode: num, errorMsg?: num }) {
	return `${result.errorCode} ${result.errorMsg}`
}

export function getUserInfoByUID(uid): Promise<Younow.UserInfo> {
	// /includeUserKeyWords=1
	return fetch(`${YOUNOW_API}/php/api/channel/getInfo/channelId=${uid}`).then(res => res.json())
}

export function getLiveBroadcastByUsername(username): Promise<Younow.LiveBroadcast> {
	return fetch(`${YOUNOW_API}/php/api/broadcast/info/curId=0/user=${username}`).then(res => res.json())
}

export function getLiveBroadcastByUID(uid): Promise<Younow.LiveBroadcast> {
	return fetch(`${YOUNOW_API}/php/api/broadcast/info/channelId=${uid}/curId=0`).then(res => res.json())
}

export function getArchivedBroadcast(bid): Promise<Younow.ArchivedBroadcast> {
	// errorCode:246/Broadcast is still live

	return fetch(`${YOUNOW_API}/php/api/broadcast/videoPath/broadcastId=${bid}`).then(res => res.json())
}

export function getMoments(uid, next: number): Promise<Younow.Moments> {
	return fetch(`${YOUNOW_API}/php/api/moment/profile/channelId=${uid}/createdBefore=${next}`).then(res => res.json())
}

export function getTrendings(locale: string): Promise<Younow.Trendings> {
	// cdn2
	return fetch(`${YOUNOW_API}/php/api/younow/dashboard/locale=${locale}/trending=50`).then(res => res.json())
}

export function getTagInfo(tag: string): Promise<Younow.TagInfo> {

	return fetch(`https://playdata.younow.com/live/tags/${btoa(tag) + ".json"}`).then(res => res.json())
}

export function getPlaylist(bid): Promise<string> {
	return fetch(`${YOUNOW_API}/php/api/broadcast/videoPath/hls=1/broadcastId=${bid}`).then(res => res.text())
}


export function filenameGeneratorLive(broadcast: Younow.LiveBroadcast): FilenameInformations {

	return {
		userId: broadcast.userId,
		broadcastId: broadcast.broadcastId,
		country: (broadcast.country || "XX").toLocaleLowerCase(),
		language: broadcast.locale.toLowerCase(),
		username: broadcast.profile,
		service: "younow",
		title: null,
		type: "live",
		date: new Date((broadcast.dateCreated || broadcast.dateStarted) * Time.MILLI)
	}
}

export function filenameGeneratorReplay(broadcastId:number,archivedBroadcast: Younow.ArchivedBroadcast, user: Younow.UserInfo): FilenameInformations
{
	// broadcastId is missing from ArchivedBroadcast

	return {
		userId: archivedBroadcast.userId,
		broadcastId: broadcastId,
		country: (user.country || "xx").toLowerCase(),
		language: (user.locale || "xx").toLowerCase(),
		username: archivedBroadcast.profileUrlString,
		service: "younow",
		title: null,
		type: "replay",
		date: new Date()
	}
}
export function getFollowed(userId: number, start: number) {
	return fetch(`${YOUNOW_API}/php/api/channel/getFansOf/channelId=${userId}/startFrom=${start}/numberOfRecords=50`).then(res => res.json())
}

export function getOnlineFollowed(follower: number): Promise<Younow.FollowedOnline> {
	return fetch(`${YOUNOW_API}/php/api/channel/getLocationOnlineFansOf/channelId=${follower}/numberOfRecords=50`).then(res => res.json())
}

/**
 * @hack resolve thumbnail url
 * @param {number} broadcastId [description]
 */
export function resolveThumbnail(broadcastId: number) {
	// https://ynassets.s3.amazonaws.com/broadcast/live/BID/BID.jpg
	return `https://ynassets.younow.com/broadcastdynamic/live/${broadcastId}/${broadcastId}.jpg`
}

export function resolveProfilePicture(userId: number) {
	return `https://ynassets.younow.com/user/live/${userId}/${userId}.jpg`
}

/* API Proto */

export async function downloadLive(live: Younow.LiveBroadcast, videoFilename:string,ffmpegOptions:string): Promise<boolean> {

	// why not
	if (live.dropReason) throw live.dropReason

	// fatal
	if (!live.media) throw "media is missing";

	return ffmpeg(`rtmp://${live.media.host}${live.media.app}/${live.media.stream}`,videoFilename,ffmpegOptions)

/*
	return rtmpdump(`rtmp://${live.media.host}${live.media.app}/${live.media.stream}`, videoFilename)
		.then(bool => {
			debug("rtmpdump done", bool)
			return bool
		})
*/
}

export async function downloadReplay(user: Younow.UserInfo,
	archive: Younow.ArchivedBroadcast,
	broadcastId:number,
	pathDownload: string,
	useFFMPEG: string,
	videoFormat: string,
	maxParallelDownload: number): Promise<boolean> {

	if (!archive.videoAvailable || archive.noLongerAvailable) throw "replay not available"

	let videoFilename = createFilename(filenameGeneratorReplay(broadcastId,archive, user),
		pathDownload)

	return new HlsTS(0,0).play(archive.hls, videoFilename)
}

export async function resolveUser(broadcast: Broadcast): Promise<UserInformations> {
	let live = await getLiveBroadcastByUID(broadcast.userId)

	if (live.errorCode) throw errortoString(live)

	let userInfos: UserInformations = {
		username: live.profile,
		nickname: "?",
		country: live.country,
		language: live.locale,
		location: live.location ? `${live.location.state} ${live.location.city} ${live.location.country}` : "?",
		userId: live.userId,
		started: new Date(live.dateStarted * Time.MILLI).toString(),
		title: live.title,
		profilePicture: resolveProfilePicture(live.userId)
	}

	return userInfos
}

export function fillBroadcast(infos:Younow.LiveBroadcast):Broadcast
{
	let broadcast:Broadcast=
	{
		archived:true,
		broadcastId:infos.broadcastId,
		isGone:false,
		title:infos.title,
		userId:infos.userId,
		service:Services.younow,
		url:null,
		viewers:infos.viewers,
		thumbnail:resolveThumbnail(infos.broadcastId),
		username:infos.username,
		nickname:infos.username
	}

	return broadcast
}
