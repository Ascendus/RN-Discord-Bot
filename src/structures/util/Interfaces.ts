import { Argument } from "../Argument";
import { ArgumentType, CommandChannel, Emitter, ListenerCategory, ListenerType } from "./Types";
import { CategoryType } from "./Types";
import { ClientOptions, Collection, ColorResolvable, CommandInteraction, PermissionString } from "discord.js";
import { Command } from "../Command";
import { ExtendedClient } from "../../client/Client";
import { Listener } from "../Listener";
import { OptionChoice } from "../OptionChoice";

// #region Constants

export interface CategoryOptions {
    content: Collection<string, Command> | Collection<string, Listener> | null;
    type: CategoryType;
}

export interface GovernmentIcons {
    democracy: string;
    capitalism: string;
    "communist state": string;
    "communist democracy": string;
    monarchy: string;
    republic: string;
    anarchy: string;
    dictatorship: string;
    "social democracy": string;
    theocracy: string;
    fascist: string;
}

export interface GovernmentTypes {
    unset: number;
    democracy: number;
    capitalism: number;
    "communist state": number;
    "communist democracy": number;
    monarchy: number;
    republic: number;
    anarchy: number;
    dictatorship: number;
    "social democracy": number;
    theocracy: number;
    fascist: number;
}

export interface Parties {
    "Democratic Party": {
        icon: string;
        leader1: string;
        leader2: string;
        leader3: string;
        leader4: string;
        leader5: string;
    };

    "Republican Party": {
        icon: string;
        leader1: string;
        leader2: string;
        leader3: string;
        leader4: string;
        leader5: string;
    };

    "Democratic Unionist Party": {
        icon: string;
        leader1: string;
        leader2: string;
        leader3: string;
        leader4: string;
        leader5: string;
    };

    "Social Democratic and Labour Party": {
        icon: string;
        leader1: string;
        leader2: string;
        leader3: string;
        leader4: string;
        leader5: string;
    };

    "Conservative Party": {
        icon: string;
        leader1: string;
        leader2: string;
        leader3: string;
        leader4: string;
        leader5: string;
    };

    "Communist Party": {
        icon: string;
        leader1: string;
        leader2: string;
        leader3: string;
        leader4: string;
    };
}

export interface Units {
    tanks: {
        icon: string;
        price: number;
        steel: number;
        default: number;
        upkeep_money: number;
        tech_cos: number;
        image: string;
    };
    soldiers: {
        icon: string;
        price: number;
        default: number;
        upkeep_money: number;
        tech_cos: number;
        image: string;
    };
    planes: {
        icon: string;
        price: number;
        aluminium: number;
        default: number;
        upkeep_money: number;
        tech_cos: number;
        image: string;
    };
    ships: {
        icon: string;
        price: number;
        steel: number;
        default: number;
        upkeep_money: number;
        tech_cos: number;
        image: string;
    };
    spies: {
        icon: string;
        price: number;
        default: number;
        upkeep_money: number;
        tech_cos: number;
        image: string;
    };
    missiles: {
        icon: string;
        price: number;
        aluminium: number;
        default: number;
        gasoline: number;
        upkeep_money: number;
        tech_cos: number;
        image: string;
    };
}

export interface Resources {
    iron: {
        icon: string;
        default: number;
    };
    steel: {
        icon: string;
        default: number;
    };
    food: {
        icon: string;
        default: number;
    };
    aluminium: {
        icon: string;
        default: number;
    };
    lead: {
        icon: string;
        default: number;
    };
    uranium: {
        icon: string;
        default: number;
    };
    gasoline: {
        icon: string;
        default: number;
    };
    bauxite: {
        icon: string;
        default: number;
    };
    coal: {
        icon: string;
        default: number;
    };
    munitions: {
        icon: string;
        default: number;
    };
    oil: {
        icon: string;
        default: number;
    };
}

export interface Other {
    infrastructure: {
        icon: string;
        default: number;
        price: number;
    };
    technology: {
        icon: string;
        default: number;
        price: number;
    };
}

export interface Buildings {
    coal_mines: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    oil_wells: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    iron_mines: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    bauxite_mines: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    lead_mines: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    uranium_mines: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    farms: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    munitions_factory: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    aluminium_refinery: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    steel_mill: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
    petroleum_refinery: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        adds: number;
        max: number;
        image: string;
    };
}

export interface CivilBuildings {
    police_station: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        removes: number;
        max: number;
        image: string;
    };
    fire_station: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        removes: number;
        max: number;
        image: string;
    };
    hospital: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        removes: number;
        max: number;
        image: string;
    };
    rec_center: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    subway: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        resource: string;
        removes: number;
        max: number;
        image: string;
    };
    coal_power_p: {
        icon: string;
        default: number;
        add_to_bill: number;
        price: number;
        max: number;
        image: string;
    };
    oil_power_p: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    nuclear_power_p: {
        icon: string;
        default: number;
        price: number;
        resource: string;
        removes: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    wind_power_p: {
        icon: string;
        default: number;
        price: number;
        resources: string;
        removes: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    hydro_power_p: {
        icon: string;
        default: number;
        price: number;
        resources: string;
        removes: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    dog_park: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    bot_garden: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    playground: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    zoo: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    theatre: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    museum: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    observatory: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    water_pump_station: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    water_tower: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    water_drain_pipe: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    eco_water_outlet: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    theme_park: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    stadium: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
    cinema: {
        icon: string;
        default: number;
        price: number;
        add_to_bill: number;
        max: number;
        image: string;
    };
}

export interface OnWork {
    coal_power_plant: {
        image: string;
        default: number;
        price: number;
        resource: string;
        removes: number;
        pollution_index: number;
        money_upkeep: number;
    };
    oil_power_plant: {
        image: string;
        default: number;
        price: number;
        resource: string;
        removes: number;
        pollution_index: number;
        money_upkeep: number;
    };
    nuclear_power_plant: {
        image: string;
        default: number;
        price: number;
        resource_to_build: string;
        resource_amount: number;
        resource: string;
        removes: number;
        pollution_index: number;
        money_upkeep: number;
    };
    wind_power_plant: {
        image: string;
        default: number;
        price: number;
        resource_to_build: string;
        resource_amount: number;
        pollution_index: number;
        money_upkeep: number;
    };
}

// #endregion

export interface ArgumentOptions {
    name: string;
    description: string;
    choices?: OptionChoice[];
    required: boolean;
    type: ArgumentType;
};

export interface CommandExceptions {
    ignoreCooldown: string[];
    ignorePermissions: string[];
};

export interface CommandHandlerOptions {
    blockBots: boolean;
    directory: string;
    warnings: CommandHandlerWarnings;
};

export interface CommandHandlerWarnings {
    guildOnly(interaction: CommandInteraction): string;
    ownerOnly(interaction: CommandInteraction): string;
    blacklistedUser(interaction: CommandInteraction): string;

    clientMissingPermissions(client: ExtendedClient, interaction: CommandInteraction, permissions: string, command: Command): string;
    missingSendPermissions(interaction: CommandInteraction): string
    userMissingPermissions(client: ExtendedClient, interaction: CommandInteraction, permissions: string, command: Command): string;

    cooldownWarning(interaction: CommandInteraction, remaining: string, command: Command): string;
};

export interface CommandOptions {
    arguments?: Argument[];
    category: string;
    channel: CommandChannel;
    cooldown: number;
    description: string;
    enabledByDefault: boolean;
    examples: string[];
    exceptions: CommandExceptions;
    isSubCommand: boolean;
    permissions: CommandPermissions;
    ownerOnly: boolean;
    subCommands?: Command[];
    usage: string;
}

export interface CommandPermissions {
    clientPermissions: PermissionString[];
    userPermissions: PermissionString[];
};

export interface ConfigurationOptions {
    clientID: string;
    clientOptions: ClientOptions;
    owners: string[];
    token: string;
}

export interface Country {
    country: string;
    userID: string;
    balance: number;
    population: number;
    billRate: number;
    tax: number;
    governmentType: number;
    flag: string;
    leader: string;
    donator: number;
    taxRate: number;
    impRelations: [];
    decRelation: [];
    allies: [];
    rivals: [];
    vassalizeReq: [];
    guarInd: [];
    nonAggr: [];
    citizenHappiness: number;
    nationalMotto: string;
    currency: string;
    crimeRate: number;
    diseaseRate: number;
    pollutionIndex: number;
    power: number;
    fireHazard: number;
    tourists: number;
    water: number;
    sewage: number;
    tanks: number;
    soliders: number;
    planes: number;
    ships: number;
    missiles: number;
    iron: number;
    steel: number;
    food: number;
    aluminium: number;
    lead: number;
    uranium: number;
    gasoline: number;
    bauxite: number;
    coal: number;
    munitions: number;
    oil: number;
    infrastructure: number;
    technology: number;
    coalMines: number;
    oilWells: number;
    ironMines: number;
    bauxiteMines: number;
    leadMines: number;
    uraniumMines: number;
    farms: number;
    munitionsFactories: number;
    aluminiumRefinery: number;
    steelMill: number;
    petroleumRefinery: number;
    policeStation: number;
    fireStation: number;
    hospital: number;
    recCenter: number;
    subway: number;
    coalPowerP: number;
    oilPowerP: number;
    nuclearPowerP: number;
    windPowerP: number;
    hydroPowerP: number;
    dogPark: number;
    botGarden: number;
    playground: number;
    zoo: number;
    theatre: number;
    museum: number;
    observatory: number;
    waterPumpStation: number;
    waterTower: number;
    waterDrainPipe: number;
    ecoWaterOutlet: number;
    themePark: number;
    stadium: number;
    cinema: number;
}

export interface ListenerOptions {
    category: ListenerCategory;
    emitter: Emitter;
    name: ListenerType;
}

export interface ListenerHandlerOptions {
    directory: string;
}

export interface Trade {
    resourceAmount: number;
    resource: string;
    moneyAmount: number;
    tradeID: string;
    createdAt: string;
    buyOffer: number;
    seller: string;
}

export interface UtilityDefaults {
    // embed: UtilityEmbedDefaults;
    colors: UtilityColorDefaults;
}

export interface UtilityColorDefaults {
    error: ColorResolvable;
}

/*
export interface UtilityEmbedDefaults {
    color: ColorResolvable;
}
*/
