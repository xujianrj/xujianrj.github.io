Ext.define("fo.store.GongXiangs", {
    extend: 'Ext.data.Store',
    config: {
        model: 'fo.model.GongXiang',
        data: [
            {id: 1,name:'丁子香', filename: 'resources/images/gongxiang/丁子香.png'},
            {id: 2,name:'丹檀香', filename: 'resources/images/gongxiang/丹檀香.png'},
            {id: 3,name:'沉水香', filename: 'resources/images/gongxiang/沉水香.png'},
            {id: 4,name:'郁金香', filename: 'resources/images/gongxiang/郁金香.png'},
            {id: 5,name:'龙脑香', filename: 'resources/images/gongxiang/龙脑香.png'}
        ]
    }
});
