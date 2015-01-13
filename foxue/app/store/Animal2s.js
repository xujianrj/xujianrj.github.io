Ext.define("fo.store.Animal2s", {
    extend: 'Ext.data.Store',
    config: {
        model: 'fo.model.Animal',
        data: [
            {id: 4,name:'牛', filename: 'resources/images/fangsheng/牛.png'},
            {id: 5,name:'羊', filename: 'resources/images/fangsheng/羊.png'}

        ]
    }
});
