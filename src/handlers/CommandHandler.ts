import { ExtendedClient } from "../client/Client";
import { Routes } from "discord-api-types/v9";
import { Category } from "../structures/Category";
import { Collection, CommandInteraction, GuildMember, Interaction, Message, PermissionString, TextBasedChannels, TextChannel } from "discord.js";
import { Command } from "../structures/Command";
import { CommandHandlerOptions, CommandHandlerWarnings } from "../structures/util/Interfaces";
import { REST } from "@discordjs/rest";
import { readdirSync } from "fs";

export class CommandHandler {
    private blockBots: boolean;
    public categories: Collection<string, Category>;
    private client: ExtendedClient;
    public commands: Collection<string, Command>;
    private cooldowns: Collection<string, Collection<string, number>>;
    public directory: string;
    private rest: REST;
    private warnings: CommandHandlerWarnings;

    public constructor(client: ExtendedClient, options: CommandHandlerOptions) {
        // Command Handler Options
        this.blockBots = options.blockBots;
        this.directory = options.directory;
        this.warnings = options.warnings;

        // Command Handler Properties
        this.categories = new Collection();
        this.client = client;
        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.rest = new REST({ version: "9" }).setToken(this.client.config.token);
    };

    public async registerCommands(): Promise<unknown> {
        const categories: string[] = [];

        for (const category of readdirSync(this.directory)) {
            categories.push(category.toLowerCase());
        };  

        categories.forEach(async (category: string) => {
            const categoryName: string = this.client.util.capitalize(category);

            this.categories.set(categoryName, new Category(categoryName, {
                content: null,
                type: "command"
            }));
        });

        for (const category of categories.values()) {
            for (const commandFileName of readdirSync(`${this.directory}/${category}`).filter((fileName: string): unknown => fileName.endsWith(".js"))) {
                const commandFile = require(`${this.directory}/${category}/${commandFileName}`).default;
                const command: Command = new commandFile();

                this.commands.set(command.id, command);
            };

            this.categories.set(this.client.util.capitalize(category), new Category(this.client.util.capitalize(category), {
                content: this.commands.filter((cmd: Command): boolean => cmd.category.toLowerCase() === category.toLowerCase()),
                type: "command"
            }));    

            this.client.logger.sendInfo(`Loaded ${readdirSync(`${this.directory}/${category}`).length} command(s) from the ${category} module`);
        };  

        this.client.logger.sendInfo(`Loaded ${this.commands.size} command(s)`);

        return this.rest.put(Routes.applicationCommands(this.client.config.clientID), {
            body: this.commands.toJSON()
        })
            .then((): void => {
                return this.client.logger.sendSuccess(`Successfully registered ${this.commands.toJSON().length} slash commands`);
            })
            .catch((error: Error): void => {
                return this.client.logger.sendError(error.stack as string);
            });
    };

    private runCooldownChecks(command: Command, interaction: CommandInteraction): Promise<void> | Promise<Message> | undefined {
        if (!this.cooldowns.has(command.id)) this.cooldowns.set(command.id, new Collection()); 

        const now: number = Date.now();
        const timestamps: Collection<string, number> = this.cooldowns.get(command.id) as Collection<string, number>;
        const cooldownAmount: number = (command.cooldown || 3) * 1000;
        const expirationTime: number = timestamps.get(interaction.user.id) as number + cooldownAmount;
        const timeLeft: number = (expirationTime - now) / 1000;

        if (timestamps.has(interaction.user.id) && !this.client.config.owners.includes(interaction.user.id) && (now < expirationTime) && !command.exceptions.ignoreCooldown.includes(interaction.user.id)) {
            return interaction.reply({
                content: this.warnings.cooldownWarning(interaction, timeLeft.toFixed(1), command),
                ephemeral: true
            }); 
        };

        timestamps.set(interaction.user.id, now);
        setTimeout((): boolean => timestamps.delete(interaction.user.id), cooldownAmount); 
    };

    private runPermissionChecks(command: Command, interaction: CommandInteraction): Promise<void> | Promise<Message> | undefined {
        const blacklist: string[] = this.client.blacklists.get("blacklist") as string[];
        if (!blacklist) this.client.blacklists.set("blacklist", [] as string[]);

        if (interaction.guild && !(interaction.channel as TextChannel).permissionsFor(interaction.guild.me as GuildMember).toArray().includes("SEND_MESSAGES")) {
            return interaction.user.send({
                content: this.warnings.missingSendPermissions(interaction)
            });
        };

        if ((interaction.channel as TextBasedChannels).type === "GUILD_TEXT" && command.channel === "dm") {
            return interaction.reply({ 
                content: this.warnings.guildOnly(interaction),
                ephemeral: true
            });
        };

        if (blacklist.includes(interaction.user.id) || blacklist.includes(interaction.member.user.id)) {
            
        }

        if (command.ownerOnly && !this.client.config.owners.includes((interaction.user.id))) {
            const missingPermissionsMessage: string = this.warnings.ownerOnly(interaction);

            return interaction.reply({
                content: missingPermissionsMessage,
                ephemeral: true
            });
        };

        if (interaction.guild && command.permissions.clientPermissions && !(interaction.guild.me as GuildMember).permissions.has(command.permissions.clientPermissions)) {
            const missingPermissionsMessage: string = this.warnings.clientMissingPermissions(this.client, interaction, (interaction.guild.me as GuildMember).permissions.missing(command.permissions.clientPermissions).length > 1 ?
                `${(interaction.guild.me as GuildMember).permissions.missing(command.permissions.clientPermissions).slice(0, -1).map((perm: PermissionString) => `\`${perm}\``).join(', ')} and \`${(interaction.guild.me as GuildMember).permissions.missing(command.permissions.clientPermissions).slice(-1)[0]}\`` :
                `\`${(interaction.guild.me as GuildMember).permissions.missing(command.permissions.clientPermissions)[0]}\``, command);

            return interaction.reply({
                content: missingPermissionsMessage,
                ephemeral: true
            });
        };

        if (interaction.guild && command.permissions.userPermissions && !(interaction.member as GuildMember).permissions.has(command.permissions.userPermissions) && !command.exceptions.ignorePermissions.includes(interaction.user.id)) {
            const missingPermissionsMessage: string = this.warnings.userMissingPermissions(this.client, interaction, (interaction.member as GuildMember).permissions.missing(command.permissions.userPermissions).length > 1 ?
                `${(interaction.member as GuildMember).permissions.missing(command.permissions.userPermissions).slice(0, -1).map((perm: PermissionString) => `\`${perm}\``).join(', ')} and \`${(interaction.member as GuildMember).permissions.missing(command.permissions.userPermissions).slice(-1)[0]}\`` :
                `\`${(interaction.member as GuildMember).permissions.missing(command.permissions.userPermissions)[0]}\``, command);

            return interaction.reply({
                content: missingPermissionsMessage,
                ephemeral: true
            });
        };
    };

    public async load(): Promise<void> {
        this.client.on("interactionCreate", async (interaction: Interaction): Promise<any> => {
            if (!interaction.guild) return;
            if (interaction.user.bot && this.blockBots) return;
            if (!interaction.isCommand()) return;

            const command: Command = this.commands.get(interaction.commandName as string) as Command;
            if (!command) return;

            await this.runPermissionChecks(command, interaction);
            await this.runCooldownChecks(command, interaction);

            try {
                return command.exec(this.client, interaction);
            } catch (error) {
                this.client.logger.sendError((error as Error).stack as string);
                return process.exit(1);
            }
        });
    };
};