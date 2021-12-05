import { ClientOptions } from "discord.js";
import { ConfigurationOptions } from "./util/Interfaces";

export class Configuration {   
    public clientID: string;
    public clientOptions: ClientOptions;
    public owners: string[];
    public token: string;

    public constructor(options: ConfigurationOptions) {
        this.clientID = options.clientID;
        this.clientOptions = options.clientOptions;
        this.owners = options.owners;
        this.token = options.token;
    };
};