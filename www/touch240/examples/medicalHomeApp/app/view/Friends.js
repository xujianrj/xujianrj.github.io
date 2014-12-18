Ext.define('MedicalHome.view.Friends', {
    extend: 'Ext.Container',
    xtype: 'Friends',
    requires: ['MedicalHome.model.Contact'],
    config: {
        layout: 'fit',
        defaults: {
            scrollable: true
        },
        cls: 'demo-list',
        items: [
            {
                xtype: 'toolbar',
                ui: 'neutral',
                docked: 'top',
                scrollable: null,
                defaults: {
//                    ui: 'plain'
                },
                items: [
                    {
                        id: 'contactButton',
                        html: '通讯录'},
                    {
                        id: 'workmateButton',
                        html: '同事同行'},
                    {
                        id: 'inviteDoctorButton',
                        html: '邀请医生'}
                ],
                layout: {
                    pack: 'center',
                    align: 'center'
                }
            },
            {
                xtype: 'list',
                itemTpl: '<div class="img" style="background-image: url({photo});"></div>' +
                    '<div class="content"><div class="name" action="{action}">{name}</div>',
                store: 'Actions',
                onItemDisclosure: function (record, btn, index) {
                    Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
                }
            }
        ]
    }
});
//
//Ext.define('MedicalHome.view.Friends', {
//    extend: 'Ext.Container',
//    xtype: 'Friends',
//    requires: ['MedicalHome.model.Contact'],
//    config: {
//        layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
//            type: 'vbox',
//            align: 'center',
//            pack: 'center'
//        },
//        cls: 'demo-list',
//        items: [{
//            width: Ext.os.deviceType == 'Phone' ? null : '50%',
//            height: Ext.os.deviceType == 'Phone' ? null : '80%',
//            xtype: 'list',
//            onItemDisclosure: function(record, btn, index) {
//                Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
//            },
//            itemTpl:
//                '<div class="content"><div class="name" action="{action}">{name}</div>',
//            store: 'Actions'
//        }]
//    }
//});
