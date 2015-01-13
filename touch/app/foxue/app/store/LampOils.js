Ext.define("fo.store.LampOils", {
    extend: 'Ext.data.Store',
    config: {
        model: 'fo.model.LampOil',
        data: [
            {id: 1,name:'大豆油', filename: 'resources/images/lampOil/大豆油.png'},
            {id: 2,name:'纯酥油', filename: 'resources/images/lampOil/纯酥油.png'},
            {id: 3,name:'芝麻油', filename: 'resources/images/lampOil/芝麻油.png'},
            {id: 4,name:'菜籽油', filename: 'resources/images/lampOil/菜籽油.png'}
        ]
    }
});
