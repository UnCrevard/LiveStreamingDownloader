import * as _stream from "stream"
import * as _fs from "fs"
import * as _cp from "child_process"
import * as FS from "./__shared__/module_fs"

import {log,error,debug} from "./__shared__/module_log"

export function ffmpeg(inpfile:string,outfile:string,options:string):Promise<boolean>
{
	return new Promise((resolve,reject)=>
	{
		let args=["-i",inpfile,...options.split(" "),"-y",outfile]

		debug("ffmpeg",args)

		let executable="bin/ffmpeg"

		let ffmpeg=_cp.spawn(executable,args)

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
