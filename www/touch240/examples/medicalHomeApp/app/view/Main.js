Ext.define('MedicalHome.view.Main', {
    extend: 'Ext.tab.Panel',
//    extend: 'Ext.Carousel',
    xtype: 'Main',
    id: 'mainTabPanel',
    config: {
        fullscreen: true,
//        indicator:false,
        ui: 'light',
        tabBar: {
            ui: 'light',
            layout: {
                pack: 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        scrollable: false,
        listeners: {

        },
        items: [
//            {
//                xtype: 'toolbar',
//                ui: 'neutral',
//                docked: 'bottom',
//                scrollable: null,
//                defaults: {
//                    ui: 'plain'
//                },
//                items: [
//                    {baseCls: 'none', iconCls: 'home',  text: '医生会',
//                        cls: 'x-tab x-tab-normal x-iconalign-left x-tab-icon x-layout-box-item x-stretched x-tab-active' },
//                    {baseCls: 'none', iconCls: 'organize', text: '医脉', badgeText: '1',
//                        cls: 'x-tab x-tab-normal x-iconalign-left x-tab-icon x-layout-box-item x-stretched x-tab' },
//                    {baseCls: 'none', iconCls: 'locate', text: '诊所',
//                        cls: 'x-tab x-tab-normal x-iconalign-left x-tab-icon x-layout-box-item x-stretched x-tab' },
//                    {baseCls: 'none', iconCls: 'user',  text: '我',
//                        cls: 'x-tab x-tab-normal x-iconalign-left x-tab-icon x-layout-box-item x-stretched x-tab' }
//                ],
//                layout: {
//                    pack: 'center',
//                    align: 'center'
//                }
//            },
            {
                title: '医生会',
                xtype: 'News',
                id: 'mainTab1',
                iconCls: 'home',
                cls: 'card'
            },
            {
                title: '医脉',
                id: 'mainTab2',
                xtype: 'Friends',
                cls: 'card',
                iconCls: 'organize'
            },
            {
                title: '诊所',
                xtype: 'Clinic',
                cls: 'card dark',
                iconCls: 'locate'
            },
            {
                title: '我',
                xtype: 'Me',
                cls: 'card',
                iconCls: 'user'
            }
        ]
    }
});
