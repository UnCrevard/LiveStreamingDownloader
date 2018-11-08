import * as _fs from "fs"
import * as _path from "path"
import {error} from "./module_log"

export function noop(){}

export function prettify(obj)
{
	return JSON.stringify(obj,null,"\t")
}

export function promisify(func: (resolve, reject?) => any) {
	return new Promise(func)
}

export enum Time {
	MILLI = 1000,
	SECOND = 1000,
	MINUTE = 60000,
	HOUR = 60000 * 60
}

export function formatDate(date: Date): string {
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
	return '' + y + '.' + (m < 10 ? '0' + m : m) + '.' + (d < 10 ? '0' + d : d);
}

export function formatTime(date: Date): string {
	var h = date.getHours()
	var m = date.getMinutes()
	var s = date.getSeconds()

	return `${(h < 10 ? "0" + h : h)}-${(m < 10 ? "0" + m : m)}-${(s < 10 ? "0" + s : s)}`
}

export function formatDateTime(date: Date): string {
	return formatDate(date) + "_" + formatTime(date)
}

export function cleanFilename(filename: string): string {
	return filename.replace(/[\x00-\x1f"<>|*?:/\\]/gi, "_").slice(0,200)
}

export function cleanHTML(html: string): string {

	return html.replace(/&#(\d+);/g, (x, y) => String.fromCharCode(y))
}

/**
 * remove non ansi char 0x100-0xffff
 * @param {string} str
 */
export function removeNonANSIChar(str:string)
{
	return str.replace(/[^\x20-\xFF]/g, "");
}

export const isANSI=(str:string):boolean=>!str.match(/[^\x00 -\xff]/gi)

/*

emoji \u{1F300}-\u{1F5ff}

*/

//export const isLatin=(str:string)=>!str.match(/[\u{0100}-\u{1f2ff}]/u)

/*

	ascii   0000
	ansi    0080-00ff
	latin   0100-03ff
	russian 0400
	arabic  0600
	emoji   d8xx

	2018
	2022

*/
export function isLatin(str:string):boolean
{

	let m=str.match(/[\u0400-\u1fff\u2c00-\ud7ff]/)

	if (m)
	{
		for (let c of str) {
			let code = c.charCodeAt(0)

			if (code > 255) console.error(c, "=", code.toString(16))
		}

		return false
	}
	else
	{
		return true
	}
}
/*

	deep search key in obj

*/
export function jsonDeepSearch(key, data): Array<any> {

	let results = []

	if (data !== null && typeof data === "object") {

		if (key in data)
			results.push(data[key])
		else
			for (let i in data) {
				results = results.concat(jsonDeepSearch(key, data[i]))
			}
	}
	return results
}

// youtube -> Youtube
String.prototype.capitalizeFirstLetter = function (){ return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()}
