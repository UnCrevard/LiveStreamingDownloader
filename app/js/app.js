(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function (__dirname){
var fs = require('fs')
var path = require('path')

var pathFile = path.join(__dirname, 'path.txt')

if (fs.existsSync(pathFile)) {
  module.exports = path.join(__dirname, fs.readFileSync(pathFile, 'utf-8'))
} else {
  throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again')
}

}).call(this,require("path").join(__dirname,"..","node_modules","electron"))

},{"fs":undefined,"path":undefined}],3:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Hls=e():t.Hls=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=23)}([function(t,e,r){"use strict";function i(){}function a(t,e){return e="["+t+"] > "+e}function n(t){var e=f.console[t];return e?function(){for(var r=arguments.length,i=Array(r),n=0;n<r;n++)i[n]=arguments[n];i[0]&&(i[0]=a(t,i[0])),e.apply(f.console,i)}:i}function o(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.forEach(function(e){u[e]=t[e]?t[e].bind(t):n(e)})}r.d(e,"a",function(){return c}),r.d(e,"b",function(){return h});var s=r(5),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d={trace:i,debug:i,log:i,warn:i,info:i,error:i},u=d,f=Object(s.a)(),c=function(t){if(!0===t||"object"===(void 0===t?"undefined":l(t))){o(t,"debug","log","info","warn","error");try{u.log()}catch(t){u=d}}else u=d},h=u},function(t,e,r){"use strict";var i={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"};e.a=i},function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"a",function(){return a});var i={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",KEY_SYSTEM_ERROR:"keySystemError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},a={KEY_SYSTEM_NO_KEYS:"keySystemNoKeys",KEY_SYSTEM_NO_ACCESS:"keySystemNoAccess",KEY_SYSTEM_NO_SESSION:"keySystemNoSession",KEY_SYSTEM_LICENSE_REQUEST_FAILED:"keySystemLicenseRequestFailed",MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException"}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=r(2),o=r(1),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=new Set(["hlsEventGeneric","hlsHandlerDestroying","hlsHandlerDestroyed"]),d=function(){function t(e){i(this,t),this.hls=e,this.onEvent=this.onEvent.bind(this);for(var r=arguments.length,a=Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];this.handledEvents=a,this.useGenericHandler=!0,this.registerListeners()}return t.prototype.destroy=function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()},t.prototype.onHandlerDestroying=function(){},t.prototype.onHandlerDestroyed=function(){},t.prototype.isEventHandler=function(){return"object"===s(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent},t.prototype.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){if(l.has(t))throw new Error("Forbidden event-name: "+t);this.hls.on(t,this.onEvent)},this)},t.prototype.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){this.hls.off(t,this.onEvent)},this)},t.prototype.onEvent=function(t,e){this.onEventGeneric(t,e)},t.prototype.onEventGeneric=function(t,e){var r=function(t,e){var r="on"+t.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+t+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,e)};try{r.call(this,t,e).call()}catch(e){a.b.error("An internal error happened while handling event "+t+'. Error message: "'+e.message+'". Here is a stacktrace:',e),this.hls.trigger(o.a.ERROR,{type:n.b.OTHER_ERROR,details:n.a.INTERNAL_EXCEPTION,fatal:!1,event:t,err:e})}},t}();e.a=d},function(t,e){t.exports=void 0},function(t,e,r){"use strict";function i(){return"undefined"==typeof window?self:window}e.a=i},function(t,e,r){!function(e){var r=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,i=/^([^\/;?#]*)(.*)$/,a=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,o={buildAbsoluteURL:function(t,e,r){if(r=r||{},t=t.trim(),!(e=e.trim())){if(!r.alwaysNormalize)return t;var a=this.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");return a.path=o.normalizePath(a.path),o.buildURLFromParts(a)}var n=this.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):e;var s=this.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=i.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var d={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(d.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,f=u.substring(0,u.lastIndexOf("/")+1)+n.path;d.path=o.normalizePath(f)}else d.path=s.path,n.params||(d.params=s.params,n.query||(d.query=s.query));return null===d.path&&(d.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(d)},parseURL:function(t){var e=r.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(a,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}};t.exports=o}()},function(t,e,r){"use strict";var i={search:function(t,e){for(var r=0,i=t.length-1,a=null,n=null;r<=i;){a=(r+i)/2|0,n=t[a];var o=e(n);if(o>0)r=a+1;else{if(!(o<0))return n;i=a-1}}return null}};e.a=i},function(t,e){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function a(t){return"number"==typeof t}function n(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!a(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},r.prototype.emit=function(t){var e,r,a,s,l,d;if(this._events||(this._events={}),"error"===t&&(!this._events.error||n(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(r=this._events[t],o(r))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),r.apply(this,s)}else if(n(r))for(s=Array.prototype.slice.call(arguments,1),d=r.slice(),a=d.length,l=0;l<a;l++)d[l].apply(this,s);return!0},r.prototype.addListener=function(t,e){var a;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?n(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,n(this._events[t])&&!this._events[t].warned&&(a=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[t].length>a&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function r(){this.removeListener(t,r),a||(a=!0,e.apply(this,arguments))}if(!i(e))throw TypeError("listener must be a function");var a=!1;return r.listener=e,this.on(t,r),this},r.prototype.removeListener=function(t,e){var r,a,o,s;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=this._events[t],o=r.length,a=-1,r===e||i(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(n(r)){for(s=o;s-- >0;)if(r[s]===e||r[s].listener&&r[s].listener===e){a=s;break}if(a<0)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(a,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[t],i(r))this.removeListener(t,r);else if(r)for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},r.prototype.listeners=function(t){return this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length}return 0},r.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(){i(this,t)}return t.isHeader=function(t,e){return e+10<=t.length&&73===t[e]&&68===t[e+1]&&51===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},t.isFooter=function(t,e){return e+10<=t.length&&51===t[e]&&68===t[e+1]&&73===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},t.getID3Data=function(e,r){for(var i=r,a=0;t.isHeader(e,r);){a+=10;a+=t._readSize(e,r+6),t.isFooter(e,r+10)&&(a+=10),r+=a}if(a>0)return e.subarray(i,i+a)},t._readSize=function(t,e){var r=0;return r=(127&t[e])<<21,r|=(127&t[e+1])<<14,r|=(127&t[e+2])<<7,r|=127&t[e+3]},t.getTimeStamp=function(e){for(var r=t.getID3Frames(e),i=0;i<r.length;i++){var a=r[i];if(t.isTimeStampFrame(a))return t._readTimeStamp(a)}},t.isTimeStampFrame=function(t){return t&&"PRIV"===t.key&&"com.apple.streaming.transportStreamTimestamp"===t.info},t._getFrameData=function(e){var r=String.fromCharCode(e[0],e[1],e[2],e[3]),i=t._readSize(e,4);return{type:r,size:i,data:e.subarray(10,10+i)}},t.getID3Frames=function(e){for(var r=0,i=[];t.isHeader(e,r);){var a=t._readSize(e,r+6);r+=10;for(var n=r+a;r+8<n;){var o=t._getFrameData(e.subarray(r)),s=t._decodeFrame(o);s&&i.push(s),r+=o.size+10}t.isFooter(e,r)&&(r+=10)}return i},t._decodeFrame=function(e){return"PRIV"===e.type?t._decodePrivFrame(e):"T"===e.type[0]?t._decodeTextFrame(e):"W"===e.type[0]?t._decodeURLFrame(e):void 0},t._readTimeStamp=function(t){if(8===t.data.byteLength){var e=new Uint8Array(t.data),r=1&e[3],i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},t._decodePrivFrame=function(e){if(!(e.size<2)){var r=t._utf8ArrayToStr(e.data,!0),i=new Uint8Array(e.data.subarray(r.length+1));return{key:e.type,info:r,data:i.buffer}}},t._decodeTextFrame=function(e){if(!(e.size<2)){if("TXXX"===e.type){var r=1,i=t._utf8ArrayToStr(e.data.subarray(r));r+=i.length+1;var a=t._utf8ArrayToStr(e.data.subarray(r));return{key:e.type,info:i,data:a}}var n=t._utf8ArrayToStr(e.data.subarray(1));return{key:e.type,data:n}}},t._decodeURLFrame=function(e){if("WXXX"===e.type){if(e.size<2)return;var r=1,i=t._utf8ArrayToStr(e.data.subarray(r));r+=i.length+1;var a=t._utf8ArrayToStr(e.data.subarray(r));return{key:e.type,info:i,data:a}}var n=t._utf8ArrayToStr(e.data);return{key:e.type,data:n}},t._utf8ArrayToStr=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.length,i=void 0,a=void 0,n=void 0,o="",s=0;s<r;){if(0===(i=t[s++])&&e)return o;if(0!==i&&3!==i)switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(i);break;case 12:case 13:a=t[s++],o+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=t[s++],n=t[s++],o+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&n)<<0)}}return o},t}();a._utf8ArrayToStr;e.a=a},function(t,e,r){"use strict";function i(){if("undefined"!=typeof window)return window.MediaSource||window.WebKitMediaSource}e.a=i},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(2),d=r(0),u=r(12),f=r(24),c=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),h=window,p=h.performance,v={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},g={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"},m=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MANIFEST_LOADING,o.a.LEVEL_LOADING,o.a.AUDIO_TRACK_LOADING,o.a.SUBTITLE_TRACK_LOADING));return n.loaders={},n}return n(e,t),e.canHaveQualityLevels=function(t){return t!==v.AUDIO_TRACK&&t!==v.SUBTITLE_TRACK},e.mapContextToLevelType=function(t){switch(t.type){case v.AUDIO_TRACK:return g.AUDIO;case v.SUBTITLE_TRACK:return g.SUBTITLE;default:return g.MAIN}},e.getResponseUrl=function(t,e){var r=t.url;return void 0!==r&&0!==r.indexOf("data:")||(r=e.url),r},e.prototype.createInternalLoader=function(t){var e=this.hls.config,r=e.pLoader,i=e.loader,a=r||i,n=new a(e);return t.loader=n,this.loaders[t.type]=n,n},e.prototype.getInternalLoader=function(t){return this.loaders[t.type]},e.prototype.resetInternalLoader=function(t){this.loaders[t]&&delete this.loaders[t]},e.prototype.destroyInternalLoaders=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy(),this.resetInternalLoader(t)}},e.prototype.destroy=function(){this.destroyInternalLoaders(),t.prototype.destroy.call(this)},e.prototype.onManifestLoading=function(t){this.load(t.url,{type:v.MANIFEST,level:0,id:null})},e.prototype.onLevelLoading=function(t){this.load(t.url,{type:v.LEVEL,level:t.level,id:t.id})},e.prototype.onAudioTrackLoading=function(t){this.load(t.url,{type:v.AUDIO_TRACK,level:0,id:t.id})},e.prototype.onSubtitleTrackLoading=function(t){this.load(t.url,{type:v.SUBTITLE_TRACK,level:0,id:t.id})},e.prototype.load=function(t,e){var r=this.hls.config;d.b.debug("Loading playlist of type "+e.type+", level: "+e.level+", id: "+e.id);var i=this.getInternalLoader(e);if(i){var a=i.context;if(a&&a.url===t)return d.b.trace("playlist request ongoing"),!1;d.b.warn("aborting previous loader for type: "+e.type),i.abort()}var n=void 0,o=void 0,s=void 0,l=void 0;switch(e.type){case v.MANIFEST:n=r.manifestLoadingMaxRetry,o=r.manifestLoadingTimeOut,s=r.manifestLoadingRetryDelay,l=r.manifestLoadingMaxRetryTimeout;break;case v.LEVEL:n=0,o=r.levelLoadingTimeOut;break;default:n=r.levelLoadingMaxRetry,o=r.levelLoadingTimeOut,s=r.levelLoadingRetryDelay,l=r.levelLoadingMaxRetryTimeout}i=this.createInternalLoader(e),e.url=t,e.responseType=e.responseType||"";var u={timeout:o,maxRetry:n,retryDelay:s,maxRetryDelay:l},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};return d.b.debug("Calling internal loader delegate for URL: "+t),i.load(e,u,f),!0},e.prototype.loadsuccess=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(r.isSidxRequest)return this._handleSidxRequest(t,r),void this._handlePlaylistLoaded(t,e,r,i);this.resetInternalLoader(r.type);var a=t.data;if(e.tload=p.now(),0!==a.indexOf("#EXTM3U"))return void this._handleManifestParsingError(t,r,"no EXTM3U delimiter",i);a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(t,e,r,i):this._handleMasterPlaylist(t,e,r,i)},e.prototype.loaderror=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._handleNetworkError(e,r)},e.prototype.loadtimeout=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._handleNetworkError(e,r,!0)},e.prototype._handleMasterPlaylist=function(t,r,i,a){var n=this.hls,s=t.data,l=e.getResponseUrl(t,i),u=f.a.parseMasterPlaylist(s,l);if(!u.length)return void this._handleManifestParsingError(t,i,"no level found in manifest",a);var c=u.map(function(t){return{id:t.attrs.AUDIO,codec:t.audioCodec}}),h=f.a.parseMasterPlaylistMedia(s,l,"AUDIO",c),p=f.a.parseMasterPlaylistMedia(s,l,"SUBTITLES");if(h.length){var v=!1;h.forEach(function(t){t.url||(v=!0)}),!1===v&&u[0].audioCodec&&!u[0].attrs.AUDIO&&(d.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),h.unshift({type:"main",name:"main"}))}n.trigger(o.a.MANIFEST_LOADED,{levels:u,audioTracks:h,subtitles:p,url:l,stats:r,networkDetails:a})},e.prototype._handleTrackOrLevelPlaylist=function(t,r,i,a){var n=this.hls,s=i.id,l=i.level,d=i.type,u=e.getResponseUrl(t,i),c=isNaN(s)?0:s,h=isNaN(l)?c:l,g=e.mapContextToLevelType(i),m=f.a.parseLevelPlaylist(t.data,u,h,g,c);if(m.tload=r.tload,d===v.MANIFEST){var y={url:u,details:m};n.trigger(o.a.MANIFEST_LOADED,{levels:[y],audioTracks:[],url:u,stats:r,networkDetails:a})}if(r.tparsed=p.now(),m.needSidxRanges){var b=m.initSegment.url;return void this.load(b,{isSidxRequest:!0,type:d,level:l,levelDetails:m,id:s,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}i.levelDetails=m,this._handlePlaylistLoaded(t,r,i,a)},e.prototype._handleSidxRequest=function(t,e){var r=u.a.parseSegmentIndex(new Uint8Array(t.data));r.references.forEach(function(t,r){var i=t.info,a=e.levelDetails.fragments[r];0===a.byteRange.length&&(a.rawByteRange=String(1+i.end-i.start)+"@"+String(i.start))}),e.levelDetails.initSegment.rawByteRange=String(r.moovEndOffset)+"@0"},e.prototype._handleManifestParsingError=function(t,e,r,i){this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.MANIFEST_PARSING_ERROR,fatal:!0,url:t.url,reason:r,networkDetails:i})},e.prototype._handleNetworkError=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];d.b.info("A network error occured while loading a "+t.type+"-type playlist");var i=void 0,a=void 0,n=this.getInternalLoader(t);switch(t.type){case v.MANIFEST:i=r?l.a.MANIFEST_LOAD_TIMEOUT:l.a.MANIFEST_LOAD_ERROR,a=!0;break;case v.LEVEL:i=r?l.a.LEVEL_LOAD_TIMEOUT:l.a.LEVEL_LOAD_ERROR,a=!1;break;case v.AUDIO_TRACK:i=r?l.a.AUDIO_TRACK_LOAD_TIMEOUT:l.a.AUDIO_TRACK_LOAD_ERROR,a=!1;break;default:a=!1}n&&(n.abort(),this.resetInternalLoader(t.type)),this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:i,fatal:a,url:n.url,loader:n,context:t,networkDetails:e})},e.prototype._handlePlaylistLoaded=function(t,r,i,a){var n=i.type,s=i.level,l=i.id,d=i.levelDetails;if(!d.targetduration)return void this._handleManifestParsingError(t,i,"invalid target duration",a);if(e.canHaveQualityLevels(i.type))this.hls.trigger(o.a.LEVEL_LOADED,{details:d,level:s||0,id:l||0,stats:r,networkDetails:a});else switch(n){case v.AUDIO_TRACK:this.hls.trigger(o.a.AUDIO_TRACK_LOADED,{details:d,id:l,stats:r,networkDetails:a});break;case v.SUBTITLE_TRACK:this.hls.trigger(o.a.SUBTITLE_TRACK_LOADED,{details:d,id:l,stats:r,networkDetails:a})}},c(e,null,[{key:"ContextType",get:function(){return v}},{key:"LevelType",get:function(){return g}}]),e}(s.a);e.a=m},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=r(1),o=Math.pow(2,32)-1,s=function(){function t(e,r){i(this,t),this.observer=e,this.remuxer=r}return t.prototype.resetTimeStamp=function(t){this.initPTS=t},t.prototype.resetInitSegment=function(e,r,i,a){if(e&&e.byteLength){var o=this.initData=t.parseInitSegment(e);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var s={};o.audio&&o.video?s.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:a?e:null}:(o.audio&&(s.audio={container:"audio/mp4",codec:r,initSegment:a?e:null}),o.video&&(s.video={container:"video/mp4",codec:i,initSegment:a?e:null})),this.observer.trigger(n.a.FRAG_PARSING_INIT_SEGMENT,{tracks:s})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},t.probe=function(e){return t.findBox({data:e,start:0,end:Math.min(e.length,16384)},["moof"]).length>0},t.bin2str=function(t){return String.fromCharCode.apply(null,t)},t.readUint16=function(t,e){t.data&&(e+=t.start,t=t.data);var r=t[e]<<8|t[e+1];return r<0?65536+r:r},t.readUint32=function(t,e){t.data&&(e+=t.start,t=t.data);var r=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3];return r<0?4294967296+r:r},t.writeUint32=function(t,e,r){t.data&&(e+=t.start,t=t.data),t[e]=r>>24,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r},t.findBox=function(e,r){var i=[],a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,d=void 0,u=void 0;if(e.data?(d=e.start,s=e.end,e=e.data):(d=0,s=e.byteLength),!r.length)return null;for(a=d;a<s;)n=t.readUint32(e,a),o=t.bin2str(e.subarray(a+4,a+8)),u=n>1?a+n:s,o===r[0]&&(1===r.length?i.push({data:e,start:a+8,end:u}):(l=t.findBox({data:e,start:a+8,end:u},r.slice(1)),l.length&&(i=i.concat(l)))),a=u;return i},t.parseSegmentIndex=function(e){var r=t.findBox(e,["moov"])[0],i=r?r.end:null,a=0,n=t.findBox(e,["sidx"]),o=void 0;if(!n||!n[0])return null;o=[],n=n[0];var s=n.data[0];a=0===s?8:16;var l=t.readUint32(n,a);a+=4;a+=0===s?8:16,a+=2;var d=n.end+0,u=t.readUint16(n,a);a+=2;for(var f=0;f<u;f++){var c=a,h=t.readUint32(n,c);c+=4;var p=2147483647&h;if(1===(2147483648&h)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var v=t.readUint32(n,c);c+=4,o.push({referenceSize:p,subsegmentDuration:v,info:{duration:v/l,start:d,end:d+p-1}}),d+=p,c+=4,a=c}return{earliestPresentationTime:0,timescale:l,version:s,referencesCount:u,references:o,moovEndOffset:i}},t.parseInitSegment=function(e){var r=[];return t.findBox(e,["moov","trak"]).forEach(function(e){var i=t.findBox(e,["tkhd"])[0];if(i){var n=i.data[i.start],o=0===n?12:20,s=t.readUint32(i,o),l=t.findBox(e,["mdia","mdhd"])[0];if(l){n=l.data[l.start],o=0===n?12:20;var d=t.readUint32(l,o),u=t.findBox(e,["mdia","hdlr"])[0];if(u){var f=t.bin2str(u.data.subarray(u.start+8,u.start+12)),c={soun:"audio",vide:"video"}[f];if(c){var h=t.findBox(e,["mdia","minf","stbl","stsd"]);if(h.length){h=h[0];var p=t.bin2str(h.data.subarray(h.start+12,h.start+16));a.b.log("MP4Demuxer:"+c+":"+p+" found")}r[s]={timescale:d,type:c},r[c]={timescale:d,id:s}}}}}}),r},t.getStartDTS=function(e,r){var i=void 0,a=void 0,n=void 0;return i=t.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map(function(r){return t.findBox(r,["tfhd"]).map(function(i){var a=void 0,n=void 0;return a=t.readUint32(i,4),n=e[a].timescale||9e4,t.findBox(r,["tfdt"]).map(function(e){var r=void 0,i=void 0;return r=e.data[e.start],i=t.readUint32(e,4),1===r&&(i*=Math.pow(2,32),i+=t.readUint32(e,8)),i})[0]/n})})),n=Math.min.apply(null,a),isFinite(n)?n:0},t.offsetStartDTS=function(e,r,i){t.findBox(r,["moof","traf"]).map(function(r){return t.findBox(r,["tfhd"]).map(function(a){var n=t.readUint32(a,4),s=e[n].timescale||9e4;t.findBox(r,["tfdt"]).map(function(e){var r=e.data[e.start],a=t.readUint32(e,4);if(0===r)t.writeUint32(e,4,a-i*s);else{a*=Math.pow(2,32),a+=t.readUint32(e,8),a-=i*s,a=Math.max(a,0);var n=Math.floor(a/(o+1)),l=Math.floor(a%(o+1));t.writeUint32(e,4,n),t.writeUint32(e,8,l)}})})})},t.prototype.append=function(e,r,i,a){var o=this.initData;o||(this.resetInitSegment(e,this.audioCodec,this.videoCodec,!1),o=this.initData);var s=void 0,l=this.initPTS;if(void 0===l){var d=t.getStartDTS(o,e);this.initPTS=l=d-r,this.observer.trigger(n.a.INIT_PTS_FOUND,{initPTS:l})}t.offsetStartDTS(o,e,l),s=t.getStartDTS(o,e),this.remuxer.remux(o.audio,o.video,null,null,s,i,a,e)},t.prototype.destroy=function(){},t}();e.a=s},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(6),n=r.n(a),o=r(14),s=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),l=function(){function t(){var e;i(this,t),this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[],this._elementaryStreams=(e={},e[t.ElementaryStreamTypes.AUDIO]=!1,e[t.ElementaryStreamTypes.VIDEO]=!1,e)}return t.prototype.addElementaryStream=function(t){this._elementaryStreams[t]=!0},t.prototype.hasElementaryStream=function(t){return!0===this._elementaryStreams[t]},t.prototype.createInitializationVector=function(t){for(var e=new Uint8Array(16),r=12;r<16;r++)e[r]=t>>8*(15-r)&255;return e},t.prototype.fragmentDecryptdataFromLevelkey=function(t,e){var r=t;return t&&t.method&&t.uri&&!t.iv&&(r=new o.a,r.method=t.method,r.baseuri=t.baseuri,r.reluri=t.reluri,r.iv=this.createInitializationVector(e)),r},s(t,[{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=n.a.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(t){this._url=t}},{key:"programDateTime",get:function(){return!this._programDateTime&&this.rawProgramDateTime&&(this._programDateTime=new Date(Date.parse(this.rawProgramDateTime))),this._programDateTime}},{key:"byteRange",get:function(){if(!this._byteRange&&!this.rawByteRange)return[];if(this._byteRange)return this._byteRange;var t=[];if(this.rawByteRange){var e=this.rawByteRange.split("@",2);if(1===e.length){var r=this.lastByteRangeEndOffset;t[0]=r||0}else t[0]=parseInt(e[1]);t[1]=parseInt(e[0])+t[0],this._byteRange=t}return t}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata}},{key:"encrypted",get:function(){return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)}}],[{key:"ElementaryStreamTypes",get:function(){return{AUDIO:"audio",VIDEO:"video"}}}]),t}();e.a=l},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(6),n=r.n(a),o=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),s=function(){function t(){i(this,t),this.method=null,this.key=null,this.iv=null,this._uri=null}return o(t,[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=n.a.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}]),t}();e.a=s},function(t,e,r){"use strict";function i(t,e){var r=n[e];return!!r&&!0===r[t.slice(0,4)]}function a(t,e){return window.MediaSource.isTypeSupported((e||"video")+'/mp4;codecs="'+t+'"')}r.d(e,"b",function(){return i}),r.d(e,"a",function(){return a});var n={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.d(e,"a",function(){return l}),r.d(e,"b",function(){return d});var o=r(3),s=r(1),l={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"},d=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,s.a.BUFFER_APPENDED,s.a.FRAG_BUFFERED,s.a.FRAG_LOADED));return n.bufferPadding=.2,n.fragments=Object.create(null),n.timeRanges=Object.create(null),n.config=r.config,n}return n(e,t),e.prototype.destroy=function(){this.fragments=null,this.timeRanges=null,this.config=null,o.a.prototype.destroy.call(this),t.prototype.destroy.call(this)},e.prototype.getBufferedFrag=function(t,e){var r=this.fragments,i=Object.keys(r).filter(function(i){var a=r[i];if(a.body.type!==e)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=t&&t<=n.endPTS});if(0===i.length)return null;var a=i.pop();return r[a].body},e.prototype.detectEvictedFragments=function(t,e){var r=this,i=void 0,a=void 0;Object.keys(this.fragments).forEach(function(n){var o=r.fragments[n];if(!0===o.buffered){var s=o.range[t];if(s){i=s.time;for(var l=0;l<i.length;l++)if(a=i[l],!1===r.isTimeBuffered(a.startPTS,a.endPTS,e)){r.removeFragment(o.body);break}}}})},e.prototype.detectPartialFragments=function(t){var e=this,r=this.getFragmentKey(t),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach(function(r){if(!0===t.hasElementaryStream(r)){var a=e.timeRanges[r];i.range[r]=e.getBufferedTimes(t.startPTS,t.endPTS,a)}}))},e.prototype.getBufferedTimes=function(t,e,r){for(var i=[],a=void 0,n=void 0,o=!1,s=0;s<r.length;s++){if(a=r.start(s)-this.bufferPadding,n=r.end(s)+this.bufferPadding,t>=a&&e<=n){i.push({startPTS:Math.max(t,r.start(s)),endPTS:Math.min(e,r.end(s))});break}if(t<n&&e>a)i.push({startPTS:Math.max(t,r.start(s)),endPTS:Math.min(e,r.end(s))}),o=!0;else if(e<=a)break}return{time:i,partial:o}},e.prototype.getFragmentKey=function(t){return t.type+"_"+t.level+"_"+t.urlId+"_"+t.sn},e.prototype.getPartialFragment=function(t){var e=this,r=void 0,i=void 0,a=void 0,n=null,o=0;return Object.keys(this.fragments).forEach(function(s){var l=e.fragments[s];e.isPartial(l)&&(i=l.body.startPTS-e.bufferPadding,a=l.body.endPTS+e.bufferPadding,t>=i&&t<=a&&(r=Math.min(t-i,a-t),o<=r&&(n=l.body,o=r)))}),n},e.prototype.getState=function(t){var e=this.getFragmentKey(t),r=this.fragments[e],i=l.NOT_LOADED;return void 0!==r&&(i=r.buffered?!0===this.isPartial(r)?l.PARTIAL:l.OK:l.APPENDING),i},e.prototype.isPartial=function(t){return!0===t.buffered&&(void 0!==t.range.video&&!0===t.range.video.partial||void 0!==t.range.audio&&!0===t.range.audio.partial)},e.prototype.isTimeBuffered=function(t,e,r){for(var i=void 0,a=void 0,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,t>=i&&e<=a)return!0;if(e<=i)return!1}return!1},e.prototype.onFragLoaded=function(t){var e=t.frag;if(!isNaN(e.sn)&&!e.bitrateTest){var r=this.getFragmentKey(e),i={body:e,range:Object.create(null),buffered:!1};this.fragments[r]=i}},e.prototype.onBufferAppended=function(t){var e=this;this.timeRanges=t.timeRanges,Object.keys(this.timeRanges).forEach(function(t){var r=e.timeRanges[t];e.detectEvictedFragments(t,r)})},e.prototype.onFragBuffered=function(t){this.detectPartialFragments(t.frag)},e.prototype.hasFragment=function(t){var e=this.getFragmentKey(t);return void 0!==this.fragments[e]},e.prototype.removeFragment=function(t){var e=this.getFragmentKey(t);delete this.fragments[e]},e.prototype.removeAllFragments=function(){this.fragments=Object.create(null)},e}(o.a)},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",function(){return a});var a=function(){function t(){i(this,t)}return t.isBuffered=function(t,e){try{if(t)for(var r=t.buffered,i=0;i<r.length;i++)if(e>=r.start(i)&&e<=r.end(i))return!0}catch(t){}return!1},t.bufferInfo=function(t,e,r){try{if(t){var i=t.buffered,a=[],n=void 0;for(n=0;n<i.length;n++)a.push({start:i.start(n),end:i.end(n)});return this.bufferedInfo(a,e,r)}}catch(t){}return{len:0,start:e,end:e,nextStart:void 0}},t.bufferedInfo=function(t,e,r){var i=[],a=void 0,n=void 0,o=void 0,s=void 0,l=void 0;for(t.sort(function(t,e){var r=t.start-e.start;return r||e.end-t.end}),l=0;l<t.length;l++){var d=i.length;if(d){var u=i[d-1].end;t[l].start-u<r?t[l].end>u&&(i[d-1].end=t[l].end):i.push(t[l])}else i.push(t[l])}for(l=0,a=0,n=o=e;l<i.length;l++){var f=i[l].start,c=i[l].end;if(e+r>=f&&e<c)n=f,o=c,a=o-e;else if(e+r<f){s=f;break}}return{len:a,start:n,end:o,nextStart:s}},t}()},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(1),n=r(2),o=r(19),s=r(34),l=r(12),d=r(35),u=r(38),f=r(39),c=r(42),h=r(5),p=Object(h.a)(),v=p,g=function(){function t(e,r,a,n){i(this,t),this.observer=e,this.typeSupported=r,this.config=a,this.vendor=n}return t.prototype.destroy=function(){var t=this.demuxer;t&&t.destroy()},t.prototype.push=function(t,e,r,i,n,s,l,d,u,f,c,h){if(t.byteLength>0&&null!=e&&null!=e.key&&"AES-128"===e.method){var p=this.decrypter;null==p&&(p=this.decrypter=new o.a(this.observer,this.config));var g=this,m=void 0;try{m=v.now()}catch(t){m=Date.now()}p.decrypt(t,e.key.buffer,e.iv.buffer,function(t){var o=void 0;try{o=v.now()}catch(t){o=Date.now()}g.observer.trigger(a.a.FRAG_DECRYPTED,{stats:{tstart:m,tdecrypt:o}}),g.pushDecrypted(new Uint8Array(t),e,new Uint8Array(r),i,n,s,l,d,u,f,c,h)})}else this.pushDecrypted(new Uint8Array(t),e,new Uint8Array(r),i,n,s,l,d,u,f,c,h)},t.prototype.pushDecrypted=function(t,e,r,i,o,h,p,v,g,m,y,b){var E=this.demuxer;if(!E||(p||v)&&!this.probe(t)){for(var T=this.observer,S=this.typeSupported,A=this.config,_=[{demux:d.a,remux:f.a},{demux:l.a,remux:c.a},{demux:s.a,remux:f.a},{demux:u.a,remux:f.a}],R=0,L=_.length;R<L;R++){var w=_[R],D=w.demux.probe;if(D(t)){var O=this.remuxer=new w.remux(T,A,S,this.vendor);E=new w.demux(T,O,A,S),this.probe=D;break}}if(!E)return void T.trigger(a.a.ERROR,{type:n.b.MEDIA_ERROR,details:n.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=E}var I=this.remuxer;(p||v)&&(E.resetInitSegment(r,i,o,m),I.resetInitSegment()),p&&(E.resetTimeStamp(b),I.resetTimeStamp(b)),"function"==typeof E.setDecryptData&&E.setDecryptData(e),E.append(t,h,g,y)},t}();e.a=g},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(31),n=r(32),o=r(33),s=r(2),l=r(0),d=r(1),u=r(5),f=Object(u.a)(),c=function(){function t(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.removePKCS7Padding,o=void 0===n||n;if(i(this,t),this.logEnabled=!0,this.observer=e,this.config=r,this.removePKCS7Padding=o,o)try{var s=f.crypto;s&&(this.subtle=s.subtle||s.webkitSubtle)}catch(t){}this.disableWebCrypto=!this.subtle}return t.prototype.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},t.prototype.decrypt=function(t,e,r,i){var s=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(l.b.log("JS AES decrypt"),this.logEnabled=!1);var d=this.decryptor;d||(this.decryptor=d=new o.a),d.expandKey(e),i(d.decrypt(t,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(l.b.log("WebCrypto AES decrypt"),this.logEnabled=!1);var u=this.subtle;this.key!==e&&(this.key=e,this.fastAesKey=new n.a(u,e)),this.fastAesKey.expandKey().then(function(n){new a.a(u,r).decrypt(t,n).catch(function(a){s.onWebCryptoError(a,t,e,r,i)}).then(function(t){i(t)})}).catch(function(a){s.onWebCryptoError(a,t,e,r,i)})}},t.prototype.onWebCryptoError=function(t,e,r,i,a){this.config.enableSoftwareAES?(l.b.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(e,r,i,a)):(l.b.error("decrypting error : "+t.message),this.observer.trigger(d.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.FRAG_DECRYPT_ERROR,fatal:!0,reason:t.message}))},t.prototype.destroy=function(){var t=this.decryptor;t&&(t.destroy(),this.decryptor=void 0)},t}();e.a=c},function(t,e,r){"use strict";function i(t,e,r,i){var a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,d=navigator.userAgent.toLowerCase(),u=i,f=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];return a=1+((192&e[r+2])>>>6),(n=(60&e[r+2])>>>2)>f.length-1?void t.trigger(v.a.ERROR,{type:p.b.MEDIA_ERROR,details:p.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+n}):(s=(1&e[r+2])<<2,s|=(192&e[r+3])>>>6,h.b.log("manifest codec:"+i+",ADTS data:type:"+a+",sampleingIndex:"+n+"["+f[n]+"Hz],channelConfig:"+s),/firefox/i.test(d)?n>=6?(a=5,l=new Array(4),o=n-3):(a=2,l=new Array(2),o=n):-1!==d.indexOf("android")?(a=2,l=new Array(2),o=n):(a=5,l=new Array(4),i&&(-1!==i.indexOf("mp4a.40.29")||-1!==i.indexOf("mp4a.40.5"))||!i&&n>=6?o=n-3:((i&&-1!==i.indexOf("mp4a.40.2")&&(n>=6&&1===s||/vivaldi/i.test(d))||!i&&1===s)&&(a=2,l=new Array(2)),o=n)),l[0]=a<<3,l[0]|=(14&n)>>1,l[1]|=(1&n)<<7,l[1]|=s<<3,5===a&&(l[1]|=(14&o)>>1,l[2]=(1&o)<<7,l[2]|=8,l[3]=0),{config:l,samplerate:f[n],channelCount:s,codec:"mp4a.40."+a,manifestCodec:u})}function a(t,e){return 255===t[e]&&240==(246&t[e+1])}function n(t,e){return 1&t[e+1]?7:9}function o(t,e){return(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5}function s(t,e){return!!(e+1<t.length&&a(t,e))}function l(t,e){if(e+1<t.length&&a(t,e)){var r=n(t,e),i=r;e+5<t.length&&(i=o(t,e));var s=e+i;if(s===t.length||s+1<t.length&&a(t,s))return!0}return!1}function d(t,e,r,a,n){if(!t.samplerate){var o=i(e,r,a,n);t.config=o.config,t.samplerate=o.samplerate,t.channelCount=o.channelCount,t.codec=o.codec,t.manifestCodec=o.manifestCodec,h.b.log("parsed codec:"+t.codec+",rate:"+o.samplerate+",nb channel:"+o.channelCount)}}function u(t){return 9216e4/t}function f(t,e,r,i,a){var s=void 0,l=void 0,d=void 0,u=t.length;if(s=n(t,e),l=o(t,e),(l-=s)>0&&e+s+l<=u)return d=r+i*a,{headerLength:s,frameLength:l,stamp:d}}function c(t,e,r,i,a){var n=u(t.samplerate),o=f(e,r,i,a,n);if(o){var s=o.stamp,l=o.headerLength,d=o.frameLength,c={unit:e.subarray(r+l,r+l+d),pts:s,dts:s};return t.samples.push(c),t.len+=d,{sample:c,length:d+l}}}e.d=s,e.e=l,e.c=d,e.b=u,e.a=c;var h=r(0),p=r(2),v=r(1);r(5)},function(t,e,r){"use strict";var i={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(t,e,r,i,a){if(!(r+24>e.length)){var n=this.parseHeader(e,r);if(n&&r+n.frameLength<=e.length){var o=9e4*n.samplesPerFrame/n.sampleRate,s=i+a*o,l={unit:e.subarray(r,r+n.frameLength),pts:s,dts:s};return t.config=[],t.channelCount=n.channelCount,t.samplerate=n.sampleRate,t.samples.push(l),t.len+=n.frameLength,{sample:l,length:n.frameLength}}}},parseHeader:function(t,e){var r=t[e+1]>>3&3,a=t[e+1]>>1&3,n=t[e+2]>>4&15,o=t[e+2]>>2&3,s=t[e+2]>>1&1;if(1!==r&&0!==n&&15!==n&&3!==o){var l=3===r?3-a:3===a?3:4,d=1e3*i.BitratesMap[14*l+n-1],u=3===r?0:2===r?1:2,f=i.SamplingRateMap[3*u+o],c=t[e+3]>>6==3?1:2,h=i.SamplesCoefficients[r][a],p=i.BytesInSlot[a],v=8*h*p;return{sampleRate:f,channelCount:c,frameLength:parseInt(h*d/f+s,10)*p,samplesPerFrame:v}}},isHeaderPattern:function(t,e){return 255===t[e]&&224==(224&t[e+1])&&0!=(6&t[e+1])},isHeader:function(t,e){return!!(e+1<t.length&&this.isHeaderPattern(t,e))},probe:function(t,e){if(e+1<t.length&&this.isHeaderPattern(t,e)){var r=this.parseHeader(t,e),i=4;r&&r.frameLength&&(i=r.frameLength);var a=e+i;if(a===t.length||a+1<t.length&&this.isHeaderPattern(t,a))return!0}return!1}};e.a=i},function(t,e,r){"use strict";function i(t,e,r){switch(e){case"audio":t.audioGroupIds||(t.audioGroupIds=[]),t.audioGroupIds.push(r);break;case"text":t.textGroupIds||(t.textGroupIds=[]),t.textGroupIds.push(r)}}function a(t,e,r){var i=t[e],a=t[r],n=a.startPTS;isNaN(n)?a.start=r>e?i.start+i.duration:Math.max(i.start-a.duration,0):r>e?(i.duration=n-i.start,i.duration<0&&s.b.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(a.duration=i.start-n,a.duration<0&&s.b.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!"))}function n(t,e,r,i,n,o){var s=r;if(!isNaN(e.startPTS)){var l=Math.abs(e.startPTS-r);isNaN(e.deltaPTS)?e.deltaPTS=l:e.deltaPTS=Math.max(l,e.deltaPTS),s=Math.max(r,e.startPTS),r=Math.min(r,e.startPTS),i=Math.max(i,e.endPTS),n=Math.min(n,e.startDTS),o=Math.max(o,e.endDTS)}var d=r-e.start;e.start=e.startPTS=r,e.maxStartPTS=s,e.endPTS=i,e.startDTS=n,e.endDTS=o,e.duration=i-r;var u=e.sn;if(!t||u<t.startSN||u>t.endSN)return 0;var f=void 0,c=void 0,h=void 0;for(f=u-t.startSN,c=t.fragments,c[f]=e,h=f;h>0;h--)a(c,h,h-1);for(h=f;h<c.length-1;h++)a(c,h,h+1);return t.PTSKnown=!0,d}function o(t,e){var r=Math.max(t.startSN,e.startSN)-e.startSN,i=Math.min(t.endSN,e.endSN)-e.startSN,a=e.startSN-t.startSN,o=t.fragments,l=e.fragments,d=0,u=void 0;if(e.initSegment&&t.initSegment&&(e.initSegment=t.initSegment),i<r)return void(e.PTSKnown=!1);for(var f=r;f<=i;f++){var c=o[a+f],h=l[f];h&&c&&(d=c.cc-h.cc,isNaN(c.startPTS)||(h.start=h.startPTS=c.startPTS,h.endPTS=c.endPTS,h.duration=c.duration,h.backtracked=c.backtracked,h.dropped=c.dropped,u=h))}if(d)for(s.b.log("discontinuity sliding from playlist, take drift into account"),f=0;f<l.length;f++)l[f].cc+=d;if(u)n(e,u,u.startPTS,u.endPTS,u.startDTS,u.endDTS);else if(a>=0&&a<o.length){var p=o[a].start;for(f=0;f<l.length;f++)l[f].start+=p}e.PTSKnown=t.PTSKnown}e.a=i,e.c=n,e.b=o;var s=r(0)},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=r(6),n=r.n(a),o=r(2),s=r(11),l=r(26),d=r(27),u=r(16),f=r(28),c=r(48),h=r(49),p=r(51),v=r(0),g=r(52),m=r(1),y=r(8),b=r.n(y),E=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}();r(61);var T=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var a=t.DefaultConfig;if((r.liveSyncDurationCount||r.liveMaxLatencyDurationCount)&&(r.liveSyncDuration||r.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var n in a)n in r||(r[n]=a[n]);if(void 0!==r.liveMaxLatencyDurationCount&&r.liveMaxLatencyDurationCount<=r.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==r.liveMaxLatencyDuration&&(r.liveMaxLatencyDuration<=r.liveSyncDuration||void 0===r.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');Object(v.a)(r.debug),this.config=r,this._autoLevelCapping=-1;var o=this.observer=new b.a;o.trigger=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];o.emit.apply(o,[t,t].concat(r))},o.off=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];o.removeListener.apply(o,[t].concat(r))},this.on=o.on.bind(o),this.off=o.off.bind(o),this.once=o.once.bind(o),this.trigger=o.trigger.bind(o);var p=this.abrController=new r.abrController(this),g=new r.bufferController(this),m=new r.capLevelController(this),y=new r.fpsController(this),E=new s.a(this),T=new l.a(this),S=new d.a(this),A=new h.a(this),_=this.levelController=new c.a(this),R=new u.b(this),L=this.streamController=new f.a(this,R),w=[_,L],D=r.audioStreamController;D&&w.push(new D(this,R)),this.networkControllers=w;var O=[E,T,S,p,g,m,y,A,R];if(D=r.audioTrackController){var I=new D(this);this.audioTrackController=I,O.push(I)}if(D=r.subtitleTrackController){var x=new D(this);this.subtitleTrackController=x,O.push(x)}if(D=r.emeController){var k=new D(this);this.emeController=k,O.push(k)}[r.subtitleStreamController,r.timelineController].forEach(function(t){t&&O.push(new t(e))}),this.coreComponents=O}return t.isSupported=function(){return Object(p.a)()},E(t,null,[{key:"version",get:function(){return"0.10.0"}},{key:"Events",get:function(){return m.a}},{key:"ErrorTypes",get:function(){return o.b}},{key:"ErrorDetails",get:function(){return o.a}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:g.a},set:function(e){t.defaultConfig=e}}]),t.prototype.destroy=function(){v.b.log("destroy"),this.trigger(m.a.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(t){t.destroy()}),this.url=null,this.observer.removeAllListeners(),this._autoLevelCapping=-1},t.prototype.attachMedia=function(t){v.b.log("attachMedia"),this.media=t,this.trigger(m.a.MEDIA_ATTACHING,{media:t})},t.prototype.detachMedia=function(){v.b.log("detachMedia"),this.trigger(m.a.MEDIA_DETACHING),this.media=null},t.prototype.loadSource=function(t){t=n.a.buildAbsoluteURL(window.location.href,t,{alwaysNormalize:!0}),v.b.log("loadSource:"+t),this.url=t,this.trigger(m.a.MANIFEST_LOADING,{url:t})},t.prototype.startLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;v.b.log("startLoad("+t+")"),this.networkControllers.forEach(function(e){e.startLoad(t)})},t.prototype.stopLoad=function(){v.b.log("stopLoad"),this.networkControllers.forEach(function(t){t.stopLoad()})},t.prototype.swapAudioCodec=function(){v.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},t.prototype.recoverMediaError=function(){v.b.log("recoverMediaError");var t=this.media;this.detachMedia(),this.attachMedia(t)},E(t,[{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){v.b.log("set currentLevel:"+t),this.loadLevel=t,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){v.b.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){v.b.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(t){this.levelController.nextLoadLevel=t}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(t){v.b.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){v.b.log("set startLevel:"+t);var e=this;-1!==t&&(t=Math.max(t,e.minAutoLevel)),e.levelController.startLevel=t}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(t){v.b.log("set autoLevelCapping:"+t),this._autoLevelCapping=t}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var t=this,e=t.levels,r=t.config.minAutoBitrate,i=e?e.length:0,a=0;a<i;a++){if((e[a].realBitrate?Math.max(e[a].realBitrate,e[a].bitrate):e[a].bitrate)>r)return a}return 0}},{key:"maxAutoLevel",get:function(){var t=this,e=t.levels,r=t.autoLevelCapping;return-1===r&&e&&e.length?e.length-1:r}},{key:"nextAutoLevel",get:function(){var t=this;return Math.min(Math.max(t.abrController.nextAutoLevel,t.minAutoLevel),t.maxAutoLevel)},set:function(t){var e=this;e.abrController.nextAutoLevel=Math.max(e.minAutoLevel,t)}},{key:"audioTracks",get:function(){var t=this.audioTrackController;return t?t.audioTracks:[]}},{key:"audioTrack",get:function(){var t=this.audioTrackController;return t?t.audioTrack:-1},set:function(t){var e=this.audioTrackController;e&&(e.audioTrack=t)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTrack:-1},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleTrack=t)}},{key:"subtitleDisplay",get:function(){var t=this.subtitleTrackController;return!!t&&t.subtitleDisplay},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleDisplay=t)}}]),t}();e.default=T},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(6),n=r.n(a),o=r(13),s=r(14),l=r(25),d=r(0),u=r(15),f=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,c=/#EXT-X-MEDIA:(.*)/g,h=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)(\S+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),p=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,v=/\.(mp4|m4s|m4v|m4a)$/i,g=function(){function t(){i(this,t)}return t.findGroup=function(t,e){if(!t)return null;for(var r=null,i=0;i<t.length;i++){var a=t[i];a.id===e&&(r=a)}return r},t.convertAVC1ToAVCOTI=function(t){var e=void 0,r=t.split(".");return r.length>2?(e=r.shift()+".",e+=parseInt(r.shift()).toString(16),e+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):e=t,e},t.resolve=function(t,e){return n.a.buildAbsoluteURL(e,t,{alwaysNormalize:!0})},t.parseMasterPlaylist=function(e,r){var i=[],a=void 0;for(f.lastIndex=0;null!=(a=f.exec(e));){var n={},o=n.attrs=new l.a(a[1]);n.url=t.resolve(a[2],r);var s=o.decimalResolution("RESOLUTION");s&&(n.width=s.width,n.height=s.height),n.bitrate=o.decimalInteger("AVERAGE-BANDWIDTH")||o.decimalInteger("BANDWIDTH"),n.name=o.NAME,function(t,e){["video","audio"].forEach(function(r){var i=t.filter(function(t){return Object(u.b)(t,r)});if(i.length){var a=i.filter(function(t){return 0===t.lastIndexOf("avc1",0)||0===t.lastIndexOf("mp4a",0)});e[r+"Codec"]=a.length>0?a[0]:i[0],t=t.filter(function(t){return-1===i.indexOf(t)})}}),e.unknownCodecs=t}([].concat((o.CODECS||"").split(/[ ,]+/)),n),n.videoCodec&&-1!==n.videoCodec.indexOf("avc1")&&(n.videoCodec=t.convertAVC1ToAVCOTI(n.videoCodec)),i.push(n)}return i},t.parseMasterPlaylistMedia=function(e,r,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=void 0,o=[],s=0;for(c.lastIndex=0;null!==(n=c.exec(e));){var d={},u=new l.a(n[1]);if(u.TYPE===i){if(d.groupId=u["GROUP-ID"],d.name=u.NAME,d.type=i,d.default="YES"===u.DEFAULT,d.autoselect="YES"===u.AUTOSELECT,d.forced="YES"===u.FORCED,u.URI&&(d.url=t.resolve(u.URI,r)),d.lang=u.LANGUAGE,d.name||(d.name=d.lang),a.length){var f=t.findGroup(a,d.groupId);d.audioCodec=f?f.codec:a[0].codec}d.id=s++,o.push(d)}}return o},t.parseLevelPlaylist=function(t,e,r,i,a){var n=0,u=0,f={type:null,version:null,url:e,fragments:[],live:!0,startSN:0},c=new s.a,g=0,m=null,y=new o.a,b=void 0,E=void 0;for(h.lastIndex=0;null!==(b=h.exec(t));){var T=b[1];if(T){y.duration=parseFloat(T);var S=(" "+b[2]).slice(1);y.title=S||null,y.tagList.push(S?["INF",T,S]:["INF",T])}else if(b[3]){if(!isNaN(y.duration)){var A=n++;y.type=i,y.start=u,y.levelkey=c,y.sn=A,y.level=r,y.cc=g,y.urlId=a,y.baseurl=e,y.relurl=(" "+b[3]).slice(1),f.programDateTime&&(m?y.rawProgramDateTime?y.pdt=Date.parse(y.rawProgramDateTime):y.pdt=m.pdt+1e3*m.duration:y.pdt=Date.parse(f.programDateTime),y.endPdt=y.pdt+1e3*y.duration),f.fragments.push(y),m=y,u+=y.duration,y=new o.a}}else if(b[4]){if(y.rawByteRange=(" "+b[4]).slice(1),m){var _=m.byteRangeEndOffset;_&&(y.lastByteRangeEndOffset=_)}}else if(b[5])y.rawProgramDateTime=(" "+b[5]).slice(1),y.tagList.push(["PROGRAM-DATE-TIME",y.rawProgramDateTime]),void 0===f.programDateTime&&(f.programDateTime=new Date(new Date(Date.parse(b[5]))-1e3*u));else{for(b=b[0].match(p),E=1;E<b.length&&void 0===b[E];E++);var R=(" "+b[E+1]).slice(1),L=(" "+b[E+2]).slice(1);switch(b[E]){case"#":y.tagList.push(L?[R,L]:[R]);break;case"PLAYLIST-TYPE":f.type=R.toUpperCase();break;case"MEDIA-SEQUENCE":n=f.startSN=parseInt(R);break;case"TARGETDURATION":f.targetduration=parseFloat(R);break;case"VERSION":f.version=parseInt(R);break;case"EXTM3U":break;case"ENDLIST":f.live=!1;break;case"DIS":g++,y.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":g=parseInt(R);break;case"KEY":var w=R,D=new l.a(w),O=D.enumeratedString("METHOD"),I=D.URI,x=D.hexadecimalInteger("IV");O&&(c=new s.a,I&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(O)>=0&&(c.method=O,c.baseuri=e,c.reluri=I,c.key=null,c.iv=x));break;case"START":var k=R,P=new l.a(k),C=P.decimalFloatingPoint("TIME-OFFSET");isNaN(C)||(f.startTimeOffset=C);break;case"MAP":var F=new l.a(R);y.relurl=F.URI,y.rawByteRange=F.BYTERANGE,y.baseurl=e,y.level=r,y.type=i,y.sn="initSegment",f.initSegment=y,y=new o.a;break;default:d.b.warn("line parsed but not handled: "+b)}}}return y=m,y&&!y.relurl&&(f.fragments.pop(),u-=y.duration),f.totalduration=u,f.averagetargetduration=u/f.fragments.length,f.endSN=n-1,f.startCC=f.fragments[0]?f.fragments[0].cc:0,f.endCC=g,!f.initSegment&&f.fragments.length&&f.fragments.every(function(t){return v.test(t.relurl)})&&(d.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),y=new o.a,y.relurl=f.fragments[0].relurl,y.baseurl=e,y.level=r,y.type=i,y.sn="initSegment",f.initSegment=y,f.needSidxRanges=!0),f},t}();e.a=g},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=/^(\d+)x(\d+)$/,n=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,o=function(){function t(e){i(this,t),"string"==typeof e&&(e=t.parseAttrList(e));for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}return t.prototype.decimalInteger=function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e},t.prototype.hexadecimalInteger=function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var r=new Uint8Array(e.length/2),i=0;i<e.length/2;i++)r[i]=parseInt(e.slice(2*i,2*i+2),16);return r}return null},t.prototype.hexadecimalIntegerAsNumber=function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e},t.prototype.decimalFloatingPoint=function(t){return parseFloat(this[t])},t.prototype.enumeratedString=function(t){return this[t]},t.prototype.decimalResolution=function(t){var e=a.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}},t.parseAttrList=function(t){var e=void 0,r={};for(n.lastIndex=0;null!==(e=n.exec(t));){var i=e[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[e[1]]=i}return r},t}();e.a=o},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(2),d=r(0),u=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.FRAG_LOADING));return n.loaders={},n}return n(e,t),e.prototype.destroy=function(){var e=this.loaders;for(var r in e){var i=e[r];i&&i.destroy()}this.loaders={},t.prototype.destroy.call(this)},e.prototype.onFragLoading=function(t){var e=t.frag,r=e.type,i=this.loaders,a=this.hls.config,n=a.fLoader,o=a.loader;e.loaded=0;var s=i[r];s&&(d.b.warn("abort previous fragment loader for type: "+r),s.abort()),s=i[r]=e.loader=a.fLoader?new n(a):new o(a);var l=void 0,u=void 0,f=void 0;l={url:e.url,frag:e,responseType:"arraybuffer",progressData:!1};var c=e.byteRangeStartOffset,h=e.byteRangeEndOffset;isNaN(c)||isNaN(h)||(l.rangeStart=c,l.rangeEnd=h),u={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},s.load(l,u,f)},e.prototype.loadsuccess=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=t.data,n=r.frag;n.loader=void 0,this.loaders[n.type]=void 0,this.hls.trigger(o.a.FRAG_LOADED,{payload:a,frag:n,stats:e,networkDetails:i})},e.prototype.loaderror=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.FRAG_LOAD_ERROR,fatal:!1,frag:e.frag,response:t,networkDetails:r})},e.prototype.loadtimeout=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e.frag,networkDetails:r})},e.prototype.loadprogress=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=e.frag;a.loaded=t.loaded,this.hls.trigger(o.a.FRAG_LOAD_PROGRESS,{frag:a,stats:t,networkDetails:i})},e}(s.a);e.a=u},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(2),d=r(0),u=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.KEY_LOADING));return n.loaders={},n.decryptkey=null,n.decrypturl=null,n}return n(e,t),e.prototype.destroy=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy()}this.loaders={},s.a.prototype.destroy.call(this)},e.prototype.onKeyLoading=function(t){var e=t.frag,r=e.type,i=this.loaders[r],a=e.decryptdata,n=a.uri;if(n!==this.decrypturl||null===this.decryptkey){var s=this.hls.config;i&&(d.b.warn("abort previous key loader for type:"+r),i.abort()),e.loader=this.loaders[r]=new s.loader(s),this.decrypturl=n,this.decryptkey=null;var l=void 0,u=void 0,f=void 0;l={url:n,frag:e,responseType:"arraybuffer"},u={timeout:s.fragLoadingTimeOut,maxRetry:s.fragLoadingMaxRetry,retryDelay:s.fragLoadingRetryDelay,maxRetryDelay:s.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},e.loader.load(l,u,f)}else this.decryptkey&&(a.key=this.decryptkey,this.hls.trigger(o.a.KEY_LOADED,{frag:e}))},e.prototype.loadsuccess=function(t,e,r){var i=r.frag;this.decryptkey=i.decryptdata.key=new Uint8Array(t.data),i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(o.a.KEY_LOADED,{frag:i})},e.prototype.loaderror=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:t})},e.prototype.loadtimeout=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},e}(s.a);e.a=u},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(7),s=r(17),l=r(29),d=r(1),u=r(16),f=r(13),c=r(11),h=r(22),p=r(44),v=r(2),g=r(0),m=r(45),y=r(46),b=r(47),E=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),T={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_LEVEL:"WAITING_LEVEL",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR"},S=function(t){function e(r,n){i(this,e);var o=a(this,t.call(this,r,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.MANIFEST_LOADING,d.a.MANIFEST_PARSED,d.a.LEVEL_LOADED,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.FRAG_LOAD_EMERGENCY_ABORTED,d.a.FRAG_PARSING_INIT_SEGMENT,d.a.FRAG_PARSING_DATA,d.a.FRAG_PARSED,d.a.ERROR,d.a.AUDIO_TRACK_SWITCHING,d.a.AUDIO_TRACK_SWITCHED,d.a.BUFFER_CREATED,d.a.BUFFER_APPENDED,d.a.BUFFER_FLUSHED));return o.fragmentTracker=n,o.config=r.config,o.audioCodecSwap=!1,o._state=T.STOPPED,o.stallReported=!1,o}return n(e,t),e.prototype.onHandlerDestroying=function(){this.stopLoad(),t.prototype.onHandlerDestroying.call(this)},e.prototype.onHandlerDestroyed=function(){this.state=T.STOPPED,this.fragmentTracker=null,t.prototype.onHandlerDestroyed.call(this)},e.prototype.startLoad=function(t){if(this.levels){var e=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(i=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}e>0&&-1===t&&(g.b.log("override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e),this.state=T.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()}else this.forceStartLoad=!0,this.state=T.STOPPED},e.prototype.stopLoad=function(){var t=this.fragCurrent;t&&(t.loader&&t.loader.abort(),this.fragmentTracker.removeFragment(t),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.clearInterval(),this.state=T.STOPPED,this.forceStartLoad=!1},e.prototype.doTick=function(){switch(this.state){case T.BUFFER_FLUSHING:this.fragLoadError=0;break;case T.IDLE:this._doTickIdle();break;case T.WAITING_LEVEL:var t=this.levels[this.level];t&&t.details&&(this.state=T.IDLE);break;case T.FRAG_LOADING_WAITING_RETRY:var e=window.performance.now(),r=this.retryDate;(!r||e>=r||this.media&&this.media.seeking)&&(g.b.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=T.IDLE);break;case T.ERROR:case T.STOPPED:case T.FRAG_LOADING:case T.PARSING:case T.PARSED:case T.ENDED:}this._checkBuffer(),this._checkFragmentChanged()},e.prototype._doTickIdle=function(){var t=this.hls,e=t.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&e.startFragPrefetch)){var i=void 0;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=t.nextLoadLevel,n=this.levels[a];if(n){var o=n.bitrate,l=void 0;l=o?Math.max(8*e.maxBufferSize/o,e.maxBufferLength):e.maxBufferLength,l=Math.min(l,e.maxMaxBufferLength);var u=s.a.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,e.maxBufferHole),f=u.len;if(!(f>=l)){g.b.trace("buffer length of "+f.toFixed(3)+" is below max of "+l.toFixed(3)+". checking for more payload ..."),this.level=t.nextLoadLevel=a;var c=n.details;if(!c||c.live&&this.levelLastLoaded!==a)return void(this.state=T.WAITING_LEVEL);var h=this.fragPrevious;if(!c.live&&h&&!h.backtracked&&h.sn===c.endSN&&!u.nextStart){if(Math.min(r.duration,h.start+h.duration)-Math.max(u.end,h.start)<=Math.max(.2,h.duration)){var p={};return this.altAudio&&(p.type="video"),this.hls.trigger(d.a.BUFFER_EOS,p),void(this.state=T.ENDED)}}this._fetchPayloadOrEos(i,u,c)}}}},e.prototype._fetchPayloadOrEos=function(t,e,r){var i=this.fragPrevious,a=this.level,n=r.fragments,o=n.length;if(0!==o){var s=n[0].start,l=n[o-1].start+n[o-1].duration,d=e.end,u=void 0;if(r.initSegment&&!r.initSegment.data)u=r.initSegment;else if(r.live){var f=this.config.initialLiveManifestSize;if(o<f)return void g.b.warn("Can not start playback of a level, reason: not enough fragments "+o+" < "+f);if(null===(u=this._ensureFragmentAtLivePoint(r,d,s,l,i,n,o)))return}else d<s&&(u=n[0]);u||(u=this._findFragment(s,i,o,n,d,l,r)),u&&(u.encrypted?(g.b.log("Loading key for "+u.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a),this._loadKey(u)):(g.b.log("Loading "+u.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a+", currentTime:"+t.toFixed(3)+",bufferEnd:"+d.toFixed(3)),this._loadFragment(u)))}},e.prototype._ensureFragmentAtLivePoint=function(t,e,r,i,a,n,s){var l=this.hls.config,d=this.media,u=void 0,f=void 0!==l.liveMaxLatencyDuration?l.liveMaxLatencyDuration:l.liveMaxLatencyDurationCount*t.targetduration;if(e<Math.max(r-l.maxFragLookUpTolerance,i-f)){var c=this.liveSyncPosition=this.computeLivePosition(r,t);g.b.log("buffer end: "+e.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+c.toFixed(3)),e=c,d&&d.readyState&&d.duration>c&&(d.currentTime=c),this.nextLoadPosition=c}if(t.PTSKnown&&e>i&&d&&d.readyState)return null;if(this.startFragRequested&&!t.PTSKnown){if(a)if(t.programDateTime)u=Object(b.b)(n,a.endPdt+1);else{var h=a.sn+1;if(h>=t.startSN&&h<=t.endSN){var p=n[h-t.startSN];a.cc===p.cc&&(u=p,g.b.log("live playlist, switching playlist, load frag with next SN: "+u.sn))}u||(u=o.a.search(n,function(t){return a.cc-t.cc}))&&g.b.log("live playlist, switching playlist, load frag with same CC: "+u.sn)}u||(u=n[Math.min(s-1,Math.round(s/2))],g.b.log("live playlist, switching playlist, unknown, load middle frag : "+u.sn))}return u},e.prototype._findFragment=function(t,e,r,i,a,n,o){var s=this.hls.config,l=void 0,d=void 0;if(a<n?o.programDateTime?(d=Object(b.b)(i,Object(b.a)(t,a,o)))&&!Object(b.d)(a,s.maxFragLookUpTolerance,d)||(g.b.warn("Frag found by PDT search did not fit within tolerance; falling back to finding by SN"),d=function(){return Object(b.c)(e,i,a,n,s.maxFragLookUpTolerance)}()):d=Object(b.c)(e,i,a,n,s.maxFragLookUpTolerance):d=i[r-1],d){l=d;var u=l.sn-o.startSN,f=e&&l.level===e.level,c=i[u-1],h=i[u+1];if(e&&l.sn===e.sn)if(f&&!l.backtracked)if(l.sn<o.endSN){var p=e.deltaPTS;p&&p>s.maxBufferHole&&e.dropped&&u?(l=c,g.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")):(l=h,g.b.log("SN just loaded, load next one: "+l.sn))}else l=null;else l.backtracked&&(h&&h.backtracked?(g.b.warn("Already backtracked from fragment "+h.sn+", will not backtrack to fragment "+l.sn+". Loading fragment "+h.sn),l=h):(g.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),l.dropped=0,c?(l=c,l.backtracked=!0):u&&(l=null)))}return l},e.prototype._loadKey=function(t){this.state=T.KEY_LOADING,this.hls.trigger(d.a.KEY_LOADING,{frag:t})},e.prototype._loadFragment=function(t){var e=this.fragmentTracker.getState(t);this.fragCurrent=t,this.startFragRequested=!0,isNaN(t.sn)||t.bitrateTest||(this.nextLoadPosition=t.start+t.duration),t.backtracked||e===u.a.NOT_LOADED||e===u.a.PARTIAL?(t.autoLevel=this.hls.autoLevelEnabled,t.bitrateTest=this.bitrateTest,this.hls.trigger(d.a.FRAG_LOADING,{frag:t}),this.demuxer||(this.demuxer=new l.a(this.hls,"main")),this.state=T.FRAG_LOADING):e===u.a.APPENDING&&this._reduceMaxBufferLength(t.duration)&&this.fragmentTracker.removeFragment(t)},e.prototype.getBufferedFrag=function(t){return this.fragmentTracker.getBufferedFrag(t,c.a.LevelType.MAIN)},e.prototype.followingBufferedFrag=function(t){return t?this.getBufferedFrag(t.endPTS+.5):null},e.prototype._checkFragmentChanged=function(){var t=void 0,e=void 0,r=this.media;if(r&&r.readyState&&!1===r.seeking&&(e=r.currentTime,e>this.lastCurrentTime&&(this.lastCurrentTime=e),s.a.isBuffered(r,e)?t=this.getBufferedFrag(e):s.a.isBuffered(r,e+.1)&&(t=this.getBufferedFrag(e+.1)),t)){var i=t;if(i!==this.fragPlaying){this.hls.trigger(d.a.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(d.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},e.prototype.immediateLevelSwitch=function(){if(g.b.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var t=this.media,e=void 0;t?(e=t.paused,t.pause()):e=!0,this.previouslyPaused=e}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},e.prototype.immediateLevelSwitchEnd=function(){var t=this.media;t&&t.buffered.length&&(this.immediateSwitch=!1,s.a.isBuffered(t,t.currentTime)&&(t.currentTime-=1e-4),this.previouslyPaused||t.play())},e.prototype.nextLevelSwitch=function(){var t=this.media;if(t&&t.readyState){var e=void 0,r=void 0,i=void 0;if(r=this.getBufferedFrag(t.currentTime),r&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),t.paused)e=0;else{var a=this.hls.nextLoadLevel,n=this.levels[a],o=this.fragLastKbps;e=o&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*o)+1:0}if((i=this.getBufferedFrag(t.currentTime+e))&&(i=this.followingBufferedFrag(i))){var s=this.fragCurrent;s&&s.loader&&s.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(i.maxStartPTS,Number.POSITIVE_INFINITY)}}},e.prototype.flushMainBuffer=function(t,e){this.state=T.BUFFER_FLUSHING;var r={startOffset:t,endOffset:e};this.altAudio&&(r.type="video"),this.hls.trigger(d.a.BUFFER_FLUSHING,r)},e.prototype.onMediaAttached=function(t){var e=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),e.addEventListener("seeking",this.onvseeking),e.addEventListener("seeked",this.onvseeked),e.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition)},e.prototype.onMediaDetaching=function(){var t=this.media;t&&t.ended&&(g.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var e=this.levels;e&&e.forEach(function(t){t.details&&t.details.fragments.forEach(function(t){t.backtracked=void 0})}),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("seeked",this.onvseeked),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},e.prototype.onMediaSeeking=function(){var t=this.media,e=t?t.currentTime:void 0,r=this.config;isNaN(e)||g.b.log("media seeking to "+e.toFixed(3));var i=this.mediaBuffer?this.mediaBuffer:t,a=s.a.bufferInfo(i,e,this.config.maxBufferHole);if(this.state===T.FRAG_LOADING){var n=this.fragCurrent;if(0===a.len&&n){var o=r.maxFragLookUpTolerance,l=n.start-o,d=n.start+n.duration+o;e<l||e>d?(n.loader&&(g.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),n.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=T.IDLE):g.b.log("seeking outside of buffer but within currently loaded fragment range")}}else this.state===T.ENDED&&(0===a.len&&(this.fragPrevious=0),this.state=T.IDLE);t&&(this.lastCurrentTime=e),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=e),this.tick()},e.prototype.onMediaSeeked=function(){var t=this.media,e=t?t.currentTime:void 0;isNaN(e)||g.b.log("media seeked to "+e.toFixed(3)),this.tick()},e.prototype.onMediaEnded=function(){g.b.log("media ended"),this.startPosition=this.lastCurrentTime=0},e.prototype.onManifestLoading=function(){g.b.log("trigger BUFFER_RESET"),this.hls.trigger(d.a.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0},e.prototype.onManifestParsed=function(t){var e=!1,r=!1,i=void 0;t.levels.forEach(function(t){(i=t.audioCodec)&&(-1!==i.indexOf("mp4a.40.2")&&(e=!0),-1!==i.indexOf("mp4a.40.5")&&(r=!0))}),this.audioCodecSwitch=e&&r,this.audioCodecSwitch&&g.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},e.prototype.onLevelLoaded=function(t){var e=t.details,r=t.level,i=this.levels[this.levelLastLoaded],a=this.levels[r],n=e.totalduration,o=0;if(g.b.log("level "+r+" loaded ["+e.startSN+","+e.endSN+"],duration:"+n),e.live){var s=a.details;s&&e.fragments.length>0?(h.b(s,e),o=e.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(o,s),e.PTSKnown&&!isNaN(o)?g.b.log("live playlist sliding:"+o.toFixed(3)):(g.b.log("live playlist - outdated PTS, unknown sliding"),Object(m.a)(this.fragPrevious,i,e))):(g.b.log("live playlist - first load, unknown sliding"),e.PTSKnown=!1,Object(m.a)(this.fragPrevious,i,e))}else e.PTSKnown=!1;if(a.details=e,this.levelLastLoaded=r,this.hls.trigger(d.a.LEVEL_UPDATED,{details:e,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var l=e.startTimeOffset;isNaN(l)?e.live?(this.startPosition=this.computeLivePosition(o,e),g.b.log("configure startPosition to "+this.startPosition)):this.startPosition=0:(l<0&&(g.b.log("negative start time offset "+l+", count from end of last fragment"),l=o+n+l),g.b.log("start time offset found in playlist, adjust startPosition to "+l),this.startPosition=l),this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===T.WAITING_LEVEL&&(this.state=T.IDLE),this.tick()},e.prototype.onKeyLoaded=function(){this.state===T.KEY_LOADING&&(this.state=T.IDLE,this.tick())},e.prototype.onFragLoaded=function(t){var e=this.fragCurrent,r=t.frag;if(this.state===T.FRAG_LOADING&&e&&"main"===r.type&&r.level===e.level&&r.sn===e.sn){var i=t.stats,a=this.levels[e.level],n=a.details;if(g.b.log("Loaded  "+e.sn+" of ["+n.startSN+" ,"+n.endSN+"],level "+e.level),this.bitrateTest=!1,this.stats=i,!0===r.bitrateTest&&this.hls.nextLoadLevel)this.state=T.IDLE,this.startFragRequested=!1,i.tparsed=i.tbuffered=window.performance.now(),this.hls.trigger(d.a.FRAG_BUFFERED,{stats:i,frag:e,id:"main"}),this.tick();else if("initSegment"===r.sn)this.state=T.IDLE,i.tparsed=i.tbuffered=window.performance.now(),n.initSegment.data=t.payload,this.hls.trigger(d.a.FRAG_BUFFERED,{stats:i,frag:e,id:"main"}),this.tick();else{this.state=T.PARSING;var o=n.totalduration,s=e.level,u=e.sn,f=this.config.defaultAudioCodec||a.audioCodec;this.audioCodecSwap&&(g.b.log("swapping playlist audio codec"),void 0===f&&(f=this.lastAudioCodec),f&&(f=-1!==f.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),this.pendingBuffering=!0,this.appended=!1,g.b.log("Parsing "+u+" of ["+n.startSN+" ,"+n.endSN+"],level "+s+", cc "+e.cc);var c=this.demuxer;c||(c=this.demuxer=new l.a(this.hls,"main"));var h=this.media,p=h&&h.seeking,v=!p&&(n.PTSKnown||!n.live),m=n.initSegment?n.initSegment.data:[];c.push(t.payload,m,f,a.videoCodec,e,o,v,void 0)}}this.fragLoadError=0},e.prototype.onFragParsingInitSegment=function(t){var e=this.fragCurrent,r=t.frag;if(e&&"main"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===T.PARSING){var i=t.tracks,a=void 0,n=void 0;if(i.audio&&this.altAudio&&delete i.audio,n=i.audio){var o=this.levels[this.level].audioCodec,s=navigator.userAgent.toLowerCase();o&&this.audioCodecSwap&&(g.b.log("swapping playlist audio codec"),o=-1!==o.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==n.metadata.channelCount&&-1===s.indexOf("firefox")&&(o="mp4a.40.5"),-1!==s.indexOf("android")&&"audio/mpeg"!==n.container&&(o="mp4a.40.2",g.b.log("Android: force audio codec to "+o)),n.levelCodec=o,n.id=t.id}n=i.video,n&&(n.levelCodec=this.levels[this.level].videoCodec,n.id=t.id),this.hls.trigger(d.a.BUFFER_CODECS,i);for(a in i){n=i[a],g.b.log("main track:"+a+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var l=n.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(d.a.BUFFER_APPENDING,{type:a,data:l,parent:"main",content:"initSegment"}))}this.tick()}},e.prototype.onFragParsingData=function(t){var e=this,r=this.fragCurrent,i=t.frag;if(r&&"main"===t.id&&i.sn===r.sn&&i.level===r.level&&("audio"!==t.type||!this.altAudio)&&this.state===T.PARSING){var a=this.levels[this.level],n=r;if(isNaN(t.endPTS)&&(t.endPTS=t.startPTS+r.duration,t.endDTS=t.startDTS+r.duration),!0===t.hasAudio&&n.addElementaryStream(f.a.ElementaryStreamTypes.AUDIO),!0===t.hasVideo&&n.addElementaryStream(f.a.ElementaryStreamTypes.VIDEO),g.b.log("Parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb+",dropped:"+(t.dropped||0)),"video"===t.type)if(n.dropped=t.dropped,n.dropped)if(n.backtracked)g.b.warn("Already backtracked on this fragment, appending with the gap",n.sn);else{var o=a.details;if(!o||n.sn!==o.startSN)return g.b.warn("missing video frame(s), backtracking fragment",n.sn),this.fragmentTracker.removeFragment(n),n.backtracked=!0,this.nextLoadPosition=t.startPTS,this.state=T.IDLE,this.fragPrevious=n,void this.tick();g.b.warn("missing video frame(s) on first frag, appending with gap",n.sn)}else n.backtracked=!1;var s=h.c(a.details,n,t.startPTS,t.endPTS,t.startDTS,t.endDTS),l=this.hls;l.trigger(d.a.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:s,type:t.type,start:t.startPTS,end:t.endPTS}),[t.data1,t.data2].forEach(function(r){r&&r.length&&e.state===T.PARSING&&(e.appended=!0,e.pendingBuffering=!0,l.trigger(d.a.BUFFER_APPENDING,{type:t.type,data:r,parent:"main",content:"data"}))}),this.tick()}},e.prototype.onFragParsed=function(t){var e=this.fragCurrent,r=t.frag;e&&"main"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===T.PARSING&&(this.stats.tparsed=window.performance.now(),this.state=T.PARSED,this._checkAppendedParsed())},e.prototype.onAudioTrackSwitching=function(t){var e=!!t.url,r=t.id;if(!e){if(this.mediaBuffer!==this.media){g.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var i=this.fragCurrent;i.loader&&(g.b.log("switching to main audio track, cancel main fragment load"),i.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=T.IDLE}var a=this.hls;a.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),a.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:r}),this.altAudio=!1}},e.prototype.onAudioTrackSwitched=function(t){var e=t.id,r=!!this.hls.audioTracks[e].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(g.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},e.prototype.onBufferCreated=function(t){var e=t.tracks,r=void 0,i=void 0,a=!1;for(var n in e){var o=e[n];"main"===o.id?(i=n,r=o,"video"===n&&(this.videoBuffer=e[n].buffer)):a=!0}a&&r?(g.b.log("alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media},e.prototype.onBufferAppended=function(t){if("main"===t.parent){var e=this.state;e!==T.PARSING&&e!==T.PARSED||(this.pendingBuffering=t.pending>0,this._checkAppendedParsed())}},e.prototype._checkAppendedParsed=function(){if(!(this.state!==T.PARSED||this.appended&&this.pendingBuffering)){var t=this.fragCurrent;if(t){var e=this.mediaBuffer?this.mediaBuffer:this.media;g.b.log("main buffered : "+p.a.toString(e.buffered)),this.fragPrevious=t;var r=this.stats;r.tbuffered=window.performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(d.a.FRAG_BUFFERED,{stats:r,frag:t,id:"main"}),this.state=T.IDLE}this.tick()}},e.prototype.onError=function(t){var e=t.frag||this.fragCurrent;if(!e||"main"===e.type){var r=!!this.media&&s.a.isBuffered(this.media,this.media.currentTime)&&s.a.isBuffered(this.media,this.media.currentTime+.5);switch(t.details){case v.a.FRAG_LOAD_ERROR:case v.a.FRAG_LOAD_TIMEOUT:case v.a.KEY_LOAD_ERROR:case v.a.KEY_LOAD_TIMEOUT:if(!t.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var i=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);g.b.warn("mediaController: frag loading failed, retry in "+i+" ms"),this.retryDate=window.performance.now()+i,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=T.FRAG_LOADING_WAITING_RETRY}else g.b.error("mediaController: "+t.details+" reaches max retry, redispatch as fatal ..."),t.fatal=!0,this.state=T.ERROR;break;case v.a.LEVEL_LOAD_ERROR:case v.a.LEVEL_LOAD_TIMEOUT:this.state!==T.ERROR&&(t.fatal?(this.state=T.ERROR,g.b.warn("streamController: "+t.details+",switch to "+this.state+" state ...")):t.levelRetry||this.state!==T.WAITING_LEVEL||(this.state=T.IDLE));break;case v.a.BUFFER_FULL_ERROR:"main"!==t.parent||this.state!==T.PARSING&&this.state!==T.PARSED||(r?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=T.IDLE):(g.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}},e.prototype._reduceMaxBufferLength=function(t){var e=this.config;return e.maxMaxBufferLength>=t&&(e.maxMaxBufferLength/=2,g.b.warn("main:reduce max buffer length to "+e.maxMaxBufferLength+"s"),!0)},e.prototype._checkBuffer=function(){var t=this.config,e=this.media;if(e&&0!==e.readyState){var r=e.currentTime,i=this.mediaBuffer?this.mediaBuffer:e,a=i.buffered;if(!this.loadedmetadata&&a.length)this.loadedmetadata=!0,this._seekToStartPos();else if(this.immediateSwitch)this.immediateLevelSwitchEnd();else{var n=!(e.paused&&e.readyState>1||e.ended||0===e.buffered.length),o=window.performance.now();if(r!==this.lastCurrentTime)this.stallReported&&(g.b.warn("playback not stuck anymore @"+r+", after "+Math.round(o-this.stalled)+"ms"),this.stallReported=!1),this.stalled=null,this.nudgeRetry=0;else if(n){var l=o-this.stalled,d=s.a.bufferInfo(e,r,t.maxBufferHole);if(!this.stalled)return void(this.stalled=o);l>=1e3&&this._reportStall(d.len),this._tryFixBufferStall(d,l)}}}},e.prototype.onFragLoadEmergencyAborted=function(){this.state=T.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},e.prototype.onBufferFlushed=function(){var t=this.mediaBuffer?this.mediaBuffer:this.media;t&&this.fragmentTracker.detectEvictedFragments(f.a.ElementaryStreamTypes.VIDEO,t.buffered),this.state=T.IDLE,this.fragPrevious=null},e.prototype.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},e.prototype.computeLivePosition=function(t,e){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*e.targetduration;return t+Math.max(0,e.totalduration-r)},e.prototype._tryFixBufferStall=function(t,e){var r=this.config,i=this.media,a=i.currentTime,n=this.fragmentTracker.getPartialFragment(a);n&&this._trySkipBufferHole(n),t.len>.5&&e>1e3*r.highBufferWatchdogPeriod&&(this.stalled=null,this._tryNudgeBuffer())},e.prototype._reportStall=function(t){var e=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,g.b.warn("Playback stalling at @"+r.currentTime+" due to low buffer"),e.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:t}))},e.prototype._trySkipBufferHole=function(t){for(var e=this.hls,r=this.media,i=r.currentTime,a=0,n=0;n<r.buffered.length;n++){var o=r.buffered.start(n);if(i>=a&&i<o)return r.currentTime=Math.max(o,r.currentTime+.1),g.b.warn("skipping hole, adjusting currentTime from "+i+" to "+r.currentTime),this.stalled=null,void e.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+i+" to "+r.currentTime,frag:t});a=r.buffered.end(n)}},e.prototype._tryNudgeBuffer=function(){var t=this.config,e=this.hls,r=this.media,i=r.currentTime,a=(this.nudgeRetry||0)+1;if(this.nudgeRetry=a,a<t.nudgeMaxRetry){var n=i+a*t.nudgeOffset;g.b.log("adjust currentTime from "+i+" to "+n),r.currentTime=n,e.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else g.b.error("still stuck in high buffer @"+i+" after "+t.nudgeMaxRetry+", raise fatal error"),e.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_STALLED_ERROR,fatal:!0})},e.prototype._seekToStartPos=function(){var t=this.media,e=t.currentTime,r=t.seeking?e:this.startPosition;e!==r&&(g.b.log("target start position not buffered, seek to buffered.start(0) "+r+" from current time "+e+" "),t.currentTime=r)},E(e,[{key:"state",set:function(t){if(this.state!==t){var e=this.state;this._state=t,g.b.log("main stream:"+e+"->"+t),this.hls.trigger(d.a.STREAM_STATE_TRANSITION,{previousState:e,nextState:t})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var t=this.media;if(t){var e=this.getBufferedFrag(t.currentTime);if(e)return e.level}return-1}},{key:"nextBufferedFrag",get:function(){var t=this.media;return t?this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)):null}},{key:"nextLevel",get:function(){var t=this.nextBufferedFrag;return t?t.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(t){this._liveSyncPosition=t}}]),e}(y.a);e.a=S},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(8),n=r.n(a),o=r(30),s=r.n(o),l=r(1),d=r(18),u=r(0),f=r(2),c=r(10),h=r(5),p=Object(h.a)(),v=Object(c.a)(),g=function(){function t(e,r){i(this,t),this.hls=e,this.id=r;var a=this.observer=new n.a,o=e.config;a.trigger=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];a.emit.apply(a,[t,t].concat(r))},a.off=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];a.removeListener.apply(a,[t].concat(r))};var c=function(t,r){r=r||{},r.frag=this.frag,r.id=this.id,e.trigger(t,r)}.bind(this);a.on(l.a.FRAG_DECRYPTED,c),a.on(l.a.FRAG_PARSING_INIT_SEGMENT,c),a.on(l.a.FRAG_PARSING_DATA,c),a.on(l.a.FRAG_PARSED,c),a.on(l.a.ERROR,c),a.on(l.a.FRAG_PARSING_METADATA,c),a.on(l.a.FRAG_PARSING_USERDATA,c),a.on(l.a.INIT_PTS_FOUND,c);var h={mp4:v.isTypeSupported("video/mp4"),mpeg:v.isTypeSupported("audio/mpeg"),mp3:v.isTypeSupported('audio/mp4; codecs="mp3"')},g=navigator.vendor;if(o.enableWorker&&"undefined"!=typeof Worker){u.b.log("demuxing in webworker");var m=void 0;try{m=this.w=s()(43),this.onwmsg=this.onWorkerMessage.bind(this),m.addEventListener("message",this.onwmsg),m.onerror=function(t){e.trigger(l.a.ERROR,{type:f.b.OTHER_ERROR,details:f.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},m.postMessage({cmd:"init",typeSupported:h,vendor:g,id:r,config:JSON.stringify(o)})}catch(t){u.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),m&&p.URL.revokeObjectURL(m.objectURL),this.demuxer=new d.a(a,h,o,g),this.w=void 0}}else this.demuxer=new d.a(a,h,o,g)}return t.prototype.destroy=function(){var t=this.w;if(t)t.removeEventListener("message",this.onwmsg),t.terminate(),this.w=null;else{var e=this.demuxer;e&&(e.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.prototype.push=function(t,e,r,i,a,n,o,s){var l=this.w,d=isNaN(a.startDTS)?a.start:a.startDTS,f=a.decryptdata,c=this.frag,h=!(c&&a.cc===c.cc),p=!(c&&a.level===c.level),v=c&&a.sn===c.sn+1,g=!p&&v;if(h&&u.b.log(this.id+":discontinuity detected"),p&&u.b.log(this.id+":switch detected"),this.frag=a,l)l.postMessage({cmd:"demux",data:t,decryptdata:f,initSegment:e,audioCodec:r,videoCodec:i,timeOffset:d,discontinuity:h,trackSwitch:p,contiguous:g,duration:n,accurateTimeOffset:o,defaultInitPTS:s},t instanceof ArrayBuffer?[t]:[]);else{var m=this.demuxer;m&&m.push(t,f,e,r,i,d,h,p,g,n,o,s)}},t.prototype.onWorkerMessage=function(t){var e=t.data,r=this.hls;switch(e.event){case"init":p.URL.revokeObjectURL(this.w.objectURL);break;case l.a.FRAG_PARSING_DATA:e.data.data1=new Uint8Array(e.data1),e.data2&&(e.data.data2=new Uint8Array(e.data2));default:e.data=e.data||{},e.data.frag=this.frag,e.data.id=this.id,r.trigger(e.event,e.data)}},t}();e.a=g},function(t,e,r){function i(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t};var i=e(e.s=ENTRY_MODULE);return i.default||i}function a(t){return(t+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(t,e,i){var n={};n[i]=[];var o=e.toString(),s=o.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);if(!s)return n;for(var u,f=s[1],c=new RegExp("(\\\\n|\\W)"+a(f)+d,"g");u=c.exec(o);)"dll-reference"!==u[3]&&n[i].push(u[3]);for(c=new RegExp("\\("+a(f)+'\\("(dll-reference\\s('+l+'))"\\)\\)'+d,"g");u=c.exec(o);)t[u[2]]||(n[i].push(u[1]),t[u[2]]=r(u[1]).m),n[u[2]]=n[u[2]]||[],n[u[2]].push(u[4]);return n}function o(t){return Object.keys(t).reduce(function(e,r){return e||t[r].length>0},!1)}function s(t,e){for(var r={main:[e]},i={main:[]},a={main:{}};o(r);)for(var s=Object.keys(r),l=0;l<s.length;l++){var d=s[l],u=r[d],f=u.pop();if(a[d]=a[d]||{},!a[d][f]&&t[d][f]){a[d][f]=!0,i[d]=i[d]||[],i[d].push(f);for(var c=n(t,t[d][f],d),h=Object.keys(c),p=0;p<h.length;p++)r[h[p]]=r[h[p]]||[],r[h[p]]=r[h[p]].concat(c[h[p]])}}return i}var l="[\\.|\\-|\\+|\\w|/|@]+",d="\\((/\\*.*?\\*/)?s?.*?("+l+").*?\\)";t.exports=function(t,e){e=e||{};var a={main:r.m},n=e.all?{main:Object.keys(a)}:s(a,t),o="";Object.keys(n).filter(function(t){return"main"!==t}).forEach(function(t){for(var e=0;n[t][e];)e++;n[t].push(e),a[t][e]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",o=o+"var "+t+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+n[t].map(function(e){return JSON.stringify(e)+": "+a[t][e].toString()}).join(",")+"});\n"}),o=o+"("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+n.main.map(function(t){return JSON.stringify(t)+": "+a.main[t].toString()}).join(",")+"})(self);";var l=new window.Blob([o],{type:"text/javascript"});if(e.bare)return l;var d=window.URL||window.webkitURL||window.mozURL||window.msURL,u=d.createObjectURL(l),f=new window.Worker(u);return f.objectURL=u,f}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(e,r){i(this,t),this.subtle=e,this.aesIV=r}return t.prototype.decrypt=function(t,e){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},e,t)},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(e,r){i(this,t),this.subtle=e,this.key=r}return t.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){var e=t.byteLength,r=e&&new DataView(t).getUint8(e-1);return r?t.slice(0,e-r):t}var n=function(){function t(){i(this,t),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return t.prototype.uint8ArrayToUint32Array_=function(t){for(var e=new DataView(t),r=new Uint32Array(4),i=0;i<4;i++)r[i]=e.getUint32(4*i);return r},t.prototype.initTable=function(){var t=this.sBox,e=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],o=r[3],s=this.invSubMix,l=s[0],d=s[1],u=s[2],f=s[3],c=new Uint32Array(256),h=0,p=0,v=0;for(v=0;v<256;v++)c[v]=v<128?v<<1:v<<1^283;for(v=0;v<256;v++){var g=p^p<<1^p<<2^p<<3^p<<4;g=g>>>8^255&g^99,t[h]=g,e[g]=h;var m=c[h],y=c[m],b=c[y],E=257*c[g]^16843008*g;i[h]=E<<24|E>>>8,a[h]=E<<16|E>>>16,n[h]=E<<8|E>>>24,o[h]=E,E=16843009*b^65537*y^257*m^16843008*h,l[g]=E<<24|E>>>8,d[g]=E<<16|E>>>16,u[g]=E<<8|E>>>24,f[g]=E,h?(h=m^c[c[c[b^m]]],p^=c[c[p]]):h=p=1}},t.prototype.expandKey=function(t){for(var e=this.uint8ArrayToUint32Array_(t),r=!0,i=0;i<e.length&&r;)r=e[i]===this.key[i],i++;if(!r){this.key=e;var a=this.keySize=e.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n=this.ksRows=4*(a+6+1),o=void 0,s=void 0,l=this.keySchedule=new Uint32Array(n),d=this.invKeySchedule=new Uint32Array(n),u=this.sBox,f=this.rcon,c=this.invSubMix,h=c[0],p=c[1],v=c[2],g=c[3],m=void 0,y=void 0;for(o=0;o<n;o++)o<a?m=l[o]=e[o]:(y=m,o%a==0?(y=y<<8|y>>>24,y=u[y>>>24]<<24|u[y>>>16&255]<<16|u[y>>>8&255]<<8|u[255&y],y^=f[o/a|0]<<24):a>6&&o%a==4&&(y=u[y>>>24]<<24|u[y>>>16&255]<<16|u[y>>>8&255]<<8|u[255&y]),l[o]=m=(l[o-a]^y)>>>0);for(s=0;s<n;s++)o=n-s,y=3&s?l[o]:l[o-4],d[s]=s<4||o<=4?y:h[u[y>>>24]]^p[u[y>>>16&255]]^v[u[y>>>8&255]]^g[u[255&y]],d[s]=d[s]>>>0}},t.prototype.networkToHostOrderSwap=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},t.prototype.decrypt=function(t,e,r,i){for(var n=this.keySize+6,o=this.invKeySchedule,s=this.invSBox,l=this.invSubMix,d=l[0],u=l[1],f=l[2],c=l[3],h=this.uint8ArrayToUint32Array_(r),p=h[0],v=h[1],g=h[2],m=h[3],y=new Int32Array(t),b=new Int32Array(y.length),E=void 0,T=void 0,S=void 0,A=void 0,_=void 0,R=void 0,L=void 0,w=void 0,D=void 0,O=void 0,I=void 0,x=void 0,k=void 0,P=void 0,C=this.networkToHostOrderSwap;e<y.length;){for(D=C(y[e]),O=C(y[e+1]),I=C(y[e+2]),x=C(y[e+3]),_=D^o[0],R=x^o[1],L=I^o[2],w=O^o[3],k=4,P=1;P<n;P++)E=d[_>>>24]^u[R>>16&255]^f[L>>8&255]^c[255&w]^o[k],T=d[R>>>24]^u[L>>16&255]^f[w>>8&255]^c[255&_]^o[k+1],S=d[L>>>24]^u[w>>16&255]^f[_>>8&255]^c[255&R]^o[k+2],A=d[w>>>24]^u[_>>16&255]^f[R>>8&255]^c[255&L]^o[k+3],_=E,R=T,L=S,w=A,k+=4;E=s[_>>>24]<<24^s[R>>16&255]<<16^s[L>>8&255]<<8^s[255&w]^o[k],T=s[R>>>24]<<24^s[L>>16&255]<<16^s[w>>8&255]<<8^s[255&_]^o[k+1],S=s[L>>>24]<<24^s[w>>16&255]<<16^s[_>>8&255]<<8^s[255&R]^o[k+2],A=s[w>>>24]<<24^s[_>>16&255]<<16^s[R>>8&255]<<8^s[255&L]^o[k+3],k+=3,b[e]=C(E^p),b[e+1]=C(A^v),b[e+2]=C(S^g),b[e+3]=C(T^m),p=D,v=O,g=I,m=x,e+=4}return i?a(b.buffer):b.buffer},t.prototype.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(20),n=r(0),o=r(9),s=function(){function t(e,r,a){i(this,t),this.observer=e,this.config=a,this.remuxer=r}return t.prototype.resetInitSegment=function(t,e,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:e,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(t){if(!t)return!1;for(var e=o.a.getID3Data(t,0)||[],r=e.length,i=t.length;r<i;r++)if(a.e(t,r))return n.b.log("ADTS sync word found !"),!0;return!1},t.prototype.append=function(t,e,r,i){for(var s=this._audioTrack,l=o.a.getID3Data(t,0)||[],d=o.a.getTimeStamp(l),u=d?90*d:9e4*e,f=0,c=u,h=t.length,p=l.length,v=[{pts:c,dts:c,data:l}];p<h-1;)if(a.d(t,p)&&p+5<h){a.c(s,this.observer,t,p,s.manifestCodec);var g=a.a(s,t,p,u,f);if(!g){n.b.log("Unable to parse AAC frame");break}p+=g.length,c=g.sample.pts,f++}else o.a.isHeader(t,p)?(l=o.a.getID3Data(t,p),v.push({pts:c,dts:c,data:l}),p+=l.length):p++;this.remuxer.remux(s,{samples:[]},{samples:v,inputTimeScale:9e4},{samples:[]},e,r,i)},t.prototype.destroy=function(){},t}();e.a=s},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(20),n=r(21),o=r(1),s=r(36),l=r(37),d=r(0),u=r(2),f={video:1,audio:2,id3:3,text:4},c=function(){function t(e,r,a,n){i(this,t),this.observer=e,this.config=a,this.typeSupported=n,this.remuxer=r,this.sampleAes=null}return t.prototype.setDecryptData=function(t){null!=t&&null!=t.key&&"SAMPLE-AES"===t.method?this.sampleAes=new l.a(this.observer,this.config,t,this.discardEPB):this.sampleAes=null},t.probe=function(e){var r=t._syncOffset(e);return!(r<0)&&(r&&d.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},t._syncOffset=function(t){for(var e=Math.min(1e3,t.length-564),r=0;r<e;){if(71===t[r]&&71===t[r+188]&&71===t[r+376])return r;r++}return-1},t.createTrack=function(t,e){return{container:"video"===t||"audio"===t?"video/mp2t":void 0,type:t,id:f[t],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:"video"===t?0:void 0,isAAC:"audio"===t||void 0,duration:"audio"===t?e:void 0}},t.prototype.resetInitSegment=function(e,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=t.createTrack("video",a),this._audioTrack=t.createTrack("audio",a),this._id3Track=t.createTrack("id3",a),this._txtTrack=t.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a},t.prototype.resetTimeStamp=function(){},t.prototype.append=function(e,r,i,a){var n=void 0,s=e.length,l=void 0,f=void 0,c=void 0,h=void 0,p=!1;this.contiguous=i;var v=this.pmtParsed,g=this._avcTrack,m=this._audioTrack,y=this._id3Track,b=g.pid,E=m.pid,T=y.pid,S=this._pmtId,A=g.pesData,_=m.pesData,R=y.pesData,L=this._parsePAT,w=this._parsePMT,D=this._parsePES,O=this._parseAVCPES.bind(this),I=this._parseAACPES.bind(this),x=this._parseMPEGPES.bind(this),k=this._parseID3PES.bind(this),P=t._syncOffset(e);for(s-=(s+P)%188,n=P;n<s;n+=188)if(71===e[n]){if(l=!!(64&e[n+1]),f=((31&e[n+1])<<8)+e[n+2],(48&e[n+3])>>4>1){if((c=n+5+e[n+4])===n+188)continue}else c=n+4;switch(f){case b:l&&(A&&(h=D(A))&&void 0!==h.pts&&O(h,!1),A={data:[],size:0}),A&&(A.data.push(e.subarray(c,n+188)),A.size+=n+188-c);break;case E:l&&(_&&(h=D(_))&&void 0!==h.pts&&(m.isAAC?I(h):x(h)),_={data:[],size:0}),_&&(_.data.push(e.subarray(c,n+188)),_.size+=n+188-c);break;case T:l&&(R&&(h=D(R))&&void 0!==h.pts&&k(h),R={data:[],size:0}),R&&(R.data.push(e.subarray(c,n+188)),R.size+=n+188-c);break;case 0:l&&(c+=e[c]+1),S=this._pmtId=L(e,c);break;case S:l&&(c+=e[c]+1);var C=w(e,c,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);b=C.avc,b>0&&(g.pid=b),E=C.audio,E>0&&(m.pid=E,m.isAAC=C.isAAC),T=C.id3,T>0&&(y.pid=T),p&&!v&&(d.b.log("reparse from beginning"),p=!1,n=P-188),v=this.pmtParsed=!0;break;case 17:case 8191:break;default:p=!0}}else this.observer.trigger(o.a.ERROR,{type:u.b.MEDIA_ERROR,details:u.a.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});A&&(h=D(A))&&void 0!==h.pts?(O(h,!0),g.pesData=null):g.pesData=A,_&&(h=D(_))&&void 0!==h.pts?(m.isAAC?I(h):x(h),m.pesData=null):(_&&_.size&&d.b.log("last AAC PES packet truncated,might overlap between fragments"),m.pesData=_),R&&(h=D(R))&&void 0!==h.pts?(k(h),y.pesData=null):y.pesData=R,null==this.sampleAes?this.remuxer.remux(m,g,y,this._txtTrack,r,i,a):this.decryptAndRemux(m,g,y,this._txtTrack,r,i,a)},t.prototype.decryptAndRemux=function(t,e,r,i,a,n,o){if(t.samples&&t.isAAC){var s=this;this.sampleAes.decryptAacSamples(t.samples,0,function(){s.decryptAndRemuxAvc(t,e,r,i,a,n,o)})}else this.decryptAndRemuxAvc(t,e,r,i,a,n,o)},t.prototype.decryptAndRemuxAvc=function(t,e,r,i,a,n,o){if(e.samples){var s=this;this.sampleAes.decryptAvcSamples(e.samples,0,0,function(){s.remuxer.remux(t,e,r,i,a,n,o)})}else this.remuxer.remux(t,e,r,i,a,n,o)},t.prototype.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},t.prototype._parsePAT=function(t,e){return(31&t[e+10])<<8|t[e+11]},t.prototype._parsePMT=function(t,e,r,i){var a=void 0,n=void 0,o=void 0,s=void 0,l={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=(15&t[e+1])<<8|t[e+2],n=e+3+a-4,o=(15&t[e+10])<<8|t[e+11],e+=12+o;e<n;){switch(s=(31&t[e+1])<<8|t[e+2],t[e]){case 207:if(!i){d.b.log("unkown stream type:"+t[e]);break}case 15:-1===l.audio&&(l.audio=s);break;case 21:-1===l.id3&&(l.id3=s);break;case 219:if(!i){d.b.log("unkown stream type:"+t[e]);break}case 27:-1===l.avc&&(l.avc=s);break;case 3:case 4:r?-1===l.audio&&(l.audio=s,l.isAAC=!1):d.b.log("MPEG audio found, not supported in this browser for now");break;case 36:d.b.warn("HEVC stream type found, not supported for now");break;default:d.b.log("unkown stream type:"+t[e])}e+=5+((15&t[e+3])<<8|t[e+4])}return l},t.prototype._parsePES=function(t){var e=0,r=void 0,i=void 0,a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,u=void 0,f=t.data;if(!t||0===t.size)return null;for(;f[0].length<19&&f.length>1;){var c=new Uint8Array(f[0].length+f[1].length);c.set(f[0]),c.set(f[1],f[0].length),f[0]=c,f.splice(1,1)}if(r=f[0],1===(r[0]<<16)+(r[1]<<8)+r[2]){if((a=(r[4]<<8)+r[5])&&a>t.size-6)return null;i=r[7],192&i&&(s=536870912*(14&r[9])+4194304*(255&r[10])+16384*(254&r[11])+128*(255&r[12])+(254&r[13])/2,s>4294967295&&(s-=8589934592),64&i?(l=536870912*(14&r[14])+4194304*(255&r[15])+16384*(254&r[16])+128*(255&r[17])+(254&r[18])/2,l>4294967295&&(l-=8589934592),s-l>54e5&&(d.b.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),s=l)):l=s),n=r[8],u=n+9,t.size-=u,o=new Uint8Array(t.size);for(var h=0,p=f.length;h<p;h++){r=f[h];var v=r.byteLength;if(u){if(u>v){u-=v;continue}r=r.subarray(u),v-=u,u=0}o.set(r,e),e+=v}return a&&(a-=n+3),{data:o,pts:s,dts:l,len:a}}return null},t.prototype.pushAccesUnit=function(t,e){if(t.units.length&&t.frame){var r=e.samples,i=r.length;!this.config.forceKeyFrameOnDiscontinuity||!0===t.key||e.sps&&(i||this.contiguous)?(t.id=i,r.push(t)):e.dropped++}t.debug.length&&d.b.log(t.pts+"/"+t.dts+":"+t.debug)},t.prototype._parseAVCPES=function(t,e){var r=this,i=this._avcTrack,a=this._parseAVCNALu(t.data),n=void 0,o=this.avcSample,l=void 0,d=!1,u=void 0,f=this.pushAccesUnit.bind(this),c=function(t,e,r,i){return{key:t,pts:e,dts:r,units:[],debug:i}};t.data=null,o&&a.length&&!i.audFound&&(f(o,i),o=this.avcSample=c(!1,t.pts,t.dts,"")),a.forEach(function(e){switch(e.type){case 1:l=!0,o||(o=r.avcSample=c(!0,t.pts,t.dts,"")),o.frame=!0;var a=e.data;if(d&&a.length>4){var h=new s.a(a).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(o.key=!0)}break;case 5:l=!0,o||(o=r.avcSample=c(!0,t.pts,t.dts,"")),o.key=!0,o.frame=!0;break;case 6:l=!0,n=new s.a(r.discardEPB(e.data)),n.readUByte();for(var p=0,v=0,g=!1,m=0;!g&&n.bytesAvailable>1;){p=0;do{m=n.readUByte(),p+=m}while(255===m);v=0;do{m=n.readUByte(),v+=m}while(255===m);if(4===p&&0!==n.bytesAvailable){g=!0;if(181===n.readUByte()){if(49===n.readUShort()){if(1195456820===n.readUInt()){if(3===n.readUByte()){var y=n.readUByte(),b=n.readUByte(),E=31&y,T=[y,b];for(u=0;u<E;u++)T.push(n.readUByte()),T.push(n.readUByte()),T.push(n.readUByte());r._insertSampleInOrder(r._txtTrack.samples,{type:3,pts:t.pts,bytes:T})}}}}}else if(v<n.bytesAvailable)for(u=0;u<v;u++)n.readUByte()}break;case 7:if(l=!0,d=!0,!i.sps){n=new s.a(e.data);var S=n.readSPS();i.width=S.width,i.height=S.height,i.pixelRatio=S.pixelRatio,i.sps=[e.data],i.duration=r._duration;var A=e.data.subarray(1,4),_="avc1.";for(u=0;u<3;u++){var R=A[u].toString(16);R.length<2&&(R="0"+R),_+=R}i.codec=_}break;case 8:l=!0,i.pps||(i.pps=[e.data]);break;case 9:l=!1,i.audFound=!0,o&&f(o,i),o=r.avcSample=c(!1,t.pts,t.dts,"");break;case 12:l=!1;break;default:l=!1,o&&(o.debug+="unknown NAL "+e.type+" ")}if(o&&l){o.units.push(e)}}),e&&o&&(f(o,i),this.avcSample=null)},t.prototype._insertSampleInOrder=function(t,e){var r=t.length;if(r>0){if(e.pts>=t[r-1].pts)t.push(e);else for(var i=r-1;i>=0;i--)if(e.pts<t[i].pts){t.splice(i,0,e);break}}else t.push(e)},t.prototype._getLastNalUnit=function(){var t=this.avcSample,e=void 0;if(!t||0===t.units.length){var r=this._avcTrack,i=r.samples;t=i[i.length-1]}if(t){var a=t.units;e=a[a.length-1]}return e},t.prototype._parseAVCNALu=function(t){var e=0,r=t.byteLength,i=void 0,a=void 0,n=this._avcTrack,o=n.naluState||0,s=o,l=[],d=void 0,u=void 0,f=-1,c=void 0;for(-1===o&&(f=0,c=31&t[0],o=0,e=1);e<r;)if(i=t[e++],o)if(1!==o)if(i)if(1===i){if(f>=0)d={data:t.subarray(f,e-o-1),type:c},l.push(d);else{var h=this._getLastNalUnit();if(h&&(s&&e<=4-s&&h.state&&(h.data=h.data.subarray(0,h.data.byteLength-s)),(a=e-o-1)>0)){var p=new Uint8Array(h.data.byteLength+a);p.set(h.data,0),p.set(t.subarray(0,a),h.data.byteLength),h.data=p}}e<r?(u=31&t[e],f=e,c=u,o=0):o=-1}else o=0;else o=3;else o=i?0:2;else o=i?0:1;if(f>=0&&o>=0&&(d={data:t.subarray(f,r),type:c,state:o},l.push(d)),0===l.length){var v=this._getLastNalUnit();if(v){var g=new Uint8Array(v.data.byteLength+t.byteLength);g.set(v.data,0),g.set(t,v.data.byteLength),v.data=g}}return n.naluState=o,l},t.prototype.discardEPB=function(t){for(var e=t.byteLength,r=[],i=1,a=void 0,n=void 0;i<e-2;)0===t[i]&&0===t[i+1]&&3===t[i+2]?(r.push(i+2),i+=2):i++;if(0===r.length)return t;a=e-r.length,n=new Uint8Array(a);var o=0;for(i=0;i<a;o++,i++)o===r[0]&&(o++,r.shift()),n[i]=t[o];return n},t.prototype._parseAACPES=function(t){var e=this._audioTrack,r=t.data,i=t.pts,n=this.aacOverFlow,s=this.aacLastPTS,l=void 0,f=void 0,c=void 0,h=void 0,p=void 0;if(n){var v=new Uint8Array(n.byteLength+r.byteLength);v.set(n,0),v.set(r,n.byteLength),r=v}for(c=0,p=r.length;c<p-1&&!a.d(r,c);c++);if(c){var g=void 0,m=void 0;if(c<p-1?(g="AAC PES did not start with ADTS header,offset:"+c,m=!1):(g="no ADTS header found in AAC PES",m=!0),d.b.warn("parsing error:"+g),this.observer.trigger(o.a.ERROR,{type:u.b.MEDIA_ERROR,details:u.a.FRAG_PARSING_ERROR,fatal:m,reason:g}),m)return}if(a.c(e,this.observer,r,c,this.audioCodec),f=0,l=a.b(e.samplerate),n&&s){var y=s+l;Math.abs(y-i)>1&&(d.b.log("AAC: align PTS for overlapping frames by "+Math.round((y-i)/90)),i=y)}for(;c<p;)if(a.d(r,c)&&c+5<p){var b=a.a(e,r,c,i,f);if(!b)break;c+=b.length,h=b.sample.pts,f++}else c++;n=c<p?r.subarray(c,p):null,this.aacOverFlow=n,this.aacLastPTS=h},t.prototype._parseMPEGPES=function(t){for(var e=t.data,r=e.length,i=0,a=0,o=t.pts;a<r;)if(n.a.isHeader(e,a)){var s=n.a.appendFrame(this._audioTrack,e,a,o,i);if(!s)break;a+=s.length,i++}else a++},t.prototype._parseID3PES=function(t){this._id3Track.samples.push(t)},t}();e.a=c},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=function(){function t(e){i(this,t),this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}return t.prototype.loadWord=function(){var t=this.data,e=this.bytesAvailable,r=t.byteLength-e,i=new Uint8Array(4),a=Math.min(4,e);if(0===a)throw new Error("no bytes available");i.set(t.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},t.prototype.skipBits=function(t){var e=void 0;this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,e=t>>3,t-=e>>3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)},t.prototype.readBits=function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;return t>32&&a.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),e=t-e,e>0&&this.bitsAvailable?r<<e|this.readBits(e):r},t.prototype.skipLZ=function(){var t=void 0;for(t=0;t<this.bitsAvailable;++t)if(0!=(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()},t.prototype.skipUEG=function(){this.skipBits(1+this.skipLZ())},t.prototype.skipEG=function(){this.skipBits(1+this.skipLZ())},t.prototype.readUEG=function(){var t=this.skipLZ();return this.readBits(t+1)-1},t.prototype.readEG=function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)},t.prototype.readBoolean=function(){return 1===this.readBits(1)},t.prototype.readUByte=function(){return this.readBits(8)},t.prototype.readUShort=function(){return this.readBits(16)},t.prototype.readUInt=function(){return this.readBits(32)},t.prototype.skipScalingList=function(t){var e=8,r=8,i=void 0,a=void 0;for(i=0;i<t;i++)0!==r&&(a=this.readEG(),r=(e+a+256)%256),e=0===r?e:r},t.prototype.readSPS=function(){var t=0,e=0,r=0,i=0,a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,d=void 0,u=void 0,f=this.readUByte.bind(this),c=this.readBits.bind(this),h=this.readUEG.bind(this),p=this.readBoolean.bind(this),v=this.skipBits.bind(this),g=this.skipEG.bind(this),m=this.skipUEG.bind(this),y=this.skipScalingList.bind(this);if(f(),a=f(),c(5),v(3),f(),m(),100===a||110===a||122===a||244===a||44===a||83===a||86===a||118===a||128===a){var b=h();if(3===b&&v(1),m(),m(),v(1),p())for(d=3!==b?8:12,u=0;u<d;u++)p()&&y(u<6?16:64)}m();var E=h();if(0===E)h();else if(1===E)for(v(1),g(),g(),n=h(),u=0;u<n;u++)g();m(),v(1),o=h(),s=h(),l=c(1),0===l&&v(1),v(1),p()&&(t=h(),e=h(),r=h(),i=h());var T=[1,1];if(p()&&p()){switch(f()){case 1:T=[1,1];break;case 2:T=[12,11];break;case 3:T=[10,11];break;case 4:T=[16,11];break;case 5:T=[40,33];break;case 6:T=[24,11];break;case 7:T=[20,11];break;case 8:T=[32,11];break;case 9:T=[80,33];break;case 10:T=[18,11];break;case 11:T=[15,11];break;case 12:T=[64,33];break;case 13:T=[160,99];break;case 14:T=[4,3];break;case 15:T=[3,2];break;case 16:T=[2,1];break;case 255:T=[f()<<8|f(),f()<<8|f()]}}return{width:Math.ceil(16*(o+1)-2*t-2*e),height:(2-l)*(s+1)*16-(l?2:4)*(r+i),pixelRatio:T}},t.prototype.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(19),n=function(){function t(e,r,n,o){i(this,t),this.decryptdata=n,this.discardEPB=o,this.decrypter=new a.a(e,r,{removePKCS7Padding:!1})}return t.prototype.decryptBuffer=function(t,e){this.decrypter.decrypt(t,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,e)},t.prototype.decryptAacSample=function(t,e,r,i){var a=t[e].unit,n=a.subarray(16,a.length-a.length%16),o=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),s=this;this.decryptBuffer(o,function(n){n=new Uint8Array(n),a.set(n,16),i||s.decryptAacSamples(t,e+1,r)})},t.prototype.decryptAacSamples=function(t,e,r){for(;;e++){if(e>=t.length)return void r();if(!(t[e].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(t,e,r,i),!i)return}}},t.prototype.getAvcEncryptedData=function(t){for(var e=16*Math.floor((t.length-48)/160)+16,r=new Int8Array(e),i=0,a=32;a<=t.length-16;a+=160,i+=16)r.set(t.subarray(a,a+16),i);return r},t.prototype.getAvcDecryptedUnit=function(t,e){e=new Uint8Array(e);for(var r=0,i=32;i<=t.length-16;i+=160,r+=16)t.set(e.subarray(r,r+16),i);return t},t.prototype.decryptAvcSample=function(t,e,r,i,a,n){var o=this.discardEPB(a.data),s=this.getAvcEncryptedData(o),l=this;this.decryptBuffer(s.buffer,function(s){a.data=l.getAvcDecryptedUnit(o,s),n||l.decryptAvcSamples(t,e,r+1,i)})},t.prototype.decryptAvcSamples=function(t,e,r,i){for(;;e++,r=0){if(e>=t.length)return void i();for(var a=t[e].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var o=this.decrypter.isSync();if(this.decryptAvcSample(t,e,r,i,n,o),!o)return}}}},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(9),n=r(0),o=r(21),s=function(){function t(e,r,a){i(this,t),this.observer=e,this.config=a,this.remuxer=r}return t.prototype.resetInitSegment=function(t,e,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:e,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(t){var e=void 0,r=void 0,i=a.a.getID3Data(t,0);if(i&&void 0!==a.a.getTimeStamp(i))for(e=i.length,r=Math.min(t.length-1,e+100);e<r;e++)if(o.a.probe(t,e))return n.b.log("MPEG Audio sync word found !"),!0;return!1},t.prototype.append=function(t,e,r,i){for(var n=a.a.getID3Data(t,0),s=a.a.getTimeStamp(n),l=s?90*s:9e4*e,d=n.length,u=t.length,f=0,c=0,h=this._audioTrack,p=[{pts:l,dts:l,data:n}];d<u;)if(o.a.isHeader(t,d)){var v=o.a.appendFrame(h,t,d,l,f);if(!v)break;d+=v.length,c=v.sample.pts,f++}else a.a.isHeader(t,d)?(n=a.a.getID3Data(t,d),p.push({pts:c,dts:c,data:n}),d+=n.length):d++;this.remuxer.remux(h,{samples:[]},{samples:p,inputTimeScale:9e4},{samples:[]},e,r,i)},t.prototype.destroy=function(){},t}();e.a=s},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(40),n=r(41),o=r(1),s=r(2),l=r(0),d=function(){function t(e,r,a,n){i(this,t),this.observer=e,this.config=r,this.typeSupported=a;var o=navigator.userAgent;this.isSafari=n&&n.indexOf("Apple")>-1&&o&&!o.match("CriOS"),this.ISGenerated=!1}return t.prototype.destroy=function(){},t.prototype.resetTimeStamp=function(t){this._initPTS=this._initDTS=t},t.prototype.resetInitSegment=function(){this.ISGenerated=!1},t.prototype.remux=function(t,e,r,i,a,n,s){if(this.ISGenerated||this.generateIS(t,e,a),this.ISGenerated){var d=t.samples.length,u=e.samples.length,f=a,c=a;if(d&&u){var h=(t.samples[0].dts-e.samples[0].dts)/e.inputTimeScale;f+=Math.max(0,h),c+=Math.max(0,-h)}if(d){t.timescale||(l.b.warn("regenerate InitSegment as audio detected"),this.generateIS(t,e,a));var p=this.remuxAudio(t,f,n,s);if(u){var v=void 0;p&&(v=p.endPTS-p.startPTS),e.timescale||(l.b.warn("regenerate InitSegment as video detected"),this.generateIS(t,e,a)),this.remuxVideo(e,c,n,v,s)}}else if(u){var g=this.remuxVideo(e,c,n,0,s);g&&t.codec&&this.remuxEmptyAudio(t,f,n,g)}}r.samples.length&&this.remuxID3(r,a),i.samples.length&&this.remuxText(i,a),this.observer.trigger(o.a.FRAG_PARSED)},t.prototype.generateIS=function(t,e,r){var i=this.observer,a=t.samples,d=e.samples,u=this.typeSupported,f="audio/mp4",c={},h={tracks:c},p=void 0===this._initPTS,v=void 0,g=void 0;if(p&&(v=g=1/0),t.config&&a.length&&(t.timescale=t.samplerate,l.b.log("audio sampling rate : "+t.samplerate),t.isAAC||(u.mpeg?(f="audio/mpeg",t.codec=""):u.mp3&&(t.codec="mp3")),c.audio={container:f,codec:t.codec,initSegment:!t.isAAC&&u.mpeg?new Uint8Array:n.a.initSegment([t]),metadata:{channelCount:t.channelCount}},p&&(v=g=a[0].pts-t.inputTimeScale*r)),e.sps&&e.pps&&d.length){var m=e.inputTimeScale;e.timescale=m,c.video={container:"video/mp4",codec:e.codec,initSegment:n.a.initSegment([e]),metadata:{width:e.width,height:e.height}},p&&(v=Math.min(v,d[0].pts-m*r),g=Math.min(g,d[0].dts-m*r),this.observer.trigger(o.a.INIT_PTS_FOUND,{initPTS:v}))}Object.keys(c).length?(i.trigger(o.a.FRAG_PARSING_INIT_SEGMENT,h),this.ISGenerated=!0,p&&(this._initPTS=v,this._initDTS=g)):i.trigger(o.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},t.prototype.remuxVideo=function(t,e,r,i,a){var d=8,u=t.timescale,f=void 0,c=void 0,h=void 0,p=void 0,v=void 0,g=void 0,m=void 0,y=t.samples,b=[],E=y.length,T=this._PTSNormalize,S=this._initDTS,A=this.nextAvcDts,_=this.isSafari;if(0!==E){_&&(r|=y.length&&A&&(a&&Math.abs(e-A/u)<.1||Math.abs(y[0].pts-A-S)<u/5)),r||(A=e*u),y.forEach(function(t){t.pts=T(t.pts-S,A),t.dts=T(t.dts-S,A)}),y.sort(function(t,e){var r=t.dts-e.dts,i=t.pts-e.pts;return r||i||t.id-e.id});var R=y.reduce(function(t,e){return Math.max(Math.min(t,e.pts-e.dts),-18e3)},0);if(R<0){l.b.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(R/90)+" ms to overcome this issue");for(var L=0;L<y.length;L++)y[L].dts+=R}var w=y[0];v=Math.max(w.dts,0),p=Math.max(w.pts,0);var D=Math.round((v-A)/90);r&&D&&(D>1?l.b.log("AVC:"+D+" ms hole between fragments detected,filling it"):D<-1&&l.b.log("AVC:"+-D+" ms overlapping between fragments detected"),v=A,y[0].dts=v,p=Math.max(p-D,A),y[0].pts=p,l.b.log("Video/PTS/DTS adjusted: "+Math.round(p/90)+"/"+Math.round(v/90)+",delta:"+D+" ms")),v,w=y[y.length-1],m=Math.max(w.dts,0),g=Math.max(w.pts,0,m),_&&(f=Math.round((m-v)/(y.length-1)));for(var O=0,I=0,x=0;x<E;x++){for(var k=y[x],P=k.units,C=P.length,F=0,M=0;M<C;M++)F+=P[M].data.length;I+=F,O+=C,k.length=F,k.dts=_?v+x*f:Math.max(k.dts,v),k.pts=Math.max(k.pts,k.dts)}var N=I+4*O+8;try{c=new Uint8Array(N)}catch(t){return void this.observer.trigger(o.a.ERROR,{type:s.b.MUX_ERROR,details:s.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:N,reason:"fail allocating video mdat "+N})}var U=new DataView(c.buffer);U.setUint32(0,N),c.set(n.a.types.mdat,4);for(var B=0;B<E;B++){for(var G=y[B],j=G.units,K=0,H=void 0,V=0,W=j.length;V<W;V++){var Y=j[V],z=Y.data,X=Y.data.byteLength;U.setUint32(d,X),d+=4,c.set(z,d),d+=X,K+=4+X}if(_)H=Math.max(0,f*Math.round((G.pts-G.dts)/f));else{if(B<E-1)f=y[B+1].dts-G.dts;else{var q=this.config,Q=G.dts-y[B>0?B-1:B].dts;if(q.stretchShortVideoTrack){var Z=q.maxBufferHole,J=Math.floor(Z*u),$=(i?p+i*u:this.nextAudioPts)-G.pts;$>J?(f=$-Q,f<0&&(f=Q),l.b.log("It is approximately "+$/90+" ms to the next segment; using duration "+f/90+" ms for the last video frame.")):f=Q}else f=Q}H=Math.round(G.pts-G.dts)}b.push({size:K,duration:f,cts:H,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:G.key?2:1,isNonSync:G.key?0:1}})}this.nextAvcDts=m+f;var tt=t.dropped;if(t.len=0,t.nbNalu=0,t.dropped=0,b.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var et=b[0].flags;et.dependsOn=2,et.isNonSync=0}t.samples=b,h=n.a.moof(t.sequenceNumber++,v,t),t.samples=[];var rt={data1:h,data2:c,startPTS:p/u,endPTS:(g+f)/u,startDTS:v/u,endDTS:this.nextAvcDts/u,type:"video",hasAudio:!1,hasVideo:!0,nb:b.length,dropped:tt};return this.observer.trigger(o.a.FRAG_PARSING_DATA,rt),rt}},t.prototype.remuxAudio=function(t,e,r,i){var d=t.inputTimeScale,u=t.timescale,f=d/u,c=t.isAAC?1024:1152,h=c*f,p=this._PTSNormalize,v=this._initDTS,g=!t.isAAC&&this.typeSupported.mpeg,m=void 0,y=void 0,b=void 0,E=void 0,T=void 0,S=void 0,A=void 0,_=t.samples,R=[],L=this.nextAudioPts;if(r|=_.length&&L&&(i&&Math.abs(e-L/d)<.1||Math.abs(_[0].pts-L-v)<20*h),_.forEach(function(t){t.pts=t.dts=p(t.pts-v,e*d)}),_=_.filter(function(t){return t.pts>=0}),0!==_.length){if(r||(L=i?e*d:_[0].pts),t.isAAC)for(var w=this.config.maxAudioFramesDrift,D=0,O=L;D<_.length;){var I,x=_[D],k=x.pts;I=k-O;var P=Math.abs(1e3*I/d);if(I<=-w*h)l.b.warn("Dropping 1 audio frame @ "+(O/d).toFixed(3)+"s due to "+Math.round(P)+" ms overlap."),_.splice(D,1),t.len-=x.unit.length;else if(I>=w*h&&P<1e4&&O){var C=Math.round(I/h);l.b.warn("Injecting "+C+" audio frame @ "+(O/d).toFixed(3)+"s due to "+Math.round(1e3*I/d)+" ms gap.");for(var F=0;F<C;F++){var M=Math.max(O,0);b=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),b||(l.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),b=x.unit.subarray()),_.splice(D,0,{unit:b,pts:M,dts:M}),t.len+=b.length,O+=h,D++}x.pts=x.dts=O,O+=h,D++}else Math.abs(I),x.pts=x.dts=O,O+=h,D++}for(var N=0,U=_.length;N<U;N++){var B=_[N],G=B.unit,j=B.pts;if(void 0!==A)y.duration=Math.round((j-A)/f);else{var K=Math.round(1e3*(j-L)/d),H=0;if(r&&t.isAAC&&K){if(K>0&&K<1e4)H=Math.round((j-L)/h),l.b.log(K+" ms hole between AAC samples detected,filling it"),H>0&&(b=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),b||(b=G.subarray()),t.len+=H*b.length);else if(K<-12){l.b.log("drop overlapping AAC sample, expected/parsed/delta:"+(L/d).toFixed(3)+"s/"+(j/d).toFixed(3)+"s/"+-K+"ms"),t.len-=G.byteLength;continue}j=L}if(S=j,!(t.len>0))return;var V=g?t.len:t.len+8;m=g?0:8;try{E=new Uint8Array(V)}catch(t){return void this.observer.trigger(o.a.ERROR,{type:s.b.MUX_ERROR,details:s.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:V,reason:"fail allocating audio mdat "+V})}if(!g){new DataView(E.buffer).setUint32(0,V),E.set(n.a.types.mdat,4)}for(var W=0;W<H;W++)b=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),b||(l.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),b=G.subarray()),E.set(b,m),m+=b.byteLength,y={size:b.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},R.push(y)}E.set(G,m);var Y=G.byteLength;m+=Y,y={size:Y,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},R.push(y),A=j}var z=0,X=R.length;if(X>=2&&(z=R[X-2].duration,y.duration=z),X){this.nextAudioPts=L=A+f*z,t.len=0,t.samples=R,T=g?new Uint8Array:n.a.moof(t.sequenceNumber++,S/f,t),t.samples=[];var q=S/d,Q=L/d,Z={data1:T,data2:E,startPTS:q,endPTS:Q,startDTS:q,endDTS:Q,type:"audio",hasAudio:!0,hasVideo:!1,nb:X};return this.observer.trigger(o.a.FRAG_PARSING_DATA,Z),Z}return null}},t.prototype.remuxEmptyAudio=function(t,e,r,i){var n=t.inputTimeScale,o=t.samplerate?t.samplerate:n,s=n/o,d=this.nextAudioPts,u=(void 0!==d?d:i.startDTS*n)+this._initDTS,f=i.endDTS*n+this._initDTS,c=1024*s,h=Math.ceil((f-u)/c),p=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);if(l.b.warn("remux empty Audio"),!p)return void l.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");for(var v=[],g=0;g<h;g++){var m=u+g*c;v.push({unit:p,pts:m,dts:m}),t.len+=p.length}t.samples=v,this.remuxAudio(t,e,r)},t.prototype.remuxID3=function(t,e){var r=t.samples.length,i=void 0,a=t.inputTimeScale,n=this._initPTS,s=this._initDTS;if(r){for(var l=0;l<r;l++)i=t.samples[l],i.pts=(i.pts-n)/a,i.dts=(i.dts-s)/a;this.observer.trigger(o.a.FRAG_PARSING_METADATA,{samples:t.samples})}t.samples=[],e=e},t.prototype.remuxText=function(t,e){t.samples.sort(function(t,e){return t.pts-e.pts});var r=t.samples.length,i=void 0,a=t.inputTimeScale,n=this._initPTS;if(r){for(var s=0;s<r;s++)i=t.samples[s],i.pts=(i.pts-n)/a;this.observer.trigger(o.a.FRAG_PARSING_USERDATA,{samples:t.samples})}t.samples=[],e=e},t.prototype._PTSNormalize=function(t,e){var r=void 0;if(void 0===e)return t;for(r=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=r;return t},t}();e.a=d},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(){i(this,t)}return t.getSilentFrame=function(t,e){switch(t){case"mp4a.40.2":if(1===e)return new Uint8Array([0,200,0,128,35,128]);if(2===e)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===e)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=Math.pow(2,32)-1,n=function(){function t(){i(this,t)}return t.init=function(){t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var e=void 0;for(e in t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=n,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,o,l,o,s),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,a))},t.box=function(t){for(var e=Array.prototype.slice.call(arguments,1),r=8,i=e.length,a=i,n=void 0;i--;)r+=e[i].byteLength;for(n=new Uint8Array(r),n[0]=r>>24&255,n[1]=r>>16&255,n[2]=r>>8&255,n[3]=255&r,n.set(t,4),i=0,r=8;i<a;i++)n.set(e[i],r),r+=e[i].byteLength;return n},t.hdlr=function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])},t.mdat=function(e){return t.box(t.types.mdat,e)},t.mdhd=function(e,r){r*=e;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1));return t.box(t.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))},t.mdia=function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))},t.mfhd=function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))},t.minf=function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))},t.moof=function(e,r,i){return t.box(t.types.moof,t.mfhd(e),t.traf(i,r))},t.moov=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trak(e[r]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(i).concat(t.mvex(e)))},t.mvex=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trex(e[r]);return t.box.apply(null,[t.types.mvex].concat(i))},t.mvhd=function(e,r){r*=e;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1)),o=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,o)},t.sdtp=function(e){var r=e.samples||[],i=new Uint8Array(4+r.length),a=void 0,n=void 0;for(n=0;n<r.length;n++)a=r[n].flags,i[n+4]=a.dependsOn<<4|a.isDependedOn<<2|a.hasRedundancy;return t.box(t.types.sdtp,i)},t.stbl=function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))},t.avc1=function(e){var r=[],i=[],a=void 0,n=void 0,o=void 0;for(a=0;a<e.sps.length;a++)n=e.sps[a],o=n.byteLength,r.push(o>>>8&255),r.push(255&o),r=r.concat(Array.prototype.slice.call(n));for(a=0;a<e.pps.length;a++)n=e.pps[a],o=n.byteLength,i.push(o>>>8&255),i.push(255&o),i=i.concat(Array.prototype.slice.call(n));var s=t.box(t.types.avcC,new Uint8Array([1,r[3],r[4],r[5],255,224|e.sps.length].concat(r).concat([e.pps.length]).concat(i))),l=e.width,d=e.height,u=e.pixelRatio[0],f=e.pixelRatio[1];return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,d>>8&255,255&d,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),t.box(t.types.pasp,new Uint8Array([u>>24,u>>16&255,u>>8&255,255&u,f>>24,f>>16&255,f>>8&255,255&f])))},t.esds=function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))},t.mp4a=function(e){var r=e.samplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),t.box(t.types.esds,t.esds(e)))},t.mp3=function(e){var r=e.samplerate;return t.box(t.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},t.stsd=function(e){return"audio"===e.type?e.isAAC||"mp3"!==e.codec?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.mp3(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))},t.tkhd=function(e){var r=e.id,i=e.duration*e.timescale,n=e.width,o=e.height,s=Math.floor(i/(a+1)),l=Math.floor(i%(a+1));return t.box(t.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,l>>24,l>>16&255,l>>8&255,255&l,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,o>>8&255,255&o,0,0]))},t.traf=function(e,r){var i=t.sdtp(e),n=e.id,o=Math.floor(r/(a+1)),s=Math.floor(r%(a+1));return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),t.box(t.types.tfdt,new Uint8Array([1,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,s>>24,s>>16&255,s>>8&255,255&s])),t.trun(e,i.length+16+20+8+16+8+8),i)},t.trak=function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))},t.trex=function(e){var r=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},t.trun=function(e,r){var i=e.samples||[],a=i.length,n=12+16*a,o=new Uint8Array(n),s=void 0,l=void 0,d=void 0,u=void 0,f=void 0,c=void 0;for(r+=8+n,o.set([0,0,15,1,a>>>24&255,a>>>16&255,a>>>8&255,255&a,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),s=0;s<a;s++)l=i[s],d=l.duration,u=l.size,f=l.flags,c=l.cts,o.set([d>>>24&255,d>>>16&255,d>>>8&255,255&d,u>>>24&255,u>>>16&255,u>>>8&255,255&u,f.isLeading<<2|f.dependsOn,f.isDependedOn<<6|f.hasRedundancy<<4|f.paddingValue<<1|f.isNonSync,61440&f.degradPrio,15&f.degradPrio,c>>>24&255,c>>>16&255,c>>>8&255,255&c],12+16*s);return t.box(t.types.trun,o)},t.initSegment=function(e){t.types||t.init();var r=t.moov(e),i=void 0;return i=new Uint8Array(t.FTYP.byteLength+r.byteLength),i.set(t.FTYP),i.set(r,t.FTYP.byteLength),i},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(1),n=function(){function t(e){i(this,t),this.observer=e}return t.prototype.destroy=function(){},t.prototype.resetTimeStamp=function(){},t.prototype.resetInitSegment=function(){},t.prototype.remux=function(t,e,r,i,n,o,s,l){var d=this.observer,u="";t&&(u+="audio"),e&&(u+="video"),d.trigger(a.a.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:u,hasAudio:!!t,hasVideo:!!e,nb:1,dropped:0}),d.trigger(a.a.FRAG_PARSED)},t}();e.a=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(18),a=r(1),n=r(0),o=r(8),s=r.n(o),l=function(t){var e=new s.a;e.trigger=function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];e.emit.apply(e,[t,t].concat(i))},e.off=function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];e.removeListener.apply(e,[t].concat(i))};var r=function(e,r){t.postMessage({event:e,data:r})};t.addEventListener("message",function(a){var o=a.data;switch(o.cmd){case"init":var s=JSON.parse(o.config);t.demuxer=new i.a(e,o.typeSupported,s,o.vendor);try{Object(n.a)(!0===s.debug)}catch(t){console.warn("demuxerWorker: unable to enable logs")}r("init",null);break;case"demux":t.demuxer.push(o.data,o.decryptdata,o.initSegment,o.audioCodec,o.videoCodec,o.timeOffset,o.discontinuity,o.trackSwitch,o.contiguous,o.duration,o.accurateTimeOffset,o.defaultInitPTS)}}),e.on(a.a.FRAG_DECRYPTED,r),e.on(a.a.FRAG_PARSING_INIT_SEGMENT,r),e.on(a.a.FRAG_PARSED,r),e.on(a.a.ERROR,r),e.on(a.a.FRAG_PARSING_METADATA,r),e.on(a.a.FRAG_PARSING_USERDATA,r),e.on(a.a.INIT_PTS_FOUND,r),e.on(a.a.FRAG_PARSING_DATA,function(e,r){var i=[],a={event:e,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),t.postMessage(a,i)})};e.default=l},function(t,e,r){"use strict";var i={toString:function(t){for(var e="",r=t.length,i=0;i<r;i++)e+="["+t.start(i).toFixed(3)+","+t.end(i).toFixed(3)+"]";return e}};e.a=i},function(t,e,r){"use strict";function i(t,e){for(var r=null,i=0;i<t.length;i+=1){var a=t[i];if(a&&a.cc===e){r=a;break}}return r}function a(t,e,r){var i=!1;return e&&e.details&&r&&(r.endCC>r.startCC||t&&t.cc<r.startCC)&&(i=!0),i}function n(t,e){var r=t.fragments,a=e.fragments;if(!a.length||!r.length)return void l.b.log("No fragments to align");var n=i(r,a[0].cc);return!n||n&&!n.startPTS?void l.b.log("No frag in previous level to align on"):n}function o(t,e){e.fragments.forEach(function(e){if(e){var r=e.start+t;e.start=e.startPTS=r,e.endPTS=r+e.duration}}),e.PTSKnown=!0}function s(t,e,r){if(a(t,e,r)){var i=n(e.details,r);i&&(l.b.log("Adjusting PTS using last level due to CC increase within current level"),o(i.start,r))}if(!1===r.PTSKnown&&e&&e.details&&e.details.fragments&&e.details.fragments.length){var s=e.details.programDateTime,d=r.programDateTime,u=(d-s)/1e3+e.details.fragments[0].start;isNaN(u)||(l.b.log("adjusting PTS using programDateTime delta, sliding:"+u.toFixed(3)),o(u,r))}}e.a=s;var l=(r(7),r(0))},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(3),s=function(t){function e(r){i(this,e);for(var n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];var l=a(this,t.call.apply(t,[this,r].concat(o)));return l._tickInterval=null,l._tickTimer=null,l._tickCallCount=0,l._boundTick=l.tick.bind(l),l}return n(e,t),e.prototype.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},e.prototype.hasInterval=function(){return!!this._tickInterval},e.prototype.hasNextTick=function(){return!!this._tickTimer},e.prototype.setInterval=function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return!this._tickInterval&&(this._tickInterval=setInterval(this._boundTick,t),!0)}),e.prototype.clearInterval=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return!!this._tickInterval&&(clearInterval(this._tickInterval),this._tickInterval=null,!0)}),e.prototype.clearNextTick=function(){return!!this._tickTimer&&(clearTimeout(this._tickTimer),this._tickTimer=null,!0)},e.prototype.tick=function(){1===++this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=setTimeout(this._boundTick,0)),this._tickCallCount=0)},e.prototype.doTick=function(){},e}(o.a);e.a=s},function(t,e,r){"use strict";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],i=0;if(r.programDateTime){var a=Date.parse(r.programDateTime);isNaN(a)||(i=1e3*e+a-1e3*t)}return i}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Array.isArray(t)||!t.length||null===e)return null;if(e<t[0].pdt)return null;if(e>=t[t.length-1].endPdt)return null;for(var r=0;r<t.length;++r){var i=t[r];if(e<i.endPdt)return i}return null}function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=void 0,l=t?e[t.sn-e[0].sn+1]:null;return r<i&&(r>i-a&&(a=0),n=l&&!o(r,a,l)?l:s.a.search(e,o.bind(null,r,a))),n}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],i=Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=t?1:r.start-i>t&&r.start?-1:0}e.a=i,e.b=a,e.c=n,e.d=o;var s=r(7)},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(0),d=r(2),u=r(15),f=r(22),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),p=window,v=p.performance,g=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MANIFEST_LOADED,o.a.LEVEL_LOADED,o.a.AUDIO_TRACK_SWITCHED,o.a.FRAG_LOADED,o.a.ERROR));return n.canload=!1,n.currentLevelIndex=null,n.manualLevelIndex=-1,n.timer=null,n}return n(e,t),e.prototype.onHandlerDestroying=function(){this.clearTimer(),this.manualLevelIndex=-1},e.prototype.clearTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},e.prototype.startLoad=function(){var t=this._levels;this.canload=!0,this.levelRetryCount=0,t&&t.forEach(function(t){t.loadError=0;var e=t.details;e&&e.live&&(t.details=void 0)}),null!==this.timer&&this.loadLevel()},e.prototype.stopLoad=function(){this.canload=!1},e.prototype.onManifestLoaded=function(t){var e=[],r=void 0,i={},a=null,n=!1,s=!1,c=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),h=[];if(t.levels.forEach(function(t){t.loadError=0,t.fragmentError=!1,n=n||!!t.videoCodec,s=s||!!t.audioCodec||!(!t.attrs||!t.attrs.AUDIO),c&&t.audioCodec&&-1!==t.audioCodec.indexOf("mp4a.40.34")&&(t.audioCodec=void 0),a=i[t.bitrate],a?a.url.push(t.url):(t.url=[t.url],t.urlId=0,i[t.bitrate]=t,e.push(t)),t.attrs&&t.attrs.AUDIO&&Object(f.a)(a||t,"audio",t.attrs.AUDIO),t.attrs&&t.attrs.SUBTITLES&&Object(f.a)(a||t,"text",t.attrs.SUBTITLES)}),n&&s&&(e=e.filter(function(t){return!!t.videoCodec})),e=e.filter(function(t){var e=t.audioCodec,r=t.videoCodec;return(!e||Object(u.a)(e))&&(!r||Object(u.a)(r))}),t.audioTracks&&(h=t.audioTracks.filter(function(t){return!t.audioCodec||Object(u.a)(t.audioCodec,"audio")})),e.length>0){r=e[0].bitrate,e.sort(function(t,e){return t.bitrate-e.bitrate}),this._levels=e;for(var p=0;p<e.length;p++)if(e[p].bitrate===r){this._firstLevel=p,l.b.log("manifest loaded,"+e.length+" level(s) found, first bitrate:"+r);break}this.hls.trigger(o.a.MANIFEST_PARSED,{levels:e,audioTracks:h,firstLevel:this._firstLevel,stats:t.stats,audio:s,video:n,altAudio:h.length>0&&n})}else this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},e.prototype.setLevelInternal=function(t){var e=this._levels,r=this.hls;if(t>=0&&t<e.length){if(this.clearTimer(),this.currentLevelIndex!==t){l.b.log("switching to level "+t),this.currentLevelIndex=t;var i=e[t];i.level=t,r.trigger(o.a.LEVEL_SWITCHING,i)}var a=e[t],n=a.details;if(!n||n.live){var s=a.urlId;r.trigger(o.a.LEVEL_LOADING,{url:a.url[s],level:t,id:s})}}else r.trigger(o.a.ERROR,{type:d.b.OTHER_ERROR,details:d.a.LEVEL_SWITCH_ERROR,level:t,fatal:!1,reason:"invalid level idx"})},e.prototype.onError=function(t){if(t.fatal)return void(t.type===d.b.NETWORK_ERROR&&this.clearTimer());var e=!1,r=!1,i=void 0;switch(t.details){case d.a.FRAG_LOAD_ERROR:case d.a.FRAG_LOAD_TIMEOUT:case d.a.KEY_LOAD_ERROR:case d.a.KEY_LOAD_TIMEOUT:i=t.frag.level,r=!0;break;case d.a.LEVEL_LOAD_ERROR:case d.a.LEVEL_LOAD_TIMEOUT:i=t.context.level,e=!0;break;case d.a.REMUX_ALLOC_ERROR:i=t.level,e=!0}void 0!==i&&this.recoverLevel(t,i,e,r)},e.prototype.recoverLevel=function(t,e,r,i){var a=this,n=this.hls.config,o=t.details,s=this._levels[e],d=void 0,u=void 0,f=void 0;if(s.loadError++,s.fragmentError=i,r){if(!(this.levelRetryCount+1<=n.levelLoadingMaxRetry))return l.b.error("level controller, cannot recover from "+o+" error"),this.currentLevelIndex=null,this.clearTimer(),void(t.fatal=!0);u=Math.min(Math.pow(2,this.levelRetryCount)*n.levelLoadingRetryDelay,n.levelLoadingMaxRetryTimeout),this.timer=setTimeout(function(){return a.loadLevel()},u),t.levelRetry=!0,this.levelRetryCount++,l.b.warn("level controller, "+o+", retry in "+u+" ms, current retry count is "+this.levelRetryCount)}(r||i)&&(d=s.url.length,d>1&&s.loadError<d?(s.urlId=(s.urlId+1)%d,s.details=void 0,l.b.warn("level controller, "+o+" for level "+e+": switching to redundant URL-id "+s.urlId)):-1===this.manualLevelIndex?(f=0===e?this._levels.length-1:e-1,l.b.warn("level controller, "+o+": switch to "+f),this.hls.nextAutoLevel=this.currentLevelIndex=f):i&&(l.b.warn("level controller, "+o+": reload a fragment"),this.currentLevelIndex=null))},e.prototype.onFragLoaded=function(t){var e=t.frag;if(void 0!==e&&"main"===e.type){var r=this._levels[e.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}},e.prototype.onLevelLoaded=function(t){var e=this,r=t.level;if(r===this.currentLevelIndex){var i=this._levels[r];i.fragmentError||(i.loadError=0,this.levelRetryCount=0);var a=t.details;if(a.live){var n=1e3*(a.averagetargetduration?a.averagetargetduration:a.targetduration),o=n,s=i.details;s&&a.endSN===s.endSN&&(o/=2,l.b.log("same live playlist, reload twice faster")),o-=v.now()-t.stats.trequest,o=Math.max(n/2,Math.round(o)),l.b.log("live playlist, reload in "+Math.round(o)+" ms"),this.timer=setTimeout(function(){return e.loadLevel()},o)}else this.clearTimer()}},e.prototype.onAudioTrackSwitched=function(t){var e=this.hls.audioTracks[t.id].groupId,r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){var i=r.audioGroupIds.findIndex(function(t){return t===e});i!==r.urlId&&(r.urlId=i,this.startLoad())}},e.prototype.loadLevel=function(){if(l.b.debug("call to loadLevel"),null!==this.currentLevelIndex&&this.canload){var t=this._levels[this.currentLevelIndex];if("object"===(void 0===t?"undefined":c(t))&&t.url.length>0){var e=this.currentLevelIndex,r=t.urlId,i=t.url[r];l.b.log("Attempt loading level index "+e+" with URL-id "+r),this.hls.trigger(o.a.LEVEL_LOADING,{url:i,level:e,id:r})}}},h(e,[{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(t){var e=this._levels;e&&(t=Math.min(t,e.length-1),this.currentLevelIndex===t&&e[t].details||this.setLevelInternal(t))}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(t){this.manualLevelIndex=t,void 0===this._startLevel&&(this._startLevel=t),-1!==t&&(this.level=t)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(t){this._firstLevel=t}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var t=this.hls.config.startLevel;return void 0!==t?t:this._firstLevel}return this._startLevel},set:function(t){this._startLevel=t}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(t){this.level=t,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=t)}}]),e}(s.a);e.a=g},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(9),d=r(50),u=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MEDIA_ATTACHED,o.a.MEDIA_DETACHING,o.a.FRAG_PARSING_METADATA));return n.id3Track=void 0,n.media=void 0,n}return n(e,t),e.prototype.destroy=function(){s.a.prototype.destroy.call(this)},e.prototype.onMediaAttached=function(t){this.media=t.media,this.media},e.prototype.onMediaDetaching=function(){Object(d.a)(this.id3Track),this.id3Track=void 0,this.media=void 0},e.prototype.getID3Track=function(t){for(var e=0;e<t.length;e++){var r=t[e];if("metadata"===r.kind&&"id3"===r.label)return Object(d.b)(r,this.media),r}return this.media.addTextTrack("metadata","id3")},e.prototype.onFragParsingMetadata=function(t){var e=t.frag,r=t.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=l.a.getID3Frames(r[a].data);if(n){var o=r[a].pts,s=a<r.length-1?r[a+1].pts:e.endPTS;o===s&&(s+=1e-4);for(var d=0;d<n.length;d++){var u=n[d];if(!l.a.isTimeStampFrame(u)){var f=new i(o,s,"");f.value=u,this.id3Track.addCue(f)}}}}},e}(s.a);e.a=u},function(t,e,r){"use strict";function i(t,e){var r=null;try{r=new window.Event("addtrack")}catch(t){r=document.createEvent("Event"),r.initEvent("addtrack",!1,!1)}r.track=t,e.dispatchEvent(r)}function a(t){if(t&&t.cues)for(;t.cues.length>0;)t.removeCue(t.cues[0])}e.b=i,e.a=a},function(t,e,r){"use strict";function i(){var t=Object(a.a)(),e=window.SourceBuffer||window.WebKitSourceBuffer,r=t&&"function"==typeof t.isTypeSupported&&t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!e||e.prototype&&"function"==typeof e.prototype.appendBuffer&&"function"==typeof e.prototype.remove;return!!r&&!!i}e.a=i;var a=r(10)},function(t,e,r){"use strict";r.d(e,"a",function(){return g});var i=r(53),a=r(56),n=r(57),o=r(58),s=r(59),l=r(4),d=(r.n(l),r(4)),u=(r.n(d),r(4)),f=(r.n(u),r(4)),c=(r.n(f),r(4)),h=(r.n(c),r(4)),p=(r.n(h),r(4)),v=(r.n(p),r(60)),g={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:s.a,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:i.a,bufferController:a.a,capLevelController:n.a,fpsController:o.a,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,requestMediaKeySystemAccessFunc:v.a}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(17),d=r(2),u=r(0),f=r(54),c=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),h=window,p=h.performance,v=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.FRAG_LOADING,o.a.FRAG_LOADED,o.a.FRAG_BUFFERED,o.a.ERROR));return n.lastLoadedFragLevel=0,n._nextAutoLevel=-1,n.hls=r,n.timer=null,n._bwEstimator=null,n.onCheck=n._abandonRulesCheck.bind(n),n}return n(e,t),e.prototype.destroy=function(){this.clearTimer(),s.a.prototype.destroy.call(this)},e.prototype.onFragLoading=function(t){var e=t.frag;if("main"===e.type&&(this.timer||(this.fragCurrent=e,this.timer=setInterval(this.onCheck,100)),!this._bwEstimator)){var r=this.hls,i=r.config,a=e.level,n=r.levels[a].details.live,o=void 0,s=void 0;n?(o=i.abrEwmaFastLive,s=i.abrEwmaSlowLive):(o=i.abrEwmaFastVoD,s=i.abrEwmaSlowVoD),this._bwEstimator=new f.a(r,s,o,i.abrEwmaDefaultEstimate)}},e.prototype._abandonRulesCheck=function(){var t=this.hls,e=t.media,r=this.fragCurrent;if(r){var i=r.loader,a=t.minAutoLevel;if(!i||i.stats&&i.stats.aborted)return u.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var n=i.stats;if(e&&n&&(!e.paused&&0!==e.playbackRate||!e.readyState)&&r.autoLevel&&r.level){var s=p.now()-n.trequest,d=Math.abs(e.playbackRate);if(s>500*r.duration/d){var f=t.levels,c=Math.max(1,n.bw?n.bw/8:1e3*n.loaded/s),h=f[r.level],v=h.realBitrate?Math.max(h.realBitrate,h.bitrate):h.bitrate,g=n.total?n.total:Math.max(n.loaded,Math.round(r.duration*v/8)),m=e.currentTime,y=(g-n.loaded)/c,b=(l.a.bufferInfo(e,m,t.config.maxBufferHole).end-m)/d;if(b<2*r.duration/d&&y>b){var E=void 0,T=void 0;for(T=r.level-1;T>a;T--){var S=f[T].realBitrate?Math.max(f[T].realBitrate,f[T].bitrate):f[T].bitrate;if((E=r.duration*S/(6.4*c))<b)break}E<y&&(u.b.warn("loading too slow, abort fragment loading and switch to level "+T+":fragLoadedDelay["+T+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+E.toFixed(1)+"<"+y.toFixed(1)+":"+b.toFixed(1)),t.nextLoadLevel=T,this._bwEstimator.sample(s,n.loaded),i.abort(),this.clearTimer(),t.trigger(o.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:n}))}}}}},e.prototype.onFragLoaded=function(t){var e=t.frag;if("main"===e.type&&!isNaN(e.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=e.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[e.level],i=(r.loaded?r.loaded.bytes:0)+t.stats.loaded,a=(r.loaded?r.loaded.duration:0)+t.frag.duration;r.loaded={bytes:i,duration:a},r.realBitrate=Math.round(8*i/a)}if(t.frag.bitrateTest){var n=t.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(t)}}},e.prototype.onFragBuffered=function(t){var e=t.stats,r=t.frag;if(!(!0===e.aborted||"main"!==r.type||isNaN(r.sn)||r.bitrateTest&&e.tload!==e.tbuffered)){var i=e.tparsed-e.trequest;u.b.log("latency/loading/parsing/append/kbps:"+Math.round(e.tfirst-e.trequest)+"/"+Math.round(e.tload-e.tfirst)+"/"+Math.round(e.tparsed-e.tload)+"/"+Math.round(e.tbuffered-e.tparsed)+"/"+Math.round(8*e.loaded/(e.tbuffered-e.trequest))),this._bwEstimator.sample(i,e.loaded),e.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}},e.prototype.onError=function(t){switch(t.details){case d.a.FRAG_LOAD_ERROR:case d.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},e.prototype.clearTimer=function(){clearInterval(this.timer),this.timer=null},e.prototype._findBestLevel=function(t,e,r,i,a,n,o,s,l){for(var d=a;d>=i;d--){var f=l[d],c=f.details,h=c?c.totalduration/c.fragments.length:e,p=!!c&&c.live,v=void 0;v=d<=t?o*r:s*r;var g=l[d].realBitrate?Math.max(l[d].realBitrate,l[d].bitrate):l[d].bitrate,m=g*h/v;if(u.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(v)+"/"+g+"/"+h+"/"+n+"/"+m),v>g&&(!m||p&&!this.bitrateTestDelay||m<n))return d}return-1},c(e,[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this._bwEstimator;if(!(-1===t||e&&e.canEstimate()))return t;var r=this._nextABRAutoLevel;return-1!==t&&(r=Math.min(t,r)),r},set:function(t){this._nextAutoLevel=t}},{key:"_nextABRAutoLevel",get:function(){var t=this.hls,e=t.maxAutoLevel,r=t.levels,i=t.config,a=t.minAutoLevel,n=t.media,o=this.lastLoadedFragLevel,s=this.fragCurrent?this.fragCurrent.duration:0,d=n?n.currentTime:0,f=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(l.a.bufferInfo(n,d,i.maxBufferHole).end-d)/f,p=this._findBestLevel(o,s,c,a,e,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(p>=0)return p;u.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var v=s?Math.min(s,i.maxStarvationDelay):i.maxStarvationDelay,g=i.abrBandWidthFactor,m=i.abrBandWidthUpFactor;if(0===h){var y=this.bitrateTestDelay;if(y){v=(s?Math.min(s,i.maxLoadingDelay):i.maxLoadingDelay)-y,u.b.trace("bitrate test took "+Math.round(1e3*y)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*v)+" ms"),g=m=1}}return p=this._findBestLevel(o,s,c,a,e,h+v,g,m,r),Math.max(p,0)}}]),e}(s.a);e.a=v},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(55),n=function(){function t(e,r,n,o){i(this,t),this.hls=e,this.defaultEstimate_=o,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new a.a(r),this.fast_=new a.a(n)}return t.prototype.sample=function(t,e){t=Math.max(t,this.minDelayMs_);var r=8e3*e/t,i=t/1e3;this.fast_.sample(i,r),this.slow_.sample(i,r)},t.prototype.canEstimate=function(){var t=this.fast_;return t&&t.getTotalWeight()>=this.minWeight_},t.prototype.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},t.prototype.destroy=function(){},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(e){i(this,t),this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}return t.prototype.sample=function(t,e){var r=Math.pow(this.alpha_,t);this.estimate_=e*(1-r)+r*this.estimate_,this.totalWeight_+=t},t.prototype.getTotalWeight=function(){return this.totalWeight_},t.prototype.getEstimate=function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/t}return this.estimate_},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(0),d=r(2),u=r(10),f=Object(u.a)(),c=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MEDIA_ATTACHING,o.a.MEDIA_DETACHING,o.a.MANIFEST_PARSED,o.a.BUFFER_RESET,o.a.BUFFER_APPENDING,o.a.BUFFER_CODECS,o.a.BUFFER_EOS,o.a.BUFFER_FLUSHING,o.a.LEVEL_PTS_UPDATED,o.a.LEVEL_UPDATED));return n._msDuration=null,n._levelDuration=null,n._live=null,n._objectUrl=null,n.onsbue=n.onSBUpdateEnd.bind(n),n.onsbe=n.onSBUpdateError.bind(n),n.pendingTracks={},n.tracks={},n}return n(e,t),e.prototype.destroy=function(){s.a.prototype.destroy.call(this)},e.prototype.onLevelPtsUpdated=function(t){var e=t.type,r=this.tracks.audio;if("audio"===e&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(Math.abs(i.timestampOffset-t.start)>.1){var a=i.updating;try{i.abort()}catch(t){a=!0,l.b.warn("can not abort audio buffer: "+t)}a?this.audioTimestampOffset=t.start:(l.b.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+t.start),i.timestampOffset=t.start)}}},e.prototype.onManifestParsed=function(t){var e=t.audio,r=t.video||t.levels.length&&t.altAudio,i=0;t.altAudio&&(e||r)&&(i=(e?1:0)+(r?1:0),l.b.log(i+" sourceBuffer(s) expected")),this.sourceBufferNb=i},e.prototype.onMediaAttaching=function(t){var e=this.media=t.media;if(e){var r=this.mediaSource=new f;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),e.src=window.URL.createObjectURL(r),this._objectUrl=e.src}},e.prototype.onMediaDetaching=function(){l.b.log("media source detaching");var t=this.mediaSource;if(t){if("open"===t.readyState)try{t.endOfStream()}catch(t){l.b.warn("onMediaDetaching:"+t.message+" while calling endOfStream")}t.removeEventListener("sourceopen",this.onmso),t.removeEventListener("sourceended",this.onmse),t.removeEventListener("sourceclose",this.onmsc),this.media&&(window.URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):l.b.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(o.a.MEDIA_DETACHED)},e.prototype.onMediaSourceOpen=function(){l.b.log("media source opened"),this.hls.trigger(o.a.MEDIA_ATTACHED,{media:this.media});var t=this.mediaSource;t&&t.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()},e.prototype.checkPendingTracks=function(){var t=this.pendingTracks,e=Object.keys(t).length;e&&(this.sourceBufferNb<=e||0===this.sourceBufferNb)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},e.prototype.onMediaSourceClose=function(){l.b.log("media source closed")},e.prototype.onMediaSourceEnded=function(){l.b.log("media source ended")},e.prototype.onSBUpdateEnd=function(){if(this.audioTimestampOffset){var t=this.sourceBuffer.audio;l.b.warn("change mpeg audio timestamp offset from "+t.timestampOffset+" to "+this.audioTimestampOffset),t.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var e=this.parent,r=this.segments.reduce(function(t,r){return r.parent===e?t+1:t},0),i={},a=this.sourceBuffer;for(var n in a)i[n]=a[n].buffered;this.hls.trigger(o.a.BUFFER_APPENDED,{parent:e,pending:r,timeRanges:i}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration()},e.prototype.onSBUpdateError=function(t){l.b.error("sourceBuffer error:",t),this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.BUFFER_APPENDING_ERROR,fatal:!1})},e.prototype.onBufferReset=function(){var t=this.sourceBuffer;for(var e in t){var r=t[e];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(t){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},e.prototype.onBufferCodecs=function(t){if(0===Object.keys(this.sourceBuffer).length){for(var e in t)this.pendingTracks[e]=t[e];var r=this.mediaSource;r&&"open"===r.readyState&&this.checkPendingTracks()}},e.prototype.createSourceBuffers=function(t){var e=this.sourceBuffer,r=this.mediaSource;for(var i in t)if(!e[i]){var a=t[i],n=a.levelCodec||a.codec,s=a.container+";codecs="+n;l.b.log("creating sourceBuffer("+s+")");try{var u=e[i]=r.addSourceBuffer(s);u.addEventListener("updateend",this.onsbue),u.addEventListener("error",this.onsbe),this.tracks[i]={codec:n,container:a.container},a.buffer=u}catch(t){l.b.error("error while trying to add sourceBuffer:"+t.message),this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:t,mimeType:s})}}this.hls.trigger(o.a.BUFFER_CREATED,{tracks:t})},e.prototype.onBufferAppending=function(t){this._needsFlush||(this.segments?this.segments.push(t):this.segments=[t],this.doAppending())},e.prototype.onBufferAppendFail=function(t){l.b.error("sourceBuffer error:",t.event),this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.BUFFER_APPENDING_ERROR,fatal:!1})},e.prototype.onBufferEos=function(t){var e=this.sourceBuffer,r=t.type;for(var i in e)r&&i!==r||e[i].ended||(e[i].ended=!0,l.b.log(i+" sourceBuffer now EOS"));this.checkEos()},e.prototype.checkEos=function(){var t=this.sourceBuffer,e=this.mediaSource;if(!e||"open"!==e.readyState)return void(this._needsEos=!1);for(var r in t){var i=t[r];if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}l.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try{e.endOfStream()}catch(t){l.b.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1},e.prototype.onBufferFlushing=function(t){this.flushRange.push({start:t.startOffset,end:t.endOffset,type:t.type}),this.flushBufferCounter=0,this.doFlush()},e.prototype.onLevelUpdated=function(t){var e=t.details;e.fragments.length>0&&(this._levelDuration=e.totalduration+e.fragments[0].start,this._live=e.live,this.updateMediaElementDuration())},e.prototype.updateMediaElementDuration=function(){var t=this.hls.config,e=void 0;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var r in this.sourceBuffer)if(!0===this.sourceBuffer[r].updating)return;e=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===t.liveDurationInfinity?(l.b.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>e||e===1/0||isNaN(e))&&(l.b.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}},e.prototype.doFlush=function(){for(;this.flushRange.length;){var t=this.flushRange[0];if(!this.flushBuffer(t.start,t.end,t.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var e=0,r=this.sourceBuffer;try{for(var i in r)e+=r[i].buffered.length}catch(t){l.b.error("error while accessing sourceBuffer.buffered")}this.appended=e,this.hls.trigger(o.a.BUFFER_FLUSHED)}},e.prototype.doAppending=function(){var t=this.hls,e=this.sourceBuffer,r=this.segments;if(Object.keys(e).length){if(this.media.error)return this.segments=[],void l.b.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(r&&r.length){var i=r.shift();try{var a=i.type,n=e[a];n?n.updating?r.unshift(i):(n.ended=!1,this.parent=i.parent,n.appendBuffer(i.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(e){l.b.error("error while trying to append buffer:"+e.message),r.unshift(i);var s={type:d.b.MEDIA_ERROR,parent:i.parent};22!==e.code?(this.appendError?this.appendError++:this.appendError=1,s.details=d.a.BUFFER_APPEND_ERROR,this.appendError>t.config.appendErrorMaxRetry?(l.b.log("fail "+t.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),r=[],s.fatal=!0,t.trigger(o.a.ERROR,s)):(s.fatal=!1,t.trigger(o.a.ERROR,s))):(this.segments=[],s.details=d.a.BUFFER_FULL_ERROR,s.fatal=!1,t.trigger(o.a.ERROR,s))}}}},e.prototype.flushBuffer=function(t,e,r){var i=void 0,a=void 0,n=void 0,o=void 0,s=void 0,d=void 0,u=this.sourceBuffer;if(Object.keys(u).length){if(l.b.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+t+"/"+e),this.flushBufferCounter<this.appended){for(var f in u)if(!r||f===r){if(i=u[f],i.ended=!1,i.updating)return l.b.warn("cannot flush, sb updating in progress"),!1;try{for(a=0;a<i.buffered.length;a++)if(n=i.buffered.start(a),o=i.buffered.end(a),-1!==navigator.userAgent.toLowerCase().indexOf("firefox")&&e===Number.POSITIVE_INFINITY?(s=t,d=e):(s=Math.max(n,t),d=Math.min(o,e)),Math.min(d,o)-s>.5)return this.flushBufferCounter++,l.b.log("flush "+f+" ["+s+","+d+"], of ["+n+","+o+"], pos:"+this.media.currentTime),i.remove(s,d),!1}catch(t){l.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")}}}else l.b.warn("abort flushing too many retries");l.b.log("buffer flushed")}return!0},e}(s.a);e.a=c},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),d=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.FPS_DROP_LEVEL_CAPPING,o.a.MEDIA_ATTACHING,o.a.MANIFEST_PARSED,o.a.BUFFER_CODECS));return n.autoLevelCapping=Number.POSITIVE_INFINITY,n.firstLevel=null,n.levels=[],n.media=null,n.restrictedLevels=[],n.timer=null,n}return n(e,t),e.prototype.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this._stopCapping())},e.prototype.onFpsDropLevelCapping=function(t){e.isLevelAllowed(t.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(t.droppedLevel)},e.prototype.onMediaAttaching=function(t){this.media=t.media instanceof window.HTMLVideoElement?t.media:null},e.prototype.onManifestParsed=function(t){var e=this.hls;this.restrictedLevels=[],this.levels=t.levels,this.firstLevel=t.firstLevel,e.config.capLevelToPlayerSize&&(t.video||t.levels.length&&t.altAudio)&&this._startCapping()},e.prototype.onBufferCodecs=function(t){this.hls.config.capLevelToPlayerSize&&t.video&&this._startCapping()},e.prototype.onLevelsUpdated=function(t){this.levels=t.levels},e.prototype.detectPlayerSize=function(){if(this.media){var t=this.levels?this.levels.length:0;if(t){var e=this.hls;e.autoLevelCapping=this.getMaxLevel(t-1),e.autoLevelCapping>this.autoLevelCapping&&e.streamController.nextLevelSwitch(),this.autoLevelCapping=e.autoLevelCapping}}},e.prototype.getMaxLevel=function(t){var r=this;if(!this.levels)return-1;var i=this.levels.filter(function(i,a){return e.isLevelAllowed(a,r.restrictedLevels)&&a<=t});return e.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)},e.prototype._startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},e.prototype._stopCapping=function(){this.restrictedLevels=[],this.firstLevel=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer),this.timer=null)},e.isLevelAllowed=function(t){return-1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).indexOf(t)},e.getMaxLevelByMediaSize=function(t,e,r){if(!t||t&&!t.length)return-1;for(var i=t.length-1,a=0;a<t.length;a+=1){var n=t[a];if((n.width>=e||n.height>=r)&&function(t,e){return!e||(t.width!==e.width||t.height!==e.height)}(n,t[a+1])){i=a;break}}return i},l(e,[{key:"mediaWidth",get:function(){var t=void 0,r=this.media;return r&&(t=r.width||r.clientWidth||r.offsetWidth,t*=e.contentScaleFactor),t}},{key:"mediaHeight",get:function(){var t=void 0,r=this.media;return r&&(t=r.height||r.clientHeight||r.offsetHeight,t*=e.contentScaleFactor),t}}],[{key:"contentScaleFactor",get:function(){var t=1;try{t=window.devicePixelRatio}catch(t){}return t}}]),e}(s.a);e.a=d},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(0),d=window,u=d.performance,f=function(t){function e(r){return i(this,e),a(this,t.call(this,r,o.a.MEDIA_ATTACHING))}return n(e,t),e.prototype.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},e.prototype.onMediaAttaching=function(t){var e=this.hls.config;if(e.capLevelOnFPSDrop){"function"==typeof(this.video=t.media instanceof window.HTMLVideoElement?t.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),e.fpsDroppedMonitoringPeriod)}},e.prototype.checkFPS=function(t,e,r){var i=u.now();if(e){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,s=e-this.lastDecodedFrames,d=1e3*n/a,f=this.hls;if(f.trigger(o.a.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),d>0&&n>f.config.fpsDroppedMonitoringThreshold*s){var c=f.currentLevel;l.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(-1===f.autoLevelCapping||f.autoLevelCapping>=c)&&(c-=1,f.trigger(o.a.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:f.currentLevel}),f.autoLevelCapping=c,f.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=e}},e.prototype.checkFPSInterval=function(){var t=this.video;if(t)if(this.isVideoPlaybackQualityAvailable){var e=t.getVideoPlaybackQuality();this.checkFPS(t,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(t,t.webkitDecodedFrameCount,t.webkitDroppedFrameCount)},e}(s.a);e.a=f},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=window,o=n.performance,s=n.XMLHttpRequest,l=function(){function t(e){i(this,t),e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}return t.prototype.destroy=function(){this.abort(),this.loader=null},t.prototype.abort=function(){var t=this.loader;t&&4!==t.readyState&&(this.stats.aborted=!0,t.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},t.prototype.load=function(t,e,r){this.context=t,this.config=e,this.callbacks=r,this.stats={trequest:o.now(),retry:0},this.retryDelay=e.retryDelay,this.loadInternal()},t.prototype.loadInternal=function(){var t=void 0,e=this.context;t=this.loader=new s;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(t,e.url)}catch(r){t.open("GET",e.url,!0),i(t,e.url)}t.readyState||t.open("GET",e.url,!0)}catch(r){return void this.callbacks.onError({code:t.status,text:r.message},e,t)}e.rangeEnd&&t.setRequestHeader("Range","bytes="+e.rangeStart+"-"+(e.rangeEnd-1)),t.onreadystatechange=this.readystatechange.bind(this),t.onprogress=this.loadprogress.bind(this),t.responseType=e.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),t.send()},t.prototype.readystatechange=function(t){var e=t.currentTarget,r=e.readyState,i=this.stats,n=this.context,s=this.config;if(!i.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===i.tfirst&&(i.tfirst=Math.max(o.now(),i.trequest)),4===r){var l=e.status;if(l>=200&&l<300){i.tload=Math.max(i.tfirst,o.now());var d=void 0,u=void 0;"arraybuffer"===n.responseType?(d=e.response,u=d.byteLength):(d=e.responseText,u=d.length),i.loaded=i.total=u;var f={url:e.responseURL,data:d};this.callbacks.onSuccess(f,i,n,e)}else i.retry>=s.maxRetry||l>=400&&l<499?(a.b.error(l+" while loading "+n.url),this.callbacks.onError({code:l,text:e.statusText},n,e)):(a.b.warn(l+" while loading "+n.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,s.maxRetryDelay),i.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),s.timeout)},t.prototype.loadtimeout=function(){a.b.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},t.prototype.loadprogress=function(t){var e=t.currentTarget,r=this.stats;r.loaded=t.loaded,t.lengthComputable&&(r.total=t.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,e)},t}();e.a=l},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var i=function(){return"undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null}()},function(t,e){/*! http://mths.be/endswith v0.2.0 by @mathias */
String.prototype.endsWith||function(){"use strict";var t=function(){try{var t={},e=Object.defineProperty,r=e(t,t,t)&&e}catch(t){}return r}(),e={}.toString,r=function(t){if(null==this)throw TypeError();var r=String(this);if(t&&"[object RegExp]"==e.call(t))throw TypeError();var i=r.length,a=String(t),n=a.length,o=i;if(arguments.length>1){var s=arguments[1];void 0!==s&&(o=s?Number(s):0)!=o&&(o=0)}var l=Math.min(Math.max(o,0),i),d=l-n;if(d<0)return!1;for(var u=-1;++u<n;)if(r.charCodeAt(d+u)!=a.charCodeAt(u))return!1;return!0};t?t(String.prototype,"endsWith",{value:r,configurable:!0,writable:!0}):String.prototype.endsWith=r}()}]).default});

},{}],4:[function(require,module,exports){
/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false && isObject(value) && ('@binding' in value))
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (process.env.NODE_ENV !== 'production') {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== 'production') {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

},{}],5:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
global = window;
global.system =
    {
        maxRetry: 2,
        maxParallelDownload: 10,
        verbosity: 1
    };
const _path = __importStar(require("path"));
const dos = __importStar(require("./__shared__/module_fs"));
const module_log_1 = require("./__shared__/module_log");
const module_utils_1 = require("./__shared__/module_utils");
const _liveomg = __importStar(require("./module_liveomg"));
const _vk = __importStar(require("./module_vk"));
const _periscope = __importStar(require("./module_lsd_periscope"));
const _younow = __importStar(require("./module_lsd_younow"));
const _youtube = __importStar(require("./module_lsd_youtube"));
const module_lsd_1 = require("./module_lsd");
const cmdDownloadURL_1 = require("./cmdDownloadURL");
const vue_1 = __importDefault(require("vue"));
const hls_js_1 = __importDefault(require("hls.js"));
function analyseSearchUrl(url) {
    if (url.match(/liveomg.com/i)) {
        return {
            parser: "liveomg",
            url: url,
            params: null
        };
    }
    else {
        let m = url.split(":");
        if (m) {
            switch (m[0]) {
                case "younow":
                case "periscope":
                case "youtube":
                    return {
                        parser: m[0],
                        url: null,
                        params: m.splice(1)
                    };
            }
        }
        module_log_1.debug(m);
        return null;
    }
}
let settings = Object.assign({
    addOnClick: false,
    filenameTemplate: "service_country_username_date_title_type_bid_uid",
    forceReplay: false,
    isAutoRefresh: true,
    maxParallelDownload: 10,
    pathDownload: ".",
    pathMove: null,
    refreshTimeout: 180,
    videoStartMuted: true,
    saveJSON: false,
    saveThumbnail: false,
    searchUrls: [
        "http://liveomg.com/?sort=best",
        "periscope:tag:talk",
        "younow:tag:music",
        "youtube:music,live"
    ],
    stayAlive: 0,
    useFFMPEG: "-loglevel error -c copy -bsf:a aac_adtstoasc -metadata title='LiveStreamingDownloader'",
    videoFormat: "ts"
}, JSON.parse(localStorage.getItem("settings")) || {});
global.system.maxParallelDownload = settings.maxParallelDownload;
let users = (JSON.parse(localStorage.getItem("users")) || {});
window.vue = new vue_1.default({
    el: "#app",
    data: {
        settings: settings,
        users: users,
        ignoredUsers: {},
        currentTab: 0,
        broadcasts: {},
        indexBroadcasts: [],
        recordings: {},
        ignoredBroadcasts: {},
        directDownload: "",
        alert: null,
        overId: null,
        overCounter: null,
        videos: {},
        popupTimeout: null,
        popupActive: false,
        infos: null,
        timeout: null,
        counter: 0,
        memory: null
    },
    methods: {
        async resolveUser(broadcast) {
            let userInfos;
            switch (broadcast.service) {
                case "vk":
                    userInfos = await _vk.resolveUser(broadcast);
                    break;
                case "periscope":
                    userInfos = await _periscope.resolveUser(broadcast);
                    break;
                case "younow":
                    userInfos = await _younow.resolveUser(broadcast);
                    break;
            }
            return userInfos;
        },
        computeId(broadcast) {
            return broadcast.service + (broadcast.userId || broadcast.username);
        },
        addUser(id, user) {
            this.$set(this.users, id, user);
        },
        delUser(id) {
            this.$delete(this.users, id);
        },
        banUser(id) {
            this.$set(this.ignoredUsers, id, true);
        },
        unBanUser(id) {
            this.$delete(this.ignoredUsers, id);
        },
        async downloadURL() {
            module_log_1.debug("downloadURL", this.directDownload);
            let url = this.directDownload;
            this.directDownload = "";
            cmdDownloadURL_1.downloadURL(url)
                .then(broadcast => {
                broadcast.url = url;
                this.recordBroadcast(broadcast, null, true);
            })
                .catch(err => {
                this.showAlert(`${url} fail with ${err}`, "uk-alert-danger");
            });
        },
        async recordBroadcast(broadcast, index, record) {
            let id = broadcast.broadcastId;
            module_log_1.debug("recordBroadcast", index, id, broadcast);
            if (record) {
                let user = {
                    service: broadcast.service,
                    userId: broadcast.userId,
                    username: broadcast.username,
                    nickname: broadcast.nickname
                };
                if (this.settings.addOnClick)
                    this.addUser(this.computeId(broadcast), user);
                this.$set(this.recordings, id, broadcast);
                if (index != null) {
                    this.$delete(this.indexBroadcasts, index);
                    this.$delete(this.broadcasts, id);
                }
                this.ignoredBroadcasts[id] = true;
            }
            let broadcastState;
            let doneLive = false, doneReplay = false, fail = null;
            try {
                switch (broadcast.service) {
                    case "vk":
                        let vkBroadcast = await _vk.getBroadcast(broadcast.url);
                        module_log_1.trace("vk.getBroadcast", vkBroadcast);
                        if (!record) {
                            let videoPlayer = new VideoPlayer(broadcast, vkBroadcast.postlive_mp4 || vkBroadcast.hls);
                            videoPlayer.createVideoElement()
                                .then(video => {
                                videoPlayer.start(module_log_1.error);
                            });
                            return;
                        }
                        else if (vkBroadcast.postlive_mp4) {
                            doneReplay = await _vk.downloadReplay(vkBroadcast, this.settings.pathDownload);
                        }
                        else {
                            let videoFilename = _vk.createFilename(vkBroadcast) + ".ts";
                            doneLive = await _vk.downloadLive(vkBroadcast, videoFilename, this.settings.useFFMPEG);
                            if (this.settings.forceReplay) {
                                vkBroadcast = await _vk.getBroadcast(broadcast.url);
                                doneReplay = await _vk.downloadReplay(vkBroadcast, this.settings.pathDownload);
                                if (doneLive && doneReplay)
                                    dos.del(videoFilename);
                            }
                        }
                        break;
                    case "periscope":
                        let pscpBroadcast = await _periscope.getBroadcast(broadcast.broadcastId);
                        module_log_1.trace("pscp.getBroadcast", pscpBroadcast);
                        if (!record) {
                            let videoPlayer = new VideoPlayer(broadcast, pscpBroadcast.replay_url || pscpBroadcast.hls_url || pscpBroadcast.https_hls_url);
                            videoPlayer.createVideoElement()
                                .then(video => {
                                videoPlayer.start(module_log_1.error);
                            });
                            return;
                        }
                        else if (pscpBroadcast.replay_url) {
                            doneReplay = await _periscope.downloadReplay(pscpBroadcast, this.settings.pathDownload, this.settings.useFFMPEG, this.settings.videoFormat);
                        }
                        else {
                            let videoFilename = _periscope.createFilename(pscpBroadcast.broadcast) + ".ts";
                            doneLive = await _periscope.downloadLive(pscpBroadcast, videoFilename, this.settings.useFFMPEG);
                            if (this.settings.forceReplay) {
                                pscpBroadcast = await _periscope.getBroadcast(broadcast.broadcastId);
                                module_log_1.trace("replay.getBroadcast", pscpBroadcast);
                                doneReplay = await _periscope.downloadReplay(pscpBroadcast, this.settings.pathDownload, this.settings.useFFMPEG, this.settings.videoFormat);
                                if (doneLive && doneReplay)
                                    dos.del(videoFilename);
                            }
                        }
                        break;
                    case "younow":
                        let videoFilename;
                        let ynBroadcast = await _younow.getLiveBroadcastByUsername(broadcast.username);
                        module_log_1.trace("getLiveBroadcastByUsername", ynBroadcast);
                        if (ynBroadcast.errorCode == 0 && !ynBroadcast.dropReason) {
                            let basename = module_lsd_1.createFilename(_younow.filenameGeneratorLive(ynBroadcast), this.settings.pathDownload);
                            videoFilename = basename + ".flv";
                            doneLive = await _younow.downloadLive(ynBroadcast, videoFilename, this.settings.useFFMPEG);
                        }
                        if (doneLive == false || this.settings.forceReplay) {
                            let user = await _younow.getUserInfoByUID(broadcast.userId);
                            module_log_1.trace("getUserInfoByUID", user);
                            if (user.errorCode)
                                throw _younow.errortoString(user);
                            let ynArchived = await _younow.getArchivedBroadcast(broadcast.broadcastId);
                            module_log_1.trace("getArchivedBroadcast", ynArchived);
                            if (ynArchived.errorCode)
                                throw _younow.errortoString(ynArchived);
                            if (!ynArchived.videoAvailable || ynArchived.noLongerAvailable)
                                throw "no longer available";
                            doneReplay = await _younow.downloadReplay(user, ynArchived, ynBroadcast.broadcastId, this.settings.pathDownload, this.settings.useFFMPEG, this.settings.videoFormat, global.system.maxParallelDownload);
                            if (doneLive && doneReplay)
                                dos.del(videoFilename);
                        }
                        break;
                    case "youtube":
                        let ytbBroadcast = await _youtube.getBroadcast(broadcast.broadcastId);
                        module_log_1.trace("youtube.GetBroadcast", ytbBroadcast);
                        if (!record) {
                            let format = _youtube.resolveLive(ytbBroadcast);
                            let videoPlayer = new VideoPlayer(broadcast, format.url);
                            videoPlayer.createVideoElement()
                                .then(video => {
                                videoPlayer.start(module_log_1.error);
                            });
                            return;
                        }
                        else {
                            let doneLive = await _youtube.downloadBroadcast(ytbBroadcast);
                        }
                        break;
                    default:
                        module_log_1.debug(broadcast);
                }
            }
            catch (err) {
                module_log_1.error(err.stack || err);
                fail = err;
            }
            this.showAlert(`${broadcast.username || broadcast.nickname || "missing data"} : ${doneReplay ? "replay downloaded" : doneLive ? "live ended" : fail}`, (doneReplay || doneLive) ? "uk-alert-success" : "uk-alert-danger");
            module_log_1.trace(broadcast, "live", doneLive, "replay", doneReplay, "error", fail);
            this.$delete(this.recordings, id);
        },
        async showPopup(event) {
            let el = event.target;
            this.popupActive = true;
            let broadcast = this.broadcasts[this.indexBroadcasts[el.id]];
            let userInfos = await this.resolveUser(broadcast);
            this.infos = userInfos;
        },
        mouseout(e) {
            this.popupTimeout && clearTimeout(this.popupTimeout);
            this.popupActive = false;
            setTimeout(() => {
                this.infos = null;
            }, 1000);
        },
        mouseover(event) {
            this.popupTimeout = setTimeout(err => {
                this.showPopup(event);
            }, 2000);
        },
        clickOnVideos(event, hls, key) {
            module_log_1.debug("clickOnVideos", key, hls, event);
            let el = event.target;
            switch (el.id) {
                case "fullscreen":
                    hls.video.webkitRequestFullscreen();
                    break;
                case "record":
                    break;
                case "close":
                    hls.destroy();
                    this.$delete(this.videos, key);
                    break;
            }
        },
        clickOnThumbnail(event) {
            let button = event.button;
            let el = event.target;
            let index = parseInt(el.parentElement.id);
            let key = this.indexBroadcasts[index];
            let broadcast = this.broadcasts[key];
            module_log_1.debug("clickOnThumbnail", index, key, broadcast);
            switch (el.id) {
                case "add":
                    throw "todo add";
                case "block":
                    this.ignoredUsers[broadcast.userId] = true;
                    this.$delete(this.indexBroadcasts, index);
                    delete this.broadcasts[key];
                    break;
                case "record":
                    this.recordBroadcast(broadcast, index, true);
                    break;
                case "play":
                    this.recordBroadcast(broadcast, index, false);
                    break;
                default:
                    throw "todo";
            }
        },
        overThumbnails(event) {
            module_log_1.debug(this, event);
        },
        fixResize() {
            module_log_1.debug(this);
        },
        async refresh() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.counter = 0;
            this.showAlert(`update broadcasts`, "uk-alert-primary");
            let requests = this.settings.searchUrls.map(url => {
                let search = analyseSearchUrl(url);
                module_log_1.debug("searchUrl", search);
                if (search) {
                    if (search.parser == "liveomg") {
                        return fetch(search.url)
                            .then(res => {
                            if (!res.ok)
                                throw res.statusText;
                            return res.text();
                        })
                            .then(body => {
                            return _liveomg.parse(body);
                        })
                            .catch(err => {
                            module_log_1.error(err);
                            return null;
                        });
                    }
                    else if (search.parser == "younow") {
                        switch (search.params[0]) {
                            case "tag":
                                return _younow.getTagInfo(search.params[1])
                                    .then(tagInfo => {
                                    if (tagInfo.errorCode)
                                        throw _younow.errortoString(tagInfo);
                                    let broadcasts = tagInfo.items.map(user => {
                                        let broadcast = {
                                            broadcastId: user.broadcastId,
                                            viewers: user.viewers,
                                            username: user.profile,
                                            isGone: false,
                                            service: "younow",
                                            thumbnail: _younow.resolveThumbnail(user.broadcastId),
                                            url: "https://www.younow.com/" + user.profile,
                                            userId: user.userId,
                                            archived: false,
                                            nickname: "",
                                            title: ""
                                        };
                                        return broadcast;
                                    });
                                    return broadcasts;
                                })
                                    .catch(err => {
                                    module_log_1.error(err);
                                    return null;
                                });
                            case "top":
                                return _younow.getTrendings(search.params[1] || "en")
                                    .then(trendings => {
                                    if (trendings.errorCode)
                                        throw _younow.errortoString(trendings);
                                    let broadcasts = trendings.trending_users.map(user => {
                                        let broadcast = {
                                            broadcastId: user.broadcastId,
                                            viewers: +user.viewers,
                                            username: user.profile,
                                            isGone: false,
                                            service: "younow",
                                            thumbnail: _younow.resolveThumbnail(+user.broadcastId),
                                            url: "https://www.younow.com/" + user.profile,
                                            userId: user.userId,
                                            archived: false,
                                            nickname: "",
                                            title: ""
                                        };
                                        return broadcast;
                                    });
                                    return broadcasts;
                                })
                                    .catch(err => {
                                    module_log_1.error(err);
                                    return null;
                                });
                            case "follow":
                                return _younow.getLiveBroadcastByUsername(search.params[1])
                                    .then(live => {
                                    if (live.errorCode && live.errorCode != 206)
                                        throw _younow.errortoString(live);
                                    return _younow.getOnlineFollowed(live.userId);
                                })
                                    .then(async (followed) => {
                                    if (followed.errorCode)
                                        throw _younow.errortoString(followed);
                                    let broadcasts = [];
                                    for (let user of followed.users) {
                                        if (user.status == 2) {
                                            let live = await _younow.getLiveBroadcastByUID(user.userId);
                                            if (live.errorCode == 0
                                                && user.status == 2) {
                                                broadcasts.push({
                                                    broadcastId: live.broadcastId,
                                                    isGone: false,
                                                    service: "younow",
                                                    url: "https://www.younow.com/" + user.profile,
                                                    userId: user.userId,
                                                    username: user.profile,
                                                    nickname: live.username,
                                                    viewers: user.viewers,
                                                    thumbnail: live.awsUrl,
                                                    archived: false,
                                                    title: live.title
                                                });
                                            }
                                        }
                                    }
                                    return broadcasts;
                                })
                                    .catch(err => {
                                    module_log_1.debug("younow:follow", err);
                                    return null;
                                });
                            default:
                                return null;
                        }
                    }
                    else if (search.parser == "periscope") {
                        let wantLive = false;
                        let wantReplay = false;
                        switch (search.params[0]) {
                            case "replay":
                                wantReplay = true;
                                break;
                            case "live":
                                wantLive = true;
                                break;
                            case "search":
                                wantLive = true;
                                wantReplay = true;
                                break;
                            case "tag":
                                return _periscope.searchTag(search.params[1], (search.params[2] || "en,en-us").split(","));
                            default:
                                throw search;
                        }
                        return _periscope.broadcastSearchPublic(search.params[1])
                            .then(search => {
                            let broadcasts = [];
                            let bid = {};
                            search.forEach(broadcast => {
                                if (broadcast.id in bid) {
                                    module_log_1.debug("ignore", broadcast);
                                    return;
                                }
                                let state = broadcast.state == "RUNNING";
                                if (state && !wantLive)
                                    return;
                                if (!state && !wantReplay)
                                    return;
                                bid[broadcast.id] = true;
                                module_log_1.debug(broadcast.state, broadcast.id, broadcast.user_id, broadcast.username, broadcast.status, broadcast.tags);
                                broadcasts.push({
                                    broadcastId: broadcast.id,
                                    viewers: broadcast.n_total_watching,
                                    isGone: false,
                                    service: "periscope",
                                    userId: broadcast.user_id,
                                    username: broadcast.username,
                                    nickname: broadcast.user_display_name,
                                    thumbnail: broadcast.image_url_small,
                                    url: `https://www.pscp.tv/${broadcast.username}/${broadcast.id}`,
                                    archived: state,
                                    title: broadcast.status
                                });
                            });
                            return broadcasts;
                        })
                            .catch(err => {
                            module_log_1.error(err);
                            return null;
                        });
                    }
                    else if (search.parser == "youtube") {
                        return _youtube.search(search.params[0]);
                    }
                    else {
                        module_log_1.debug("not supported", url);
                        return Promise.resolve(null);
                    }
                }
            });
            await Promise.all(requests)
                .then(results => {
                let broadcasts = {};
                results.forEach((result) => {
                    if (result) {
                        result.forEach(user => {
                            if (user.broadcastId in this.ignoredBroadcasts
                                || user.userId in this.ignoredUsers
                                || user.broadcastId in this.recordings
                                || user.broadcastId in broadcasts) {
                            }
                            else {
                                broadcasts[user.broadcastId] = user;
                            }
                        });
                    }
                });
                if (this.settings.stayAlive) {
                    for (let key of this.indexBroadcasts) {
                        let broadcast = this.broadcasts[key];
                        if (broadcast.broadcastId in broadcasts
                            || broadcast.broadcastId in this.ignoredBroadcasts) {
                        }
                        else if (!this.broadcasts[key].isGone) {
                            broadcasts[key] = this.broadcasts[key];
                            broadcasts[key].isGone = true;
                        }
                    }
                }
                this.indexBroadcasts = Object.keys(broadcasts)
                    .sort((a, b) => broadcasts[b].viewers - broadcasts[a].viewers);
                document.title = `len ${this.indexBroadcasts.length}`;
                this.broadcasts = broadcasts;
                this.indexBroadcasts.forEach((bid, index) => {
                    let broadcast = this.broadcasts[bid];
                    let key = this.computeId(broadcast);
                    if (key in this.users) {
                        this.recordBroadcast(broadcast, index, true);
                    }
                });
            })
                .catch(module_log_1.error)
                .then(bool => {
                this.countDown();
            });
        },
        checkUrl(idx) {
            module_log_1.debug("checkUrl", idx);
        },
        addUrl() {
            this.settings.searchUrls.push("");
        },
        delUrl(idx) {
            this.settings.searchUrls.splice(idx, 1);
        },
        countDown() {
            if (this.settings.isAutoRefresh == false) {
                this.counter = 0;
                return;
            }
            this.counter++;
            if (this.counter > this.settings.refreshTimeout) {
                this.counter = 0;
                this.refresh();
            }
            else {
                this.timeout = setTimeout(this.countDown, 1000);
            }
        },
        ignoreAll() {
            this.indexBroadcasts.forEach(key => this.ignoredBroadcasts[key] = true);
            this.indexBroadcasts = [];
            this.broadcasts = {};
        },
        updateFilenameTemplate() {
            module_log_1.debug("updateFilenameTemplate", this);
        },
        updatePathDownload() {
            module_log_1.debug("ui set updatePathDownload", this);
        },
        imgError(evt, broadcast) {
            console.debug("imgError", this, evt);
            if (window)
                return;
            broadcast.thumbnail = "../images/error.png";
            evt.target.src = broadcast.thumbnail;
        },
        showAlert(msg, level) {
            module_log_1.debug("ui showAlert", msg, level);
            let id = document.getElementById("alert");
            this.alert =
                {
                    message: msg,
                    "class": level
                };
            setTimeout(() => {
                this.alert = null;
            }, 5000);
        },
        keyboard(e) {
            if (e.code == "Tab" && e.ctrlKey) {
                this.currentTab = (this.currentTab + 1) % 5;
            }
            else if (this.currentTab == 0) {
                if (e.code == "Delete") {
                    this.ignoreAll();
                }
                else if (e.code == "KeyR" || e.code == "F5") {
                    this.refresh();
                }
            }
        },
        openDonationLink() {
            const Shell = require("electron").shell;
            Shell.openExternal("https://blockchain.info/address/14bpqrNgreKaFtLaK85ArtcUKyAxuKpwJM");
        },
        async testing(...args) {
            require("./unitTesting").unitTesting(args);
        }
    },
    computed: {
        logs() {
            return "todo";
        }
    },
    watch: {
        "settings": {
            handler: (updated) => {
                module_log_1.debug("settings updated");
                localStorage.setItem("settings", JSON.stringify(updated));
            }, deep: true
        },
        "users": (updated) => {
            module_log_1.debug("users updated");
            localStorage.setItem("users", JSON.stringify(updated));
        },
        "ignoredUsers": (updated) => {
            module_log_1.debug("ignoredUsers updated");
            localStorage.setItem("ignoredUsers", JSON.stringify(updated));
        }
    },
    mounted() {
        document.addEventListener("keydown", this.keyboard);
        document.addEventListener("error", e => {
            module_log_1.debug("doc.error", e);
        });
        document.addEventListener("error", e => {
            module_log_1.debug("win.error", e);
        });
    }
});
function moveFile(pathMove, filename) {
    let dst = pathMove
        .replace("*date*", module_utils_1.formatDate(new Date()))
        .replace(/\*\w+\*/g, "");
    return dos.createDirectory(dst)
        .then(bool => {
        dst = _path.join(dst, _path.basename(filename));
        module_log_1.debug("moveFile", filename, dst, bool);
        return bool ? dos.moveTo(filename, dst) : null;
    })
        .catch(module_log_1.error);
}
class VideoPlayer {
    constructor(broadcast, url) {
        this.video = null;
        this.hls = new hls_js_1.default({
            autoStartLoad: true
        });
        this.broadcast = broadcast;
        this.url = url;
    }
    createVideoElement() {
        global.vue.$set(global.vue.videos, this.broadcast.broadcastId, this);
        return global.vue.$nextTick()
            .then(res => {
            this.video = global.vue.$refs.video.find(el => el.parentElement.id == this.broadcast.broadcastId);
            this.video.muted = global.vue.settings.videoStartMuted;
            return this.video;
        });
    }
    start(callback) {
        this.hls.attachMedia(this.video);
        this.hls.loadSource(this.url);
        this.hls.on(hls_js_1.default.Events.MANIFEST_PARSED, result => {
            module_log_1.debug("MANIFEST_PARSED", result);
            callback(null);
        });
        this.hls.on(hls_js_1.default.Events.ERROR, (evt, data) => {
            module_log_1.error(data);
            if (data.fatal) {
                this.destroy();
            }
            callback(data);
        });
    }
    destroy() {
        module_log_1.debug("VideoPlayer.destroy");
        this.hls.destroy();
        if (this.video)
            global.vue.$delete(global.vue.videos, this.broadcast.broadcastId);
    }
}
},{"./__shared__/module_fs":17,"./__shared__/module_log":19,"./__shared__/module_utils":21,"./cmdDownloadURL":6,"./module_liveomg":7,"./module_lsd":8,"./module_lsd_periscope":10,"./module_lsd_younow":11,"./module_lsd_youtube":12,"./module_vk":13,"./unitTesting":14,"electron":2,"hls.js":3,"path":undefined,"vue":4}],6:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_log_1 = require("./__shared__/module_log");
const _url = __importStar(require("url"));
const _youtube = __importStar(require("./__shared__/module_youtube"));
const _lsdYoutube = __importStar(require("./module_lsd_youtube"));
const _lsdYounow = __importStar(require("./module_lsd_younow"));
const _lsdVk = __importStar(require("./module_vk"));
const _lsdPscp = __importStar(require("./module_lsd_periscope"));
async function downloadURL(url) {
    let parsedUrl = _url.parse(url);
    module_log_1.log(parsedUrl);
    let domain = parsedUrl.hostname.match(/(.+\.|)([a-z]+\.[a-z]+)/);
    let broadcast;
    switch (domain[2]) {
        case "younow.com":
            {
                let id = _lsdYounow.getIdFromURL(url);
                let live = await (isNaN(id) ? _lsdYounow.getLiveBroadcastByUsername(id) : _lsdYounow.getLiveBroadcastByUID(id));
                return _lsdYounow.fillBroadcast(live);
            }
        case "vk.com":
            {
                let infos = await _lsdVk.getBroadcast(url);
                return _lsdVk.fillBroadcast(infos);
            }
        case "pscp.tv":
            {
                let id = _lsdPscp.parseURL(url);
                let infos = await _lsdPscp.getBroadcast(id);
                return _lsdPscp.fillBroadcast(infos);
            }
        case "youtube.com":
        case "youtube.be":
            {
                let id = _youtube.getIdFromURL(url);
                let infos = await _youtube.getInfos(id);
                return _lsdYoutube.fillBroadcast(infos);
            }
        default:
            throw `${domain} not supported`;
    }
}
exports.downloadURL = downloadURL;
},{"./__shared__/module_log":19,"./__shared__/module_youtube":22,"./module_lsd_periscope":10,"./module_lsd_younow":11,"./module_lsd_youtube":12,"./module_vk":13,"url":undefined}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_log_1 = require("./__shared__/module_log");
const module_net_1 = require("./__shared__/module_net");
function parse(body) {
    let parser = new DOMParser().parseFromString(body, "text/html");
    let broadcasts = parser.querySelectorAll("#applications li");
    return Array.from(broadcasts).map((broadcast) => {
        let id = broadcast.dataset.id;
        let img = broadcast.querySelector("img");
        let userElement = broadcast.querySelector("a.username");
        let viewers = parseInt(broadcast.querySelector("span.viewers").textContent || "0");
        if (id && img && userElement) {
            let href = userElement.href;
            let username = userElement.innerText;
            let thumbnail = module_net_1.extractDomainFromHostname(new URL(img.src).hostname);
            let user = module_net_1.extractDomainFromHostname(new URL(href).hostname);
            let m = id.match(/id-(.+?)-(.+)/);
            if (m && m.length == 3) {
                switch (m[1]) {
                    case "vk.com":
                        let vk = href.match(/video_ext\.php\?oid=(\d+)&id=(\d+)&hash=(\d+)/);
                        if (vk && vk.length == 4 && m[2] == vk[1]) {
                            return {
                                service: "vk",
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
                            };
                        }
                    case "periscope.tv":
                        let p = href.match(/pscp.tv\/(w|\w+)\/(\w+)/);
                        if (p && p.length == 3) {
                            return {
                                service: "periscope",
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
                            };
                        }
                    case "younow.com":
                        let y = href.match(/younow.com\/(\w+)/);
                        let ybid = img.src.match(/broadcastId=(\d+)/);
                        if (y && ybid) {
                            return {
                                service: "younow",
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
                            };
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
                module_log_1.debug(m);
            }
        }
        else {
            module_log_1.debug(broadcast);
        }
        return null;
    }).filter(broadcast => broadcast != null);
}
exports.parse = parse;
},{"./__shared__/module_log":19,"./__shared__/module_net":20}],8:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _path = __importStar(require("path"));
const module_utils_1 = require("./__shared__/module_utils");
const module_log_1 = require("./__shared__/module_log");
function createFilename(infos, pathDownload) {
    module_log_1.debug(global.vue.settings.filenameTemplate);
    module_log_1.debug(infos);
    module_log_1.debug(pathDownload);
    let filename = module_utils_1.cleanFilename(global.vue.settings.filenameTemplate
        .replace("service", infos.service.capitalizeFirstLetter())
        .replace("country", infos.country || infos.language || "XX"))
        .replace("username", infos.username)
        .replace("date", module_utils_1.formatDateTime(infos.date || new Date()))
        .replace("title", infos.title)
        .replace("type", infos.type)
        .replace("bid", infos.broadcastId)
        .replace("uid", infos.userId);
    return _path.join(pathDownload, filename);
}
exports.createFilename = createFilename;
},{"./__shared__/module_log":19,"./__shared__/module_utils":21,"path":undefined}],9:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _cp = __importStar(require("child_process"));
const module_log_1 = require("./__shared__/module_log");
function ffmpeg(inpfile, outfile, options) {
    return new Promise((resolve, reject) => {
        let args = ["-i", inpfile, ...options.split(" "), "-y", outfile];
        let ffmpeg = _cp.spawn("app/bin/ffmpeg", args);
        ffmpeg.stderr.pipe(process.stdout);
        ffmpeg.on("error", err => {
            module_log_1.error(err);
            reject(false);
        });
        ffmpeg.on("exit", code => {
            resolve(code == 0);
        });
    });
}
exports.ffmpeg = ffmpeg;
},{"./__shared__/module_log":19,"child_process":undefined}],10:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_log_1 = require("./__shared__/module_log");
const module_hls_1 = require("./__shared__/module_hls");
const lsd = __importStar(require("./module_lsd"));
const module_net_1 = require("./__shared__/module_net");
exports.PERISCOPE_URL = "www.pscp.tv";
exports.PERISCOPE_API = "https://proxsee.pscp.tv/api/v2/";
function parseURL(url) {
    return url.substring(url.lastIndexOf("/") + 1);
}
exports.parseURL = parseURL;
function extractDataStore(body) {
    let m = body.toString().match(/data\-store\=\"(.+?)\"/i);
    if (!m)
        throw "fail to extract data-store";
    let dataStore = m[1].replace(/&quot;/gi, `"`).replace(/&amp;/gi, `&`);
    return JSON.parse(dataStore);
}
exports.extractDataStore = extractDataStore;
function getBroadcast(bid) {
    return fetch(`${exports.PERISCOPE_API}accessVideoPublic?broadcast_id=${bid}`)
        .then(res => {
        if (!res.ok)
            throw res.statusText;
        return res.json();
    });
}
exports.getBroadcast = getBroadcast;
function filenameGenerator(broadcast) {
    return {
        userId: broadcast.user_id,
        broadcastId: broadcast.id,
        country: (broadcast.iso_code || broadcast.country || broadcast.language || "xx").toLocaleLowerCase(),
        language: (broadcast.language || broadcast.iso_code || broadcast.country || "xx").toLocaleLowerCase(),
        username: broadcast.username,
        service: "periscope",
        title: broadcast.status,
        type: broadcast.state == "ENDED" ? "replay" : "live",
        date: new Date(broadcast.created_at)
    };
}
exports.filenameGenerator = filenameGenerator;
function createFilename(broadcast) {
    return lsd.createFilename(filenameGenerator(broadcast), global.vue.settings.pathDownload);
}
exports.createFilename = createFilename;
async function resolveLive(broadcast) {
    module_log_1.debug("pscp.resolveLive", broadcast.url);
    if (!broadcast.url)
        throw "invalid url";
    return getBroadcast(broadcast.url);
}
exports.resolveLive = resolveLive;
exports.resolveReplay = resolveLive;
async function downloadLive(live, filename, useFFMPEG) {
    if (live.replay_url || !live.https_hls_url)
        return false;
    return new module_hls_1.HlsTS(5000, 25).play(live.https_hls_url, filename);
}
exports.downloadLive = downloadLive;
async function downloadReplay(live, pathDownload, useFFMPEG, videoFormat) {
    module_log_1.debug("pscp.downloadReplay", live.broadcast.id);
    if (!live.replay_url)
        return false;
    let videoFilename = lsd.createFilename(filenameGenerator(live.broadcast), pathDownload) + ".ts";
    return new module_hls_1.HlsTS(0, 0).play(live.replay_url, videoFilename);
}
exports.downloadReplay = downloadReplay;
async function resolveUser(broadcast) {
    let live = await getBroadcast(broadcast.broadcastId);
    let userInfos = {
        username: live.broadcast.username,
        profilePicture: live.broadcast.profile_image_url,
        nickname: live.broadcast.user_display_name,
        country: live.broadcast.country || null,
        language: live.broadcast.language,
        location: `${live.broadcast.country_state} ${live.broadcast.city} ${live.broadcast.country}`,
        userId: live.broadcast.user_id,
        started: live.broadcast.created_at,
        title: live.broadcast.status
    };
    return userInfos;
}
exports.resolveUser = resolveUser;
function broadcastSearchPublic(search) {
    return module_net_1.postJSON(`${exports.PERISCOPE_API}broadcastSearchPublic`, {}, {
        search: search,
        include_replay: true
    });
}
exports.broadcastSearchPublic = broadcastSearchPublic;
async function searchTag(tag, languages) {
    try {
        let body = await fetch("https://www.pscp.tv").then(res => res.text());
        let dataStore = extractDataStore(body);
        let channel_id = "9567331147320489995";
        let channel = dataStore.Channel.channels.find(channel => channel.slug == tag);
        if (channel)
            channel_id = channel.id;
        let locale = languages.map(language => `languages=${language}`).join("&");
        let listBroadcasts = await fetch(`https://channels.pscp.tv/v1/channels/${channel_id}/broadcasts?${locale}`, {
            headers: {
                authorization: dataStore.ServiceToken.channels.token
            }
        }).then(res => res.json());
        let bids = listBroadcasts.Broadcasts.map(broadcast => broadcast.BID);
        let lives = await fetch(`https://api.periscope.tv/api/v2/getBroadcastsPublic?broadcast_ids=${bids.join(",")}&only_public_publish=true`).then(res => res.json());
        let broadcasts = lives.map(live => {
            let broadcast = {
                broadcastId: live.id,
                viewers: live.n_total_watching,
                isGone: false,
                service: "periscope",
                userId: live.user_id,
                username: live.username,
                nickname: live.user_display_name,
                thumbnail: live.image_url,
                url: `https://www.pscp.tv/${live.username}/${live.id}`,
                archived: live.state != "RUNNING",
                title: live.status
            };
            return broadcast;
        });
        return broadcasts;
    }
    catch (err) {
        module_log_1.error(err);
        return null;
    }
}
exports.searchTag = searchTag;
function fillBroadcast(infos) {
    module_log_1.debug(infos);
    let broadcast = {
        archived: !!infos.replay_url,
        broadcastId: infos.broadcast.id,
        title: infos.broadcast.status,
        isGone: false,
        url: null,
        viewers: infos.broadcast.n_total_watching,
        userId: infos.broadcast.user_id,
        service: "periscope",
        thumbnail: infos.broadcast.image_url,
        username: infos.broadcast.username,
        nickname: infos.broadcast.username
    };
    return broadcast;
}
exports.fillBroadcast = fillBroadcast;
},{"./__shared__/module_hls":18,"./__shared__/module_log":19,"./__shared__/module_net":20,"./module_lsd":8}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_utils_1 = require("./__shared__/module_utils");
const module_lsd_ffmpeg_1 = require("./module_lsd_ffmpeg");
const module_hls_1 = require("./__shared__/module_hls");
const module_lsd_1 = require("./module_lsd");
const YOUNOW_API = "https://api.younow.com";
const CDN = "https://cdn.younow.com";
function getIdFromURL(user) {
    return isNaN(user) ? user.substring(user.lastIndexOf("/") + 1) : user;
}
exports.getIdFromURL = getIdFromURL;
function errortoString(result) {
    return `${result.errorCode} ${result.errorMsg}`;
}
exports.errortoString = errortoString;
function getUserInfoByUID(uid) {
    return fetch(`${YOUNOW_API}/php/api/channel/getInfo/channelId=${uid}`).then(res => res.json());
}
exports.getUserInfoByUID = getUserInfoByUID;
function getLiveBroadcastByUsername(username) {
    return fetch(`${YOUNOW_API}/php/api/broadcast/info/curId=0/user=${username}`).then(res => res.json());
}
exports.getLiveBroadcastByUsername = getLiveBroadcastByUsername;
function getLiveBroadcastByUID(uid) {
    return fetch(`${YOUNOW_API}/php/api/broadcast/info/channelId=${uid}/curId=0`).then(res => res.json());
}
exports.getLiveBroadcastByUID = getLiveBroadcastByUID;
function getArchivedBroadcast(bid) {
    return fetch(`${YOUNOW_API}/php/api/broadcast/videoPath/broadcastId=${bid}`).then(res => res.json());
}
exports.getArchivedBroadcast = getArchivedBroadcast;
function getMoments(uid, next) {
    return fetch(`${YOUNOW_API}/php/api/moment/profile/channelId=${uid}/createdBefore=${next}`).then(res => res.json());
}
exports.getMoments = getMoments;
function getTrendings(locale) {
    return fetch(`${YOUNOW_API}/php/api/younow/dashboard/locale=${locale}/trending=50`).then(res => res.json());
}
exports.getTrendings = getTrendings;
function getTagInfo(tag) {
    return fetch(`https://playdata.younow.com/live/tags/${btoa(tag) + ".json"}`).then(res => res.json());
}
exports.getTagInfo = getTagInfo;
function getPlaylist(bid) {
    return fetch(`${YOUNOW_API}/php/api/broadcast/videoPath/hls=1/broadcastId=${bid}`).then(res => res.text());
}
exports.getPlaylist = getPlaylist;
function filenameGeneratorLive(broadcast) {
    return {
        userId: broadcast.userId,
        broadcastId: broadcast.broadcastId,
        country: (broadcast.country || "XX").toLocaleLowerCase(),
        language: broadcast.locale.toLowerCase(),
        username: broadcast.profile,
        service: "younow",
        title: null,
        type: "live",
        date: new Date((broadcast.dateCreated || broadcast.dateStarted) * module_utils_1.Time.MILLI)
    };
}
exports.filenameGeneratorLive = filenameGeneratorLive;
function filenameGeneratorReplay(broadcastId, archivedBroadcast, user) {
    return {
        userId: archivedBroadcast.userId,
        broadcastId: broadcastId,
        country: (user.country || "xx").toLowerCase(),
        language: (user.locale || "xx").toLowerCase(),
        username: archivedBroadcast.profileUrlString,
        service: "younow",
        title: null,
        type: "replay",
        date: new Date()
    };
}
exports.filenameGeneratorReplay = filenameGeneratorReplay;
function getFollowed(userId, start) {
    return fetch(`${YOUNOW_API}/php/api/channel/getFansOf/channelId=${userId}/startFrom=${start}/numberOfRecords=50`).then(res => res.json());
}
exports.getFollowed = getFollowed;
function getOnlineFollowed(follower) {
    return fetch(`${YOUNOW_API}/php/api/channel/getLocationOnlineFansOf/channelId=${follower}/numberOfRecords=50`).then(res => res.json());
}
exports.getOnlineFollowed = getOnlineFollowed;
function resolveThumbnail(broadcastId) {
    return `https://ynassets.younow.com/broadcastdynamic/live/${broadcastId}/${broadcastId}.jpg`;
}
exports.resolveThumbnail = resolveThumbnail;
function resolveProfilePicture(userId) {
    return `https://ynassets.younow.com/user/live/${userId}/${userId}.jpg`;
}
exports.resolveProfilePicture = resolveProfilePicture;
async function downloadLive(live, videoFilename, ffmpegOptions) {
    if (live.dropReason)
        throw live.dropReason;
    if (!live.media)
        throw "media is missing";
    return module_lsd_ffmpeg_1.ffmpeg(`rtmp://${live.media.host}${live.media.app}/${live.media.stream}`, videoFilename, ffmpegOptions);
}
exports.downloadLive = downloadLive;
async function downloadReplay(user, archive, broadcastId, pathDownload, useFFMPEG, videoFormat, maxParallelDownload) {
    if (!archive.videoAvailable || archive.noLongerAvailable)
        throw "replay not available";
    let videoFilename = module_lsd_1.createFilename(filenameGeneratorReplay(broadcastId, archive, user), pathDownload);
    return new module_hls_1.HlsTS(0, 0).play(archive.hls, videoFilename);
}
exports.downloadReplay = downloadReplay;
async function resolveUser(broadcast) {
    let live = await getLiveBroadcastByUID(broadcast.userId);
    if (live.errorCode)
        throw errortoString(live);
    let userInfos = {
        username: live.profile,
        nickname: "?",
        country: live.country,
        language: live.locale,
        location: live.location ? `${live.location.state} ${live.location.city} ${live.location.country}` : "?",
        userId: live.userId,
        started: new Date(live.dateStarted * module_utils_1.Time.MILLI).toString(),
        title: live.title,
        profilePicture: resolveProfilePicture(live.userId)
    };
    return userInfos;
}
exports.resolveUser = resolveUser;
function fillBroadcast(infos) {
    let broadcast = {
        archived: true,
        broadcastId: infos.broadcastId,
        isGone: false,
        title: infos.title,
        userId: infos.userId,
        service: "younow",
        url: null,
        viewers: infos.viewers,
        thumbnail: resolveThumbnail(infos.broadcastId),
        username: infos.username,
        nickname: infos.username
    };
    return broadcast;
}
exports.fillBroadcast = fillBroadcast;
},{"./__shared__/module_hls":18,"./__shared__/module_utils":21,"./module_lsd":8,"./module_lsd_ffmpeg":9}],12:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lsd = __importStar(require("./module_lsd"));
const _youtube = __importStar(require("./__shared__/module_youtube"));
const module_hls_1 = require("./__shared__/module_hls");
const module_log_1 = require("./__shared__/module_log");
async function search(query) {
    let results = await _youtube.search(query);
    module_log_1.debug("youtube results", results.length);
    return results.filter(result => result)
        .map(result => {
        let broadcast = {
            archived: false,
            broadcastId: result.videoId,
            isGone: false,
            service: "youtube",
            viewers: parseInt(result.views),
            title: result.title,
            thumbnail: result.thumbnail,
            nickname: result.author,
            username: result.author,
            userId: result.channelId,
            url: null
        };
        return broadcast;
    });
}
exports.search = search;
function filenameGenerator(infos) {
    let fi = {
        broadcastId: infos.video_id,
        service: "youtube",
        language: "xx",
        title: infos.title,
        userId: infos.ucid,
        country: "xx",
        username: infos.author,
        type: infos.details.isLive ? "live" : "replay",
        date: infos.published
    };
    return fi;
}
exports.filenameGenerator = filenameGenerator;
function getBroadcast(id) {
    return _youtube.getInfos(id);
}
exports.getBroadcast = getBroadcast;
async function downloadBroadcast(infos) {
    let basename = lsd.createFilename(filenameGenerator(infos), global.vue.settings.pathDownload);
    if (infos.m3u8) {
        let itag = [
            "267",
            "265",
            "264",
            "300",
            "96",
            "95",
            "94",
            "93",
            "92",
            "91"
        ].find(itag => itag in infos.m3u8);
        if (!itag)
            throw "no format available";
        let format = infos.m3u8[itag];
        return new module_hls_1.HlsTS(10000, 25).play(format.url, basename + ".ts");
    }
    else {
        try {
            await _youtube.downloadDash(infos, basename, [138, 137, 136, 135, 134, 133, 160], "app/bin/ffmpeg");
        }
        catch (err) {
            module_log_1.debug("dash fail with", err, "trying urls");
            try {
                await _youtube.downloadUrls(infos, basename, [22, 18], global.system.maxParallelDownload);
            }
            catch (err) {
                throw "no format available";
            }
        }
    }
}
exports.downloadBroadcast = downloadBroadcast;
function createFilename(broadcast) {
    return lsd.createFilename(filenameGenerator(broadcast), global.vue.settings.pathDownload);
}
exports.createFilename = createFilename;
function resolveLive(infos) {
    let format;
    if (infos.m3u8) {
        format = infos.m3u8[93] || infos.m3u8[92];
    }
    else if (infos.downloadUrls) {
        format = infos.downloadUrls[22] || infos.downloadUrls[18];
    }
    if (!format)
        throw "no format available";
    return format;
}
exports.resolveLive = resolveLive;
function fillBroadcast(infos) {
    let broadcast = {
        archived: !infos.hlsvp,
        broadcastId: infos.video_id,
        isGone: false,
        title: infos.title,
        userId: infos.ucid,
        service: "youtube",
        url: infos.loaderUrl,
        viewers: 0,
        thumbnail: infos.thumbnail_url,
        username: infos.author,
        nickname: infos.author
    };
    return broadcast;
}
exports.fillBroadcast = fillBroadcast;
},{"./__shared__/module_hls":18,"./__shared__/module_log":19,"./__shared__/module_youtube":22,"./module_lsd":8}],13:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_log_1 = require("./__shared__/module_log");
const module_hls_1 = require("./__shared__/module_hls");
const lsd = __importStar(require("./module_lsd"));
const utils = __importStar(require("./__shared__/module_utils"));
const module_download_1 = require("./__shared__/module_download");
function getBroadcast(url) {
    return fetch(url)
        .then(res => {
        if (!res.ok)
            throw res.statusText;
        return res.arrayBuffer();
    })
        .then(buffer => {
        let body = new TextDecoder("windows-1251").decode(buffer);
        let m = body.match(/playerParams.=.(.+?);\n/);
        if (!m)
            throw utils.cleanHTML(body.match(/<div.id="video_ext_msg">\s*(.+?)\s*<\/div>/)[1]) || "broadcast is missing";
        let params = JSON.parse(m[1]);
        let broadcast = params.params[0];
        broadcast.md_title = broadcast.md_title.replace(/\s*[-—]+\s*live$/i, "");
        return broadcast;
    });
}
exports.getBroadcast = getBroadcast;
function filenameGenerator(broadcast) {
    return {
        userId: broadcast.oid,
        broadcastId: broadcast.vid,
        country: "ru",
        language: "ru",
        username: utils.cleanHTML(broadcast.md_author),
        service: "vk",
        title: utils.cleanHTML(broadcast.md_title),
        type: broadcast.mp4 || broadcast.postlive_mp4 ? "replay" : "live",
        date: new Date(broadcast.date * utils.Time.MILLI)
    };
}
exports.filenameGenerator = filenameGenerator;
function createFilename(broadcast) {
    return lsd.createFilename(filenameGenerator(broadcast), global.vue.settings.pathDownload);
}
exports.createFilename = createFilename;
async function resolveLive(broadcast) {
    module_log_1.debug("vk.resolveLive", broadcast.url);
    if (!broadcast.url)
        throw "invalid url";
    return getBroadcast(broadcast.url);
}
exports.resolveLive = resolveLive;
exports.resolveReplay = resolveLive;
async function downloadLive(live, filename, useFFMPEG) {
    if (live.mp4 || live.postlive_mp4)
        return false;
    if (!live.hls)
        throw "downloadLive hls url is missing";
    return new module_hls_1.HlsTS(5000, 10).play(live.hls, filename);
}
exports.downloadLive = downloadLive;
async function downloadReplay(live, pathDownload) {
    let url = live.mp4 || live.postlive_mp4;
    if (!url)
        return false;
    module_log_1.debug("vk.downloadReplay", url);
    let videoFilename = lsd.createFilename(filenameGenerator(live), pathDownload) + ".mp4";
    return module_download_1.downloadMultipart(url, videoFilename, global.system.maxParallelDownload);
}
exports.downloadReplay = downloadReplay;
async function resolveUser(broadcast) {
    let live = await getBroadcast(broadcast.url);
    let userInfos = {
        username: "?",
        profilePicture: live.author_photo,
        nickname: live.md_author,
        country: "?",
        language: "?",
        location: "?",
        userId: live.author_id,
        started: new Date(live.date * utils.Time.MILLI).toString(),
        title: live.md_title
    };
    return userInfos;
}
exports.resolveUser = resolveUser;
function fillBroadcast(infos) {
    let broadcast = {
        archived: !!infos.live,
        broadcastId: infos.vid,
        isGone: false,
        title: infos.md_title,
        viewers: 0,
        thumbnail: infos.thumb,
        service: "vk",
        url: null,
        userId: infos.oid,
        username: infos.md_author,
        nickname: infos.md_author
    };
    return broadcast;
}
exports.fillBroadcast = fillBroadcast;
},{"./__shared__/module_download":15,"./__shared__/module_hls":18,"./__shared__/module_log":19,"./__shared__/module_utils":21,"./module_lsd":8}],14:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_log_1 = require("./__shared__/module_log");
const hls_js_1 = __importDefault(require("hls.js"));
const _periscope = __importStar(require("./module_lsd_periscope"));
async function unitTesting(args) {
    module_log_1.log(args);
    if (args)
        return;
    let arrHls = {};
    let broadcasts = await _periscope.broadcastSearchPublic(args[0]);
    for (let i = 0; i < Math.min(broadcasts.length, 10); i++) {
        let broadcast = broadcasts[i];
        let stream = await _periscope.getBroadcast(broadcast.id);
        if (!stream.replay_url) {
            let video = document.createElement("video");
            video.autoplay = true;
            video.muted = true;
            video.controls = true;
            video.style.width = "auto";
            video.style.height = "200px";
            video.id = broadcast.id;
            video.addEventListener("click", e => {
                let video = e.target;
                let hls = arrHls[video.id];
                hls.destroy();
                document.body.removeChild(video);
            });
            document.body.appendChild(video);
            let hls = new hls_js_1.default();
            arrHls[broadcast.id] = hls;
            hls.attachMedia(video);
            hls.on(hls_js_1.default.Events.MANIFEST_PARSED, result => {
                module_log_1.debug("MANIFEST_PARSED", result);
            });
            hls.on(hls_js_1.default.Events.ERROR, (evt, data) => {
                module_log_1.error(data);
            });
            hls.on(hls_js_1.default.Events.DESTROYING, (evt, data) => {
                module_log_1.log(evt, data);
            });
            module_log_1.log(stream);
            hls.loadSource(stream.hls_url);
        }
    }
}
exports.unitTesting = unitTesting;
},{"./__shared__/module_log":19,"./module_lsd_periscope":10,"hls.js":3}],15:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _fs = __importStar(require("fs"));
const module_net_1 = require("./module_net");
const module_log_1 = require("./module_log");
const P = __importStar(require("./module_fs"));
const BLOCK_SIZE = 512 * 1024;
async function downloadSingle(url, filename) {
    if (!url || !filename)
        throw "downloadSingle bad params";
    module_log_1.debug(url, filename);
    return module_net_1.getBinary(url)
        .then(buffer => {
        return !P.writeFile(filename, buffer);
    });
}
exports.downloadSingle = downloadSingle;
async function downloadMultipart(url, filename, maxParallelDownload) {
    if (!url || !filename)
        throw "downloadMultipart bad params";
    module_log_1.debug(url, filename);
    let retry = 5;
    let res;
    while (true) {
        try {
            res = await module_net_1.head(url);
            break;
        }
        catch (err) {
            module_log_1.error("head", retry, err.errno);
        }
        retry--;
        if (retry == 0)
            throw "downloadMultipart head fail";
    }
    if (!res.ok)
        throw res.status;
    if (res.headers.has("accept-ranges")) {
        let len;
        if (res.headers.has("content-range")) {
            len = parseInt(res.headers.get("content-range").split("/")[1]);
        }
        else {
            len = parseInt(res.headers.get("content-length"));
        }
        let block = BLOCK_SIZE;
        let total = Math.ceil(len / block);
        let remainder = len % block;
        let stream = _fs.createWriteStream(filename);
        let start = 0;
        module_log_1.debug(`multipart started size ${len} blocks ${block}*${total}`);
        let startTime = Date.now();
        while (total) {
            let max = Math.min(total, maxParallelDownload);
            let requests = [];
            let size;
            for (let i = 0; i < max; i++) {
                size = total == 1 ? remainder : block;
                let range = "bytes=" + start + "-" + (start + size - 1);
                if (size) {
                    async function downloadPart() {
                        for (let i = 0; i < global.system.maxRetry; i++) {
                            try {
                                let chunk = await module_net_1.getBinary(url, {
                                    "Range": range
                                });
                                return chunk;
                            }
                            catch (err) {
                                module_log_1.error(err.errno);
                                module_log_1.debug("downloadPart retry", i);
                            }
                        }
                        return null;
                    }
                    requests.push(downloadPart());
                }
                total--;
                start += size;
            }
            await Promise.all(requests)
                .then(buffers => {
                for (let buffer of buffers) {
                    buffer && stream.write(buffer);
                }
            });
        }
        stream.close();
        module_log_1.debug(`multipart finished ${len / (Date.now() - startTime + 1) | 0} kb/s`);
    }
    else {
        module_log_1.error("range not available", url);
        return downloadSingle(url, filename);
    }
}
exports.downloadMultipart = downloadMultipart;
},{"./module_fs":17,"./module_log":19,"./module_net":20,"fs":undefined}],16:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _cp = __importStar(require("child_process"));
const module_log_1 = require("../__shared__/module_log");
function ffmpeg(inpfile, outfile, options) {
    return new Promise((resolve, reject) => {
        let args = ["-i", inpfile, ...options.split(" "), outfile];
        let ffmpeg = _cp.spawn("ffmpeg", args);
        ffmpeg.stderr.pipe(process.stdout);
        ffmpeg.on("error", err => {
            module_log_1.error(err);
            reject(false);
        });
        ffmpeg.on("exit", code => {
            resolve(code == 0);
        });
    });
}
exports.ffmpeg = ffmpeg;
},{"../__shared__/module_log":19,"child_process":undefined}],17:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function exists(filename) {
    return new Promise(resolve => fs.exists(filename, resolve));
}
exports.exists = exists;
exports.readFile = (filename) => new Promise((resolve, reject) => fs.readFile(filename, (err, data) => err ? reject(err) : resolve(data)));
function writeFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => err ? reject(err) : resolve(err));
    });
}
exports.writeFile = writeFile;
function appendFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, data, err => err ? reject(err) : resolve(err));
    });
}
exports.appendFile = appendFile;
function rename(src, dst) {
    return new Promise((resolve, reject) => {
        fs.rename(src, dst, err => err ? reject(err) : resolve(err));
    });
}
exports.rename = rename;
function moveTo(src, dst) {
    return rename(src, dst);
}
exports.moveTo = moveTo;
function createDirectory(path) {
    return exists(path)
        .then(bool => {
        if (!bool) {
            return new Promise((resolve, reject) => {
                fs.mkdir(path, err => err ? reject(err) : resolve(true));
            });
        }
        else {
            return true;
        }
    });
}
exports.createDirectory = createDirectory;
async function setCurrentDirectory(path) {
    process.chdir(path);
    return true;
}
exports.setCurrentDirectory = setCurrentDirectory;
async function getCurrentDirectory() {
    return process.cwd();
}
exports.getCurrentDirectory = getCurrentDirectory;
function timeout(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
exports.timeout = timeout;
function del(filename) {
    return new Promise((resolve, reject) => fs.unlink(filename, err => err ? reject(err) : resolve(true)));
}
exports.del = del;
exports.createWriteStream = fs.createWriteStream;
exports.createReadStream = fs.createReadStream;
},{"fs":undefined}],18:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _fs = __importStar(require("fs"));
const module_net_1 = require("./module_net");
const module_log_1 = require("./module_log");
const module_utils_1 = require("./module_utils");
const module_ffmpeg_1 = require("./module_ffmpeg");
const P = __importStar(require("./module_fs"));
let currentConnections = 0;
function parsePlaylist(playlist, head, tail) {
    if (!playlist)
        throw "playlist empty";
    let lines = playlist.split("\n");
    if (lines.shift() != "#EXTM3U")
        throw "playlist invalid";
    let segments = [];
    let endlist = false;
    for (let line of lines) {
        if (line.length) {
            if (line.startsWith("#")) {
                let m = line.match(/#(EXT-X-|EXT)([A-Z0-9-]+)(?::(.*))?/);
                if (!m) {
                    module_log_1.debug("error", line);
                }
                else {
                    switch (m[2]) {
                        case "ENDLIST":
                            endlist = true;
                            break;
                        case "M3U":
                        case "INF":
                        case "VERSION":
                        case "MEDIA-SEQUENCE":
                        case "TARGETDURATION":
                        case "PROGRAM-DATE-TIME":
                        case "INDEPENDENT-SEGMENTS":
                        case "START":
                        case "DISCONTINUITY-SEQUENCE":
                        case "DISCONTINUITY":
                        case "CUEPOINT":
                        case "DATERANGE":
                        case "TWITCH-ELAPSED-SECS":
                        case "TWITCH-TOTAL-SECS":
                        case "TWITCH-PREFETCH":
                        case "SCTE35-OUT":
                            break;
                        case "DYNAMICALLY-GENERATED":
                            throw "EXT-X-DYNAMICALLY-GENERATED";
                        default:
                            module_log_1.debug("not supported", line);
                    }
                }
            }
            else {
                if (line.match(/.+:\/\/.+/)) {
                    segments.push(line);
                }
                else {
                    segments.push(head + "/" + line + tail);
                }
            }
        }
    }
    if (segments.length == 0)
        throw "playlist invalid";
    return { endlist: endlist, urls: segments };
}
class HlsWithFFMPEG {
    constructor(timeout, maxParallel) {
    }
    play(url, outfile) {
        return module_ffmpeg_1.ffmpeg(url, outfile, "-loglevel error -c copy -y");
    }
}
exports.HlsWithFFMPEG = HlsWithFFMPEG;
class HlsTS {
    constructor(updateInterval, maxIdle) {
        this.updateInterval = updateInterval;
        this.maxIdle = maxIdle;
        module_log_1.debug(`hls timeout ${this.updateInterval} maxIdle ${this.maxIdle}`);
    }
    play(url, filename) {
        let exitCode = null;
        return new Promise(async (resolve, reject) => {
            if (!url)
                throw "bad url";
            let m3u8 = url.match(/(.+)\/.+\.m3u8(.+|)/i);
            if (!m3u8)
                throw "m3u8 url is invalid";
            this.stream = null;
            let oldSegments = {};
            let cache = [];
            let doneSegment = 0;
            let currentSegment = 0;
            let waitingSegment = 0;
            let hTimeout = null;
            let updated = false;
            let idle = 0;
            let queue = {};
            if (this.stream === null) {
                this.stream = _fs.createWriteStream(filename);
                this.stream.on("error", err => {
                    module_log_1.error("createWriteStream", err.code);
                    if (err.code != "ERR_STREAM_WRITE_AFTER_END")
                        exitCode = -1;
                });
            }
            const updateSegments = async () => {
                if (exitCode !== null)
                    return;
                try {
                    let text = await module_net_1.getText(url);
                    let { endlist: endOfStream, urls: segments } = parsePlaylist(text, m3u8[1], m3u8[2]);
                    let fresh = 0;
                    for (let segment of segments) {
                        if (!(segment in oldSegments)) {
                            oldSegments[segment] = true;
                            cache.push(segment);
                            fresh++;
                        }
                    }
                    module_log_1.debug(`hls cache updated ${fresh}/${segments.length} cached ${cache.length} endlist ${exitCode} eos ${endOfStream} idle ${idle}`);
                    updated = true;
                    if (this.updateInterval) {
                        if (cache.length == 0 && waitingSegment == 0) {
                            idle++;
                            if (idle > this.maxIdle) {
                                exitCode = 0;
                                return;
                            }
                        }
                        else {
                            idle = 0;
                        }
                        hTimeout = setTimeout(updateSegments, this.updateInterval);
                    }
                }
                catch (err) {
                    module_log_1.error("updateSegments", err);
                    exitCode = 0;
                }
            };
            try {
                updateSegments();
                while (exitCode === null) {
                    while (waitingSegment < global.system.maxParallelDownload && cache.length && exitCode === null) {
                        let segmentUrl = cache.shift();
                        let request = {
                            idx: currentSegment,
                            url: segmentUrl,
                            retry: 0
                        };
                        waitingSegment++;
                        currentSegment++;
                        async function downloadSegment(request, ffmpeg) {
                            while (exitCode === null) {
                                let chunk;
                                try {
                                    chunk = await module_net_1.getBinary(request.url);
                                }
                                catch (err) {
                                    chunk = null;
                                    if (err == 403 || err == 404 || err == 503) {
                                        exitCode = -1;
                                    }
                                    else {
                                        module_log_1.error("get chunk fail", err);
                                    }
                                }
                                if (chunk) {
                                    waitingSegment--;
                                    if (doneSegment == request.idx) {
                                        if (exitCode === null)
                                            ffmpeg.write(chunk);
                                        do {
                                            doneSegment++;
                                            if (doneSegment in queue) {
                                                let chunk = queue[doneSegment];
                                                if (chunk && exitCode === null)
                                                    ffmpeg.write(chunk);
                                                delete queue[doneSegment];
                                            }
                                            else {
                                                break;
                                            }
                                        } while (exitCode === null);
                                        return;
                                    }
                                    else {
                                        queue[request.idx] = chunk;
                                        return;
                                    }
                                }
                                else {
                                    request.retry++;
                                    module_log_1.error("segment", request.idx, "fail", "retry", request.retry);
                                    if (request.retry >= 5) {
                                        queue[request.idx] = null;
                                        waitingSegment--;
                                        return;
                                    }
                                    else {
                                        await P.timeout(1000);
                                    }
                                }
                            }
                        }
                        downloadSegment(request, this.stream);
                    }
                    if (this.stream) {
                        P.exists(filename)
                            .then(bool => {
                            if (!bool)
                                exitCode = -2;
                        })
                            .catch(module_utils_1.noop);
                    }
                    if (updated) {
                        if (waitingSegment == 0 && cache.length == 0 && this.updateInterval == 0) {
                            exitCode = 0;
                        }
                    }
                    await P.timeout(100);
                }
                if (hTimeout)
                    clearTimeout(hTimeout);
            }
            catch (err) {
                module_log_1.error("fatal", err);
                exitCode = -1;
            }
            if (this.stream)
                this.stream.end();
            if (cache.length && waitingSegment)
                module_log_1.error("not flushed", cache.length, waitingSegment);
            if (exitCode != 0 && exitCode != -2)
                module_log_1.error("RET_CODE", exitCode);
            resolve(exitCode === 0);
        });
    }
}
exports.HlsTS = HlsTS;
},{"./module_ffmpeg":16,"./module_fs":17,"./module_log":19,"./module_net":20,"./module_utils":21,"fs":undefined}],19:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _os = __importStar(require("os"));
const _path = __importStar(require("path"));
const _fs = __importStar(require("fs"));
const module_utils_1 = require("./module_utils");
exports.log = console.log;
exports.info = console.info;
exports.warn = console.warn;
exports.assert = console.assert;
const TRACE_FILE = _path.join(_os.tmpdir(), "trace.log");
function cbError(err) {
    err && error(err);
    return null;
}
exports.cbError = cbError;
function trace(...args) {
    try {
        let output = args.map(arg => {
            return typeof arg === "object" ? module_utils_1.prettify(arg) : arg;
        }).join(", ");
        _fs.appendFile(TRACE_FILE, output + "\n", err => err && error(err));
        debug(output);
    }
    catch (err) {
        exports.log("trace catch for", err);
    }
}
exports.trace = trace;
function debug(...args) {
    if (global.system.verbosity)
        console.debug.apply(null, args);
}
exports.debug = debug;
function error(...args) {
    process.stdout.write("\x1b[31m");
    console.error.apply(null, args);
    process.stdout.write("\x1b[39m");
}
exports.error = error;
function dumpError(err) {
    error("typeof", typeof err, module_utils_1.prettify(err));
    return err;
}
exports.dumpError = dumpError;
},{"./module_utils":21,"fs":undefined,"os":undefined,"path":undefined}],20:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_log_1 = require("./module_log");
const P = __importStar(require("./module_fs"));
if (typeof fetch === "undefined")
    global["fetch"] = require("node-fetch");
const DEFAULT_HEADERS = {
    "User-Agent": getFirefoxUserAgent(),
    "Accept-Language": "en-US,en;q=0.5"
};
function getFirefoxUserAgent() {
    let date = new Date();
    let version = ((date.getFullYear() - 2018) * 4 + Math.floor(date.getMonth() / 4) + 58) + ".0";
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${version} Gecko/20100101 Firefox/${version}`;
}
exports.getFirefoxUserAgent = getFirefoxUserAgent;
function getChromeUserAgent() {
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.22 Safari/537.36`;
}
exports.getChromeUserAgent = getChromeUserAgent;
function extractDomainFromHostname(hostname) {
    return hostname.split(".").reverse()[1];
}
exports.extractDomainFromHostname = extractDomainFromHostname;
const isOk = (res) => {
    if (res.ok) {
        return res;
    }
    else {
        throw res.status;
    }
};
async function doFetch(url, options) {
    if (!url)
        throw "fetch url is invalid";
    while (true) {
        try {
            let res = await fetch(url, options);
            return res;
        }
        catch (err) {
            module_log_1.error("fetch", err.errno, err.message);
            await P.timeout(1000);
        }
    }
}
function getResponse(url, headers = {}) {
    let options = { headers: Object.assign({}, DEFAULT_HEADERS, { 'Content-Type': 'application/json' }, headers) };
    return doFetch(url, options).then(isOk);
}
exports.getResponse = getResponse;
function getJSON(url, headers = {}) {
    let options = { headers: Object.assign({}, DEFAULT_HEADERS, { 'Content-Type': 'application/json' }, headers) };
    return doFetch(url, options).then(isOk).then(res => res.json());
}
exports.getJSON = getJSON;
async function getBinary(url, headers = {}) {
    let options = { headers: Object.assign({}, DEFAULT_HEADERS, headers) };
    return doFetch(url, options).then(res => res.arrayBuffer()).then(arrayBuffer => Buffer.from(arrayBuffer));
}
exports.getBinary = getBinary;
function getText(url, headers = {}) {
    let options = { headers: Object.assign({}, DEFAULT_HEADERS, headers) };
    return doFetch(url, options).then(isOk).then(res => res.text());
}
exports.getText = getText;
function head(url, headers = {}) {
    return doFetch(url, {
        method: "head",
        headers: Object.assign({}, DEFAULT_HEADERS, headers)
    });
}
exports.head = head;
function postJSON(url, headers, json) {
    let options = {
        method: "post",
        headers: Object.assign({}, DEFAULT_HEADERS, { 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(json)
    };
    return doFetch(url, options).then(isOk).then(res => res.json());
}
exports.postJSON = postJSON;
},{"./module_fs":17,"./module_log":19,"node-fetch":1}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
function prettify(obj) {
    return JSON.stringify(obj, null, "\t");
}
exports.prettify = prettify;
function promisify(func) {
    return new Promise(func);
}
exports.promisify = promisify;
var Time;
(function (Time) {
    Time[Time["MILLI"] = 1000] = "MILLI";
    Time[Time["SECOND"] = 1000] = "SECOND";
    Time[Time["MINUTE"] = 60000] = "MINUTE";
    Time[Time["HOUR"] = 3600000] = "HOUR";
})(Time = exports.Time || (exports.Time = {}));
function formatDate(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '.' + (m < 10 ? '0' + m : m) + '.' + (d < 10 ? '0' + d : d);
}
exports.formatDate = formatDate;
function formatTime(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return `${(h < 10 ? "0" + h : h)}-${(m < 10 ? "0" + m : m)}-${(s < 10 ? "0" + s : s)}`;
}
exports.formatTime = formatTime;
function formatDateTime(date) {
    return formatDate(date) + "_" + formatTime(date);
}
exports.formatDateTime = formatDateTime;
function cleanFilename(filename) {
    return filename.replace(/[\x00-\x1f"<>|*?:/\\]/gi, "_").slice(0, 200);
}
exports.cleanFilename = cleanFilename;
function cleanHTML(html) {
    return html.replace(/&#(\d+);/g, (x, y) => String.fromCharCode(y));
}
exports.cleanHTML = cleanHTML;
function removeNonANSIChar(str) {
    return str.replace(/[^\x20-\xFF]/g, "");
}
exports.removeNonANSIChar = removeNonANSIChar;
exports.isANSI = (str) => !str.match(/[^\x00 -\xff]/gi);
function isLatin(str) {
    let m = str.match(/[\u0400-\u1fff\u2c00-\ud7ff]/);
    if (m) {
        for (let c of str) {
            let code = c.charCodeAt(0);
            if (code > 255)
                console.error(c, "=", code.toString(16));
        }
        return false;
    }
    else {
        return true;
    }
}
exports.isLatin = isLatin;
function jsonDeepSearch(key, data) {
    let results = [];
    if (data !== null && typeof data === "object") {
        if (key in data)
            results.push(data[key]);
        else
            for (let i in data) {
                results = results.concat(jsonDeepSearch(key, data[i]));
            }
    }
    return results;
}
exports.jsonDeepSearch = jsonDeepSearch;
String.prototype.capitalizeFirstLetter = function () { return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase(); };
},{}],22:[function(require,module,exports){
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_net_1 = require("./module_net");
const module_download_1 = require("./module_download");
const module_utils_1 = require("./module_utils");
const querystring = __importStar(require("querystring"));
const module_log_1 = require("./module_log");
const P = __importStar(require("./module_fs"));
const _url = __importStar(require("url"));
const child_process_1 = require("child_process");
exports.YOUTUBE_CLIENT = {
    "x-youtube-client-name": "1",
    "x-youtube-client-version": "2.20180808"
};
exports.FORMATS = {
    '5': {
        container: 'flv',
        resolution: '240p',
        encoding: 'Sorenson H.283',
        profile: null,
        bitrate: '0.25',
        audioEncoding: 'mp3',
        audioBitrate: 64,
    },
    '6': {
        container: 'flv',
        resolution: '270p',
        encoding: 'Sorenson H.263',
        profile: null,
        bitrate: '0.8',
        audioEncoding: 'mp3',
        audioBitrate: 64,
    },
    '13': {
        container: '3gp',
        resolution: null,
        encoding: 'MPEG-4 Visual',
        profile: null,
        bitrate: '0.5',
        audioEncoding: 'aac',
        audioBitrate: null,
    },
    '17': {
        container: '3gp',
        resolution: '144p',
        encoding: 'MPEG-4 Visual',
        profile: 'simple',
        bitrate: '0.05',
        audioEncoding: 'aac',
        audioBitrate: 24,
    },
    '18': {
        container: 'mp4',
        resolution: '360p',
        encoding: 'H.264',
        profile: 'baseline',
        bitrate: '0.5',
        audioEncoding: 'aac',
        audioBitrate: 96,
    },
    '22': {
        container: 'mp4',
        resolution: '720p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '2-3',
        audioEncoding: 'aac',
        audioBitrate: 192,
    },
    '34': {
        container: 'flv',
        resolution: '360p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.5',
        audioEncoding: 'aac',
        audioBitrate: 128,
    },
    '35': {
        container: 'flv',
        resolution: '480p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.8-1',
        audioEncoding: 'aac',
        audioBitrate: 128,
    },
    '36': {
        container: '3gp',
        resolution: '240p',
        encoding: 'MPEG-4 Visual',
        profile: 'simple',
        bitrate: '0.175',
        audioEncoding: 'aac',
        audioBitrate: 32,
    },
    '37': {
        container: 'mp4',
        resolution: '1080p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '3-5.9',
        audioEncoding: 'aac',
        audioBitrate: 192,
    },
    '38': {
        container: 'mp4',
        resolution: '3072p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '3.5-5',
        audioEncoding: 'aac',
        audioBitrate: 192,
    },
    '43': {
        container: 'webm',
        resolution: '360p',
        encoding: 'VP8',
        profile: null,
        bitrate: '0.5-0.75',
        audioEncoding: 'vorbis',
        audioBitrate: 128,
    },
    '44': {
        container: 'webm',
        resolution: '480p',
        encoding: 'VP8',
        profile: null,
        bitrate: '1',
        audioEncoding: 'vorbis',
        audioBitrate: 128,
    },
    '45': {
        container: 'webm',
        resolution: '720p',
        encoding: 'VP8',
        profile: null,
        bitrate: '2',
        audioEncoding: 'vorbis',
        audioBitrate: 192,
    },
    '46': {
        container: 'webm',
        resolution: '1080p',
        encoding: 'vp8',
        profile: null,
        bitrate: null,
        audioEncoding: 'vorbis',
        audioBitrate: 192,
    },
    '82': {
        container: 'mp4',
        resolution: '360p',
        encoding: 'H.264',
        profile: '3d',
        bitrate: '0.5',
        audioEncoding: 'aac',
        audioBitrate: 96,
    },
    '83': {
        container: 'mp4',
        resolution: '240p',
        encoding: 'H.264',
        profile: '3d',
        bitrate: '0.5',
        audioEncoding: 'aac',
        audioBitrate: 96,
    },
    '84': {
        container: 'mp4',
        resolution: '720p',
        encoding: 'H.264',
        profile: '3d',
        bitrate: '2-3',
        audioEncoding: 'aac',
        audioBitrate: 192,
    },
    '85': {
        container: 'mp4',
        resolution: '1080p',
        encoding: 'H.264',
        profile: '3d',
        bitrate: '3-4',
        audioEncoding: 'aac',
        audioBitrate: 192,
    },
    '100': {
        container: 'webm',
        resolution: '360p',
        encoding: 'VP8',
        profile: '3d',
        bitrate: null,
        audioEncoding: 'vorbis',
        audioBitrate: 128,
    },
    '101': {
        container: 'webm',
        resolution: '360p',
        encoding: 'VP8',
        profile: '3d',
        bitrate: null,
        audioEncoding: 'vorbis',
        audioBitrate: 192,
    },
    '102': {
        container: 'webm',
        resolution: '720p',
        encoding: 'VP8',
        profile: '3d',
        bitrate: null,
        audioEncoding: 'vorbis',
        audioBitrate: 192,
    },
    '133': {
        container: 'mp4',
        resolution: '240p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.2-0.3',
        audioEncoding: null,
        audioBitrate: null,
    },
    '134': {
        container: 'mp4',
        resolution: '360p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.3-0.4',
        audioEncoding: null,
        audioBitrate: null,
    },
    '135': {
        container: 'mp4',
        resolution: '480p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.5-1',
        audioEncoding: null,
        audioBitrate: null,
    },
    '136': {
        container: 'mp4',
        resolution: '720p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '1-1.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '137': {
        container: 'mp4',
        resolution: '1080p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '2.5-3',
        audioEncoding: null,
        audioBitrate: null,
    },
    '138': {
        container: 'mp4',
        resolution: '4320p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '13.5-25',
        audioEncoding: null,
        audioBitrate: null,
    },
    '160': {
        container: 'mp4',
        resolution: '144p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.1',
        audioEncoding: null,
        audioBitrate: null,
    },
    '242': {
        container: 'webm',
        resolution: '240p',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '0.1-0.2',
        audioEncoding: null,
        audioBitrate: null,
    },
    '243': {
        container: 'webm',
        resolution: '360p',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '0.25',
        audioEncoding: null,
        audioBitrate: null,
    },
    '244': {
        container: 'webm',
        resolution: '480p',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '0.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '247': {
        container: 'webm',
        resolution: '720p',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '0.7-0.8',
        audioEncoding: null,
        audioBitrate: null,
    },
    '248': {
        container: 'webm',
        resolution: '1080p',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '1.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '264': {
        container: 'mp4',
        resolution: '1440p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '4-4.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '266': {
        container: 'mp4',
        resolution: '2160p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '12.5-16',
        audioEncoding: null,
        audioBitrate: null,
    },
    '271': {
        container: 'webm',
        resolution: '1440p',
        encoding: 'VP9',
        profile: 'profle 0',
        bitrate: '9',
        audioEncoding: null,
        audioBitrate: null,
    },
    '272': {
        container: 'webm',
        resolution: '4320p',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '20-25',
        audioEncoding: null,
        audioBitrate: null,
    },
    '278': {
        container: 'webm',
        resolution: '144p 15fps',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '0.08',
        audioEncoding: null,
        audioBitrate: null,
    },
    '298': {
        container: 'mp4',
        resolution: '720p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '3-3.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '299': {
        container: 'mp4',
        resolution: '1080p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '5.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '300': {
        container: '',
        resolution: '1080p',
        encoding: '',
        profile: '',
        bitrate: '',
        audioEncoding: null,
        audioBitrate: null,
    },
    '301': {
        container: '',
        resolution: '',
        encoding: '',
        profile: '',
        bitrate: '',
        audioEncoding: null,
        audioBitrate: null,
    },
    '302': {
        container: 'webm',
        resolution: '720p HFR',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '2.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '303': {
        container: 'webm',
        resolution: '1080p HFR',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '308': {
        container: 'webm',
        resolution: '1440p HFR',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '10',
        audioEncoding: null,
        audioBitrate: null,
    },
    '313': {
        container: 'webm',
        resolution: '2160p',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '13-15',
        audioEncoding: null,
        audioBitrate: null,
    },
    '315': {
        container: 'webm',
        resolution: '2160p HFR',
        encoding: 'VP9',
        profile: 'profile 0',
        bitrate: '20-25',
        audioEncoding: null,
        audioBitrate: null,
    },
    '330': {
        container: 'webm',
        resolution: '144p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '0.08',
        audioEncoding: null,
        audioBitrate: null,
    },
    '331': {
        container: 'webm',
        resolution: '240p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '0.1-0.15',
        audioEncoding: null,
        audioBitrate: null,
    },
    '332': {
        container: 'webm',
        resolution: '360p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '0.25',
        audioEncoding: null,
        audioBitrate: null,
    },
    '333': {
        container: 'webm',
        resolution: '240p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '0.5',
        audioEncoding: null,
        audioBitrate: null,
    },
    '334': {
        container: 'webm',
        resolution: '720p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '1',
        audioEncoding: null,
        audioBitrate: null,
    },
    '335': {
        container: 'webm',
        resolution: '1080p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '1.5-2',
        audioEncoding: null,
        audioBitrate: null,
    },
    '336': {
        container: 'webm',
        resolution: '1440p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '5-7',
        audioEncoding: null,
        audioBitrate: null,
    },
    '337': {
        container: 'webm',
        resolution: '2160p HDR, HFR',
        encoding: 'VP9',
        profile: 'profile 2',
        bitrate: '12-14',
        audioEncoding: null,
        audioBitrate: null,
    },
    "394": {
        container: "mp4",
        resolution: "256x144",
        audioBitrate: null,
        audioEncoding: null,
        bitrate: "?",
        encoding: "H.264",
        profile: "?"
    },
    "395": {
        container: "mp4",
        resolution: "426x240",
        audioBitrate: null,
        audioEncoding: null,
        bitrate: "?",
        encoding: "H.264",
        profile: "?"
    },
    "396": {
        container: "mp4",
        resolution: "640x360",
        audioBitrate: null,
        audioEncoding: null,
        bitrate: "?",
        encoding: "H.264",
        profile: "?"
    },
    "397": {
        container: "mp4",
        resolution: "854x480",
        encoding: "H.264",
        profile: "?",
        audioBitrate: null,
        audioEncoding: null,
        bitrate: "?"
    },
    '139': {
        container: 'mp4',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'aac',
        audioBitrate: 48,
    },
    '140': {
        container: 'm4a',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'aac',
        audioBitrate: 128,
    },
    '141': {
        container: 'mp4',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'aac',
        audioBitrate: 256,
    },
    '171': {
        container: 'webm',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'vorbis',
        audioBitrate: 128,
    },
    '172': {
        container: 'webm',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'vorbis',
        audioBitrate: 192,
    },
    '249': {
        container: 'webm',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'opus',
        audioBitrate: 48,
    },
    '250': {
        container: 'webm',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'opus',
        audioBitrate: 64,
    },
    '251': {
        container: 'webm',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'opus',
        audioBitrate: 160,
    },
    '91': {
        container: 'ts',
        resolution: '144p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.1',
        audioEncoding: 'aac',
        audioBitrate: 48,
    },
    '92': {
        container: 'ts',
        resolution: '240p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.15-0.3',
        audioEncoding: 'aac',
        audioBitrate: 48,
    },
    '93': {
        container: 'ts',
        resolution: '360p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.5-1',
        audioEncoding: 'aac',
        audioBitrate: 128,
    },
    '94': {
        container: 'ts',
        resolution: '480p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '0.8-1.25',
        audioEncoding: 'aac',
        audioBitrate: 128,
    },
    '95': {
        container: 'ts',
        resolution: '720p',
        encoding: 'H.264',
        profile: 'main',
        bitrate: '1.5-3',
        audioEncoding: 'aac',
        audioBitrate: 256,
    },
    '96': {
        container: 'ts',
        resolution: '1080p',
        encoding: 'H.264',
        profile: 'high',
        bitrate: '2.5-6',
        audioEncoding: 'aac',
        audioBitrate: 256,
    },
    "265": {
        container: "ts",
        resolution: "2560x1440",
        encoding: "H.264",
        profile: "?",
        bitrate: "?",
        audioEncoding: "aac",
        audioBitrate: 256
    },
    "267": {
        container: "ts",
        resolution: "3840x2160",
        encoding: "H.264",
        profile: "high",
        bitrate: "?",
        audioEncoding: "aac",
        audioBitrate: 128
    },
    '120': {
        container: 'flv',
        resolution: '720p',
        encoding: 'H.264',
        profile: 'Main@L3.1',
        bitrate: '2',
        audioEncoding: 'aac',
        audioBitrate: 128,
    },
    '127': {
        container: 'ts',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'aac',
        audioBitrate: 96,
    },
    '128': {
        container: 'ts',
        resolution: null,
        encoding: null,
        profile: null,
        bitrate: null,
        audioEncoding: 'aac',
        audioBitrate: 96,
    },
    '132': {
        container: 'ts',
        resolution: '240p',
        encoding: 'H.264',
        profile: 'baseline',
        bitrate: '0.15-0.2',
        audioEncoding: 'aac',
        audioBitrate: 48,
    },
    '151': {
        container: 'ts',
        resolution: '720p',
        encoding: 'H.264',
        profile: 'baseline',
        bitrate: '0.05',
        audioEncoding: 'aac',
        audioBitrate: 24,
    }
};
function getIdFromURL(link) {
    const parsed = _url.parse(link, true);
    let id = parsed.query.v;
    if ((parsed.hostname === 'youtu.be' || parsed.hostname === 'youtube.com' || parsed.hostname === 'www.youtube.com') && !id) {
        const s = parsed.pathname.split('/');
        id = s[s.length - 1];
    }
    if (!id)
        throw 'No video id found: ' + link;
    id = id.substring(0, 11);
    if (!validateID(id))
        throw "Invalid id " + id;
    return id;
}
exports.getIdFromURL = getIdFromURL;
function getVideoID(str) {
    if (validateID(str)) {
        return str;
    }
    else {
        return getIdFromURL(str);
    }
}
exports.getVideoID = getVideoID;
function validateID(id) {
    return id.match(/^[a-zA-Z0-9-_]{11}$/);
}
function getChannelID(url) {
    if (!url)
        throw "empty";
    let parsedUrl = new URL(url);
    module_log_1.log(parsedUrl);
    module_log_1.log(parsedUrl.pathname.match(/^UC[a-zA-Z0-9-_]{22}$/));
    return parsedUrl.search;
}
function getPlaylistID(url) {
    if (!url)
        throw "empty";
    let parsedUrl = new URL(url);
    module_log_1.log(parsedUrl);
    return parsedUrl.search;
}
async function getInfos(id) {
    if (!validateID(id))
        throw "invalid video id";
    let infos = await module_net_1.getJSON(`https://www.youtube.com/watch?v=${id}&pbj=1`, exports.YOUTUBE_CLIENT);
    let videoInfos = {};
    for (let info of infos) {
        if ("player" in info) {
            videoInfos = info.player.args;
        }
        else {
            if ("playerResponse" in info) {
                videoInfos.playabilityStatus = info.playerResponse.playabilityStatus;
                videoInfos.details = info.playerResponse.videoDetails;
            }
        }
    }
    if (!videoInfos.playabilityStatus)
        throw "playbilityStatus is missing";
    if (videoInfos.playabilityStatus.status != "OK") {
        if (videoInfos.playabilityStatus.reason == "Sign in to confirm your age") {
            module_log_1.warn("try to bypass age via embed");
            let text = await module_net_1.getText(`https://www.youtube.com/get_video_info?html5=1&video_id=${id}`);
            videoInfos = querystring.parse(text);
            let status = JSON.parse(videoInfos.player_response);
            videoInfos.playabilityStatus = status.playabilityStatus;
            videoInfos.details = status.videoDetails;
        }
        else {
            throw videoInfos.playabilityStatus.reason || videoInfos.playabilityStatus.status;
        }
    }
    if (videoInfos.playabilityStatus.reason)
        module_log_1.warn("reason", videoInfos.playabilityStatus.reason);
    if (!videoInfos.details)
        throw "details is missing";
    if (videoInfos.url_encoded_fmt_stream_map) {
        let downloadUrls = {};
        videoInfos.url_encoded_fmt_stream_map
            .split(",")
            .map(s => querystring.parse(s))
            .forEach((o) => downloadUrls[o.itag] = o);
        videoInfos.downloadUrls = downloadUrls;
    }
    else {
        videoInfos.downloadUrls = null;
    }
    if (videoInfos.adaptive_fmts) {
        let adaptives = {};
        videoInfos.adaptive_fmts
            .split(",")
            .map(s => querystring.parse(s))
            .forEach((o) => {
            if (!(o.itag in exports.FORMATS))
                module_log_1.error("adaptive unknown itag", module_utils_1.prettify(o));
            adaptives[o.itag] = o;
        });
        videoInfos.adaptives = adaptives;
    }
    else {
        videoInfos.adaptives = null;
    }
    if (videoInfos.hlsvp) {
        module_log_1.debug("download hlsvp");
        let m3u8 = await module_net_1.getText(videoInfos.hlsvp);
        videoInfos.m3u8 = m3u8.split("\n")
            .filter(line => line.length != 0 && !line.startsWith("#"))
            .reduce((arr, url) => {
            let itag = parseInt(url.match(/\/itag\/(\d+)\//)[1]);
            let fmt = null;
            if (itag in exports.FORMATS) {
                fmt = exports.FORMATS[itag];
            }
            else {
                fmt = {};
                module_log_1.error("m3u8 unknown itag", itag);
            }
            fmt.url = url;
            fmt.itag = itag;
            arr[itag] = fmt;
            return arr;
        }, {});
    }
    else {
        videoInfos.m3u8 = null;
    }
    delete videoInfos.fflags;
    delete videoInfos.messages;
    delete videoInfos.player_response;
    delete videoInfos.url_encoded_fmt_stream_map;
    delete videoInfos.adaptive_fmts;
    try {
        if (videoInfos.adaptives) {
            videoInfos.published = new Date(parseInt(Object.values(videoInfos.adaptives)[0].lmt) / 1000);
        }
        else if (videoInfos.downloadUrls) {
            let lmt = Object.values(videoInfos.downloadUrls)[0].url.match(/lmt=(\d+)/);
            if (lmt) {
                videoInfos.published = new Date(parseInt(lmt[1]) / 1000);
            }
        }
    }
    catch (e) {
        module_log_1.error("fail to extract published", e);
    }
    if (!videoInfos.published) {
        videoInfos.published = new Date();
    }
    return videoInfos;
}
exports.getInfos = getInfos;
async function search(text) {
    let url = `https://www.youtube.com/results?search_query=${text.replace(/\s/g, "+")}&pbj=1`;
    let json = await module_net_1.getJSON(url, exports.YOUTUBE_CLIENT);
    if (json.length != 2)
        throw "fail";
    let results = module_utils_1.jsonDeepSearch("videoRenderer", json[1]);
    return results.map(result => {
        try {
            let searchResult = {
                author: result.shortBylineText.runs[0].text,
                channelId: module_utils_1.jsonDeepSearch("browseId", result)[0],
                description: result.descriptionSnippet ? result.descriptionSnippet.simpleText : "",
                thumbnail: result.thumbnail.thumbnails[0].url,
                title: result.title.simpleText,
                videoId: result.videoId,
                views: result.viewCountText ? result.viewCountText.simpleText.replace(/,/g, "").split(" ")[0] : "0"
            };
            return searchResult;
        }
        catch (err) {
            module_log_1.error(result);
            return null;
        }
    });
}
exports.search = search;
async function downloadUrls(video, basename, formatsRestriction, maxParallelDownload) {
    if (video.downloadUrls && Object.values(video.downloadUrls)[0].url.includes("signature")) {
        module_log_1.debug("downloadUrls formats", Object.keys(video.downloadUrls));
        for (let itag of formatsRestriction) {
            if (itag in video.downloadUrls) {
                try {
                    await module_download_1.downloadMultipart(video.downloadUrls[itag].url, basename + ".mp4", maxParallelDownload);
                    return true;
                }
                catch (err) {
                    module_log_1.error("downloadUrls fail", itag);
                }
            }
        }
        throw "downloadUrls no format available.";
    }
    else {
        throw "downloadUrls without signature.";
    }
}
exports.downloadUrls = downloadUrls;
async function downloadDash(video, basename, formatsRestriction, ffmpegPath) {
    let videoFilename = basename + ".video";
    let audioFilename = basename + ".audio";
    let videoDone = false;
    let audioDone = false;
    if (video.adaptives) {
        module_log_1.debug("adaptives formats", Object.keys(video.adaptives).join(","));
        for (let itag in video.adaptives) {
            if (!(itag in exports.FORMATS))
                module_log_1.debug(module_utils_1.prettify(video.adaptives[itag]));
        }
        for (let itag of formatsRestriction) {
            if (itag in video.adaptives) {
                let a = video.adaptives[itag];
                try {
                    module_log_1.debug("adaptive download", itag);
                    let url = a.url;
                    if ("sp" in a)
                        throw "no signature";
                    await module_download_1.downloadMultipart(a.url, videoFilename, global.system.maxParallelDownload);
                    videoDone = true;
                    break;
                }
                catch (err) {
                    module_log_1.error(`adaptives ${itag} fail ${err}`);
                }
            }
        }
        if (140 in video.adaptives) {
            try {
                module_log_1.debug("adaptive download audio");
                await module_download_1.downloadMultipart(video.adaptives[140].url, audioFilename, global.system.maxParallelDownload);
                audioDone = true;
            }
            catch (err) {
                module_log_1.error("adaptive audio fail", err);
            }
        }
    }
    if (!videoDone) {
        if (!video.dashmpd)
            throw "dashmpd is missing";
        let dash = await module_net_1.getText(video.dashmpd);
        let re = /<representation.+?id="(\d+?)".+?<baseurl>(.+?)<\/baseurl>/gi;
        let formats = {};
        let m;
        while (m = re.exec(dash)) {
            formats[m[1]] = m[2];
        }
        module_log_1.debug("dash formats available", Object.keys(formats), "req", formatsRestriction);
        for (let itag in formats) {
            if (!(itag in exports.FORMATS))
                module_log_1.debug(module_utils_1.prettify(formats[itag]));
        }
        for (let itag of formatsRestriction) {
            if (itag in formats) {
                let retry = 2;
                try {
                    let url = formats[itag];
                    await module_download_1.downloadMultipart(url, videoFilename, global.system.maxParallelDownload);
                    videoDone = true;
                    break;
                }
                catch (err) {
                    retry--;
                    module_log_1.error(itag, "fail", err);
                }
            }
        }
        if (!videoDone)
            throw "no video available";
        if (!audioDone) {
            if ("140" in formats) {
                await module_download_1.downloadMultipart(formats[140], audioFilename, global.system.maxParallelDownload);
                audioDone = true;
            }
        }
    }
    if (videoDone && audioDone) {
        let ffmpeg = child_process_1.spawn(ffmpegPath || "ffmpeg", ["-loglevel", "error", "-i", videoFilename, "-i", audioFilename, "-c", "copy", "-y", basename + ".mkv"]);
        return module_utils_1.promisify((resolve, reject) => {
            ffmpeg.on("error", reject);
            ffmpeg.stderr.pipe(process.stdout);
            ffmpeg.on("exit", async (code) => {
                if (code) {
                    reject(`ffmpeg returns ${code}`);
                }
                else {
                    try {
                        if (await P.exists(videoFilename)) {
                            module_log_1.log("del", videoFilename, await P.del(videoFilename));
                        }
                        if (await P.exists(audioFilename)) {
                            module_log_1.log("del", audioFilename, await P.del(audioFilename));
                        }
                    }
                    catch (err) {
                        module_log_1.error("del fail", err);
                    }
                    resolve();
                }
            });
        });
    }
    else {
        if (audioDone)
            P.del(audioFilename);
        module_log_1.error("fail to download video", videoDone, audioDone);
    }
}
exports.downloadDash = downloadDash;
},{"./module_download":15,"./module_fs":17,"./module_log":19,"./module_net":20,"./module_utils":21,"child_process":undefined,"querystring":undefined,"url":undefined}]},{},[5])