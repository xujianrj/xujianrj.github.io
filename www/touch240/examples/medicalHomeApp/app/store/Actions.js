Ext.define("MedicalHome.store.Actions", {
    extend: 'Ext.data.Store',
    config: {
        model: 'MedicalHome.model.Action',
        sorters: 'hospitalName',
        data: [
            {name: '可能认识的人（23）', action:'gotoOneLeverFriend' },
            {name: '管理医脉 （88）', action:'gotoOneLeverFriend' },
            {name: '发现二度医脉（19）', action:'gotoOneLeverFriend' },


            {name: '我的影响力', action:'gotoOneLeverFriend' },

        ]
    }
});
