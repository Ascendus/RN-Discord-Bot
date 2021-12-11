import { Command } from "../../structures/Command";
import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";

export default class InfoCommand extends Command {
    public constructor() {
        super("info", {
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Sends info about the bot.",
            enabledByDefault: true,
            examples: ["info"],
            exceptions: {
                ignoreCooldown: configOptions.owners,
                ignorePermissions: configOptions.owners
            },
            isSubCommand: false,
            ownerOnly: false,
            permissions: {
                clientPermissions: [],
                userPermissions: []
            },
            usage: "info"
        });
    }

    public async exec(client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
        return interaction.reply({
            embeds: [
                {
                    title: "Roleplay Nations",
                    color: "PURPLE",
                    description: `:bar_chart: Servers: ${client.guilds.cache.size}\n:radio_button: Ping: ${client.ws.ping}ms\n:tools: Version 0.8.0\n:green_circle: Fully operational`,
                    thumbnail: {
                        url: "https://media.discordapp.net/attachments/776880617358753802/776901030860292106/brand.png"
                    },
                    footer: {
                        text: "Coded by Matija#0007 and Ascendus#6316"
                    }
                }
            ]
        });
    }
}