import { ExtendedClient } from "../../client/Client";
import { Guild, GuildChannel, GuildMember, TextChannel, ThreadChannel } from "discord.js";
import { Listener } from "../../structures/Listener";

export default class GuildCreateListener extends Listener {
    public constructor() {
        super("guildCreate", {
            category: "client",
            emitter: "client",
            name: "guildCreate"
        });
    }

    public async exec(client: ExtendedClient, guild: Guild): Promise<void> {
        guild.channels.cache.forEach(async (channel: GuildChannel | ThreadChannel): Promise<void> => {
            if (
                channel
                    .permissionsFor(guild.me as GuildMember)
                    .has("SEND_MESSAGES")
            ) {
                await (channel as TextChannel).send({
                    embeds: [
                        {
                            title: "Roleplay Nations has been added",
                            color: "BLUE",
                            description:
                                "Thank you for adding Roleplay Nations to your wonderful server!\n If you're facing any issues with the bot or need support, join our server: https://discord.gg/5M8MXjk"
                        }
                    ]
                });
            }
        });
    }
}
