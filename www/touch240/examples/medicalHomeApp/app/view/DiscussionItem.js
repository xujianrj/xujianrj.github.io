// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA ITEM

Ext.define('MedicalHome.view.DiscussionItem', {
    extend: 'Ext.dataview.component.DataItem',
    alias: 'widget.mydataitem',
    config: {
        padding: 10,
        layout: {
            type: 'vbox'
        },
        defaults: {
        },
        items: [
            {
                html: 'DoctorName :xxxx <br/>xxxxx'
            },
            {
                xtype:'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'download',
                        cls:'iconButton'
                    },
                    {
                        xtype: 'button',
                        cls:'iconButton',
                        iconCls: 'favorites'
                    },
                    {
                        xtype: 'button',
                        cls:'iconButton',
                        iconCls: 'home'
                    }
                ]
            }

        ]
    },
    updateRecord: function (record) {
        var me = this;
//        me.down('button').setText(record.get('val1'));
//        me.down('#textCmp').setHtml(record.get('val2'));
        me.callParent(arguments);
    }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA VIEW
//
//Ext.define('MyDataView', {
//    extend: 'Ext.dataview.DataView',
//    config: {
//        defaultType: 'mydataitem',
//        useComponents: true
//    }
//});
//
//// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! RUN
//
//Ext.create('MyDataView', {
//    fullscreen: true,
//    store: Ext.create('TestStore')
//});
