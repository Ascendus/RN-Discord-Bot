import { Argument } from "../../structures/Argument";
import { Command } from "../../structures/Command";
import { CommandInteraction, MessageEmbed } from "discord.js";
import { Country } from "../../structures/util/Interfaces";
import { ExtendedClient } from "../../client/Client";
import { BUILDINGS, CIVIL_BUILDINGS, OTHER, RESOURCES, UNITS } from "../../structures/util/Constants";

import { configOptions } from "../../client/Config";

export default class StartCommand extends Command {
    public constructor() {
        super("start", {
            arguments: [
                new Argument({
                    name: "country",
                    description: "The name of the country.",
                    required: true,
                    type: "string"
                })
            ],
            category: "Core",
            channel: "guild",
            cooldown: 5,
            description: "Establishes your nation.",
            enabledByDefault: true,
            examples: ["start MyCountry"],
            exceptions: {
                ignoreCooldown: configOptions.owners,
                ignorePermissions: configOptions.owners
            },
            isSubCommand: false,
            ownerOnly: false,
            permissions: {
                clientPermissions: [],
                userPermissions: []
            },
            usage: "start <country name>"
        });
    }

    public async exec(client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
        const countryName: string = interaction.options.getString((this.arguments as Argument[])[0].name) as string;
        const countryList: Country[] = [];

        client.countries.forEach((country: Country): void => {
            countryList.push(country);
        });

        const errorMessage: MessageEmbed | null = client.util.checkCountryName(countryName, countryList);

        if (!client.countries.get(interaction.user.id)) {
            return interaction.reply({
                embeds: [
                    {
                        title: "Denied",
                        color: "RED",
                        fields: [
                            { name: ":x: Nation already exists", value: "You already have a nation, so you are not able to establish a new one" }
                        ]
                    }
                ],
                ephemeral: true
            })
        }

        if (errorMessage === null) {
            const newNation: Country = {
                country: countryName,
                userID: interaction.user.id,
                balance: 10200000,
                population: 100,
                billRate: 2500,
                tax: 1000,
                governmentType: 0,
                flag: "https://i.redd.it/qp8ec06nt14z.png",
                leader: "None",
                donator: 0,
                moneyTyphoon: 0,
                taxRate: 15,
                impRelations: [],
                decRelations: [],
                allies: [],
                rivals: [],
                vassalizeReq: [],
                guarInd: [],
                nonAggr: [],
                citizenHappiness: 80,
                nationalMotto: "None",
                currency: "$",
                crimeRate: 2,
                diseaseRate: 1,
                pollutionIndex: 0,
                power: 0,
                fireHazard: 2,
                tourists: 0,
                water: 0,
                sewage: 0,
                missiles: UNITS.missiles.default,
                planes: UNITS.planes.default,
                ships: UNITS.ships.default,
                soliders: UNITS.soldiers.default,
                spies: UNITS.spies.default,
                tanks: UNITS.tanks.default,
                aluminium: RESOURCES.aluminium.default,
                bauxite: RESOURCES.bauxite.default,
                coal: RESOURCES.coal.default,
                food: RESOURCES.food.default,
                gasoline: RESOURCES.gasoline.default,
                iron: RESOURCES.iron.default,
                lead: RESOURCES.lead.default,
                munitions: RESOURCES.munitions.default,
                oil: RESOURCES.oil.default,
                steel: RESOURCES.steel.default,
                uranium: RESOURCES.uranium.default,
                infrastructure: OTHER.infrastructure.default,
                technology: OTHER.technology.default,
                coalMines: BUILDINGS.coal_mines.default,
                oilWells: BUILDINGS.oil_wells.default,
                ironMines: BUILDINGS.iron_mines.default,
                bauxiteMines: BUILDINGS.bauxite_mines.default,
                leadMines: BUILDINGS.lead_mines.default,
                uraniumMines: BUILDINGS.uranium_mines.default,
                farms: BUILDINGS.farms.default,
                munitionsFactories: BUILDINGS.munitions_factory.default,
                aluminiumRefinery: BUILDINGS.aluminium_refinery.default,
                steelMill: BUILDINGS.steel_mill.default,
                petroleumRefinery: BUILDINGS.petroleum_refinery.default,
                policeStation: CIVIL_BUILDINGS.police_station.default,
                fireStation: CIVIL_BUILDINGS.fire_station.default,
                hospital: CIVIL_BUILDINGS.hospital.default,
                recCenter: CIVIL_BUILDINGS.rec_center.default,
                subway: CIVIL_BUILDINGS.subway.default,
                coalPowerP: CIVIL_BUILDINGS.coal_power_p.default,
                oilPowerP: CIVIL_BUILDINGS.oil_power_p.default,
                nuclearPowerP: CIVIL_BUILDINGS.nuclear_power_p.default,
                windPowerP: CIVIL_BUILDINGS.wind_power_p.default,
                hydroPowerP: CIVIL_BUILDINGS.hydro_power_p.default,
                dogPark: CIVIL_BUILDINGS.dog_park.default,
                botGarden: CIVIL_BUILDINGS.bot_garden.default,
                playground: CIVIL_BUILDINGS.playground.default,
                zoo: CIVIL_BUILDINGS.zoo.default,
                theatre: CIVIL_BUILDINGS.theatre.default,
                museum: CIVIL_BUILDINGS.museum.default,
                observatory: CIVIL_BUILDINGS.observatory.default,
                waterPumpStation: CIVIL_BUILDINGS.water_pump_station.default,
                waterTower: CIVIL_BUILDINGS.water_tower.default,
                waterDrainPipe: CIVIL_BUILDINGS.water_drain_pipe.default,
                ecoWaterOutlet: CIVIL_BUILDINGS.eco_water_outlet.default,
                themePark: CIVIL_BUILDINGS.theme_park.default,
                stadium: CIVIL_BUILDINGS.stadium.default,
                cinema: CIVIL_BUILDINGS.cinema.default
            };

            client.countries.set(interaction.user.id, newNation);

            return interaction.reply({
                embeds: [
                    {
                        title: "Nation Created",
                        color: "GREEN",
                        fields: [
                            {
                                name: `:white_check_mark: ${countryName} has gained independence!`,
                                value: "Welcome {ctx.message.author.mention} to the Roleplay :sparkles:\nBefore you start, please read through our Game Rules on the [Roleplay Nations Website](https://www.roleplay-nations.tk/).\n> Plato, the ancient Greek philosopher, wrote of a great civilization called Atlantis founded by a race of people who were half god and half human. They lived in a utopia that held great naval power. But their home, located on islands shaped like a series of concentric circles, was destroyed in a great cataclysm.\n[Support Server](https://discord.gg/vcSrNJP)\n**Thank you for using Roleplay Nations.**"
                            }
                        ],
                        image: {
                            url: "https://media.discordapp.net/attachments/781825126815629323/793441584761798676/medium-large.png"
                        }
                    }
                ]
            });
        } else {
            return interaction.reply({
                embeds: [errorMessage as MessageEmbed],
                ephemeral: true
            });
        }
    }
}