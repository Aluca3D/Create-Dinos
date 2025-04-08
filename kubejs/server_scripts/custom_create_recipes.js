console.info('Loaded Custom Recipes')
ServerEvents.recipes(event => {
    // Compacting
    event.recipes.create.compacting("minecraft:tuff", [Fluid.water(50), "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone"])
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
})
