(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const _path = __importStar(require("path"));
const log = console.log, error = console.error;
let mainWindow;
function getFirefoxUserAgent() {
    let date = new Date();
    let version = ((date.getFullYear() - 2018) * 4 + Math.floor(date.getMonth() / 4) + 58) + ".0";
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${version} Gecko/20100101 Firefox/${version}`;
}
function file(s) {
    let fullpath = _path.join(__dirname, s);
    log(fullpath);
    return fullpath;
}
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        autoHideMenuBar: true,
        width: 1024, height: 768,
        webPreferences: {},
        title: `LiveStreamDownloader 0.1 beta`
    });
    mainWindow.loadURL(file("../html/index.html"), {
        userAgent: getFirefoxUserAgent()
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.on("browser-window-blur", function (...args) {
        log("blur", args);
    });
    mainWindow.on("browser-window-focus", function (...args) {
        log("focus", args);
    });
    mainWindow.webContents.on('before-input-event', (event, input) => {
    });
}
electron_1.app.on('ready', () => {
    electron_1.session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        let headers = details.requestHeaders;
        delete headers["Origin"];
        delete headers["X-DevTools-Emulate-Network-Conditions-Client-Id"];
        callback({ cancel: false, requestHeaders: headers });
    });
    createWindow();
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUEsdUNBQXNEO0FBRXRELDRDQUE2QjtBQUc3QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO0FBRTlDLElBQUksVUFBVSxDQUFDO0FBSWY7SUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQ3JCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQTtJQUM3RixPQUFPLGdEQUFnRCxPQUFPLDJCQUEyQixPQUFPLEVBQUUsQ0FBQTtBQUNuRyxDQUFDO0FBRUQsY0FBYyxDQUFTO0lBQ3RCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNiLE9BQU8sUUFBUSxDQUFBO0FBQ2hCLENBQUM7QUFDRDtJQUVDLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUM7UUFFOUIsZUFBZSxFQUFFLElBQUk7UUFDckIsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRztRQUN4QixjQUFjLEVBQ2QsRUFDQztRQUlELEtBQUssRUFBRSwrQkFBK0I7S0FDdEMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFDNUM7UUFDQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUU7S0FDaEMsQ0FBQyxDQUFDO0lBSUosVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsVUFBUyxHQUFHLElBQUk7UUFDcEQsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNGLFVBQVUsQ0FBQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxHQUFHLElBQUk7UUFDckQsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDLENBQUMsQ0FBQTtJQUVGLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO0lBTWpFLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUdELGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQWFwQixrQkFBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7UUFFM0UsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQTtRQUVwQyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QixPQUFPLE9BQU8sQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO1FBRWpFLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxZQUFZLEVBQUUsQ0FBQTtBQUNmLENBQUMsQ0FBQyxDQUFBO0FBR0YsY0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtJQUUzQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2xDLGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNYO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUdsQixJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDeEIsWUFBWSxFQUFFLENBQUM7S0FDZjtBQUNGLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgYXBwLCBzZXNzaW9uLCBCcm93c2VyV2luZG93IH0gZnJvbSBcImVsZWN0cm9uXCJcclxuXHJcbmltcG9ydCAqIGFzIF9wYXRoIGZyb20gXCJwYXRoXCJcclxuaW1wb3J0ICogYXMgX2ZzIGZyb20gXCJmc1wiXHJcblxyXG5jb25zdCBsb2cgPSBjb25zb2xlLmxvZywgZXJyb3IgPSBjb25zb2xlLmVycm9yXHJcblxyXG5sZXQgbWFpbldpbmRvdztcclxuXHJcbi8qIGhpbGFyaW91cyB1c2VyIGFnZW50ICovXHJcblxyXG5mdW5jdGlvbiBnZXRGaXJlZm94VXNlckFnZW50KCk6IHN0cmluZyB7XHJcblx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0bGV0IHZlcnNpb24gPSAoKGRhdGUuZ2V0RnVsbFllYXIoKSAtIDIwMTgpICogNCArIE1hdGguZmxvb3IoZGF0ZS5nZXRNb250aCgpIC8gNCkgKyA1OCkgKyBcIi4wXCJcclxuXHRyZXR1cm4gYE1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OiR7dmVyc2lvbn0gR2Vja28vMjAxMDAxMDEgRmlyZWZveC8ke3ZlcnNpb259YFxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxlKHM6IHN0cmluZykge1xyXG5cdGxldCBmdWxscGF0aCA9IF9wYXRoLmpvaW4oX19kaXJuYW1lLCBzKVxyXG5cdGxvZyhmdWxscGF0aClcclxuXHRyZXR1cm4gZnVsbHBhdGhcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XHJcblx0Ly8gY3JlYXRlIHRoZSBicm93c2VyIHdpbmRvd1xyXG5cdG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcblxyXG5cdFx0YXV0b0hpZGVNZW51QmFyOiB0cnVlLFxyXG5cdFx0d2lkdGg6IDEwMjQsIGhlaWdodDogNzY4LFxyXG5cdFx0d2ViUHJlZmVyZW5jZXM6XHJcblx0XHR7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vQHRvZG8gdmVyc2lvbiBmcm9tIHBrZ1xyXG5cclxuXHRcdHRpdGxlOiBgTGl2ZVN0cmVhbURvd25sb2FkZXIgMC4xIGJldGFgXHJcblx0fSk7XHJcblxyXG5cdG1haW5XaW5kb3cubG9hZFVSTChmaWxlKFwiLi4vaHRtbC9pbmRleC5odG1sXCIpLFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VyQWdlbnQ6IGdldEZpcmVmb3hVc2VyQWdlbnQoKVxyXG5cdFx0fSk7XHJcblxyXG5cdC8vIGRlcmVmZXJlbmNlIHRoZSBtYWluV2luZG93IG9iamVjdCB3aGVuIHRoZSB3aW5kb3cgaXMgY2xvc2VkXHJcblxyXG5cdG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bWFpbldpbmRvdyA9IG51bGw7XHJcblx0fSk7XHJcblx0bWFpbldpbmRvdy5vbihcImJyb3dzZXItd2luZG93LWJsdXJcIiwgZnVuY3Rpb24oLi4uYXJncykge1xyXG5cdFx0bG9nKFwiYmx1clwiLCBhcmdzKVxyXG5cdH0pXHJcblx0bWFpbldpbmRvdy5vbihcImJyb3dzZXItd2luZG93LWZvY3VzXCIsIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuXHRcdGxvZyhcImZvY3VzXCIsIGFyZ3MpXHJcblx0fSlcclxuXHJcblx0bWFpbldpbmRvdy53ZWJDb250ZW50cy5vbignYmVmb3JlLWlucHV0LWV2ZW50JywgKGV2ZW50LCBpbnB1dCkgPT4ge1xyXG5cclxuXHRcdC8vbG9nKGlucHV0KVxyXG5cdFx0Ly8gRm9yIGV4YW1wbGUsIG9ubHkgZW5hYmxlIGFwcGxpY2F0aW9uIG1lbnUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW5cclxuXHRcdC8vIEN0cmwvQ21kIGFyZSBkb3duLlxyXG5cdFx0Ly93aW4ud2ViQ29udGVudHMuc2V0SWdub3JlTWVudVNob3J0Y3V0cyghaW5wdXQuY29udHJvbCAmJiAhaW5wdXQubWV0YSlcclxuXHR9KVxyXG59XHJcblxyXG4vLyBjYWxsIHRoZSBjcmVhdGVXaW5kb3coKSBtZXRob2Qgd2hlbiBFbGVjdHJvbiBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbmFwcC5vbigncmVhZHknLCAoKSA9PiB7XHJcblxyXG5cdC8qXHJcblx0XHRzZXNzaW9uLmRlZmF1bHRTZXNzaW9uLndlYlJlcXVlc3Qub25TZW5kSGVhZGVycyhkZXRhaWxzID0+IHtcclxuXHRcdFx0bG9nKFwib25TZW5kSGVhZGVyc1wiLCBkZXRhaWxzKVxyXG5cdFx0fSlcclxuXHQqL1xyXG5cclxuXHQvKlxyXG5cclxuXHRjbGVhbiB1cCBoZWFkZXJzIGxlYWtzXHJcblxyXG5cdCAqL1xyXG5cdHNlc3Npb24uZGVmYXVsdFNlc3Npb24ud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzKChkZXRhaWxzLCBjYWxsYmFjaykgPT4ge1xyXG5cclxuXHRcdGxldCBoZWFkZXJzID0gZGV0YWlscy5yZXF1ZXN0SGVhZGVyc1xyXG5cclxuXHRcdGRlbGV0ZSBoZWFkZXJzW1wiT3JpZ2luXCJdXHJcblx0XHRkZWxldGUgaGVhZGVyc1tcIlgtRGV2VG9vbHMtRW11bGF0ZS1OZXR3b3JrLUNvbmRpdGlvbnMtQ2xpZW50LUlkXCJdXHJcblxyXG5cdFx0Y2FsbGJhY2soeyBjYW5jZWw6IGZhbHNlLCByZXF1ZXN0SGVhZGVyczogaGVhZGVycyB9KTtcclxuXHR9KTtcclxuXHJcblx0Y3JlYXRlV2luZG93KClcclxufSlcclxuXHJcbi8vIHdoZW4gYWxsIHdpbmRvd3MgYXJlIGNsb3NlZCwgcXVpdCB0aGUgYXBwbGljYXRpb24gb24gV2luZG93cy9MaW51eFxyXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgZnVuY3Rpb24oKSB7XHJcblx0Ly8gb25seSBxdWl0IHRoZSBhcHBsaWNhdGlvbiBvbiBPUyBYIGlmIHRoZSB1c2VyIGhpdHMgY21kICsgcVxyXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xyXG5cdFx0YXBwLnF1aXQoKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuYXBwLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uKCkge1xyXG5cdC8vIHJlLWNyZWF0ZSB0aGUgbWFpbldpbmRvdyBpZiB0aGUgZG9jayBpY29uIGlzIGNsaWNrZWQgaW4gT1MgWCBhbmQgbm8gb3RoZXJcclxuXHQvLyB3aW5kb3dzIHdlcmUgb3BlblxyXG5cdGlmIChtYWluV2luZG93ID09PSBudWxsKSB7XHJcblx0XHRjcmVhdGVXaW5kb3coKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
