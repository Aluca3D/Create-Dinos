console.info('Loaded Custom Blocks')
StartupEvents.registry('block', event => {
  event.create('nh_sticker', 'cardinal')
    .displayName('Nett Hier Sticker')
    .noCollision()
    .notSolid()
    .renderType("cutout")
    .fullBlock(false)
    .soundType('lily_pad')
    .hardness(0.2)
    .model('cad:blocks/nh_sticker')
    .property(BlockProperties.WATERLOGGED)
    .box(16, 2, 14, 0, 12, 16);
})