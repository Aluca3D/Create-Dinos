console.info('Loaded Custom Items')
StartupEvents.registry('item', event => {

  event.create('cad_coin')
    .maxStackSize(64)
    .texture('cad:item/cad_coin')

  event.create('incomplete_compas')
    .maxStackSize(1)
    .texture('cad:item/incomplete_compas')

  event.create('incomplete_ender_eye')
    .maxStackSize(1)
    .texture('cad:item/incomplete_ender_eye')
})