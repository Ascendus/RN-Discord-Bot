import { Country, UtilityDefaults } from "./Interfaces";
import { ExtendedClient } from "../../client/Client";
import { MessageEmbed, MessageEmbedOptions } from "discord.js";

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

    public checkCountryName(country: string, countryList: Country[]) {
        let message: null | MessageEmbed;
        message = null;

        if (country.length > 25) message = new MessageEmbed({
            title: "Denied",
            color: "RED",
            description: ":x: Your nation name must be between 1 and 25 characters long"
        });

        const countryNames: string[] = [];

        countryList.forEach((country: Country): void => {
            countryNames.push(country.country.toLowerCase());
        });

        if (countryNames.includes(country.toLowerCase())) message = new MessageEmbed({
            title: "Nation Name Taken",
            color: "RED",
            fields: [
                { name: ":x: Name taken", value: "Name taken, please try again with a different name"}
            ]
        });

        return message;
    }

    public embed(options: MessageEmbedOptions): MessageEmbed {
        return new MessageEmbed(options);
    }

    public getVariableName(obj: { variable: any }): string {    
        return Object.keys(obj)[0];
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
            .map((word: string): string => word.charAt(0).toUpperCase() + word.substring(1))
            .join(" ");
        return permissionString;
    }
}
