import { Command } from "../../structures/Command";
import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";

export default class Help2Command extends Command {
    public constructor() {
        super("help2", {
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Shows a list of available commands.",
            enabledByDefault: true,
            examples: ["help2"],
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
            usage: "help2"
        });
    }

    public async exec(_client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
        await interaction.reply({
            content: "\n :warning: **Disclaimer:** In order to run RP related commands, you will need to establish your nation with the `start <nation name>` command\n\n`info` - Sends basic info of this bot\n`latency` - Shows the current latency of the bot\n`donate` - Sends info on donation tiers and the rewards for donating"
        });

        await interaction.reply({
            content: "`invite` - Invite links for the bot and the support server\n`start <nation name>` - Establishes your nation. `<nation name>` is a required argument\n`delete my nation` - Deletes your nation. You cannot undo this action\n`change name <new name>` - Changes your nation name. `<new name>` is a required argument\n`resources [res]` - Sends the amount of resources you have. `[]` is added when defining aliases, in this case, `res` is the same as `resources`\n`about resources` - Sends info on what everyresource can do (Changes from this command are still not released)\n`aid <@Mention> <type of aid> <amount>` - Aid other nations/users. You are eligible to send amounts of funds, soldiers or resources\n`leader <leader name>` - Used to choose your nation leader\n`balance [bal]` - Shows national budget statistics (amount of money you have). `[]` is added when defining aliases, in this case, `bal` is the same as `balance`\n`tax` - Shows how much tax income you can collect\n`overview` - Sends info for your nation\n`discharge <amount> soldiers` - Used to discharge soldiers\n`retire <amount> <unit type>` - Used to retire tanks/ships/planes/missiles\n`fire <amount> spies` - Used to fire your spies\n`revenue [economy]` - Sends detailed info on income, expenses, and resource manufacturing and usage. `[]` is added when defining aliases, in this case, `revenue` is the same as `economy`\n`rank [level]` - Sends info on all nation score ranks and shows the nation score of the user's who has run the command. `[]` is added when defining aliases, in this case, `rank` is the same as `level`\n`trade cancel <trade ID>` - Removes your previously posted trade deal\n`alliance commands` - Sends all info on alliance command subgroup\n`claim vote` - Allows you to get reward money for voting"
        });

        await interaction.reply({
            content: "\n`collect tax` - Used to collect tax income and put it in your nation's budget\n`expenses` - Shows how much you need to pay (national expenses)\n`pay expenses` - Used to pay national expenses\n`governments` - Shows every government type and info about it\n`choose flag <flag link>` - Used to choose your nation flag. :warning: **Disclaimer:** Any images that might be breaking Discord ToS or our rules, will result in a ban\n`government choose <government type>` - Used for you to choose a government type. Only government types from the `governments` command are usable\n`build <amount> <unit type>` - Used to build ships/planes/tanks, no other blueprints are available at the moment\n`recruit <amount> soldiers` - Used to recruit soldiers\n`military` - Sends statistics about your nation's military\n`diplomacy help` - All commands for the **diplomacy** group of commands\n`motto set <national motto>` - Used to set your national motto\n`message` - **In order for this command to work, you need to run the** `messages on` command. Shows all espionage logs conducted in your nation\n`messages on` - If your DMs are closed, or for any other reason, you can run this command to check Espionage Logs conducted in your nation\n`espionage terrorize civ <nation name>` - Used to terrorize civilians in a nation. Your spies might get detected, depending on the nation you are performing an espionage mission on\n`stats` - Sends info on Crime Rate, Disease Rate, Fire Hazard and Pollution Index\n`news` - Sends latest news reports in your nation"
        });

        await interaction.reply({
            content: "\n`trade deals` - Sends tabular info on trade deals other players offered\n`trade offer <amount> <resource> for <amount of money>` - Used to offer trade deals other users might want, this offer is posted publicly\n`trade buy offer <trade id>` - Used to buy trade deals. Trade id is printed out in the tabular trade sheet command\n`research tech <amount>` - Used for improving tehnology in your nation. Leveling system is introduced\n`purchase infra <amount>` - Used for purchasing infra for your nation. Number of citizens is affected by this. Leveling system is introduced\n`telegram <nation name> <message here>` - Used to send messages to users via DMs. **<nation name> argument must be surrounded by double quotes** :warning: **Disclaimer**: The bot needs the Manage Messages permission for this command to work, the other user as well needs his DMs OPEN in order to work\n`espionage gather intel <nation name>` - Used to gather information on what a nation has (military stats, balance and resources). Your spies might get detected, depending on the nation you are performing an espionage mission on\n`espionage sabotage tanks <nation name>` - Used to sabotage tanks of a nation. Your spies might get detected, depending on the nation you are performing an espionage mission on\n`currency set <new currency>` - **Donator-only** feature. Used to change your nation currency\n`buildings info` - Shows supported buildings for construction\n`buildings construct <amount> <building type>` - Used for building city buildings from the `buildings info` command\n`buildings remove <amount> <building type>` - Used for removing city buildings. You get the amount of money back"
        })

        await interaction.reply({
            content: "\n`espionage sabotage tanks <nation name>` - Used to sabotage tanks of a nation. Your spies might get detected, depending on the nation you are performing an espionage mission on\n`civil build <amount> <building type>` - Used to build certain buildings. Located on the 3rd page in the `buildings info` command\n`civil demolish <amount> <building type>` - Used to demolish buildings from the 3rd page in the `buildings info` command\n`leaderboard [lb]` - Shows top 10 nations by their score. `lb` is an alias\n`undo infra <amount>` - Removes homes\n`war tutorial` - The help command for the **wars** feature\n`civil build <amount> <building type>` - Used to build certain buildings. Located on the 3rd page in the `buildings info` command\n`civil demolish <amount> <building type>` - Used to demolish buildings from the 3rd page in the `buildings info` command"
        })
    }
}