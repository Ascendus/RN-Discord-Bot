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
class GuildCreateListener extends Listener_1.Listener {
    constructor() {
        super("guildCreate", {
            category: "client",
            emitter: "client",
            name: "guildCreate"
        });
    }
    exec(client, guild) {
        return __awaiter(this, void 0, void 0, function* () {
            guild.channels.cache.forEach((channel) => __awaiter(this, void 0, void 0, function* () {
                if (channel
                    .permissionsFor(guild.me)
                    .has("SEND_MESSAGES")) {
                    yield channel.send({
                        embeds: [
                            {
                                title: "Roleplay Nations has been added",
                                color: "BLUE",
                                description: "Thank you for adding Roleplay Nations to your wonderful server!\n If you're facing any issues with the bot or need support, join our server: https://discord.gg/5M8MXjk"
                            }
                        ]
                    });
                }
            }));
        });
    }
}
exports.default = GuildCreateListener;
