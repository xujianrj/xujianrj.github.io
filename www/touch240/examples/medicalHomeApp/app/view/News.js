Ext.define('MedicalHome.view.News', {
//    extend: 'Ext.tab.Panel',
    extend: 'Ext.Carousel',
    xtype: 'News',
    config: {
        layout: 'fit',
        indicator: false,
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                ui: 'neutral',
                docked: 'top',
                id: 'yiShengHuiToolBar',
                scrollable: null,
                defaults: {
                    ui: 'plain'
                },
                items: [
                    {
                        text: '研讨', cls: 'activeItem', id: 'newsSection1',
                        listeners: {
                            tap: function () {
                                Ext.getCmp('mainTab1').setActiveItem(0);
                            }
                        }
                    },
                    {  text: '讲座', id: 'newsSection2',
                        listeners: {
                            tap: function () {
                                Ext.getCmp('mainTab1').setActiveItem(1);
                            }
                        }
                    },
                    { text: '月刊', id: 'newsSection3',
                        listeners: {
                            tap: function () {
                                Ext.getCmp('mainTab1').setActiveItem(2);
                            }
                        }
                    }
                ],
                layout: {
                    pack: 'center',
                    align: 'center'
                }
            },
            {
                xtype: 'PullDownList',
                index: 0,

                cls: 'card'
            },
            {
                xtype: 'Topic',
                cls: 'card',
                index: 1
            },
            {
                xtype: 'Magazine',
                cls: 'card',
                index: 2
            }
        ],

        listeners: {
            activeitemchange: function (aa, newItem, oldItem) {
                var index = this.getActiveIndex();
                var yiShengHuiToolBar = Ext.getCmp('yiShengHuiToolBar');
                yiShengHuiToolBar.getItems().getAt(index).setCls('activeItem');
                yiShengHuiToolBar.getItems().getAt(oldItem.config.index).removeCls('activeItem');

            }
        }
    }
});


