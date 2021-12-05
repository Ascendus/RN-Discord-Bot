"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
const discord_js_1 = require("discord.js");
class Utilities {
    constructor(client) {
        this.client = client;
        this.defaults = {
            colors: {
                error: "RED"
            }
        };
    }
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    embed(options) {
        return new discord_js_1.MessageEmbed(options);
    }
    pages(arr, itemsPerPage, page = 1) {
        const maxPages = Math.ceil(arr.length / itemsPerPage);
        if (page < 1 || page > maxPages)
            return null;
        return arr.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }
    permission(permission) {
        const permissionString = permission
            .replace(/_/g, " ")
            .toLowerCase()
            .replace(/guild/g, "server")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(" ");
        return permissionString;
    }
}
exports.Utilities = Utilities;
