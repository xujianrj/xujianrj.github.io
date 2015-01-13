Ext.define("fo.store.Flowers", {
    extend: 'Ext.data.Store',
    config: {
        model: 'fo.model.Flower',
        data: [
            {id: 1,name:'地涌金莲', filename: 'resources/images/flower/地涌金莲.png'},
            {id: 2,name:'文殊兰', filename: 'resources/images/flower/文殊兰.png'},
            {id: 3,name:'缅桂花', filename: 'resources/images/flower/缅桂花.png'},
            {id: 4,name:'荷花', filename: 'resources/images/flower/荷花.png'},
            {id: 5,name:'鸡蛋花', filename: 'resources/images/flower/鸡蛋花.png'},
            {id: 6,name:'黄姜花', filename: 'resources/images/flower/黄姜花.png'}
        ]
    }
});
