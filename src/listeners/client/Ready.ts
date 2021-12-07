import { ExtendedClient } from "../../client/Client";
import { Listener } from "../../structures/Listener";

export default class ReadyListener extends Listener {
    public constructor() {
        super("ready", {
            category: "client",
            emitter: "client",
            name: "ready"
        });
    }

    public async exec(client: ExtendedClient): Promise<void> {
        client.user?.setStatus("online");
        return client.logger.sendReady("Bot READY!");
    }
}