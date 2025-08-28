console.info('Loaded Custom Recipes')

function bulkFermentingRecipe(event, inputs, outputs, options) {
    if (!options) options = {}

    let recipe = {
        type: 'createdieselgenerators:bulk_fermenting',
        ingredients: inputs,
        results: Array.isArray(outputs) ? outputs : [outputs],
        processingTime: options.time ? options.time : 200
    }

    if (options.heat && options.heat !== 'none') {
        recipe.heatRequirement = options.heat
    }

    event.custom(recipe)
}

ServerEvents.recipes(event => {
    // Compacting
    event.recipes.create.compacting("minecraft:tuff", [Fluid.water(50), "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone"])
    event.recipes.create.compacting("minecraft:tuff", [Fluid.water(50), "minecraft:cobbled_deepslate", "minecraft:cobbled_deepslate", "minecraft:cobbled_deepslate", "minecraft:cobbled_deepslate"])
    event.recipes.create.compacting("minecraft:calcite", ["minecraft:gravel", "minecraft:bone_meal", "minecraft:bone_meal", "minecraft:bone_meal"])
    event.recipes.create.compacting("minecraft:deepslate", [Fluid.lava(50), "minecraft:cobblestone"])

    // Chrushing
    event.recipes.create.crushing([
        "minecraft:nether_brick",
        Item.of('minecraft:nether_brick').withChance(0.25),
        Item.of('minecraft:netherite_scrap').withChance(0.01)],
        'minecraft:nether_bricks'
    )

    event.recipes.create.crushing([
        Item.of('minecraft:blackstone').withChance(0.25),
        Item.of('minecraft:wither_skeleton_skull').withChance(0.01)],
        'minecraft:blackstone'
    ).processingTime(350)

    event.recipes.create.crushing([
        Item.of('minecraft:end_stone').withChance(0.75),
        Item.of('minecraft:ender_pearl').withChance(0.20)],
        'minecraft:end_stone'
    ).processingTime(450)

    event.recipes.create.crushing([
        Item.of('minecraft:quartz').withChance(0.15),
        Item.of('minecraft:lapis_lazuli').withChance(0.1)],
        'create:limestone'
    ).processingTime(250)

    event.recipes.create.crushing([
        Item.of('minecraft:blaze_powder').withChance(0.125),
        Item.of('minecraft:blaze_rod').withChance(0.05)],
        'create:scoria'
    ).processingTime(125)

    event.recipes.create.crushing([
        Item.of('minecraft:glowstone_dust').withChance(0.125)],
        'minecraft:soul_sand'
    ).processingTime(125)

    event.recipes.create.crushing([
        Item.of("minecraft:gravel").withChance(0.5),
        Item.of("minecraft:gravel").withChance(1)
    ], "minecraft:cobbled_deepslate"
    ).processingTime(350)

    event.recipes.create.crushing([
        Item.of("minecraft:cobbled_deepslate").withChance(1)
    ], "minecraft:deepslate"
    ).processingTime(350)

    // Haunting
    event.recipes.create.haunting('minecraft:soul_campfire', 'minecraft:campfire')
    event.recipes.create.haunting('minecraft:coal', 'minecraft:charcoal')
    event.recipes.create.haunting('minecraft:basalt', 'minecraft:netherrack')

    // Milling
    event.recipes.create.milling([Item.of('minecraft:wither_skeleton_skull').withChance(0.01)], 'minecraft:blackstone')
    event.recipes.create.milling([Item.of('minecraft:cobbled_deepslate').withChance(1)], 'minecraft:deepslate')

    // Mixing
    event.recipes.create.mixing('minecraft:dripstone_block', ['minecraft:calcite', Fluid.water(200)])
    event.recipes.create.mixing('minecraft:wither_rose', ['minecraft:poppy', Fluid.of('create_enchantment_industry:ink', 250)])

    // Sive
    event.recipes.createsifterSifting([
        Item.of('fossil:amber_chunk_dominican').withChance(0.01),
        Item.of('minecraft:beetroot_seeds').withChance(0.05),
        Item.of('minecraft:bone_meal').withChance(0.20),
        Item.of('minecraft:carrot').withChance(0.15),
        Item.of('fossil:fossil_bio').withChance(0.02),
        Item.of('fossil:fossil_plant').withChance(0.02),
        Item.of('minecraft:melon_seeds').withChance(0.02),
        Item.of('minecraft:potato').withChance(0.15),
        Item.of('fossil:pottery_shard').withChance(0.05),
        Item.of('minecraft:pumpkin_seeds').withChance(0.02),
    ], ['#fossil:sifter_inputs', 'createsifter:advanced_brass_mesh'])

    // Bulk Fermenting
    /// Flaxen Cheese
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:brown_mushroom" },
            { item: "minecraft:pumpkin_seeds" },
            { item: "minecraft:sugar" },
            { fluid: "minecraft:milk", amount: 1000 }
        ],
        { fluid: "brewinandchewin:flaxen_cheese", amount: 1000 },
        { time: 7200, heat: "heated" }
    )
    /// Scarlet Cheese
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:crimson_fungus" },
            { item: "minecraft:nether_wart" },
            { item: "minecraft:sugar" },
            { fluid: "minecraft:milk", amount: 1000 }
        ],
        { fluid: "brewinandchewin:scarlet_cheese", amount: 1000 },
        { time: 7200, heat: "superheated" }
    )
    /// Beer
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:wheat" },
            { item: "minecraft:wheat_seeds" },
            { item: "minecraft:brown_mushroom" },
            { fluid: "minecraft:water", amount: 1000 }
        ],
        { fluid: "brewinandchewin:beer", amount: 1000 },
        { time: 7200, heat: "none" }
    )
    /// Bloody Mary
    bulkFermentingRecipe(event,
        [
            { tag: "forge:crops/tomato" },
            { tag: "forge:crops/cabbage" },
            { item: "minecraft:sweet_berries" },
            { fluid: "brewinandchewin:vodka", amount: 1000 }
        ],
        { fluid: "brewinandchewin:bloody_mary", amount: 1000 },
        { time: 3600, heat: "heated" }
    )
    /// Cocoa Fudge
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:sugar" },
            { item: "minecraft:cocoa_beans" },
            { item: "minecraft:cocoa_beans" },
            { fluid: "minecraft:milk", amount: 500 }
        ],
        [
            { item: "brewinandchewin:cocoa_fudge", amount: 1 }, // guaranteed output
            { item: "brewinandchewin:cocoa_fudge", amount: 1, chance: 0.25 } // 25% extra
        ],
        { time: 7200, heat: "none" }
    )
    /// Dread Nog
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:nether_wart" },
            { item: "minecraft:turtle_egg" },
            { item: "minecraft:fermented_spider_eye" },
            { fluid: "brewinandchewin:egg_grog", amount: 1000 }
        ],
        { fluid: "brewinandchewin:dread_nog", amount: 1000 },
        { time: 3600, heat: "none" }
    )
    /// Egg Grog
    bulkFermentingRecipe(event,
        [
            { tag: "forge:eggs" },
            { tag: "forge:crops/cabbage" },
            { item: "minecraft:sugar" },
            { fluid: "minecraft:milk", amount: 1000 }
        ],
        { fluid: "brewinandchewin:egg_grog", amount: 1000 },
        { time: 7200, heat: "none" }
    )
    // Glittering Grenadine
    bulkFermentingRecipe(
        event,
        [
            { item: "minecraft:glow_berries" },
            { item: "minecraft:glowstone_dust" },
            { item: "minecraft:glow_ink_sac" },
            { fluid: "minecraft:water", amount: 1000 }
        ],
        { fluid: "brewinandchewin:glittering_grenadine", amount: 1000 },
        { time: 7200, heat: "none" }
    )
    // Jerky
    bulkFermentingRecipe(event,
        [
            { tag: "brewinandchewin:raw_meats" },
            { tag: "brewinandchewin:raw_meats" },
            { tag: "brewinandchewin:raw_meats" }
        ],
        [
            { item: "brewinandchewin:jerky" },
            { item: "brewinandchewin:jerky" },
            { item: "brewinandchewin:jerky" },
            { item: "brewinandchewin:jerky", chance: 0.25 }
        ],
        { time: 7200, heat: "heated" }
    )

    // Kimchi
    bulkFermentingRecipe(event,
        [
            { tag: "forge:crops/cabbage" },
            { tag: "forge:vegetables" },
            { item: "minecraft:kelp" }
        ],
        [
            { item: "brewinandchewin:kimchi" },
            { item: "brewinandchewin:kimchi" },
            { item: "brewinandchewin:kimchi", chance: 0.25 }
        ],
        { time: 7200, heat: "heated" }
    )

    // Kippers
    bulkFermentingRecipe(event,
        [
            { tag: "forge:raw_fishes" },
            { tag: "forge:raw_fishes" },
            { item: "minecraft:dried_kelp" }
        ],
        [
            { item: "brewinandchewin:kippers" },
            { item: "brewinandchewin:kippers" },
            { item: "brewinandchewin:kippers", chance: 0.25 }
        ],
        { time: 7200, heat: "heated" }
    )

    // Mead
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:wheat" },
            { item: "minecraft:wheat_seeds" },
            { item: "minecraft:sweet_berries" },
            { fluid: "brewinandchewin:honey", amount: 1000 }
        ],
        { fluid: "brewinandchewin:mead", amount: 1000 },
        { time: 7200, heat: "none" }
    )

    // Pale Jane
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:honey_bottle" },
            { item: "farmersdelight:tree_bark" },
            { item: "minecraft:lily_of_the_valley" },
            { item: "minecraft:sugar" },
            { fluid: "brewinandchewin:rice_wine", amount: 1000 }
        ],
        { fluid: "brewinandchewin:pale_jane", amount: 1000 },
        { time: 3600, heat: "heated" }
    )

    // Pickled Pickles
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:sea_pickle" },
            { item: "minecraft:sea_pickle" },
            { item: "minecraft:glow_berries" },
            { fluid: "brewinandchewin:honey", amount: 250 }
        ],
        [
            { item: "brewinandchewin:pickled_pickles" },
            { item: "brewinandchewin:pickled_pickles" },
            { item: "brewinandchewin:pickled_pickles", chance: 0.25 }
        ],
        { time: 7200, heat: "none" }
    )

    // Red Rum
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:crimson_fungus" },
            { item: "minecraft:nether_wart" },
            { item: "minecraft:fermented_spider_eye" },
            { item: "minecraft:shroomlight" },
            { fluid: "brewinandchewin:bloody_mary", amount: 1000 }
        ],
        { fluid: "brewinandchewin:red_rum", amount: 1000 },
        { time: 3600, heat: "superheated" }
    )

    // Rice Wine
    bulkFermentingRecipe(event,
        [
            { tag: "forge:crops/rice" },
            { item: "minecraft:brown_mushroom" },
            { fluid: "minecraft:water", amount: 1000 }
        ],
        { fluid: "brewinandchewin:rice_wine", amount: 1000 },
        { time: 7200, heat: "none" }
    )

    // Saccharine Rum
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:sweet_berries" },
            { item: "minecraft:sugar_cane" },
            { item: "minecraft:melon" },
            { fluid: "brewinandchewin:mead", amount: 1000 }
        ],
        { fluid: "brewinandchewin:saccharine_rum", amount: 1000 },
        { time: 3600, heat: "heated" }
    )

    // Salty Folly
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:sea_pickle" },
            { item: "minecraft:dried_kelp" },
            { item: "minecraft:seagrass" },
            { fluid: "brewinandchewin:vodka", amount: 1000 }
        ],
        { fluid: "brewinandchewin:salty_folly", amount: 1000 },
        { time: 3600, heat: "none" }
    )

    // Steel Toe Stout
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:iron_ingot" },
            { item: "minecraft:crimson_fungus" },
            { item: "minecraft:nether_wart" },
            { item: "minecraft:wheat" },
            { fluid: "brewinandchewin:strongroot_ale", amount: 1000 }
        ],
        { fluid: "brewinandchewin:steel_toe_stout", amount: 1000 },
        { time: 3600, heat: "none" }
    )

    // Strongroot Ale
    bulkFermentingRecipe(event,
        [
            { tag: "forge:vegetables/beetroot" },
            { tag: "forge:vegetables/potato" },
            { item: "minecraft:brown_mushroom" },
            { item: "brewinandchewin:jerky" },
            { fluid: "brewinandchewin:beer", amount: 1000 }
        ],
        { fluid: "brewinandchewin:strongroot_ale", amount: 1000 },
        { time: 3600, heat: "none" }
    )

    // Vodka
    bulkFermentingRecipe(event,
        [
            { tag: "forge:vegetables/potato" },
            { item: "minecraft:wheat" },
            { item: "minecraft:wheat_seeds" },
            { fluid: "minecraft:water", amount: 1000 }
        ],
        { fluid: "brewinandchewin:vodka", amount: 1000 },
        { time: 7200, heat: "heated" }
    )

    // Withering Dross
    bulkFermentingRecipe(event,
        [
            { item: "minecraft:wither_rose" },
            { item: "minecraft:ink_sac" },
            { item: "minecraft:nether_wart" },
            { item: "minecraft:bone" },
            { fluid: "brewinandchewin:salty_folly", amount: 1000 }
        ],
        { fluid: "brewinandchewin:withering_dross", amount: 1000 },
        { time: 7200, heat: "superheated" }
    )

    // Mechanical Crafting
    event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
        "SSSSS",
        " M M ",
        " HNEP",
        " HHH "
    ], {
        H: 'immersive_aircraft:hull',
        E: 'immersive_aircraft:engine',
        P: 'create:propeller',
        S: 'immersive_aircraft:sail',
        M: 'minecraft:string',
        N: '#create:seats'
    })

    event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
        "   S ",
        "S  S ",
        "HHMEP",
        "S  S ",
        "   S "
    ], {
        H: 'immersive_aircraft:hull',
        E: 'immersive_aircraft:engine',
        P: 'immersive_aircraft:propeller',
        S: 'immersive_aircraft:sail',
        M: '#create:seats'
    })

    event.recipes.create.mechanical_crafting("immersive_aircraft:warship", [
        "_SSS_",
        "_SSS_",
        " ~ ~ ",
        "CHAEP",
        " HHH "
    ],
        {
            P: "immersive_aircraft:propeller",
            E: "immersive_aircraft:engine",
            A: "immersive_aircraft:cargo_airship",
            C: "immersive_aircraft:heavy_crossbow",
            S: "immersive_aircraft:sail",
            "~": "minecraft:string",
            _: "create:sturdy_sheet",
            H: "immersive_aircraft:hull"
        }
    )

    // Sequenced Assembly
    let Enter = 'kubejs:incomplete_ender_eye' // making a variable to store the transitional item makes the code more readable

    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:ender_eye').withChance(16.0), // this is the item that will appear in JEI as the result
        Item.of("minecraft:ender_pearl").withChance(16.0), // the rest of these items will be part of the scrap

    ], 'minecraft:ender_pearl', [
        event.recipes.createFilling(Enter, [Enter, Fluid.of('create_mechanical_spawner:spawn_fluid_blaze', 500)]),
        event.recipes.createCutting(Enter, Enter),
        event.recipes.createDeploying(Enter, [Enter, "minecraft:prismarine_shard"]),
        event.recipes.createDeploying(Enter, [Enter, "minecraft:netherite_scrap"]),
        event.recipes.createDeploying(Enter, [Enter, "createnuclear:enriched_yellowcake"]),
        event.recipes.createPressing(Enter, Enter),
    ]).transitionalItem(Enter).loops(1)


    // Drill
    /// Fluid
    ////Lava
    event.recipes.createoreexcavation.vein('{"text": "Lava well"}', 'minecraft:lava_bucket')
        .placement(1024, 128, 64630185).alwaysInfinite().id("kubejs:cad_lava_well")
    event.recipes.createoreexcavation.extracting('minecraft:lava 250', 'kubejs:cad_lava_well', 40)
        .id("kubejs:cad_lava_well_drill");
    //// Tar
    event.recipes.createoreexcavation.vein('{"text": "Tar well"}', 'fossil:tar_bucket')
        .placement(1024, 128, 64630194).alwaysInfinite().id("kubejs:cad_tar_well")
    event.recipes.createoreexcavation.extracting('fossil:tar 125', 'kubejs:cad_tar_well', 40)
        .id("kubejs:cad_tar_well_drill");
})
