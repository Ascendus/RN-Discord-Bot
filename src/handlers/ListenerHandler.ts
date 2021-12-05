import { Category } from "../structures/Category";
import { Collection } from "discord.js";
import { ExtendedClient } from "../client/Client";
import { Listener } from "../structures/Listener";
import { ListenerHandlerOptions } from "../structures/util/Interfaces";
import { readdirSync } from "fs";

export class ListenerHandler {
    public categories: Collection<string, Category>;
    public client: ExtendedClient;
    private directory: string;
    public listeners: Collection<string, Listener>

    public constructor(client: ExtendedClient, options: ListenerHandlerOptions) {
        this.categories = new Collection();
        this.client = client;
        this.directory = options.directory;
        this.listeners = new Collection();
    };

    public async load(): Promise<void> {
        try {
            const categories: string[] = [];

            for (const category of readdirSync(this.directory)) {
                categories.push(category.toLowerCase());
            };

            categories.forEach(async category => {
                const categoryName: string = this.client.util.capitalize(category);
                
                this.categories.set(categoryName, new Category(categoryName, {
                    content: null,
                    type: "listener"
                }));
            });

            for (const category of categories.values()) {
                for (const listenerFileName of readdirSync(`${this.directory}/${category}`).filter(fileName => fileName.endsWith(".js"))) {
                    const listenerFile = require(`${this.directory}/${category}/${listenerFileName}`).default;
                    const listener: Listener = new listenerFile();

                    this.listeners.set(listener.name, listener);
    
                    switch (listener.emitter) {
                        case "client":
                            this.client.on(listener.name as string, listener.exec.bind(null, this.client));
    
                        case "process":
                            process.on(listener.name, listener.exec.bind(null, process));
                        
                        case "commandHandler":
                            this.client.on(listener.name as string, listener.exec.bind(null, this.client));
                    };
                };

                const categoryName: string = this.client.util.capitalize(category);
                const categoryListeners: Collection<string, Listener> = this.listeners.filter(listener => listener.category.toLowerCase() === category.toLowerCase());

                this.categories.set(categoryName, new Category(categoryName, {
                    content: categoryListeners,
                    type: "listener"
                }));

                this.client.logger.sendSuccess(`Loaded ${readdirSync(`${this.directory}/${category}`).length} ${category === "Commandhandler" ? "command handler" : category} listener event(s)`); 
            };

            return this.client.logger.sendSuccess(`Loaded ${this.listeners.size} listener event(s)`);
        } catch (error) {
            return this.client.logger.sendError((error as Error).stack as string);
        };
    };
};