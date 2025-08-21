console.info('Loaded Custom Recipes')
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

    event.recipes.create.crushing([
        Item.of("createsifter:dust").withChance(1)
    ], "minecraft:sand"
    ).processingTime(350)

    // Haunting
    event.recipes.create.haunting('minecraft:soul_campfire', 'minecraft:campfire')
    event.recipes.create.haunting('minecraft:coal', 'minecraft:charcoal')
    event.recipes.create.haunting('minecraft:basalt', 'minecraft:netherrack')

    // Milling
    event.recipes.create.milling([Item.of('minecraft:wither_skeleton_skull').withChance(0.01)], 'minecraft:blackstone')
    event.recipes.create.milling([Item.of('minecraft:cobbled_deepslate').withChance(1)], 'minecraft:deepslate')
    event.recipes.create.milling([Item.of('createsifter:dust').withChance(1)], 'minecraft:sand')

    // Mixing
    event.recipes.create.mixing('minecraft:dripstone_block', ['minecraft:calcite', Fluid.water(200)])
    event.recipes.create.mixing('minecraft:wither_rose', ['minecraft:poppy', Fluid.of('create_enchantment_industry:ink', 250)])

    // Sive
    event.recipes.createsifterSifting([
        Item.of('minecraft:glowstone_dust').withChance(0.5),
        Item.of('minecraft:redstone').withChance(0.1),
        Item.of('createnuclear:uranium_powder').withChance(0.05),
        Item.of("minecraft:blaze_powder").withChance(0.15),
        Item.of("alexscaves:sulfur_dust").withChance(0.25),
    ], ['createsifter:dust', 'createsifter:advanced_brass_mesh']
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
    let inter = 'kubejs:incomplete_compas' // making a variable to store the transitional item makes the code more readable
    let Enter = 'kubejs:incomplete_compas' // making a variable to store the transitional item makes the code more readable

    event.recipes.create.sequenced_assembly([
        Item.of('explorerscompass:explorerscompass').withChance(16.0), // this is the item that will appear in JEI as the result
        Item.of('minecraft:compass').withChance(16.0), // the rest of these items will be part of the scrap

    ], 'minecraft:compass', [ // the input
        event.recipes.createPressing(inter, inter),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying(inter, [inter, "minecraft:cobweb"]),
        event.recipes.createFilling(inter, [inter, Fluid.of('create_enchantment_industry:hyper_experience', 250)]),
        event.recipes.createDeploying(inter, [inter, "minecraft:cracked_stone_bricks"]),
        event.recipes.createDeploying(inter, [inter, "minecraft:ender_eye"]),
    ]).transitionalItem(inter).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('naturescompass:naturescompass').withChance(16.0), // this is the item that will appear in JEI as the result
        Item.of('minecraft:compass').withChance(16.0), // the rest of these items will be part of the scrap

    ], 'minecraft:compass', [
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, "#minecraft:saplings"]),
        event.recipes.createFilling(inter, [inter, Fluid.of('create_enchantment_industry:hyper_experience', 250)]),
        event.recipes.createDeploying(inter, [inter, "#minecraft:logs"]),
        event.recipes.createDeploying(inter, [inter, "minecraft:ender_eye"]),
    ]).transitionalItem(inter).loops(1)

    
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
    /// Fluiod
    event.recipes.createoreexcavation.vein('{"text": "Lava well"}', 'minecraft:lava_bucket')
        .placement(1024, 128, 64630185).alwaysInfinite().id("kubejs:cad_lava_well")
    event.recipes.createoreexcavation.extracting('minecraft:lava 250', 'kubejs:cad_lava_well', 40)
        .id("kubejs:cad_lava_well_drill");
})
