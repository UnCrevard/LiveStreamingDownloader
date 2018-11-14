# LiveStreamDownloader

![screenshot]("LiveStreamDownloader.png")

## change log 0.2 (quick patch) :

	+ fix ffmpeg path for younow.
	+ multipart download is disabled for now cuz fetch api sux and I need to find another way to retrieve all headers (only a problem for youtube & vk replays)

## Features :

	+only need a mouse. no cli
	+multi services younow youtube periscope & vk as source
	+automatic download
	+direct download from supported urls
	+youtube rewind up to 4 hours
	+auto download at the end of the stream when it's available
	+download speed : multipart download or parallel hls. no speed limit.
	+dash & hls fast & live support
	+electron is like chrome browser so you can switch to dev mode with ctrl+shift+i & reload with ctrl+R
	+no analytics, no trackers, no spying, no ads.

## Shortkey :

	ctrl+tab to switch tab
	r to refresh
	delete ignore all broadcasts at once
	alt show menu

## Searches syntax samples :

	http://liveomg.com/?filter=vk.com
	http://liveomg.com/?filter=periscope.tv
	http://liveomg.com/?filter=younow.com
	http://liveomg.com/?sort=rising
	http://liveomg.com/?sort=best

	younow:top // trendings
	younow:tag:xxx // tag result
	younow:follow:xxx // user list to follow. you or someone else

	periscope:tag:xxx // sloooww cuz pscp api suuuxxx

	youtube:xxx // use the same search engine/syntax of the youtube website
	youtube:music -bieber,live
	youtube:trailer,4k,today
	youtube:funny thing&sp=CAISBBABQAE%253D // &sp=xxx is youtube filtering flags


	youtube keywords :

		content : movie,show,short,long,channel,playlist,partner

		time : hour,today,this week,this month,this year

		type : live,4k,hd,subtitle,cc,360,vr180,3d,hdr

		sort by : ?

## direct download supported urls :

	https://www.pscp.tv/username
	https://www.pscp.tv/username/broadcast
	https://www.pscp.tv/w/broadcast

	https://www.youtube.com/watch?v=xxx // no playlist or channel id

	https://www.younow.com/username

version 0.0:

## Bugs :

younow :

	ffmpeg rtmp stop too early. lucky you are replay mode can catch the all thing later on.
	younow live still using rtmp. so I use ffmpeg for that. I don't want to work on a dead protocol (flash based)

youtube :

	can't extract copyrighted or videos without signature (not a problem for live based stream)
	age limited video is working btw

periscope :

	search api sux. use vk instead.

misc :

	electron is cross platform but I don't own a mac or dev on linux so there is not testing on those things.

ui :

	huge slowndown when there is a lot of thumbnails (vue or electon ?)
	no update system
	video player + vue is a mess

## todo :

high :

	button on player to record is not working !
	player sux
	auto update LSD

low :

	option to select youtube quality. by default the higher quality is selected (4k)
	move file at the end
	regex include
	regex exclude
	add warning on younow 4 player (not supported)
	twitch?
	search box thumb & recording
	capture url clipboard
	focus/blur
	change user agent & accept language & test

bugs :

	auto replay is a mess on reload
	vue/thumnails are not updated sometimes

ui :

	add & block user
	users tab
	recording tab +add +block +getlist +infos
	export/import configuration to JSON
	focus on thumb tab
	hover sur les thumb add & block & play & full size thumb
	language filter
	load error thumb...

## tips :

	you can delete .ts files while recording.
	use potplayer (best. allow rotation and more),mpchc or vlc to open those files.
	rewind or download can easily saturate your network.
	use delete to ignore all broadcasts
	
