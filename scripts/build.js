const prod = false
const log = console.log
const error = console.error

process.env.NODE_ENV = prod?'production':"development"

console.clear()

process.chdir(__dirname)

const fs = require("fs")
const path = require("path")

const cp = require("child_process")
const hjson = require('hjson');
const browserify = require("browserify")
const tsify = require("tsify")
const uglifyes = require("uglify-es")

const replace = require("browserify-replace")
const envify=require("envify/custom")

function isCached(src, dst, cb)
{
	fs.stat(src, (err, srcStats) => {
		if (err) throw src, err

		fs.stat(dst, (err, dstStats) => {

			if (err && err.errno != -4058) throw src, err;

			cb(err == null && (srcStats.mtime < dstStats.mtime))
		})
	})
}

function minifyDir(srcDir, dstDir) {
	let files = fs.readdirSync(srcDir)

	files.map(file => {
		let src = path.join(srcDir, file)
		let dst = path.join(dstDir, file)

		isCached(src, dst, cached => {
			if (!cached) {
				minify(src, (err, data) => {

					if (err) throw `${src} ${err}`;

					fs.writeFile(dst, data, err => {

						if (err) throw "minifiying", src, err;

						console.log("minified", dst)
					})
				})
			}
		})
	})
}

// bundle background

function pack(src, dst,opts) {

	return new Promise((resolve, reject) => {

	log("packing", src, "to", dst)

	let b = browserify(src,opts)

				b.plugin(tsify,
				{
					project:"../ts/tsconfig.json"
					,stopOnError:false
				})

				b.ignore("node-fetch")

				if (prod == true) {

					b.transform(envify({
  					NODE_ENV: 'development'
					}))
/*
					log("remove console msg")

					b.transform(replace,
						{
							replace:
								[
									{
										from: "regexsrc", to: "regexdst"
										// module_logging_1.log("onSendHeaders", details);
										// from:/^\s*(module_.*|console)\.(log|info|error|debug)(.*);$/gm,to:"// $1"
									}
								]
						})
*/
				}

				// create bundle

				b.bundle((err, buffer) => {
					if (err) {
						reject(`${src} ${err}`)
					}
					else {
						if (prod == false) {
							fs.writeFile(dst, buffer, err =>{
								if (err) throw err;

								resolve()
							})
						}
						else {

							// minify js

							let result = uglifyes.minify(buffer.toString(),
								{
									toplevel: true, // remove unused
									compress: true,
									ecma: 8,
									mangle: true, // mangle function name
									output:
										{
											beautify: false
										},
									warnings: "verbose",
									compress: {
										sequences: false, // ==true add ,
										dead_code: true, // ==true
										drop_console: true, // ==false remove console.*
										global_defs: {
										}
									}
								})

							if (result.warnings) {
								log("warnings :", result.warnings.length)
							}

							if (result.error) {
								reject(result.error)
							}
							else {
								fs.writeFileSync(dst, result.code)
								resolve()
							}
						}
					}
				})
	})
}


async function build() {

	log(process.cwd())

	await pack("../ts/main.ts", "../app/js/main.js",{
		node:true
		,debug :true
		,noParse:true
		// ,"no-commondir":true // ?
	})

	await pack("../ts/app.ts", "../app/js/app.js",{
		"bare":true
		,debug :true
	})

	//let data = fs.readFileSync("main.js")
	//fs.writeFileSync("app/js/main.js",data)
	// minify assets

	// minifyDir("css/", "dist/css/")
	// minifyDir("html/", "dist/")

	log("done !!!")
}

build()
