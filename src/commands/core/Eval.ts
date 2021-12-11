import { Argument } from "../../structures/Argument";
import { Command } from "../../structures/Command";
import { CommandInteraction } from "discord.js";
import { ExtendedClient } from "../../client/Client";

import { configOptions } from "../../client/Config";
import { inspect } from "util";
import { stripIndents } from "common-tags";

export default class InviteCommand extends Command {
    public constructor() {
        super("eval", {
            arguments: [
                new Argument({
                    name: "code",
                    description: "The JavaScript code to evaluate.",
                    required: true,
                    type: "string"
                })
            ],
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Evaluates JavaScript input code.",
            enabledByDefault: true,
            examples: ["eval console.log(\"Hello, World!\")"],
            exceptions: {
                ignoreCooldown: configOptions.owners,
                ignorePermissions: configOptions.owners
            },
            isSubCommand: false,
            ownerOnly: true,
            permissions: {
                clientPermissions: [],
                userPermissions: []
            },
            usage: "eval <code>"
        });
    }

    public async exec(client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
        try {
            const code: string = interaction.options.getString((this.arguments as Argument[])[0].name) as string;
            const start: [number, number] = process.hrtime();
            let output: string = eval(code);
            const difference: [number, number] = process.hrtime(start);
        
            if (typeof output !== "string") output = inspect(output, {
                depth: 2
            });
        
            return interaction.reply(stripIndents`
                **Executed in ${difference[0] > 0 ? `${difference[0]}s` : ""}${difference[1] / 1e6}ms**
                \`\`\`js
                ${output.length > 1950 ? "Code length exceeds maximum size allowed." : output}
                \`\`\`
            `);
        } catch (error) {
            return interaction.reply(stripIndents`
                    **An errror occcured while attempting to evaluate the given code:**
                    ${client.markdown.codeBlock((error as Error).stack as string)}
            `);
        };
    }
}