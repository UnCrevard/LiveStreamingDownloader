import * as fs from "fs"
import * as path from "path"

/** returns Promise(exists:boolean or err) */

export function exists(filename: string): Promise<boolean> {
	return new Promise(resolve => fs.exists(filename, resolve))
}

/** returns Promise(data or err) */

export const readFile = (filename: string) => new Promise((resolve, reject) => fs.readFile(filename, (err, data) => err ? reject(err) : resolve(data)))

/** returns Promise(null or err) */

export function writeFile(filename: string, data: string | Buffer) {
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, data, err => err ? reject(err) : resolve(err))
	})
}

/** returns Promise(null or err) */

export function appendFile(filename: string, data: string | Buffer) {
	return new Promise((resolve, reject) => {
		fs.appendFile(filename, data, err => err ? reject(err) : resolve(err))
	})
}

/** returns Promise(null or err) */

export function rename(src: string, dst: string): Promise<any> {
	return new Promise((resolve, reject) => {
		fs.rename(src, dst, err => err ? reject(err) : resolve(err))
	})
}

export function moveTo(src: string, dst: string) {

	return rename(src, dst)
}

export function createDirectory(path: string): Promise<any> {
	return exists(path)
		.then(bool => {
			if (!bool) {
				return new Promise((resolve, reject) => {
					fs.mkdir(path, err => err ? reject(err) : resolve(true))
				})
			}
			else {
				return true
			}
		})
}

export async function setCurrentDirectory(path) {
	process.chdir(path)
	return true
}

export async function getCurrentDirectory() {
	return process.cwd()
}

export function timeout(timeout: number) {
	return new Promise(resolve => setTimeout(resolve, timeout))
}

export function del(filename: string) {
	return new Promise((resolve, reject) => fs.unlink(filename, err => err ? reject(err) : resolve(true)))
}

/*


 */

export const createWriteStream=fs.createWriteStream
export const createReadStream=fs.createReadStream
