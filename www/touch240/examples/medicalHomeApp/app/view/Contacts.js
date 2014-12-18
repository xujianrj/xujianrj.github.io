    Ext.define('MedicalHome.view.Contacts', {
        xtype:'Contacts',
        id:'contacts',
    extend: 'Ext.Container',
    requires: ['MedicalHome.model.Contact'],
    config: {
        fullscreen:true,
        layout: 'fit',
        cls: 'ks-basic',
        items: [{
            xtype: 'dataview',
            scrollable: {
                direction: 'vertical'
            },

            cls: 'dataview-basic',
            itemTpl: '<div class="img" style="background-image: url({photo});"></div>' +
                '<div class="content"><div class="name">{firstName} {lastName}</div>' ,
            store: 'Contacts'
        }]
    }
});
