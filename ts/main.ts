import { app, session, BrowserWindow } from "electron"

import * as _path from "path"
import * as _fs from "fs"

const log = console.log, error = console.error

let mainWindow;

/* hilarious user agent */

function getFirefoxUserAgent(): string {
	let date = new Date()
	let version = ((date.getFullYear() - 2018) * 4 + Math.floor(date.getMonth() / 4) + 58) + ".0"
	return `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${version} Gecko/20100101 Firefox/${version}`
}

function file(s: string) {
	let fullpath = _path.join(__dirname, s)
	log(fullpath)
	return fullpath
}
function createWindow() {
	// create the browser window
	mainWindow = new BrowserWindow({

		autoHideMenuBar: true,
		width: 1024, height: 768,
		webPreferences:
		{
		},

		//@todo version from pkg

		title: `LiveStreamDownloader 0.1 beta`
	});

	mainWindow.loadURL(file("../html/index.html"),
		{
			userAgent: getFirefoxUserAgent()
		});

	// dereference the mainWindow object when the window is closed

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
	mainWindow.on("browser-window-blur", function(...args) {
		log("blur", args)
	})
	mainWindow.on("browser-window-focus", function(...args) {
		log("focus", args)
	})

	mainWindow.webContents.on('before-input-event', (event, input) => {

		//log(input)
		// For example, only enable application menu keyboard shortcuts when
		// Ctrl/Cmd are down.
		//win.webContents.setIgnoreMenuShortcuts(!input.control && !input.meta)
	})
}

// call the createWindow() method when Electron has finished initializing
app.on('ready', () => {

	/*
		session.defaultSession.webRequest.onSendHeaders(details => {
			log("onSendHeaders", details)
		})
	*/

	/*

	clean up headers leaks

	 */
	session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {

		let headers = details.requestHeaders

		delete headers["Origin"]
		delete headers["X-DevTools-Emulate-Network-Conditions-Client-Id"]

		callback({ cancel: false, requestHeaders: headers });
	});

	createWindow()
})

// when all windows are closed, quit the application on Windows/Linux
app.on('window-all-closed', function() {
	// only quit the application on OS X if the user hits cmd + q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	// re-create the mainWindow if the dock icon is clicked in OS X and no other
	// windows were open
	if (mainWindow === null) {
		createWindow();
	}
});


