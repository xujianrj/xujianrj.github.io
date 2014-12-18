Ext.define("MedicalHome.store.Contacts", {
    extend: 'Ext.data.Store',
    alias: 'store.Discussions',
    config: {
        model: 'MedicalHome.model.Contact',
        sorters: 'hospitalName',
        data: [
            {firstName: '高', lastName:'润霖' },
            {firstName: '曾', lastName:'学军'}
        ]
    }
});
