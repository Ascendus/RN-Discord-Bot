import {
    Client,
    ClientUser,
    Collection,
    CommandInteraction,
    Guild
} from "discord.js";
import { Command } from "../structures/Command";
import { CommandHandler } from "../handlers/CommandHandler";
import { Configuration } from "../structures/Configuration";
import { ListenerHandler } from "../handlers/ListenerHandler";
import { Logger } from "../structures/Logger";
import { Markdown } from "../structures/util/Markdown";
import { Utilities } from "../structures/util/Utilities";

import { configOptions } from "./Config";
import { join } from "path";

declare module "discord.js" {
    interface Client {
        commandHandler: CommandHandler;
        config: Configuration;
        countries: Collection<string, any>;
        guild: Guild;
        guildID: string;
        listenerHandler: ListenerHandler;
        logger: Logger;
        markdown: Markdown;
        trades: Collection<string, any>;
        util: Utilities;
    }
}

export class ExtendedClient extends Client {
    public commandHandler: CommandHandler;
    public config: Configuration;
    public guild: Guild;
    public guildID: string;
    public listenerHandler: ListenerHandler;
    public logger: Logger;
    public markdown: Markdown;
    public util: Utilities;

    public constructor() {
        super(configOptions.clientOptions);

        this.config = new Configuration(configOptions);
        this.guild = this.guilds.cache.get("760659394370994197") as Guild;
        this.guildID = "760659394370994197";
        this.logger = new Logger();
        this.markdown = new Markdown();
        this.util = new Utilities(this);

        this.commandHandler = new CommandHandler(/*this, {
            allowDirectMessages: true,
            blockBots: true,
            directory: join(__dirname, "..", "commands"),
            warnings: {
                dmOnly: (interaction: CommandInteraction): string => `${this.markdown.userMention(interaction.user.id)}, you can only use this command in servers!`,
                guildOnly: (interaction: CommandInteraction): string => `${this.markdown.userMention(interaction.user.id)}, you can only use this command in direct message channels!`,
                ownerOnly: (interaction: CommandInteraction): string => `${this.markdown.userMention(interaction.user.id)}, it seems that I was unable to execute the command because it is reserved for the owners of the bot. If you think this is a mistake, feel free to contact the bot developers (${this.markdown.userMention(this.config.owners[0])}).`,

                clientMissingPermissions: (client: ExtendedClient, interaction: CommandInteraction, permissions: string, command: Command): string => `Hey there **${interaction.user.username}**. Unfortunately ${(client.user as ClientUser).username} was unable to run the **${command.id}** command as it is missing the following permissions in this server: ${permissions}. If you do not have authorization to do change permissions, let a staff member know.`,
                missingSendPermissions: (interaction: CommandInteraction): string => `${this.markdown.userMention(interaction.user.id)}, it seems that I was unable to execute the command as I am missing the following permission(s) in the server: \`Send Messages\``,
                userMissingPermissions: (client: ExtendedClient, interaction: CommandInteraction, permissions: string, command: Command): string => `${this.markdown.userMention(interaction.user.id)}, it seems that I was unable to execute the **${command.id}** command as you are missing the following permissions in this server: ${permissions}. Please ensure you have the correct permissions required and rerun the command. If you think this is a mistake, feel free to contact the bot developers (${this.markdown.userMention(this.config.owners[0])}).`,

                cooldownWarning: (interaction: CommandInteraction, remaining: string, command: Command): string => `${this.markdown.userMention(interaction.user.id)}, please wait **${remaining}** seconds before reusing the \`${command.id}\` command!`
            }
        }*/);

        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, "..", "listeners")
        });
    }

    private async init(): Promise<void> {
        // await this.commandHandler.registerCommands(this.config.clientID);
        // await this.commandHandler.load();
        await this.listenerHandler.load();
    }

    public async start(): Promise<string | void> {
        try {
            await this.init();
            return this.login(this.config.token);
        } catch (error) {
            return this.logger.sendError((error as Error).stack as string);
        }
    }
}