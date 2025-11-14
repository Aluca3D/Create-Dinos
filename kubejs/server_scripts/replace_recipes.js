console.info('Replace Recipes')
ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'cgs:gunpowder' },
        'cgs:charcoal_dust',
        'createnuclear:coal_dust'
    )
});