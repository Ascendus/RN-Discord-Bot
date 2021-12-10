import {
    Client,
    Collection,
    CommandInteraction,
} from "discord.js";
import { Command } from "../structures/Command";
import { CommandHandler } from "../handlers/CommandHandler";
import { Configuration } from "../structures/Configuration";
import { Country, Trade } from "../structures/util/Interfaces";
import { ListenerHandler } from "../handlers/ListenerHandler";
import { Logger } from "../structures/Logger";
import { Markdown } from "../structures/util/Markdown";
import { Utilities } from "../structures/util/Utilities";

import { configOptions } from "./Config";
import { join } from "path";

declare module "discord.js" {
    interface Client {
        blacklists: Collection<string, string[]>;
        commandHandler: CommandHandler;
        config: Configuration;
        countries: Collection<string, Country>;
        listenerHandler: ListenerHandler;
        logger: Logger;
        markdown: Markdown;
        trades: Collection<string, Trade>;
        util: Utilities;
    }
}

export class ExtendedClient extends Client {
    public blacklists: Collection<string, string[]>;
    public commandHandler: CommandHandler;
    public config: Configuration;
    public countries: Collection<string, Country>;
    public listenerHandler: ListenerHandler;
    public logger: Logger;
    public markdown: Markdown;
    public trades: Collection<string, Trade>;
    public util: Utilities;

    public constructor() {
        super(configOptions.clientOptions);

        this.blacklists = new Collection();
        this.config = new Configuration(configOptions);
        this.countries = new Collection();
        this.logger = new Logger();
        this.markdown = new Markdown();
        this.trades = new Collection();
        this.util = new Utilities(this);

        this.commandHandler = new CommandHandler(this, {
            blockBots: true,
            directory: join(__dirname, "..", "commands"),
            warnings: {
                guildOnly: (_interaction: CommandInteraction): string => ":x: You are not allowed to run commands in DMs.",
                ownerOnly: (_interaction: CommandInteraction): string => ":x: This command can only be use by owners.",
                blacklistedUser: (_interaction: CommandInteraction): string => ":x: You have been banned from using Roleplay Nations. Please contact a Game Administrator for an appeal.",

                clientMissingPermissions: (_client: ExtendedClient, _interaction: CommandInteraction, permissions: string, _command: Command): string => `:x: I am missing the following permissions: ${permissions}.`,
                missingSendPermissions: (_interaction: CommandInteraction): string => ":x: I am missing the following permissions: `Send Messages`",
                userMissingPermissions: (_client: ExtendedClient, _interaction: CommandInteraction, permissions: string, _command: Command): string => `:x: You are missing the following permissions: ${permissions}.`,

                cooldownWarning: (_interaction: CommandInteraction, remaining: string, command: Command): string => `:x: Please wait **${remaining}** seconds before reusing the \`${command.id}\` command!`
            }
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, "..", "listeners")
        });
    }

    private async init(): Promise<void> {
        await this.commandHandler.registerCommands();
        await this.commandHandler.load();
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