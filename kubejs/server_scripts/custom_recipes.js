console.info('Loaded Custom Recipes')
ServerEvents.recipes(event => {
    // Stonecutting
    event.stonecutting('morelights:pyle_headlight', 'createaddition:small_light_connector')
    event.stonecutting('morelights:skinny_tube_light', 'createaddition:small_light_connector')
    event.stonecutting('morelights:small_armored_light', 'createaddition:small_light_connector')
    event.stonecutting('morelights:small_cage_light', 'createaddition:small_light_connector')
    event.stonecutting('morelights:small_edison_bulb', 'createaddition:small_light_connector')
    event.stonecutting('morelights:small_green_sconce', 'createaddition:small_light_connector')
    event.stonecutting('morelights:small_light_with_reflector', 'createaddition:small_light_connector')
    event.stonecutting('morelights:small_tube_light', 'createaddition:small_light_connector')

    // Crafting
    event.shaped(
        Item.of("minecraft:stick", 16),
        [
            'A',
            'A'
        ],
        {
            A: "#minecraft:logs"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:boiler"),
        [
            "S",
            "N",
            "I"
        ],
        {
            I: "create:blaze_burner",
            S: "create:steam_engine",
            N: "create:fluid_tank"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:eco_engine"),
        [
            "IWI",
            "CEC"
        ],
        {
            C: "create:copper_sheet",
            W: "minecraft:water_bucket",
            I: "create:iron_sheet",
            E: "immersive_aircraft:boiler"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:engine"),
        [
            "BPB",
            "SES"
        ],
        {
            P: "create:precision_mechanism",
            E: "immersive_aircraft:boiler",
            B: "create:brass_sheet",
            S: "create:sturdy_sheet"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:enhanced_propeller"),
        [
            " B ",
            "BPB",
            " B "
        ],
        {
            B: "create:brass_sheet",
            P: "create:propeller"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:gyroscope"),
        [
            "E",
            "C"
        ],
        {
            C: "minecraft:compass",
            E: "create:electron_tube"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:hull_reinforcement"),
        [
            "IHI"
        ],
        {
            H: "immersive_aircraft:hull",
            I: "create:iron_sheet"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:hull"),
        [
            "LIL",
            "LIL"
        ],
        {
            L: "create:andesite_casing",
            I: "minecraft:iron_ingot"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:improved_landing_gear"),
        [
            "SI",
            "B "
        ],
        {
            B: "create:belt_connector",
            I: "minecraft:iron_ingot",
            S: "create:iron_sheet"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:nether_engine"),
        [
            "ILI",
            "SES"
        ],
        {
            S: "create:sturdy_sheet",
            L: "minecraft:lava_bucket",
            I: "create:iron_sheet",
            E: "immersive_aircraft:boiler"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:propeller"),
        [
            " I ",
            "IPI",
            " I "
        ],
        {
            I: "create:iron_sheet",
            P: "create:propeller"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:quadrocopter"),
        [
            "PAP",
            " S ",
            "PEP"
        ],
        {
            E: "immersive_aircraft:boiler",
            A: "create:andesite_casing",
            S: "minecraft:string",
            P: "create:propeller"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:sail"),
        [
            "SSS",
            "SSS"
        ],
        {
            S: "create:white_sail"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:steel_boiler"),
        [
            "IFI"
        ],
        {
            I: "create:iron_sheet",
            F: "create:fluid_tank"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:sturdy_pipes"),
        [
            "IPI"
        ],
        {
            P: "create:fluid_pipe",
            I: "create:iron_sheet"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:bomb_bay"),
        [
            "IRI",
            "ICI"
        ],
        {
            R: "minecraft:redstone_torch",
            I: "create:iron_sheet",
            C: "create:chute"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:industrial_gears"),
        [
            "CB",
            "IC"
        ],
        {
            C: "create:cogwheel",
            B: "create:brass_sheet",
            I: "create:iron_sheet"
        }
    )
    event.shaped(
        Item.of("immersive_aircraft:rotary_cannon"),
        [
            " D ",
            " P ",
            " C "
        ],
        {
            D: "minecraft:dispenser",
            P: "create:precision_mechanism",
            C: "minecraft:copper_ingot"
        }
    )


    // Upgrade Base
    event.shaped(
        'sophisticatedbackpacks:upgrade_base',
        [
            ' B ',
            'RCR',
            ' G '
        ],
        {
            B: 'create:brass_sheet',
            R: 'minecraft:redstone',
            C: 'create:precision_mechanism',
            G: 'create:cogwheel'
        }
    )

    // Pickup Upgrade
    event.shaped(
        'sophisticatedbackpacks:pickup_upgrade',
        [
            'IRI',
            'UBU',
            ' G '
        ],
        {
            I: 'create:iron_sheet',
            R: 'minecraft:redstone',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'minecraft:hopper',
            G: 'create:precision_mechanism'
        }
    )

    // Filter Upgrade
    event.shaped(
        'sophisticatedbackpacks:filter_upgrade',
        [
            ' F ',
            'UBU',
            ' G '
        ],
        {
            F: 'create:filter',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:brass_sheet',
            G: 'create:electron_tube'
        }
    )


    // Feeding Upgrade
    event.shaped(
        'sophisticatedbackpacks:feeding_upgrade',
        [
            ' C ',
            'UGU',
            ' F '
        ],
        {
            C: 'minecraft:golden_carrot',
            U: 'sophisticatedbackpacks:upgrade_base',
            G: 'create:precision_mechanism',
            F: 'create:electron_tube'
        }
    )

    // Auto-Smelting Upgrade
    event.shaped(
        'sophisticatedbackpacks:auto_smelting_upgrade',
        [
            ' F ',
            'UBU',
            ' L '
        ],
        {
            F: 'minecraft:blast_furnace',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:brass_sheet',
            L: 'minecraft:lava_bucket'
        }
    )

    // Magnet Upgrade
    event.shaped(
        'sophisticatedbackpacks:magnet_upgrade',
        [
            ' T ',
            'ULU',
            ' G '
        ],
        {
            T: 'create:electron_tube',
            U: 'sophisticatedbackpacks:upgrade_base',
            L: 'minecraft:lodestone',
            G: 'create:cogwheel'
        }
    )

    // Compacting Upgrade
    event.shaped(
        'sophisticatedbackpacks:compacting_upgrade',
        [
            ' M ',
            'UIU',
            ' B '
        ],
        {
            M: 'create:mechanical_press',
            U: 'sophisticatedbackpacks:upgrade_base',
            I: 'minecraft:iron_block',
            B: 'create:brass_sheet'
        }
    )

    // Void Upgrade
    event.shaped(
        'sophisticatedbackpacks:void_upgrade',
        [
            ' E ',
            'UOU',
            ' B '
        ],
        {
            E: 'minecraft:ender_pearl',
            U: 'sophisticatedbackpacks:upgrade_base',
            O: 'minecraft:obsidian',
            B: 'create:brass_sheet'
        }
    )

    // Restock Upgrade
    event.shaped(
        'sophisticatedbackpacks:restock_upgrade',
        [
            ' C ',
            'UBU',
            ' G '
        ],
        {
            C: 'minecraft:chest',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'minecraft:barrel',
            G: 'create:cogwheel'
        }
    )

    // Tool Swapper Upgrade
    event.shaped(
        'sophisticatedbackpacks:tool_swapper_upgrade',
        [
            ' S ',
            'UTU',
            ' E '
        ],
        {
            S: 'minecraft:smithing_table',
            U: 'sophisticatedbackpacks:upgrade_base',
            T: 'create:electron_tube',
            E: 'create:precision_mechanism'
        }
    )

    // Stonecutter Upgrade
    event.shaped(
        'sophisticatedbackpacks:stonecutter_upgrade',
        [
            ' S ',
            'UBU',
            ' C '
        ],
        {
            S: 'minecraft:stonecutter',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:brass_sheet',
            C: 'create:cogwheel'
        }
    )

    // Deposit Upgrade
    event.shaped(
        'sophisticatedbackpacks:deposit_upgrade',
        [
            ' D ',
            'UBU',
            ' C '
        ],
        {
            D: 'create:depot',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:brass_sheet',
            C: 'create:chute'
        }
    )

    // Smelting Upgrade
    event.shaped(
        'sophisticatedbackpacks:smelting_upgrade',
        [
            ' F ',
            'UBU',
            ' C '
        ],
        {
            F: 'minecraft:furnace',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:brass_sheet',
            C: 'create:mechanical_press'
        }
    )

    // Blast Upgrade
    event.shaped(
        'sophisticatedbackpacks:blasting_upgrade',
        [
            ' B ',
            'UBU',
            ' I '
        ],
        {
            B: 'minecraft:blast_furnace',
            U: 'sophisticatedbackpacks:upgrade_base',
            I: 'minecraft:iron_ingot'
        }
    )

    // Smoking Upgrade
    event.shaped(
        'sophisticatedbackpacks:smoking_upgrade',
        [
            ' S ',
            'UCU',
            ' F '
        ],
        {
            S: 'minecraft:smoker',
            U: 'sophisticatedbackpacks:upgrade_base',
            C: 'minecraft:campfire',
            F: 'create:brass_sheet'
        }
    )
    // Refill Upgrade
    event.shaped('sophisticatedbackpacks:refill_upgrade', [
        ' G ',
        'UBU',
        ' R '
    ], {
        G: 'create:mechanical_arm',
        U: 'sophisticatedbackpacks:upgrade_base',
        B: 'create:brass_sheet',
        R: 'minecraft:redstone'
    })

    // Advanced Void Upgrade
    event.shaped('sophisticatedbackpacks:advanced_void_upgrade', [
        ' E ',
        'UBU',
        ' O '
    ], {
        E: 'minecraft:ender_eye',
        U: 'sophisticatedbackpacks:void_upgrade',
        B: 'create:brass_block',
        O: 'minecraft:crying_obsidian'
    })

    // Advanced Magnet Upgrade
    event.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
        ' L ',
        'UMU',
        ' G '
    ], {
        L: 'minecraft:lodestone',
        U: 'sophisticatedbackpacks:magnet_upgrade',
        M: 'create:precision_mechanism',
        G: 'create:electron_tube'
    })

    // Advanced Feeding Upgrade
    event.shaped('sophisticatedbackpacks:advanced_feeding_upgrade', [
        ' G ',
        'UCU',
        ' M '
    ], {
        G: 'create:precision_mechanism',
        U: 'sophisticatedbackpacks:feeding_upgrade',
        C: 'minecraft:enchanted_golden_apple',
        M: 'create:brass_block'
    })

    // Advanced Blast Upgrade
    event.shaped('sophisticatedbackpacks:auto_blasting_upgrade', [
        ' B ',
        'UBU',
        ' I '
    ], {
        B: 'minecraft:blast_furnace',
        U: 'sophisticatedbackpacks:blasting_upgrade',
        I: 'minecraft:iron_block'
    })

    // Advanced Smoking Upgrade
    event.shaped('sophisticatedbackpacks:auto_smoking_upgrade', [
        ' S ',
        'UCU',
        ' F '
    ], {
        S: 'minecraft:smoker',
        U: 'sophisticatedbackpacks:smoking_upgrade',
        C: 'minecraft:soul_campfire',
        F: 'create:brass_block'
    })

    // Advanced Compacting Upgrade
    event.shaped('sophisticatedbackpacks:advanced_compacting_upgrade', [
        ' P ',
        'UBU',
        ' I '
    ], {
        P: 'create:mechanical_press',
        U: 'sophisticatedbackpacks:compacting_upgrade',
        B: 'create:brass_block',
        I: 'create:electron_tube'
    })

    // Advanced Tool Swapper Upgrade
    event.shaped('sophisticatedbackpacks:advanced_tool_swapper_upgrade', [
        ' S ',
        'UTU',
        ' M '
    ], {
        S: 'minecraft:smithing_table',
        U: 'sophisticatedbackpacks:tool_swapper_upgrade',
        T: 'create:precision_mechanism',
        M: 'create:brass_block'
    })

    event.shaped('sophisticatedbackpacks:advanced_deposit_upgrade', [
        ' D ',
        'UBU',
        ' C '
    ], {
        D: 'create:smart_chute',
        U: 'sophisticatedbackpacks:deposit_upgrade',
        B: 'create:brass_block',
        C: 'create:chute'
    })

    event.shaped('sophisticatedbackpacks:advanced_restock_upgrade', [
        ' B ',
        'URU',
        ' C '
    ], {
        B: 'minecraft:barrel',
        U: 'sophisticatedbackpacks:restock_upgrade',
        R: 'create:mechanical_arm',
        C: 'create:brass_block'
    })

    event.shaped('sophisticatedbackpacks:advanced_refill_upgrade', [
        ' G ',
        'URU',
        ' B '
    ], {
        G: 'create:mechanical_arm',
        U: 'sophisticatedbackpacks:refill_upgrade',
        R: 'create:precision_mechanism',
        B: 'create:brass_block'
    })

    // Advanced Pickup Upgrade
    event.shaped('sophisticatedbackpacks:advanced_pickup_upgrade', [
        ' G ',
        'UPU',
        ' R '
    ], {
        G: 'create:deployer',
        U: 'sophisticatedbackpacks:pickup_upgrade',
        P: 'create:precision_mechanism',
        R: 'minecraft:redstone_block'
    })


    event.shapeless('minecraft:slime_ball', [
        'minecraft:green_dye',
        'minecraft:honey_bottle'
    ])
    event.shapeless('minecraft:slime_ball', [
        'minecraft:cactus',
        'minecraft:honey_bottle'
    ])

    event.shapeless("minecraft:crafting_table", [
        '#biomeswevegone:crafting_tables'
    ])
})