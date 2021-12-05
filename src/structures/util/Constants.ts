import {
    Buildings,
    CivilBuildings,
    GovernmentIcons,
    GovernmentTypes,
    OnWork,
    Other,
    Parties,
    Resources,
    Units
} from "./Interfaces";

/**
 * Government emojis.
 * @type {GovernmentIcons}
 */
export const GOV_ICONS: GovernmentIcons = {
    democracy: "<:Democracy:753667833971343380>",
    capitalism: "<:Capitalism:753658600680980631>",
    "communist state": "<a:Communism:753661057473445898>",
    "communist democracy": "<a:Communism:753661057473445898>",
    monarchy: "<:Monarchy:753662321443733604>",
    republic: "<:Republic:753667262522851379>",
    anarchy: "<:Anarchy:753668601004949656>",
    dictatorship: "<:Dictatorship:753669607042187264>",
    "social democracy": "<:SocialDemocracy:753670700140855376>",
    theocracy: "<:Theocracy:753672471177199797>",
    fascist: "<:fascist:792721788730736656>"
};

/**
 * Government types.
 * @type {GovernmentTypes}
 */
export const GOV_TYPES: GovernmentTypes = {
    unset: 0,
    democracy: 1,
    capitalism: 2,
    "communist state": 3,
    "communist democracy": 4,
    monarchy: 5,
    republic: 6,
    anarchy: 7,
    dictatorship: 8,
    "social democracy": 9,
    theocracy: 10,
    fascist: 11
};

/**
 * Political parties.
 * @type {Parties}
 */
export const PARTIES: Parties = {
    "Democratic Party": {
        icon: "<:Democrat:781109081678675979>",
        leader1: "Tom Perez",
        leader2: "Joe Biden",
        leader3: "Kamala Harris",
        leader4: "Nancy Pelosi",
        leader5: "Chuck Schumer"
    },
    "Republican Party": {
        icon: "<:Republican:781109567576473611>",
        leader1: "Donald Trump",
        leader2: "Mike Pence",
        leader3: "Ronna McDaniel",
        leader4: "Mitch McConnell",
        leader5: "Kevin McCarthy"
    },
    "Democratic Unionist Party": {
        icon: "<:Dem_union_party:781113585706598420>",
        leader1: "Arlene Foster",
        leader2: "George Morrow",
        leader3: "Nigel Dodds",
        leader4: "Jeffrey Donaldson",
        leader5: "Ian Paisley"
    },
    "Social Democratic and Labour Party": {
        icon: "<:sdlp:781115347457015829>",
        leader1: "Colum Eastwood",
        leader2: "Nichola Mallon",
        leader3: "Colin McGrath",
        leader4: "Catherine Matthews",
        leader5: "Gerry Fitt"
    },
    "Conservative Party": {
        icon: "<:conservative:781140701126721537>",
        leader1: "Boris Johnson",
        leader2: "Natalie Evans",
        leader3: "Mark Spencer",
        leader4: "Ben Elliot",
        leader5: "Mike Chattey"
    },
    "Communist Party": {
        icon: "<:com_party:781146161754275869>",
        leader1: "Elizabeth Rowley",
        leader2: "Sandra L. Smith",
        leader3: "Anna Di Carlo",
        leader4: "Hardial Bains"
    }
};

/**
 * Military units.
 * @type {Units}
 */
export const UNITS: Units = {
    tanks: {
        icon: "<:tank:746421838812545055>",
        price: 75,
        steel: 5,
        default: 0,
        upkeep_money: 50,
        tech_cos: 300,
        image: "https://media.discordapp.net/attachments/781825126815629323/792683220549894144/tanks.jpg?width=1011&height=670"
    },
    soldiers: {
        icon: "<:soldier:746421696973766677>",
        price: 5,
        default: 0,
        upkeep_money: 5,
        tech_cos: 0,
        image: "https://media.discordapp.net/attachments/781825126815629323/792683212416745484/soldiers.jpg?width=936&height=669"
    },
    planes: {
        icon: "<:plane:747748931026550794>",
        price: 4000,
        aluminium: 15,
        default: 0,
        upkeep_money: 300,
        tech_cos: 780,
        image: "https://media.discordapp.net/attachments/781825126815629323/792683202564849664/planes.jpg"
    },
    ships: {
        icon: "<:boat:747749591923032174>",
        price: 50000,
        steel: 40,
        default: 0,
        upkeep_money: 600,
        tech_cos: 1050,
        image: "https://media.discordapp.net/attachments/781825126815629323/792683480043487242/ships.jpg"
    },
    spies: {
        icon: "<:spies:792086754638823464>",
        price: 20000,
        default: 0,
        upkeep_money: 2400,
        tech_cos: 50,
        image: "https://media.discordapp.net/attachments/781825126815629323/792683200920289280/spies.jpg?width=670&height=670"
    },
    missiles: {
        icon: "<:missile:792087510335094794>",
        price: 150000,
        aluminium: 100,
        default: 0,
        gasoline: 75,
        upkeep_money: 20000,
        tech_cos: 6000,
        image: "https://media.discordapp.net/attachments/781825126815629323/792683223464804352/missiles.jpg?width=508&height=670"
    }
};

/**
 * Resources.
 * @type {Resources}
 */
export const RESOURCES: Resources = {
    iron: {
        icon: "<:iron:752200112125771906>",
        default: 0
    },
    steel: {
        icon: "<:steel:752200175124086834>",
        default: 0
    },
    food: {
        icon: "<:steak_meat:752200163971301447>",
        default: 200
    },
    aluminium: {
        icon: "<:aluminum:752200063849201765>",
        default: 0
    },
    lead: {
        icon: "<:lead:752200124100378644>",
        default: 0
    },
    uranium: {
        icon: "<:uranium:752200828357705859>",
        default: 0
    },
    gasoline: {
        icon: "<:gasoline:752200100159291526>",
        default: 0
    },
    bauxite: {
        icon: "<:bauxite:752200076885229710>",
        default: 0
    },
    coal: {
        icon: "<:coal:752200089124077639>",
        default: 0
    },
    munitions: {
        icon: "<:munitions:752200137165504524>",
        default: 0
    },
    oil: {
        icon: "<:oil1:752200152214929478>",
        default: 0
    }
};

/**
 * Extra constants.
 * @type {Other}
 */
export const OTHER: Other = {
    infrastructure: {
        icon: ":homes:",
        default: 130,
        price: 120
    },
    technology: {
        icon: ":mobile_phone:",
        default: 20,
        price: 950
    }
};

/**
 * Types of buildings.
 * @type {Buildings}
 */
export const BUILDINGS: Buildings = {
    coal_mines: {
        icon: "<:coal:752200089124077639>",
        default: 0,
        price: 200250,
        add_to_bill: 645,
        resource: "coal",
        adds: 5,
        max: 30,
        image: "https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/open_pit_coalmining_adobestock_81314983_2.jpeg?itok=5yOAAdiw"
    },
    oil_wells: {
        icon: "<:oil1:752200152214929478>",
        default: 0,
        price: 145750,
        add_to_bill: 580,
        resource: "oil",
        adds: 3,
        max: 5,
        image: "https://d3el53au0d7w62.cloudfront.net/wp-content/uploads/2020/03/09/a01_jd_10mar_oil-impact-1200x717.jpg"
    },
    iron_mines: {
        icon: "<:iron:752200112125771906>",
        default: 0,
        price: 160450,
        add_to_bill: 850,
        resource: "iron",
        adds: 4,
        max: 15,
        image: "https://www.azernews.az/media/2018/03/16/iron_ore_mines_050115.jpg"
    },
    bauxite_mines: {
        icon: "<:bauxite:752200076885229710>",
        default: 0,
        price: 275050,
        add_to_bill: 675,
        resource: "bauxite",
        adds: 4,
        max: 10,
        image: "https://financialtribune.com/sites/default/files/field/image/ordi/07_AH_Guinea%20Bauxite%201156-ab.jpg"
    },
    lead_mines: {
        icon: "<:lead:752200124100378644>",
        default: 0,
        price: 450750,
        add_to_bill: 630,
        resource: "lead",
        adds: 5,
        max: 15,
        image: "https://www.911metallurgist.com/blog/wp-content/uploads/2013/09/Bingham-Canyon-Open-Pit-Copper-Mine-mod.jpg"
    },
    uranium_mines: {
        icon: "<:uranium:752200828357705859>",
        default: 0,
        price: 500950,
        add_to_bill: 750,
        resource: "uranium",
        adds: 4,
        max: 5,
        image: "https://www.somo.nl/wp-content/uploads/2009/05/uranium-workers-namibia-unaware-of-severe-health-risks-1.jpg"
    },
    farms: {
        icon: "<:steak_meat:752200163971301447>",
        default: 0,
        price: 100750,
        add_to_bill: 500,
        resource: "food",
        adds: 25,
        max: 500,
        image: "https://www.agri-pulse.com/ext/resources/images/Agriculture-photos/Farmscapes/Farm1.jpg?1509734744"
    },
    munitions_factory: {
        icon: "<:munitions:752200137165504524>",
        default: 0,
        price: 110050,
        add_to_bill: 450,
        resource: "munitions",
        adds: 1,
        max: 10,
        image: "https://static.wikia.nocookie.net/politicsandwar/images/a/a6/Munitionsfactory.png/revision/latest/scale-to-width-down/230?cb=20150325061918"
    },
    aluminium_refinery: {
        icon: "<:aluminum:752200063849201765>",
        default: 0,
        price: 120050,
        add_to_bill: 530,
        resource: "aluminium",
        adds: 0,
        max: 10,
        image: "https://www.outotec.com/globalassets/products/bauxite-alumina-and-aluminum-processing/ote_alumina_refinery_750x750_2.jpg?w=750&h=750&scale=both&mode=crop"
    },
    steel_mill: {
        icon: "<:steel:752200175124086834>",
        default: 0,
        price: 170050,
        add_to_bill: 1000,
        resource: "steel",
        adds: 4,
        max: 10,
        image: "https://img.manufacturing.net/files/base/indm/all/image/2018/01/mnet_109584_smart_steel_mill_large.png?auto=format&fit=crop&h=394&w=700"
    },
    petroleum_refinery: {
        icon: "<:gasoline:752200100159291526>",
        default: 0,
        price: 260750,
        add_to_bill: 650,
        resource: "gasoline",
        adds: 0,
        max: 10,
        image: "https://2.bp.blogspot.com/-wTRbabWWB6k/VNHBpooHyrI/AAAAAAAAADo/IgS7_dxcBVU/s1600/20140410%2B-%2BAltamiraI2003A.jpg"
    }
};

/**
 * Types of civilian buildings.
 * @type {CivilBuildings}
 */
export const CIVIL_BUILDINGS: CivilBuildings = {
    police_station: {
        icon: ":oncoming_police_car:",
        default: 0,
        price: 65000,
        add_to_bill: 750,
        resource: "steel",
        removes: 20,
        max: 20,
        image: "https://content.api.news/v3/images/bin/7898a72793a7b4cbebbd56e308e2985f"
    },
    fire_station: {
        icon: ":fire_engine:",
        default: 0,
        price: 85000,
        add_to_bill: 950,
        resource: "steel",
        removes: 30,
        max: 30,
        image: "https://media.cdn.lexipol.com/article-images/070911-F-5350S-030.JPG?w=1600&format=jpg&quality=87&crop=61%2C0%2C420%2C237"
    },
    hospital: {
        icon: ":hospital:",
        default: 0,
        price: 90000,
        add_to_bill: 1000,
        resource: "aluminium",
        removes: 40,
        max: 20,
        image: "https://www.healthcareitnews.com/sites/hitn/files/Hospital-HITN.jpg"
    },
    rec_center: {
        icon: ":recycle:",
        default: 0,
        price: 130000,
        add_to_bill: 1500,
        max: 50,
        image: "https://i.pinimg.com/originals/01/dd/32/01dd32631a1902b12c934bf629ae847c.jpg"
    },
    subway: {
        icon: ":train2:",
        default: 0,
        price: 250000,
        add_to_bill: 2550,
        resource: "steel",
        removes: 100,
        max: 2,
        image: "https://www.nydailynews.com/resizer/KRMSH7JTOCYNYFNqteV-7JC-Wrg=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/HHC4G7LY7FAN7EAFU74SXF3MCU.jpg"
    },
    coal_power_p: {
        icon: "<:coal:752200089124077639> <:lightning:843402902546284554>",
        default: 0,
        add_to_bill: 1200,
        price: 5000,
        max: 60,
        image: "https://balkangreenenergynews.com/wp-content/uploads/2020/06/Coal-power-plants-in-EU-shuttering.jpg"
    },
    oil_power_p: {
        icon: "<:oil1:752200152214929478> <:lightning:843402902546284554>",
        default: 0,
        price: 7000,
        add_to_bill: 1800,
        max: 75,
        image: "https://news.berkeley.edu/wp-content/uploads/2018/05/hunterpointpp2006.jpg"
    },
    nuclear_power_p: {
        icon: "<:uranium:752200828357705859> <:lightning:843402902546284554>",
        default: 0,
        price: 2000000,
        resource: "steel",
        removes: 260,
        add_to_bill: 7200,
        max: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Kernkraftwerk_Grafenrheinfeld_-_2013.jpg"
    },
    wind_power_p: {
        icon: ":recycle: <:lightning:843402902546284554>",
        default: 0,
        price: 30000,
        resources: "aluminium",
        removes: 35,
        add_to_bill: 600,
        max: 60,
        image: "https://www.afrik21.africa/wp-content/uploads/2019/06/shutterstock_275763713-2-800x400.jpg"
    },
    hydro_power_p: {
        icon: ":ocean: <:lightning:843402902546284554>",
        default: 0,
        price: 650000,
        resources: "aluminium",
        removes: 65,
        add_to_bill: 1200,
        max: 30,
        image: "https://www.gamesaelectric.com/wp-content/uploads/2020/09/Does-it-make-sense-to-replace-Americas-aging-dams-with-solar-panels-e1600264517666-1000x500.jpg"
    },
    dog_park: {
        icon: ":dog: :park:",
        default: 0,
        price: 5000,
        add_to_bill: 150,
        max: 40,
        image: "https://i.hurimg.com/i/hdn/75/0x0/5ee397c6d3806c15406f0713.jpg"
    },
    bot_garden: {
        icon: ":sunflower: :park:",
        default: 0,
        price: 15000,
        add_to_bill: 240,
        max: 40,
        image: "https://lp-cms-production.imgix.net/2020-11/Keukenhof%20tulips.jpg"
    },
    playground: {
        icon: ":kite: :park:",
        default: 0,
        price: 7500,
        add_to_bill: 160,
        max: 40,
        image: "https://www.playgroundcentre.com/wp-content/uploads/2018/02/P1060256-1200x500.jpg"
    },
    zoo: {
        icon: ":lion_face: :park:",
        default: 0,
        price: 65000,
        add_to_bill: 2480,
        max: 40,
        image: "https://reidparkzoo.org/wp-content/uploads/2018/10/VisittheZoo_ReidParkZoo.jpg"
    },
    theatre: {
        icon: ":cinema:",
        default: 0,
        price: 12000,
        add_to_bill: 1920,
        max: 40,
        image: "https://res.cloudinary.com/solt/image/upload/q_80:420,fl_progressive,w_600,f_auto/v1595943445/lyric_interior_hvpw50.jpg"
    },
    museum: {
        icon: ":classical_building:",
        default: 0,
        price: 95000,
        add_to_bill: 1600,
        max: 40,
        image: "https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg"
    },
    observatory: {
        icon: ":stars:",
        default: 0,
        price: 85000,
        add_to_bill: 1000,
        max: 1,
        image: "https://cdn.vox-cdn.com/thumbor/ubZys_E8vh-A7vzEjfLryRZOsU4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9061983/shutterstock_128928830.jpg"
    },
    water_pump_station: {
        icon: ":droplet:",
        default: 0,
        price: 2500,
        add_to_bill: 40,
        max: 99999999999999999999999,
        image: "http://sas-ics.com/wp-content/uploads/2014/10/fresh-water-Pumping-Station.jpg"
    },
    water_tower: {
        icon: ":droplet:",
        default: 0,
        price: 3500,
        add_to_bill: 40,
        max: 99999999999999999999999,
        image: "https://www.gannett-cdn.com/-mm-/60431ef24571c4c0f2543c432cdb342943488d10/c=0-249-1931-1340/local/-/media/2017/01/19/Phoenix/Phoenix/636204459658776001-Water-Tower-Street-Lamp-Trees-Pretty-.jpg?width=1931&height=1091&fit=crop&format=pjpg&auto=webp"
    },
    water_drain_pipe: {
        icon: ":droplet:",
        default: 0,
        price: 2500,
        add_to_bill: 60,
        max: 99999999999999999999999,
        image: "https://www.drainforceplumbing.com/site/wp-content/uploads/78080072_s-1.jpg"
    },
    eco_water_outlet: {
        icon: ":droplet:",
        default: 0,
        price: 4000,
        add_to_bill: 100,
        max: 99999999999999999999999,
        image: "https://www.mrrooter.com/images/blog/MRR-BlogGraphic-HealthIssuesSewerExposure-0319.jpg"
    },
    theme_park: {
        icon: ":ferris_wheel:",
        default: 0,
        price: 5500000,
        add_to_bill: 7840,
        max: 1,
        image: "https://www.jackrouse.com/wp-content/uploads/Theme-Park-Planning.jpg"
    },
    stadium: {
        icon: ":stadium:",
        default: 0,
        price: 4000000,
        add_to_bill: 4500,
        max: 3,
        image: "https://www.the-afc.com/img/image/upload/t_l2/joumf8y3pzk2sx4owem2.jpg"
    },
    cinema: {
        icon: ":popcorn:",
        default: 0,
        price: 350000,
        add_to_bill: 700,
        max: 5,
        image: "https://i2.wp.com/www.dasym.com/wp-content/uploads/2017/07/Cinema-Image-by-Alexandre-Chassignon-on-Flickr.jpg?fit=2304%2C1728&ssl=1"
    }
};

/**
 * Types of power plants.
 * @type {OnWork}
 */
export const ON_WORK: OnWork = {
    coal_power_plant: {
        image: "https://cdn.discordapp.com/attachments/781825126815629323/787721169628561468/coal_power.png",
        default: 0,
        price: 5000,
        resource: "coal",
        removes: 1,
        pollution_index: 8,
        money_upkeep: 1200
    },
    oil_power_plant: {
        image: "https://cdn.discordapp.com/attachments/781825126815629323/787721178302906418/oil_power.png",
        default: 0,
        price: 7000,
        resource: "oil",
        removes: 1,
        pollution_index: 6,
        money_upkeep: 1800
    },
    nuclear_power_plant: {
        image: "https://cdn.discordapp.com/attachments/781825126815629323/787721177338347570/nuclear_power.png",
        default: 0,
        price: 500000,
        resource_to_build: "steel",
        resource_amount: 100,
        resource: "uranium",
        removes: 2,
        pollution_index: 0,
        money_upkeep: 10050
    },
    wind_power_plant: {
        image: "https://media.discordapp.net/attachments/781825126815629323/787721180248408125/wind_power.png",
        default: 0,
        price: 30000,
        resource_to_build: "aluminium",
        resource_amount: 50,
        pollution_index: 0,
        money_upkeep: 500
    }
};
