"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listener_1 = require("../../structures/Listener");
class ReadyListener extends Listener_1.Listener {
    constructor() {
        super("ready", {
            category: "client",
            emitter: "client",
            name: "ready"
        });
    }
    exec(client) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = client.user) === null || _a === void 0 ? void 0 : _a.setStatus("online");
            return client.logger.sendReady("Bot READY!");
        });
    }
}
exports.default = ReadyListener;
