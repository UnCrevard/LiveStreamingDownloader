import * as _os from "os"
import * as _path from "path"
import * as _fs from "fs"
import { prettify } from "./module_utils"

export const log=console.log
export const info=console.info
export const warn=console.warn
export const assert=console.assert

const TRACE_FILE = _path.join(_os.tmpdir(), "trace.log")

// nodejs helper cb error null/error or promise catch

export function cbError(err)
{
	err && error(err)

	return null
}

export function trace(...args) {
	try {
		let output = args.map(arg => {

			return typeof arg === "object" ? prettify(arg) : arg
		}).join(", ")

		_fs.appendFile(TRACE_FILE, output + "\n", err => err && error(err))
		debug(output)
	}
	catch (err) {
		log("trace catch for", err)
	}
}

export function debug(...args)
{
	if (global.system.verbosity) console.debug.apply(null,args)
}

// error in red

export function error(...args)
{
	process.stdout.write("\x1b[31m")

	console.error.apply(null,args)

	process.stdout.write("\x1b[39m")
}

export function dumpError(err)
{
	error("typeof",typeof err,prettify(err))
	return err
}
