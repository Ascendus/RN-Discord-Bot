// #region Logger testings
const chalk = require("chalk");

class Logger {
    /**
     * Sends a success message to the console.
     * @type {void}
     * @param {string} message 
     * @returns 
     */
    sendSuccess(message) {
        return console.log(`${chalk.green("success")} - ${message}`);
    };
    
    /**
     * Sends an error message to the console.
     * @type {void}
     * @param {string} message 
     * @returns 
     */
    sendError(message) {
        return console.log(`${chalk.red("error")}   - ${message}`);
    };

    /**
     * Sends a warning message to the console.
     * @type {void}
     * @param {string} message 
     * @returns 
     */
    sendWarning(message) {
        return console.log(`${chalk.yellow("warning")} - ${message}`);
    };

    /**
     * Sends an info message to the console.
     * @type {void}
     * @param {string} message 
     * @returns 
     */
    sendInfo(message) {
        return console.log(`${chalk.blue("info")}    - ${message}`);
    };

    /**
     * Sends a ready message to the console.
     * @type {void}
     * @param {string} message 
     * @returns 
     */
    sendReady(message) {
        return console.log(`${chalk.green("ready")}   - ${message}`);
    };
};

const logger = new Logger();

logger.sendSuccess("This is a success message");
logger.sendError("This is an error message");
logger.sendWarning("This is a warning message");
logger.sendInfo("This is an info message");
logger.sendReady("This is a ready message");
// #endregion