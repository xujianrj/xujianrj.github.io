Ext.define("MedicalHome.store.Topics", {
    extend: 'Ext.data.Store',
    alias: 'store.Discussions',
    config: {
        model: 'MedicalHome.model.Discussion',
        sorters: 'hospitalName',
        data: [
            {doctorName: '李学旺教授', hospitalName: '阜外心血管医院', content: '这是一次关于肾病专科的讲座', isPro: true,
                responseCount: 10, agreeCount: 20, favCount: 10, shareCount: 2},
            {doctorName: '李学旺教授', hospitalName: '阜外心血管医院', content: '这是一次关于肾病专科的讲座', isPro: true,
                responseCount: 10, agreeCount: 20, favCount: 10, shareCount: 2},
            {doctorName: '李学旺教授', hospitalName: '阜外心血管医院', content: '这是一次关于肾病专科的讲座', isPro: true,
                responseCount: 10, agreeCount: 20, favCount: 10, shareCount: 2},
            {doctorName: '胡大一教授', hospitalName: '北京协和医院', content: '这是一次关于全科专科的讲座', isPro: true,
                responseCount: 10, agreeCount: 20, favCount: 10, shareCount: 2}
        ]
    }
});
