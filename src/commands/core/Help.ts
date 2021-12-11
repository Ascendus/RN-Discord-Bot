import { Command } from "../../structures/Command";
import { CommandInteraction, MessageEmbed } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";
import { sendPaginatedEmbeds } from "discord.js-embed-pagination";

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

    public async exec(_client: ExtendedClient, interaction: CommandInteraction) {
        const embeds: MessageEmbed[] = [
            new MessageEmbed({
                title: "Command List",
                color: "BLUE",
                description: "[👉 Support Server 👈](https://discord.gg/vcSrNJP)\n\n __**Non-RP Commands**__\n :warning: **Disclaimer:** If you didn't give the `MANAGE_MESSAGES` permission to the bot, please use the `help2` command\n\n`info` - Sends basic info of this bot\n`latency` - Shows the current latency of the bot\n`donate` - Used to get info on donation tiers and their pricings\n`invite` - Invite links for the bot and the support server"
            }),
            new MessageEmbed({
                title: "Command List",
                color: "BLUE",
                description: "[👉 Support Server 👈](https://discord.gg/vcSrNJP)\n\n __**RP Commands**__\n :warning: **Disclaimer:** In order to run RP related commands, you will need to establish your nation with the `start <nation name>` command\n\n **The Starting Commands**\n`start <nation name>` - Establishes your nation. `<nation name>` is a required argument\n`delete_nation` - Deletes your nation. You cannot undo this action\n`change name <new name>` - Changes your nation name. `<new name>` is a required argument\n`resources [res]` - Sends the amount of resources you have. `[]` is added when defining aliases, in this case, `res` is the same as `resources`\n`motto set <national motto>` - Used to set your national motto\n`governments` - Shows every government type and info about it\n`government choose <government type>` - Used for you to choose a government type. Only government types from the `governments` command are usable\n`stats` - Sends info on Crime Rate, Disease Rate, Fire Hazard and Pollution Index\n`overview` - Sends info for your nation\n`leader <leader name>` - Used to choose your nation leader\n`choose flag <flag link>` - Used to choose your nation flag. :warning: **Disclaimer:** Any images that might be breaking Discord ToS or our rules, will result in a ban"
            }),
            new MessageEmbed({
                title: "Command List",
                color: "BLUE",
                description: "[👉 Support Server 👈](https://discord.gg/vcSrNJP)\n\n __**RP Commands**__\n :warning: **Disclaimer:** In order to run RP related commands, you will need to establish your nation with the `start <nation name>` command\n\n **Diplomacy Commands**\n`alliance commands` - Sends all info on alliance command subgroup\n`diplomacy help` - All commands for the **diplomacy** group of commands\n\n **Basic Nation Editing/Info Commands**\n`research tech <amount>` - Used for improving tehnology in your nation. Leveling system is introduced\n`messages on` - If your DMs are closed, or for any other reason, you can run this command to check Espionage Logs conducted in your nation\n`message` - **In order for this command to work, you need to run the** `messages on` command. Shows all espionage logs conducted in your nation\n`telegram <nation name> <message here>` - Used to send messages to users via DMs. **<nation name> argument must be surrounded by double quotes** :warning: **Disclaimer**: The bot needs the Manage Messages permission for this command to work, the other user as well needs his DMs OPEN in order to work\n`currency set <new currency>` - **Donator-only** feature. Used to change your nation currency\n`revenue [economy]` - Sends detailed info on income, expenses, and resource manufacturing and usage. `[]` is added when defining aliases, in this case, `revenue` is the same as `economy`\n`rank [level]` - Sends info on all nation score ranks and shows the nation score of the user's who has run the command. `[]` is added when defining aliases, in this case, `rank` is the same as `level`"
            }),
            new MessageEmbed({
                title: "Command List",
                color: "BLUE",
                description: "[👉 Support Server 👈](https://discord.gg/vcSrNJP)\n\n __**RP Commands**__\n :warning: **Disclaimer:** In order to run RP related commands, you will need to establish your nation with the `start <nation name>` command\n\n **Military Commands**\n`discharge <amount> soldiers` - Used to discharge soldiers\n`retire <amount> <unit type>` - Used to retire tanks/ships/planes/missiles\n`fire <amount> spies` - Used to fire your spies\n`build <amount> <unit type>` - Used to build ships/planes/tanks/missiles, no other blueprints are available at the moment\n`recruit <amount> <unit type>` - Used to recruit soldiers/spies\n`military stats` - Sends statistics about your nation's military\n`military prices` - To see the prices for each tank/plane/ship/missile/soldier/spy\n`espionage gather intel <nation name>` - Used to gather information on what a nation has (military stats, balance and resources). Your spies might get detected, depending on the nation you are performing an espionage mission on\n`espionage terrorize civ <nation name>` - Used to terrorize civilians in a nation. Your spies might get detected, depending on the nation you are performing an espionage mission on\n\n`espionage sabotage tanks <nation name>` - Used to sabotage tanks of a nation. Your spies might get detected, depending on the nation you are performing an espionage mission on\n`war tutorial` - The help command for the **wars** feature"
            }),
            new MessageEmbed({
                title: "Command List",
                color: "BLUE",
                description: "[👉 Support Server 👈](https://discord.gg/vcSrNJP)\n\n __**RP Commands**__\n :warning: **Disclaimer:** In order to run RP related commands, you will need to establish your nation with the `start <nation name>` command\n\n **Construction/Deconstruction Commands**\n`buildings info` - Shows supported buildings for construction\n`buildings construct <amount> <building type>` - Used for building city buildings from the `buildings info` command\n`buildings remove <amount> <building type>` - Used for removing city buildings. You get the amount of money back\n`civil build <amount> <building type>` - Used to build certain buildings. Located on the 3rd page in the `buildings info` command\n`civil demolish <amount> <building type>` - Used to demolish buildings from the 3rd page in the `buildings info` command\n`purchase infra <amount>` - Used for purchasing infra for your nation. Number of citizens is affected by this. Leveling system is introduced\n`undo infra <amount>` - Removes homes\n\n **Trade Commands**\n`trade deals` - Sends tabular info on trade deals other players offered\n`trade offer <amount> <resource> for <amount of money>` - Used to offer trade deals other users might want, this offer is posted publicly\n`trade buy offer <trade id>` - Used to buy trade deals. Trade id is printed out in the tabular trade sheet command\n`trade cancel <trade ID>` - Removes your previously posted trade deal\n\n **News Commands**\n`news post` - Allows you to post a news article everyone will see. This is a multi-step procedure command\n`news world` - Sends all article titles, and how to read their contents\n`news read <article ID>`- Allows you to read a specific news article"
            })
        ];

        return sendPaginatedEmbeds(interaction, embeds, {
            previousLabel: "Previous Page",
            nextLabel: "Next Page"
        });
    }
}