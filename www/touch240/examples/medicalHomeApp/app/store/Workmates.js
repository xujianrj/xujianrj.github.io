Ext.define("MedicalHome.store.Workmates", {
    extend: 'Ext.data.Store',
    config: {
        model: 'MedicalHome.model.Workmate',
        sorters: 'hospitalName',
        grouper: function(record) {
            return record.get('department');
        },
        data: [
            {firstName: '高', lastName:'润霖' ,department:'内科'},
            {firstName: '高', lastName:'润霖' ,department:'内科'},
            {firstName: '高', lastName:'润霖' ,department:'内科'},
            {firstName: '高', lastName:'润霖' ,department:'产科'},
            {firstName: '高', lastName:'润霖' ,department:'产科'},
            {firstName: '高', lastName:'润霖' ,department:'耳鼻喉科'},
            {firstName: '高', lastName:'润霖' ,department:'内科'},
            {firstName: '曾', lastName:'学军',department:'耳鼻喉科'},
            {firstName: '曾', lastName:'学军',department:'妇科'},
            {firstName: '曾', lastName:'学军',department:'妇科'},
            {firstName: '曾', lastName:'学军',department:'皮肤科'},
            {firstName: '曾', lastName:'学军',department:'皮肤科'},
            {firstName: '曾', lastName:'学军',department:'内科'},

        ]
    }
});
