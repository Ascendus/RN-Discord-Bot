import { Command } from "../../structures/Command";
import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";

export default class VoteCommand extends Command {
    public constructor() {
        super("vote", {
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Sends links for voting for Roleplay Nations.",
            enabledByDefault: true,
            examples: ["vote"],
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
            usage: "vote"
        });
    }

    public async exec(_client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
        return interaction.reply({
            content: "**Please upvote Roleplay Nations!** :arrow_up: It means a lot to us if you could upvote our bot\nYou can upvote RN on these sites:\nhttps://top.gg/bot/740822744303927378\nhttps://discord.boats/bot/740822744303927378"
        })
    }
}