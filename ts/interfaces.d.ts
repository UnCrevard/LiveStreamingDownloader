/// <reference path="../../__typing/younow.d.ts" />
/// <reference path="../../__typing/periscope.d.ts" />
/// <reference path="../../__typing/vk.d.ts" />

type num = string | number

//declare const vue: any
/*

	globales

 */

declare namespace NodeJS
{
	interface Global {
		verbosity: number
		vue:{
			settings:Settings
			$set:any
			$nextTick:any
			$refs:any
			$delete:any
			videos:any
		}
	}
}

/**
 * returned from sources
 */
interface Broadcast {

	service: Services
	/**
	 * immutable
	 * @type {string}
	 */
	username: string
	/**
	 * immutable
	 * @type {[type]}
	 */
	userId: num
	/**
	 * mutable
	 * @type {string}
	 */
	nickname: string

	/* broadcast */

	broadcastId: string | number
	// broadcast main page
	url: string
	viewers: number
	thumbnail: string

	title: string
	archived: boolean
	isGone: boolean
}

interface User {
	service: Services
	nickname: string
	username: string
	userId: num
}

interface UserInformations {
	userId: num
	username: string
	nickname: string
	title: string
	country: string
	language: string
	location: string
	started: num
	profilePicture: string
}

interface Search {
	parser: string,
	url: string,
	params: Array<string>
}

interface FilenameInformations {
	language: string
	country: string
	username: string
	date: Date
	type: string
	title: string
	broadcastId: num
	userId: num
	service: string
}

declare const enum BroadcastState {
	isLive,
	replayIsAvailable,
	notFound,
	deleted,
	banned
}


declare const enum Level {
	success = "uk-alert-success",
	info = "uk-alert-primary",
	warning = "uk-alert-warning",
	error = "uk-alert-danger"
}

declare const enum Services {
	younow = "younow",
	periscope = "periscope",
	vk = "vk",
	youtube="youtube"
}

interface Settings {
	filenameTemplate: string
	pathDownload: string
	pathMove: string
	useFFMPEG: string
	videoFormat: string
	saveJSON: boolean
	saveThumbnail: boolean
	maxParallelDownload: number

	forceReplay: boolean
	addOnClick: boolean
	stayAlive: number

	isAutoRefresh: boolean
	refreshTimeout: number

	searchUrls: Array<string>

	videoStartMuted:boolean
}

declare const enum MouseButton {
	LEFT,
	MIDDLE,
	RIGHT,
	X1,
	X2
}
