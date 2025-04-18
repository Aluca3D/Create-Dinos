ItemEvents.rightClicked('kubejs:treasure_coin', (event) => {
    const { item, server, player, level } = event;

    if (!player || level.isClientSide()) return;

    switch (Math.floor(Math.random() * 12)) {
        case 0: {
            bad_luck(level, player, "Uh oh... the undead rise!");
            spawn(player, server, [
                'minecraft:zombie',
                'minecraft:skeleton',
                'minecraft:creeper',
                'minecraft:witch',
                'minecraft:enderman'
            ], Math.floor(Math.random() * 5) + 1);
            give_effect(player, [
                { id: 'minecraft:poison', duration: 200, amplifier: 1 },
                { id: 'minecraft:slowness', duration: 400, amplifier: 1 }

            ]);
            break;
        }
        case 1: {
            good_luck(level, player, "A stroke of good fortune!");
            give_item(server, player, [
                'minecraft:diamond',
                'minecraft:golden_apple',
                'minecraft:ender_pearl',
                "minecraft:emerald",
            ], Math.floor(Math.random() * 3) + 1);
            break;
        }
        case 3: {
            good_luck(level, player, "You’ve found more coins!");
            give_item(server, player, ['kubejs:treasure_coin'], Math.floor(Math.random() * 6) + 1);
            break;
        }
        case 4: {
            bad_luck(level, player, "You feel dizzy...");
            give_effect(player, [
                { id: 'minecraft:nausea', duration: 200, amplifier: 1 },
                { id: 'minecraft:levitation', duration: 20, amplifier: 10 }
            ]);
            break;
        }
        case 5: {
            player.tell("And nothing happend...");
            break;
        }
        case 6: {
            good_luck(level, player, "You uncover a hidden treasure chest!");
            give_item(server, player, [
                Item.of('lootr:lootr_barrel', '{BlockEntityTag:{ForgeData:{},LootTable:"minecraft:chests/simple_dungeon"},RepairCost:0,display:{Name:\'{"text":"Simple Dungeon"}\'}}'),
                Item.of('lootr:lootr_barrel', '{BlockEntityTag:{ForgeData:{},LootTable:"minecraft:chests/buried_treasure"},RepairCost:0,display:{Name:\'{"text":"Buried Treasure"}\'}}'),
                Item.of('lootr:lootr_barrel', '{BlockEntityTag:{ForgeData:{},LootTable:"minecraft:chests/desert_pyramid"},RepairCost:0,display:{Name:\'{"text":"Desert Pyramid"}\'}}'),
                Item.of('lootr:lootr_barrel', '{BlockEntityTag:{ForgeData:{},LootTable:"minecraft:chests/ruined_portal"},RepairCost:0,display:{Name:\'{"text":"Ruined Portal"}\'}}'),
                Item.of('lootr:lootr_barrel', '{BlockEntityTag:{ForgeData:{},LootTable:"minecraft:chests/jungle_temple"},RepairCost:0,display:{Name:\'{"text":"Jungle Temple"}\'}}'),
                Item.of('lootr:lootr_barrel', '{BlockEntityTag:{ForgeData:{},LootTable:"minecraft:chests/underwater_ruin_big"},RepairCost:0,display:{Name:\'{"text":"Underwater Ruin"}\'}}')
            ], 1)
            break;
        }
        case 7: {
            bad_luck(level, player, "Hell's forces arise");
            spawn(player, server, ['minecraft:ghast', 'minecraft:blaze'], Math.floor(Math.random() * 3) + 1);
            break;
        }
        case 8: {
            good_luck(level, player, "A magical force empowers you!");
            give_effect(player, [
                { id: 'minecraft:strength', duration: 400, amplifier: 2 },
                { id: 'minecraft:speed', duration: 400, amplifier: 2 },
                { id: "minecraft:health_boost", duration: 600, amplifier: 4 }
            ]);
            break;
        }
        case 9: {
            good_luck(level, player, "You feel the wind in your favor!");
            give_effect(player, [
                { id: 'minecraft:jump_boost', duration: 600, amplifier: 1 },
                { id: 'minecraft:fire_resistance', duration: 600, amplifier: 0 }
            ]);
            break;
        }
        case 10: {
            bad_luck(level, player, "You feel a cold chill...");
            give_effect(player, [
                { id: 'minecraft:weakness', duration: 300, amplifier: 2 },
                { id: 'minecraft:blindness', duration: 300, amplifier: 2 }
            ]);
            break;
        }
        case 11: {
            good_luck(level, player, "A mysterious force protects you!");
            give_effect(player, [
                { id: 'minecraft:regeneration', duration: 600, amplifier: 1 },
                { id: 'minecraft:resistance', duration: 600, amplifier: 1 }
            ]);
            break;
        }
    }

    server.scheduleInTicks(2, () => {
        player.addItemCooldown(item, 10);
        item.count--;
    });
});

const give_effect = (player, effects) => {
    const effect = effects[Math.floor(Math.random() * effects.length)];

    const id = effect.id;
    const duration = Math.floor(effect.duration);
    const amplifier = Math.floor(effect.amplifier);

    player.potionEffects.add(id, duration, amplifier, false, false);
};

const give_item = (server, player, items, amount) => {
    for (let i = 0; i < amount; i++) {
        let item = items[Math.floor(Math.random() * items.length)];
        server.scheduleInTicks(2, (c) => {
            player.give(item);
        });
    }
};

const spawn = (player, server, mobs, amount, nbt) => {
    for (let i = 0; i < amount; i++) {
        server.scheduleInTicks(2, (c) => {
            const mobId = mobs[Math.floor(Math.random() * mobs.length)];
            const x = player.x + (Math.random() * 10) - (Math.random() * 10);
            const y = player.y + (Math.random() * 2);
            const z = player.z + (Math.random() * 10) - (Math.random() * 10);
            if (nbt) {
                server.runCommandSilent(`summon ${mobId} ${Math.floor(x.toFixed(1))} ${Math.floor(y.toFixed(1))} ${Math.floor(z.toFixed(1))} ${nbt}`);
            } else {
                server.runCommandSilent(`summon ${mobId} ${Math.floor(x.toFixed(1))} ${Math.floor(y.toFixed(1))} ${Math.floor(z.toFixed(1))}`);
            }
        });
    }
};

const good_luck = (level, player, text) => {
    level.playSound(null, player.x, player.y, player.z, "minecraft:entity.arrow.hit_player", 'master', 1, 2);
    if (text) player.tell(text);
};

const bad_luck = (level, player, text) => {
    level.playSound(null, player.x, player.y, player.z, "minecraft:entity.lightning_bolt.impact", 'master', 1, 2);
    if (text) player.tell(text);
};
