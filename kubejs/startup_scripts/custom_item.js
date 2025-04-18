console.info('Loaded Custom Items')
StartupEvents.registry('item', event => {

  event.create('cad_coin')
    .maxStackSize(64)
    .texture('cad:item/cad_coin')

  event.create('incomplete_compas')
    .maxStackSize(1)
    .texture('cad:item/incomplete_compas')

  event.create('incomplete_treasure_coin')
    .maxStackSize(1)
    .texture('cad:item/incomplete_treasure_coin')

  event.create('treasure_coin')
    .maxStackSize(64)
    .texture('cad:item/treasure_coin')

  event.create('upgradet_treasure_coin')
    .maxStackSize(64)
    .texture('cad:item/upgradet_treasure_coin')

  event.create('incomplete_upgradet_treasure_coin')
    .maxStackSize(1)
    .texture('cad:item/incomplete_upgradet_treasure_coin')
})