import { Command } from "../../structures/Command";
import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";

export default class HelpCommand extends Command {
    public constructor() {
        super("help", {
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Shows a list of available commands.",
            enabledByDefault: true,
            examples: ["help"],
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
            usage: "help"
        });
    }

    public async exec(client: ExtendedClient, interaction: CommandInteraction) {
        
    }
}