import {log,error} from "../ts/__shared__/module_log"
import * as utils from "../ts/__shared__/module_utils"

function testFunction(title: string, cb: Function) {
	try {
		log("Testing", title)
		let result = cb({})

		result ? log("✔ PASS " + title) : error("✘ FAIL" + title)
	}
	catch (err) {
		error("✘ CRASH", title, err)
	}
}

testFunction("cleanFilename",()=>{


	// cli & " '
	// filename " \ / ? * < > |

	let s=`"hello" 'hello' you & me this|that x > y b < a  /\\ \m \f`

	log(utils.cleanFilename(s))
})
