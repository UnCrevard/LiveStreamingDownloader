/*

	sandbox for testing

	* hls.js use a lot of resources

*/

import * as fs from "fs"
import * as _os from "os"
import * as _path from "path"
import { spawn, ChildProcess } from "child_process"

import { log, error, debug } from "./__shared__/module_log"

import Player from "hls.js"

import * as _younow from "./module_lsd_younow"
import * as _periscope from "./module_lsd_periscope"

export async function unitTesting(args: Array<string>) {

	log(args)

	if (args) return

	let arrHls = {}

	let broadcasts = await _periscope.broadcastSearchPublic(args[0])

	for (let i = 0; i < Math.min(broadcasts.length, 10); i++) {

		let broadcast = broadcasts[i]

		let stream = await _periscope.getBroadcast(broadcast.id)

		if (!stream.replay_url) {
			let video = document.createElement("video")

			video.autoplay = true
			video.muted = true
			video.controls = true
			video.style.width = "auto"
			video.style.height = "200px"
			video.id = broadcast.id

			video.addEventListener("click", e => {

				let video = (e.target as HTMLVideoElement)

				let hls = arrHls[video.id]
				hls.destroy();

				document.body.removeChild(video);
			})

			document.body.appendChild(video)

			let hls = new Player()

			arrHls[broadcast.id] = hls

			hls.attachMedia(video)

			hls.on(Player.Events.MANIFEST_PARSED, result => {

				debug("MANIFEST_PARSED", result)
			})

			hls.on(Player.Events.ERROR, (evt, data) => {
				error(data)
			})

			hls.on(Player.Events.DESTROYING, (evt, data) => {
				log(evt, data)
			})


			/*

				hls_url ok

			 */

			log(stream)
			hls.loadSource(stream.hls_url)
		}
	}
}
