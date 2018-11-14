import * as _path from "path"
import {formatDateTime,cleanFilename} from "./__shared__/module_utils"
import {debug} from "./__shared__/module_log"

// create filename from FilenameInformations

export function createFilename(infos: FilenameInformations,pathDownload: string): string {

	debug(global.vue.settings.filenameTemplate)
	debug(infos)
	debug(pathDownload)

	let filename=cleanFilename(global.vue.settings.filenameTemplate
		.replace("service",infos.service.capitalizeFirstLetter())
		.replace("country",infos.country||infos.language||"XX"))
		.replace("username",infos.username||"missing")
		.replace("date",formatDateTime(infos.date||new Date()))
		.replace("title",infos.title||"missing")
		.replace("type",infos.type||"missing")
		.replace("bid",infos.broadcastId as any||"missing")
		.replace("uid",infos.userId as any||"missing")

	return _path.join(pathDownload,filename)
}
