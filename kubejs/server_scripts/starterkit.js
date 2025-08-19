console.info('Starter Kit Loading')
PlayerEvents.loggedIn(event => {
    let data = event.player.persistentData
    if (!data.gotStarterKit) {
        data.gotStarterKit = true
        event.server.runCommandSilent(
            `loot give ${event.player.username} loot cad:chests/starter_kit`
        )
        console.info('Starter Kit Given')
    }
    console.info('Starter Kit Loaded')
})
