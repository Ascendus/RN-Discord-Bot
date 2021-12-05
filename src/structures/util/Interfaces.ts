import { ClientOptions } from "discord.js";

// #region Constants

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

export interface ConfigurationOptions {
    clientID: string;
    clientOptions: ClientOptions;
    owners: string[];
    token: string;
};