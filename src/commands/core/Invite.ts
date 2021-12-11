import { Command } from "../../structures/Command";
import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";

export default class InviteCommand extends Command {
    public constructor() {
        super("invite", {
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Invite links for the bot and the support server.",
            enabledByDefault: true,
            examples: ["invite"],
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
            usage: "invite"
        });
    }

    public async exec(_client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
        return interaction.reply({
            embeds: [
                {
                    title: "Invite",
                    color: "BLUE",
                    fields: [
                        { name: "\u200b", value: "[Bot Invite](https://discord.com/oauth2/authorize?client_id=740822744303927378&scope=bot&permissions=388160) \n━━━━━━━━━━━━━━━━━━━━ \n[Server Invite](https://discord.gg/vcSrNJP)" } 
                    ]
                }
            ]
        })
    }
}