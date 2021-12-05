"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    sendSuccess(message) {
        return console.log(`${chalk_1.default.green("success")} - ${message}`);
    }
    ;
    sendError(message) {
        return console.log(`${chalk_1.default.red("error")}   - ${message}`);
    }
    ;
    sendWarning(message) {
        return console.log(`${chalk_1.default.yellow("warning")} - ${message}`);
    }
    ;
    sendInfo(message) {
        return console.log(`${chalk_1.default.blueBright("info")}    - ${message}`);
    }
    ;
    sendReady(message) {
        return console.log(`${chalk_1.default.magenta("ready")}   - ${message}`);
    }
    ;
}
exports.Logger = Logger;
;
