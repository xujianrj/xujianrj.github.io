Ext.define('MedicalHome.view.FullContainer', {
    extend: 'Ext.navigation.View',
    xtype:'FullContainer',
    id:'globalNav',

    config: {
        fullscreen:true,
        scrollable:false,
//        navigationBar:true,
        navigationBar: {
            docked: 'top',

            items:[ {
                xtype: 'button',
                id: 'navAddButton',
//                hidden: true,
                iconCls:'add',
                align: 'right',
                right:20,
                top:8,
                ui: 'action',
                action: 'viewSource'
            },
                {
                    xtype: 'spacer'
                }
            ]
        },
//        layout: 'fit',
        items:[

            {
                title:'医生会',
                xtype: 'Main'
            }
        ]
    }
});
