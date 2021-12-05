import { Command } from "../Command";
import { MessageEmbed, MessageEmbedOptions } from "discord.js";
import { ExtendedClient } from "../../client/Client";
import { UtilityDefaults } from "./Interfaces";

export class Utilities {
    public client: ExtendedClient;
    public defaults: UtilityDefaults;

    constructor(client: ExtendedClient) {
        this.client = client;
        this.defaults = {
            colors: {
                error: "RED"
            }
        };
    }

    public capitalize(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    public embed(options: MessageEmbedOptions): MessageEmbed {
        return new MessageEmbed(options);
    }

    public pages(
        arr: any[],
        itemsPerPage: number,
        page: number = 1
    ): any[] | null {
        const maxPages: number = Math.ceil(arr.length / itemsPerPage);
        if (page < 1 || page > maxPages) return null;
        return arr.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }

    public permission(permission: string): string {
        const permissionString: string = permission
            .replace(/_/g, " ")
            .toLowerCase()
            .replace(/guild/g, "server")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(" ");
        return permissionString;
    }
}
