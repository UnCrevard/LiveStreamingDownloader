import * as _stream from "stream"
import * as _fs from "fs"
import * as _cp from "child_process"

import {log,error,debug} from "../__shared__/module_log"


// unuseable right now

/*

export function ffmpeg(inpfile:string,
	outfile:string,
	options:string,
	ffmpegPath:string):Promise<boolean>
{
	return new Promise((resolve,reject)=>
	{
		let args=["-i",inpfile,...options.split(" "),outfile]

		debug("ffmpeg",args)

		let ffmpeg=_cp.spawn(ffmpegPath||"ffmpeg",args)		

		// fatal (ffmpeg is missing/bad options)

		ffmpeg.on("error",err=>
		{
			error(err)
			reject(false)
		})

		ffmpeg.on("exit",code=>
		{
			resolve(code==0)
		})

		ffmpeg.stderr.pipe(process.stdout)
	})
}

*/