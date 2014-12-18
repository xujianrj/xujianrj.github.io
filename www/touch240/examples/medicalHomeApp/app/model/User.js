Ext.require('MedicalHome.model.Order', function() {
    Ext.define('MedicalHome.model.User', {
        extend: 'Ext.data.Model',
        config: {
            fields: ['id', 'name'],
            hasMany: {
                model: 'MedicalHome.model.Order',
                name: 'orders'
            },
            proxy: {
                type: 'ajax',
                url : 'userData.json'
            }
        }
    });
});
