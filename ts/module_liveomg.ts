import { log, error, debug } from "./__shared__/module_log"
import {extractDomainFromHostname} from "./__shared__/module_net"

/*

	liveomg source

*/

export function parse(body: string): Array<Broadcast> {

	let parser = new DOMParser().parseFromString(body, "text/html")

	let broadcasts = parser.querySelectorAll("#applications li")

	return Array.from(broadcasts).map((broadcast: HTMLElement): Broadcast => {

		let id = broadcast.dataset.id

		let img: HTMLImageElement = broadcast.querySelector("img")
		let userElement: HTMLLinkElement = broadcast.querySelector("a.username")
		let viewers = parseInt(broadcast.querySelector("span.viewers").textContent || "0")

		if (id && img && userElement) {

			let href = userElement.href
			let username = userElement.innerText

			let thumbnail = extractDomainFromHostname(new URL(img.src).hostname)
			let user = extractDomainFromHostname(new URL(href).hostname)

			let m = id.match(/id-(.+?)-(.+)/)

			if (m && m.length == 3) {
				switch (m[1]) {
					case "vk.com":

						let vk = href.match(/video_ext\.php\?oid=(\d+)&id=(\d+)&hash=(\d+)/)

						if (vk && vk.length == 4 && m[2] == vk[1]) {

							/*

							https://vk.com/video_ext.php?oid={userId}&id={broadcastId}&hash={...}

							*/

							return {
								service: Services.vk,
								nickname: username,
								username: "",
								thumbnail: img.src,
								url: href,
								viewers: viewers,
								userId: m[2],
								broadcastId: vk[2],
								isGone: false,
								archived: false,
								title: ""
							}
						}

					/*

					https://www.pscp.tv/w/{broadcastId}

					 */
					case "periscope.tv":

						let p = href.match(/pscp.tv\/(w|\w+)\/(\w+)/)

						if (p && p.length == 3) {

							return {
								service: Services.periscope,
								nickname: username,
								username: "",
								thumbnail: img.src,
								url: href,
								viewers: viewers,
								userId: m[2],
								broadcastId: p[2],
								isGone: false,
								archived: false,
								title: ""
							}
						}
					case "younow.com":
						let y = href.match(/younow.com\/(\w+)/)

						let ybid = img.src.match(/broadcastId=(\d+)/)

						if (y && ybid) {
							return {
								service: Services.younow,
								username: y[1],
								nickname: "",
								thumbnail: img.src,
								url: href,
								viewers: viewers,
								userId: null,
								broadcastId: ybid[1],
								isGone: false,
								archived: false,
								title: ""
							}
						}

					case "liveme.com":
					case "bigo.tv":
					case "fotka.pl":
					case "afreeca.com":
					case "17.live":
					case "twitch.tv":
					case "vichatter.net":
					case "facebook.com":
						break;
				}

			}
			else {
				debug(m)
			}
		}
		else {
			debug(broadcast)
		}

		return null
	}).filter(broadcast => broadcast != null)
}
