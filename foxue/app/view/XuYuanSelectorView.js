
Ext.define('fo.view.XuYuanSelectorView', {
    extend: 'Ext.Container',
    config: {
        styleHtmlContent: true,
        layout: {
            type: 'vbox'
        },
        styleHtmlContent: true,
        hideOnMaskTap:true,
        modal:true,
        top: 0,
        width: '100%',
        height:'100%',
        items: [
            {
                flex:1,
                layout:'hbox'
            },
            {
                flex:1,
                layout:'hbox',
                items:[
                    {
                        layout:'vbox',
                        flex:1
                    },
                    {
                        width:60,
                        height:60,
                        layout:'hbox',
                        xtype:'image',
                        src:'resources/images/xuyuan/xuyuan.png',
                        listeners:{
                            tap:function(){
                                Navigation.popBack();
                                Navigation.pushOrShowView('xuYuanForm','fo.view.XuYuanForm');
                                Ext.getCmp('xuYuanType').setValue('许愿');
                            }
                        }
                    },
                    {
                        layout:'vbox',
                        width:40
                    },
                    {
                        width:60,
                        height:60,
                        layout:'hbox',
                        xtype:'image',
                        src:'resources/images/xuyuan/chaodu.png',
                        listeners:{
                            tap:function(){
                                Navigation.popBack();
                                Navigation.pushOrShowView('xuYuanForm','fo.view.XuYuanForm');
                                Ext.getCmp('xuYuanType').setValue('超度');
                            }
                        }
                    },
                    {
                        layout:'vbox',
                        flex:1
                    }
                ]
            },

            {
                flex:1,
                layout:'hbox'
            }

        ],
        listeners:{
            initialize:function(){
                this.element.on('tap', function(){
                    this.hide();
                }, this);
            }
        }
    }


});