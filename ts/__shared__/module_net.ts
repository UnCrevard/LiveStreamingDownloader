import * as fs from "fs"
import { log, debug, error } from "./module_log"
import * as P from "./module_fs"

// make node-fetch global

if (typeof fetch === "undefined") global["fetch"] = require("node-fetch")

const DEFAULT_HEADERS = {
	"User-Agent": getFirefoxUserAgent()
	,"Accept-Language": "en-US,en;q=0.5"
}

// keep user agent up to date with some magic

export function getFirefoxUserAgent(): string {
	let date = new Date()
	let version = ((date.getFullYear() - 2018) * 4 + Math.floor(date.getMonth() / 4) + 58) + ".0"
	return `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${version} Gecko/20100101 Firefox/${version}`
}

export function getChromeUserAgent():string{
	return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.22 Safari/537.36`
}

export function extractDomainFromHostname(hostname: string) {
	return hostname.split(".").reverse()[1]
}
/*

export function miniget(url: string, options, callback) {
	debug("miniget", url, options)

	getText(url)
		.then(text => {

			let stream = fs.createWriteStream(Date.now() + "")

			stream.write(url)
			stream.write(text)
			stream.end()

			callback(null, null, text)
		})
		.catch(err => callback(err))
}
*/

/*
export function request(...args) {
	debug("request", args)
	return null
}
*/

/*
export function got(...args) {
	debug("got", args)
	return null
}
*/

// fetch helper

const isOk=(res:Response)=>{

	if (res.ok)
	{
		return res
	}
	else
	{
		throw res.status
	}
}


async function doFetch(url: string, options): Promise<Response> {

	if (!url) throw "fetch url is invalid"

	// brut force retry with fatal error. I don't give a fuck. Die & retry.

	while (true) {
		try {
			let res: Response = await fetch(url, options)
			return res
		}
		catch (err) {
			error("fetch", err.errno,err.message)
			await P.timeout(1000)
		}
	}
}

export function getResponse(url: string, headers = {}):Promise<Response> {
	let options = { headers: Object.assign({},DEFAULT_HEADERS, { 'Content-Type': 'application/json' }, headers) }

	return doFetch(url, options).then(isOk)
}

export function getJSON(url: string, headers = {}): Promise<any> {
	let options = { headers: Object.assign({},DEFAULT_HEADERS, { 'Content-Type': 'application/json' }, headers) }

	return doFetch(url, options).then(isOk).then(res => res.json())
}

export async function getBinary(url: string, headers = {}): Promise<Buffer> {
	let options = { headers: Object.assign({},DEFAULT_HEADERS, headers) }

	return doFetch(url,options).then(res=>res.arrayBuffer()).then(arrayBuffer=>Buffer.from(arrayBuffer))
}

export function getText(url: string, headers = {}): Promise<string> {
	let options = { headers: Object.assign({},DEFAULT_HEADERS, headers) }
	return doFetch(url, options).then(isOk).then(res => res.text())
}

export function head(url, headers = {}): Promise<any> {
	return doFetch(url, {
		method: "head",
		headers: Object.assign({},DEFAULT_HEADERS, headers)
	})
}

export function postJSON(url, headers, json): Promise<any> {
	let options = {
		method: "post",
		headers: Object.assign({},DEFAULT_HEADERS, { 'Content-Type': 'application/json' }, headers),
		body: JSON.stringify(json)
	}

	return doFetch(url, options).then(isOk).then(res => res.json())
}
