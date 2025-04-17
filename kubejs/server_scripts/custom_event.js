ItemEvents.rightClicked('treasure_coin', (event) => {
    const { item, server, player, level, hand } = event;

    if (!player || level.isClientSide()) return;

    level.playSound(null, player.x, player.y, player.z, "minecraft:entity.lightning_bolt.impact", 'master', 1, 2)

    switch (Math.floor(Math.random() * 5)) {
        case 0:
            const mobs = ['minecraft:zombie', 'minecraft:skeleton', 'minecraft:creeper', 'minecraft:witch'];
            let rNumbI = Math.floor(Math.random() * 5) + 1;
            while (rNumbI > 0) {
                server.scheduleInTicks(2, (c) => {
                    const mobId = mobs[Math.floor(Math.random() * mobs.length)];
                    server.runCommandSilent(`summon ${mobId} ${player.x + (Math.random() * 10) - (Math.random() * 10)} ${player.y + (Math.random() * 2)} ${player.z + (Math.random() * 10) - (Math.random() * 10)}`);
                });
                rNumbI = rNumbI - 1;
            }
            player.tell('Uh oh... something’s coming!');
            break;
        case 1:
            const items = ['minecraft:diamond', 'minecraft:golden_apple', 'minecraft:ender_pearl', 'minecraft:totem_of_undying'];
            const reward = items[Math.floor(Math.random() * items.length)];
            player.give(reward);
            player.tell(`You got lucky! Here's a ${reward}`);
            break;
        case 2:
            player.potionEffects.add('minecraft:levitation', 10, 20, false, false);
            player.tell("Wheee!");
            break;
        case 3:
            let rNumb = Math.floor(Math.random() * 5) + 1;
            while (rNumb > 0) {
                player.tell(rNumb);
                server.scheduleInTicks(2, (c) => {
                    player.give("kubejs:treasure_coin");
                });
                rNumb = rNumb - 1;
            }
            player.tell("Have a few more coins!");
            break;
        case 4:
            player.potionEffects.add('minecraft:nausea', 200, 1, false, false);
            player.tell("You're feeling dizzy...");
            break;
        default:
            break;
    }

    player.addItemCooldown(item, 10)

    server.scheduleInTicks(2, (c) => {
        item.count--;
    });
});
