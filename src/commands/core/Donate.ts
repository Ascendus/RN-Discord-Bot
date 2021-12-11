import { Command } from "../../structures/Command";
import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";

export default class DonateCommand extends Command {
    public constructor() {
        super("donate", {
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Used to get info on donation tiers and their pricings.",
            enabledByDefault: true,
            examples: ["donate"],
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
            usage: "donate"
        });
    }

    public async exec(_client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
        return interaction.reply({
            embeds: [
                {
                    title: "Donate",
                    color: "BLUE",
                    description: ":money_with_wings: Thank you for any donations you might send. You can donate via [Patreon](https://www.patreon.com/matijaiv), or via PayPal\n\n PayPal payments are used for the tiers below\n\n 5 $ - **Donator**\n • You generally support us, and we thank you for that\n • Custom Currency\n • 5,000,000 $ (Disclaimer: You are needed to contact us on our support server in order to get your money claimed)\n • A shiny badge is added to your status page\n\n 10 $ - **Super Donator**\n • You generally support us, and we thank you for that\n • Custom Currency\n • 10,000,000 $ (Disclaimer: You are needed to contact us on our support server in order to get your money claimed)\n • A shiny badge is added to your status page\n\n 20 $ - **Ultra Donator**\n • You are very cool\n • Custom Currency\n • Check out new features before anyone can\n • 15,000,000 $ (Disclaimer: You are needed to contact us on our support server in order to get your money claimed)\n • 2 shiny badges are added to your status page\n\n Link: https://www.paypal.com/paypalme/roleplaynations (in order to reedem the rewards, please contact us on our support server)"
                }
            ]
        })
    }
}