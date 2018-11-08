"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_log_1 = require("../ts/__shared__/module_log");
const utils = __importStar(require("../ts/__shared__/module_utils"));
function testFunction(title, cb) {
    try {
        module_log_1.log("Testing", title);
        let result = cb({});
        result ? module_log_1.log("✔ PASS " + title) : module_log_1.error("✘ FAIL" + title);
    }
    catch (err) {
        module_log_1.error("✘ CRASH", title, err);
    }
}
testFunction("cleanFilename", () => {
    let s = `"hello" 'hello' you & me this|that x > y b < a  /\\ \m \f`;
    module_log_1.log(utils.cleanFilename(s));
});
