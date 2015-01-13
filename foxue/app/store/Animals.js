Ext.define("fo.store.Animals", {
    extend: 'Ext.data.Store',
    config: {
        model: 'fo.model.Animal',
        data: [
            {id: 1,name:'鱼', filename: 'resources/images/fangsheng/鱼.png'},
            {id: 2,name:'乌龟', filename: 'resources/images/fangsheng/乌龟.png'},
            {id: 3,name:'鸟', filename: 'resources/images/fangsheng/鸟.png'}
        ]
    }
});
