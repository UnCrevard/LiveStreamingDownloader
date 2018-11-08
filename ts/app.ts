/*

	@hack : be nodejs compatible

*/

(global as any)=window

/*

*/

global.system=
{
	maxRetry:2,
	maxParallelDownload:10,
	verbosity:1
}

import * as _os from "os"
import * as _fs from "fs"
import * as _path from "path"

import * as dos from "./__shared__/module_fs"
import { debug, error, assert,trace } from "./__shared__/module_log"
import * as _hls from "./__shared__/module_hls"
import { formatDate, formatDateTime, cleanFilename, Time, prettify } from "./__shared__/module_utils"
import { downloadMultipart } from "./__shared__/module_download"

import * as _liveomg from "./module_liveomg"
import * as _vk from "./module_vk"
import * as _periscope from "./module_lsd_periscope"
import * as _younow from "./module_lsd_younow"
import * as _youtube from "./module_lsd_youtube"
import {createFilename} from "./module_lsd"

import {downloadURL} from "./cmdDownloadURL"

import Vue from "vue"
import Hls from "hls.js"

/*


	validate searches

 */
function analyseSearchUrl(url: string): Search {
	if (url.match(/liveomg.com/i)) {
		return {
			parser: "liveomg",
			url: url,
			params: null
		}
	} else {
		let m = url.split(":")

		if (m) {
			switch (m[0]) {
				case "younow":
				case "periscope":
				case "youtube":
					return {
						parser: m[0],
						url: null,
						params: m.splice(1)
					}
			}
		}

		debug(m)

		return null
	}
}

/*

	@todo : integrate this in GUI

*/
let settings: Settings = Object.assign({
	addOnClick: false,
	filenameTemplate: "service_country_username_date_title_type_bid_uid",
	forceReplay: false,
	isAutoRefresh: true,
	maxParallelDownload: 10,
	pathDownload: ".",
	pathMove: null,
	refreshTimeout: 180,
	videoStartMuted: true,
	saveJSON: false,
	saveThumbnail: false,
	searchUrls:
		[
			"http://liveomg.com/?sort=best",
			"periscope:tag:talk",
			"younow:tag:music",
			"youtube:music,live"
		],
	stayAlive: 0,
	useFFMPEG: "-loglevel error -c copy -bsf:a aac_adtstoasc -metadata title='LiveStreamingDownloader'",
	videoFormat: "ts"
}, JSON.parse(localStorage.getItem("settings")) || {})

global.system.maxParallelDownload=settings.maxParallelDownload

let users: Record<string, User> = (JSON.parse(localStorage.getItem("users")) || {}) as any

(window as any).vue = new Vue(
	{
		el: "#app",
		data: {
			settings: settings,
			users: users,
			ignoredUsers: {},
			/*

			session

			 */

			currentTab: 0,
			broadcasts: {} as Record<string, Broadcast>,
			indexBroadcasts: [],
			recordings: {},
			ignoredBroadcasts: {},

			directDownload:"",

			alert: null,

			/* mouse over */
			overId: null,
			overCounter: null,
			videos: {},

			/* */
			popupTimeout: null,
			popupActive: false,
			infos: null,
			/* */
			timeout: null,
			counter: 0,
			/* debug */
			memory: null
		},
		methods:
		{
			async resolveUser(broadcast: Broadcast): Promise<UserInformations> {
				let userInfos: UserInformations

				switch (broadcast.service) {
					case Services.vk:
						userInfos = await _vk.resolveUser(broadcast)
						break;
					case Services.periscope:
						userInfos = await _periscope.resolveUser(broadcast)
						break;
					case Services.younow:
						userInfos = await _younow.resolveUser(broadcast)
						break;
				}

				return userInfos
			},
			computeId(broadcast: Broadcast) {
				return broadcast.service + (broadcast.userId || broadcast.username)

			},
			addUser(id: string, user: User) {
				this.$set(this.users, id, user)
			},
			delUser(id: string) {
				this.$delete(this.users, id)
			},
			banUser(id: string) {
				this.$set(this.ignoredUsers, id, true)
			},
			unBanUser(id: string) {
				this.$delete(this.ignoredUsers, id)
			},
			async downloadURL(){

				debug("downloadURL",this.directDownload)

				let url=this.directDownload
				this.directDownload=""

				downloadURL(url)
				.then(broadcast=>
				{
					broadcast.url=url
					this.recordBroadcast(broadcast,null,true)
				})
				.catch(err=>
				{
					this.showAlert(`${url} fail with ${err}`,Level.error)
				})
			},
			async recordBroadcast(broadcast: Broadcast, index: number, record: boolean) {

				let id = broadcast.broadcastId

				debug("recordBroadcast", index, id, broadcast)

				if (record)
				{
					let user: User =
					{
						service: broadcast.service,
						userId: broadcast.userId,
						username: broadcast.username,
						nickname: broadcast.nickname
					}

					if (this.settings.addOnClick) this.addUser(this.computeId(broadcast), user);

					this.$set(this.recordings as any, id as any, broadcast)

					if (index!=null)
					{
						this.$delete(this.indexBroadcasts, index)
						//@ts-ignore
						this.$delete(this.broadcasts, id)
					}

					this.ignoredBroadcasts[id]=true
				}
				/*
					if (id in this.videos && isPlayer) {
						this.videos[id].destroy()
						this.$delete(this.videos, id)
						return
					}
					else {
						this.recordings[id] = this.broadcasts[id]

						this.indexBroadcasts.splice(index, 1)
						delete this.broadcasts[id]
					}
				*/
				let broadcastState: BroadcastState

				let doneLive = false, doneReplay = false, fail = null

				try {
					switch (broadcast.service) {
						case "vk":

							let vkBroadcast = await _vk.getBroadcast(broadcast.url)

							trace("vk.getBroadcast",vkBroadcast)

							if (!record) {

								let videoPlayer = new VideoPlayer(broadcast, vkBroadcast.postlive_mp4 || vkBroadcast.hls)

								videoPlayer.createVideoElement()
									.then(video => {
										videoPlayer.start(error)
									})
								return
							}
							else if (vkBroadcast.postlive_mp4) {
								doneReplay = await _vk.downloadReplay(vkBroadcast, this.settings.pathDownload)
							}
							else {
								let videoFilename = _vk.createFilename(vkBroadcast)+".ts"

								doneLive = await _vk.downloadLive(vkBroadcast, videoFilename, this.settings.useFFMPEG)

								if (this.settings.forceReplay) {
									vkBroadcast = await _vk.getBroadcast(broadcast.url)
									doneReplay = await _vk.downloadReplay(vkBroadcast, this.settings.pathDownload)

									if (doneLive && doneReplay) dos.del(videoFilename)
								}
							}

							break;

						case "periscope":
							let pscpBroadcast = await _periscope.getBroadcast(broadcast.broadcastId)

							trace("pscp.getBroadcast",pscpBroadcast)

							if (!record) {
								let videoPlayer = new VideoPlayer(broadcast,
									pscpBroadcast.replay_url || pscpBroadcast.hls_url || pscpBroadcast.https_hls_url)

								videoPlayer.createVideoElement()
									.then(video => {
										videoPlayer.start(error)
									})
								return
							}
							else if (pscpBroadcast.replay_url) {
								doneReplay = await _periscope.downloadReplay(pscpBroadcast,
									this.settings.pathDownload,
									this.settings.useFFMPEG,
									this.settings.videoFormat)
							}
							else {
								let videoFilename = _periscope.createFilename(pscpBroadcast.broadcast)+".ts"

								doneLive = await _periscope.downloadLive(pscpBroadcast, videoFilename, this.settings.useFFMPEG)

								if (this.settings.forceReplay) {
									pscpBroadcast = await _periscope.getBroadcast(broadcast.broadcastId)
									trace("replay.getBroadcast",pscpBroadcast)

									doneReplay = await _periscope.downloadReplay(pscpBroadcast,
										this.settings.pathDownload, this.settings.useFFMPEG, this.settings.videoFormat)

									if (doneLive && doneReplay) dos.del(videoFilename)
								}
							}
							break;

						case "younow":

							let videoFilename

							let ynBroadcast = await _younow.getLiveBroadcastByUsername(broadcast.username)

							trace("getLiveBroadcastByUsername", ynBroadcast)

							if (ynBroadcast.errorCode == 0 && !ynBroadcast.dropReason) {

								let basename=createFilename(_younow.filenameGeneratorLive(ynBroadcast),this.settings.pathDownload)

								videoFilename = basename+".flv"

								doneLive = await _younow.downloadLive(ynBroadcast, videoFilename,this.settings.useFFMPEG)
							}

							if (doneLive == false || this.settings.forceReplay) {

								let user = await _younow.getUserInfoByUID(broadcast.userId)

								trace("getUserInfoByUID", user)

								if (user.errorCode) throw _younow.errortoString(user);

								let ynArchived = await _younow.getArchivedBroadcast(broadcast.broadcastId)

								trace("getArchivedBroadcast", ynArchived)

								if (ynArchived.errorCode) throw _younow.errortoString(ynArchived);

								if (!ynArchived.videoAvailable || ynArchived.noLongerAvailable) throw "no longer available";

								doneReplay = await _younow.downloadReplay(user,
									ynArchived,
									ynBroadcast.broadcastId,
									this.settings.pathDownload,
									this.settings.useFFMPEG,
									this.settings.videoFormat,
									global.system.maxParallelDownload)

								if (doneLive && doneReplay) dos.del(videoFilename);
							}
							break;

						case "youtube":

							let ytbBroadcast=await _youtube.getBroadcast(broadcast.broadcastId as string)

							trace("youtube.GetBroadcast",ytbBroadcast)

							if (!record) {

								let format=_youtube.resolveLive(ytbBroadcast)

								let videoPlayer = new VideoPlayer(broadcast, format.url)

								videoPlayer.createVideoElement()
									.then(video => {
										videoPlayer.start(error)
									})
								return
							}
							else {
								let doneLive=await _youtube.downloadBroadcast(ytbBroadcast)
							}
							break;

						default:
							debug(broadcast)
					}
				}
				catch (err) {

					error(err.stack || err)
					fail = err
				}

				this.showAlert(`${broadcast.username || broadcast.nickname || "missing data"} : ${doneReplay ? "replay downloaded" : doneLive ? "live ended" : fail}`,
					(doneReplay || doneLive) ? Level.success : Level.error)

				trace(broadcast, "live", doneLive, "replay", doneReplay, "error", fail)
				//@ts-ignore
				this.$delete(this.recordings, id)
			},
			/*


			 */
			async showPopup(event: MouseEvent) {

				let el = event.target as HTMLElement

				this.popupActive = true
				/*
								let infos = document.getElementById("infos")

								let rect = el.getBoundingClientRect()

								infos.style.top = rect.top + ""
								infos.style.left = rect.left + ""
				*/

				let broadcast = this.broadcasts[this.indexBroadcasts[el.id]]

				let userInfos = await this.resolveUser(broadcast)
				this.infos = userInfos
			},
			mouseout(e) {
				this.popupTimeout && clearTimeout(this.popupTimeout)

				this.popupActive = false

				setTimeout(() => {
					this.infos = null
				}, 1000)
			},
			mouseover(event: MouseEvent) {
				this.popupTimeout = setTimeout(err => {
					this.showPopup(event)
				}, 2000)
			},
			clickOnVideos(event: MouseEvent, hls: VideoPlayer, key: string) {

				debug("clickOnVideos", key, hls, event)

				let el = <HTMLElement>event.target

				switch (el.id) {
					case "fullscreen":
						//@ts-ignore
						hls.video.webkitRequestFullscreen()
						break;
					case "record":
						break;
					case "close":
						hls.destroy()
						this.$delete(this.videos, key)
						break;

				}
			},
			/**
			 * @click on thumb handler
			 * @param {Data}       this  [description]
			 * @param {MouseEvent} event [description]
			 */
			clickOnThumbnail(event: MouseEvent) {

				let button = event.button

				let el = event.target as HTMLElement

				let index = parseInt(el.parentElement.id)
				let key = this.indexBroadcasts[index]
				let broadcast = this.broadcasts[key]

				debug("clickOnThumbnail", index, key, broadcast)

				switch (el.id) {
					case "add":
						throw "todo add";

					case "block":
						this.ignoredUsers[broadcast.userId] = true
						this.$delete(this.indexBroadcasts, index)
						delete this.broadcasts[key]
						break;

					case "record":
						this.recordBroadcast(broadcast, index, true)
						break;

					case "play":
						this.recordBroadcast(broadcast, index, false)
						break;
					default:
						throw "todo"
				}

				/*
									let view: HTMLElement = document.getElementById("webview")

									if (!view) throw "webview ?"

									let x, y

									function move(e: MouseEvent) {
										e.preventDefault()

										// calculate the new cursor position:

										let dx = x - e.clientX;
										let dy = y - e.clientY;
										x = e.clientX;
										y = e.clientY;
										// set the element's new position:
										view.style.left = (view.offsetLeft - dx) + "px";
										view.style.top = (view.offsetTop - dy) + "px";
									}

									function mouseUp(e: MouseEvent) {
										e.preventDefault()

										view.removeEventListener("mousemove", move)
										view.removeEventListener("mouseup", mouseUp)
									}

									view.addEventListener("mousedown", e => {
										e.preventDefault()
										x = e.clientX
										y = e.clientY

										view.addEventListener("mousemove", move)
										view.addEventListener("mouseup", mouseUp)
									})
				*/
			},
			overThumbnails(event: MouseEvent) {
				debug(this, event)
			},
			fixResize() {
				debug(this)
			},
			/**
			 * update list of broadcasts
			 */
			async refresh() {

				if (this.timeout) {
					clearTimeout(this.timeout)
					this.timeout = null
				}

				this.counter = 0

				this.showAlert(`update broadcasts`, Level.info)

				let requests = this.settings.searchUrls.map(url => {

					let search = analyseSearchUrl(url)

					debug("searchUrl", search)

					if (search) {

						if (search.parser == "liveomg") {
							return fetch(search.url)
								.then(res => {

									if (!res.ok) throw res.statusText

									return res.text()
								})
								.then(body => {
									return _liveomg.parse(body)
								})
								.catch(err => {
									error(err)
									return null
								})
						}
						else if (search.parser == "younow") {

							switch (search.params[0]) {
								case "tag":
									return _younow.getTagInfo(search.params[1])
										.then(tagInfo => {
											if (tagInfo.errorCode) throw _younow.errortoString(tagInfo)

											let broadcasts = tagInfo.items.map(user => {

												let broadcast: Broadcast = {
													broadcastId: user.broadcastId,
													viewers: user.viewers,
													username: user.profile,
													isGone: false,
													service: Services.younow,
													thumbnail: _younow.resolveThumbnail(user.broadcastId),
													url: "https://www.younow.com/" + user.profile,
													userId: user.userId,
													archived: false,
													nickname: "",
													title: ""
												}

												return broadcast
											})

											return broadcasts
										})
										.catch(err => {
											error(err)
											return null
										})
								case "top":
									return _younow.getTrendings(search.params[1] || "en")
										.then(trendings => {
											if (trendings.errorCode) throw _younow.errortoString(trendings)

											let broadcasts = trendings.trending_users.map(user => {
												let broadcast: Broadcast = {
													broadcastId: user.broadcastId,
													viewers: +user.viewers,
													username: user.profile,
													isGone: false,
													service: Services.younow,
													thumbnail: _younow.resolveThumbnail(+user.broadcastId),
													url: "https://www.younow.com/" + user.profile,
													userId: user.userId,
													archived: false,
													nickname: "",
													title: ""
												}

												return broadcast
											})

											return broadcasts
										})
										.catch(err => {
											error(err)
											return null
										})
								/*

									younow:follow:username

								 */

								case "follow":
									return _younow.getLiveBroadcastByUsername(search.params[1])
										.then(live => {
											if (live.errorCode && live.errorCode != 206) throw _younow.errortoString(live)

											return _younow.getOnlineFollowed(live.userId)
										})
										.then(async followed => {

											if (followed.errorCode) throw _younow.errortoString(followed)

											let broadcasts: Array<Broadcast> = []

											for (let user of followed.users) {
												if (user.status == Younow.FollowedStatus.broadcasting) {

													let live = await _younow.getLiveBroadcastByUID(user.userId)

													if (live.errorCode == 0
														// is broadcasting ?
														&& user.status == 2) {

														broadcasts.push({
															broadcastId: live.broadcastId,
															isGone: false,
															service: Services.younow,
															url: "https://www.younow.com/" + user.profile,
															userId: user.userId,
															username: user.profile,
															nickname: live.username,
															viewers: user.viewers,
															thumbnail: live.awsUrl,
															archived: false,
															title: live.title
														})
													}
												}
											}

											return broadcasts
										})
										.catch(err => {
											debug("younow:follow", err)
											return null
										})

								default:
									return null
							}
						}
						else if (search.parser == "periscope") {

							let wantLive = false
							let wantReplay = false

							switch (search.params[0]) {
								case "replay":
									wantReplay = true;
									break;
								case "live":
									wantLive = true
									break;
								case "search":
									wantLive = true
									wantReplay = true
									break;
								case "tag":
									/*



									 */
									return _periscope.searchTag(search.params[1], (search.params[2] || "en,en-us").split(","))
								default:
									throw search
							}

							return _periscope.broadcastSearchPublic(search.params[1])
								.then(search => {

									let broadcasts: Array<Broadcast> = []

									let bid: Record<string, boolean> = {}

									search.forEach(broadcast => {

										if (broadcast.id in bid) {
											debug("ignore", broadcast)
											return
										}

										let state = broadcast.state == "RUNNING"

										if (state && !wantLive) return
										if (!state && !wantReplay) return

										// "TIMED_OUT"

										bid[broadcast.id] = true

										debug(broadcast.state, broadcast.id, broadcast.user_id, broadcast.username, broadcast.status, broadcast.tags)

										broadcasts.push({
											broadcastId: broadcast.id,
											viewers: broadcast.n_total_watching,
											isGone: false,
											service: Services.periscope,
											userId: broadcast.user_id,
											username: broadcast.username,
											nickname: broadcast.user_display_name,
											thumbnail: broadcast.image_url_small,
											url: `https://www.pscp.tv/${broadcast.username}/${broadcast.id}`,
											archived: state,
											title: broadcast.status
										})
									})

									return broadcasts
								})
								.catch(err => {
									error(err)
									return null
								})

						}
						else if (search.parser == "youtube")
						{
							return _youtube.search(search.params[0])
						}
						else {
							debug("not supported", url)
							return Promise.resolve(null)
						}
					}

				})
				/*

					filter/concat/flush results

				 */
				await Promise.all(requests)
					.then(results => {

						let broadcasts: Record<string, Broadcast> = {}

						results.forEach((result: Array<Broadcast>) => {

							if (result) {

								result.forEach(user => {

									if (user.broadcastId in this.ignoredBroadcasts
										|| user.userId in this.ignoredUsers
										|| user.broadcastId in this.recordings
										/* is a dupe ? */
										|| user.broadcastId in broadcasts) {
									}
									else {
										broadcasts[user.broadcastId] = user
									}
								})
							}
						})

						/*

						keep broadcasts longer

						 */
						if (this.settings.stayAlive) {
							for (let key of this.indexBroadcasts) {
								let broadcast: Broadcast = this.broadcasts[key]

								if (broadcast.broadcastId in broadcasts
									|| broadcast.broadcastId in this.ignoredBroadcasts) {
									/* ignored & updated */
								}
								else if (!this.broadcasts[key].isGone) {
									broadcasts[key] = this.broadcasts[key]
									broadcasts[key].isGone = true
								}
							}
						}
						/*

						sort broadcasts per viewers

						 */

						this.indexBroadcasts = Object.keys(broadcasts)
							.sort((a, b) => broadcasts[b].viewers - broadcasts[a].viewers)

						document.title = `len ${this.indexBroadcasts.length}`

						this.broadcasts = broadcasts

						this.indexBroadcasts.forEach((bid, index) => {
							let broadcast = this.broadcasts[bid]

							let key = this.computeId(broadcast)

							if (key in this.users) {
								this.recordBroadcast(broadcast, index, true)
							}

						})
					})
					.catch(error)
					.then(bool => {
						this.countDown()
					})

			},
			checkUrl(idx) {
				//@todo
				debug("checkUrl", idx)
			},
			addUrl() {
				this.settings.searchUrls.push("")
			},
			delUrl(idx: number) {
				this.settings.searchUrls.splice(idx, 1)
			},
			countDown() {

				if (this.settings.isAutoRefresh == false) {
					this.counter = 0
					return
				}

				this.counter++

				if (this.counter > this.settings.refreshTimeout) {
					this.counter = 0
					this.refresh()
				}
				else {
					this.timeout = setTimeout(this.countDown, 1000)
				}
			},
			ignoreAll() {

				this.indexBroadcasts.forEach(key => this.ignoredBroadcasts[key] = true)
				this.indexBroadcasts = []
				this.broadcasts = {}
			},
			updateFilenameTemplate() {
				debug("updateFilenameTemplate", this)
			},
			updatePathDownload() {
				debug("ui set updatePathDownload", this)
			},
			imgError(evt, broadcast: Broadcast) {

				console.debug("imgError", this, evt)

				if (window) return

				broadcast.thumbnail = "../images/error.png"
				evt.target.src = broadcast.thumbnail
			},
			showAlert(msg, level: Level) {

				debug("ui showAlert", msg, level)

				let id = document.getElementById("alert")

				this.alert =
					{
						message: msg,
						"class": level
					};

				setTimeout(() => {
					this.alert = null
				}, 5000)
			},
			/*

				keyboard events
			*/
			keyboard(e: KeyboardEvent) {

				/*
					global

				 */
				if (e.code == "Tab" && e.ctrlKey) {
					this.currentTab = (this.currentTab + 1) % 5
				}
				/*

					thumb tab

				 */
				else if (this.currentTab == 0) {
					if (e.code == "Delete") {
						this.ignoreAll()
					}
					else if (e.code == "KeyR" || e.code == "F5") {
						this.refresh()
					}
				}
			},
			openDonationLink(){
				// @todo is not available at boot. why ?

				const Shell = require("electron").shell
				Shell.openExternal("https://blockchain.info/address/14bpqrNgreKaFtLaK85ArtcUKyAxuKpwJM")
			},
			/**
			 *
			 */
			async testing(...args) {

				require("./unitTesting").unitTesting(args)
			}
		},
		computed:
		{
			logs() {
				return "todo"
			}
		},
		watch:
		{
			/* auto save settings & users & ignoredUsers */

			"settings": {
				handler: (updated) => {
					debug("settings updated")
					localStorage.setItem("settings", JSON.stringify(updated))
				}, deep: true
			},
			"users": (updated) => {
				debug("users updated")
				localStorage.setItem("users", JSON.stringify(updated))
			},
			"ignoredUsers": (updated) => {
				debug("ignoredUsers updated")
				localStorage.setItem("ignoredUsers", JSON.stringify(updated))
			}
		},
		mounted() {
			document.addEventListener("keydown", this.keyboard)

			document.addEventListener("error", e => {
				debug("doc.error", e)
			})

			document.addEventListener("error", e => {
				debug("win.error", e)
			})
			/*
						var element = document.getElementById('videos');

						//create box in bottom-left

						var resizer = document.createElement('div');
						resizer.className = "resizer"

						//Append Child to Element
						element.appendChild(resizer);
						//box function onmousemove
						resizer.addEventListener('mousedown', initResize, false);

						//Window funtion mousemove & mouseup
						function initResize(e) {
							global.addEventListener('mousemove', Resize, false);
							global.addEventListener('mouseup', stopResize, false);
						}
						//resize the element
						function Resize(e) {
							//element.style.width = (e.clientX - element.offsetLeft) + 'px';
							element.style.height = (e.clientY - element.offsetTop) + 'px';


							@hack : force redraw

							element.style.display = "flow-root"

							setTimeout(() => {
								element.style.display = "block"
							})

						}
						//on mouseup remove windows functions mousemove & mouseup
						function stopResize(e) {
							global.removeEventListener('mousemove', Resize, false);
							global.removeEventListener('mouseup', stopResize, false);
						}
						*/

			//let videos = document.getElementById("videos")
			//videos.addEventListener("DOMNodeInsertedIntoDocument", console.debug)
			//videos.addEventListener("DOMNodeRemovedFromDocument", console.debug)
			//videos.addEventListener("DOMSubtreeModified", console.debug)
		}
	})

function moveFile(pathMove: string, filename: string) {

	let dst = pathMove
		.replace("*date*", formatDate(new Date()))
		.replace(/\*\w+\*/g, "")

	return dos.createDirectory(dst)
		.then(bool => {

			dst = _path.join(dst, _path.basename(filename))

			debug("moveFile", filename, dst, bool)
			return bool ? dos.moveTo(filename, dst) : null
		})
		.catch(error)
}

/**
 *
 */
class VideoPlayer {

	broadcast: Broadcast
	video: HTMLVideoElement = null
	hls: Hls
	url: string

	constructor(broadcast: Broadcast, url: string) {
		this.hls = new Hls(
			{
				autoStartLoad: true
			})
		this.broadcast = broadcast
		this.url = url
	}
	/**
	 * add a video and wait element
	 * @param  {Broadcast}        broadcast [description]
	 * @return {Promise<boolean>}           [description]
	 */
	createVideoElement(): Promise<HTMLVideoElement> {

		global.vue.$set(global.vue.videos, this.broadcast.broadcastId, this)

		return global.vue.$nextTick()
			.then(res => {

				this.video = (global.vue.$refs.video as Array<HTMLVideoElement>).find(el => el.parentElement.id == this.broadcast.broadcastId)
				this.video.muted = global.vue.settings.videoStartMuted
				return this.video
			})
	}

	start(callback: (err: Hls.errorData) => void) {

		this.hls.attachMedia(this.video)
		this.hls.loadSource(this.url)

		this.hls.on(Hls.Events.MANIFEST_PARSED, result => {

			debug("MANIFEST_PARSED", result)

			//this.video.play()
			callback(null)
		})

		this.hls.on(Hls.Events.ERROR, (evt, data) => {

			error(data)

			if (data.fatal) {
				this.destroy()
			}
			callback(data)
		})
	}

	destroy(): void {

		debug("VideoPlayer.destroy")

		this.hls.destroy()

		if (this.video) global.vue.$delete(global.vue.videos, this.broadcast.broadcastId)
	}
}
