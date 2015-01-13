Ext.define("fo.store.Fruits", {
    extend: 'Ext.data.Store',
    config: {
        model: 'fo.model.Fruit',
        data: [
            {id: 1,name:'水蜜桃', filename: 'resources/images/fruit/水蜜桃.png'},
            {id: 2,name:'苹果', filename: 'resources/images/fruit/苹果.png'},
            {id: 3,name:'葡萄', filename: 'resources/images/fruit/葡萄.png'},
            {id: 4,name:'金桔', filename: 'resources/images/fruit/金桔.png'},
            {id: 5,name:'香蕉', filename: 'resources/images/fruit/香蕉.png'},
            {id: 6,name:'鲜荔枝', filename: 'resources/images/fruit/鲜荔枝.png'}

        ]
    }
});
