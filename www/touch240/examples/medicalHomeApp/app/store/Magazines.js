Ext.define("MedicalHome.store.Magazines", {
    extend: 'Ext.data.Store',
    alias: 'store.Magazines',
    config: {
        model: 'MedicalHome.model.Discussion',
        sorters: 'hospitalName',
        data: [
            {doctorName: '高润霖', hospitalName: '一月份杂志', content: 'EHRA/ESC 心脏起搏器和心脏再同步治疗', isPro: true,
                responseCount: 10, agreeCount: 20, favCount: 10, shareCount: 2},
            {doctorName: '曾学军', hospitalName: '二月份杂志', content: '脊柱关节病的治疗', isPro: true,
                responseCount: 10, agreeCount: 20, favCount: 10, shareCount: 2}
        ]
    }
});
