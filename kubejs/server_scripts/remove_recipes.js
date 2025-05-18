console.info('Removed Recipes')
ServerEvents.recipes(event => {
    const upgrades = [
        'upgrade_base',
        'pickup_upgrade',
        'filter_upgrade',
        'feeding_upgrade',
        'auto_smelting_upgrade',
        'magnet_upgrade',
        'compacting_upgrade',
        'void_upgrade',
        'restock_upgrade',
        'tool_swapper_upgrade',
        'smelting_upgrade',
        'blasting_upgrade',
        'smoking_upgrade',
        'deposit_upgrade',
        'stonecutter_upgrade',
        'refill_upgrade',
        'advanced_void_upgrade',
        'advanced_magnet_upgrade',
        'advanced_feeding_upgrade',
        'auto_smelting_upgrade',
        'auto_blasting_upgrade',
        'auto_smoking_upgrade',
        'advanced_compacting_upgrade',
        'advanced_tool_swapper_upgrade',
        "advanced_deposit_upgrade",
        "advanced_restock_upgrade",
        "advanced_refill_upgrade",
        'advanced_pickup_upgrade'
    ]

    upgrades.forEach(upgrade => {
        event.remove({ output: `sophisticatedbackpacks:${upgrade}` })
    })

    const immersive_aircraft = [
        "airship",
        "biplane",
        "propeller",
        'warship',
        'hull',
        'engine',
        'sail',
        'boiler',
        'quadrocopter',
        'enhanced_propeller',
        'eco_engine',
        'nether_engine',
        'steel_boiler',
        'industrial_gears',
        'sturdy_pipes',
        'gyroscope',
        'hull_reinforcement',
        'improved_landing_gear',
        'bomb_bay',
        'rotary_cannon'
    ]

    immersive_aircraft.forEach(immersive => {
        event.remove({ output: `immersive_aircraft:${immersive}` })
    })

    event.remove({ output: "constructionwand:infinity_wand" })
    event.remove({ output: "naturescompass:naturescompass" })
    event.remove({ output: "explorerscompass:explorerscompass" })
})