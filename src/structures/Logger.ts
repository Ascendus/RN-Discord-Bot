import chalk from "chalk";

export class Logger {
    public sendSuccess(message: string): void {
        return console.log(`${chalk.green("success")} - ${message}`);
    };

    public sendError(message: string): void {
        return console.log(`${chalk.red("error")}   - ${message}`);
    };

    public sendWarning(message: string): void {
        return console.log(`${chalk.yellow("warning")} - ${message}`);
    };

    public sendInfo(message: string): void {
        return console.log(`${chalk.blueBright("info")}    - ${message}`);
    };

    public sendReady(message: string): void {
        return console.log(`${chalk.magenta("ready")}   - ${message}`);
    };
};      