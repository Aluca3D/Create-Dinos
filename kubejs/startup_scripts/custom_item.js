console.info('Loaded Custom Items')
StartupEvents.registry('item', event => {

  event.create('cad_coin')
    .maxStackSize(64)
    .texture('cad:item/cad_coin') // This texture would be located at kubejs/assets/cad/textures/item/cad_coin.png

  event.create('incomplete_compas')
    .maxStackSize(1)
    .texture('cad:item/incomplete_compas')

    event.create('treasure_coin')
    .maxStackSize(64)
    .texture('cad:item/treasure_coin')
})