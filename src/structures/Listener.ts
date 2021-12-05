import { Emitter } from "./util/Types";
import { ExtendedClient } from "../client/Client";
import { ListenerCategory, ListenerType } from "./util/Types";
import { ListenerOptions } from "./util/Interfaces";

export class Listener {
    public category: ListenerCategory;
    public client: ExtendedClient;
    public emitter: Emitter;
    public id: string;
    public name: ListenerType;

    public constructor(id: string, options: ListenerOptions) {
        this.category = options.category;
        this.client = new ExtendedClient();
        this.emitter = options.emitter;
        this.id = id;
        this.name = options.name;
    };

    public async exec(..._args: any[]): Promise<any> {
        return this.client.logger.sendError(`${this.constructor.name} listener ${this.exec.name} function has not been implemented`);
    };
};