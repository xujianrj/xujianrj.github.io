Ext.define('fo.view.ChanHuiFinishView', {
    extend: 'Ext.Container',
    config: {
        layout: 'fit',
//        styleHtmlContent: true,
//        hideOnMaskTap:true,
        modal:true,
        cls:'chanHuiFinishView',
        top: 0,
//        style:'background-color:white;opacity:0',
        width: '100%',
        height:'100%',
        items: [

            {
                zIndex:100,
                cls:'absolutePos',
                scrollable: true,
                inline: true,
                items:[
                    {
                        style:'color:#777;font-size:30px;',
                        centered:true,
                        html:'诚心悔过，净化你的罪恶'
                    }
//                    ,
//                    {
//                        xtype: 'img',
//                        src: 'resources/images/chanHuiFinish.png',
//                        id: 'chanHuiHuoYanImage',
//                        modal: true,
//                        top:'40%',
//                        centered:true,
//                        bottom: 10,
//                        left: '25%',
//                        height: 48,
//                        width: 48,
//                        listeners:{
//                            tap:function(){
//                            }
//                        }
//                    }
                ]
            }
        ],
        listeners:{
            initialize:function(){
            },
            painted:function(){
                var animation = new Ext.Anim({
                    easing: 'easeIn',
                    duration: 6000,
                    autoClear: true,
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 0.8
                    }
                    ,
                    before: function () {
                        Ext.getCmp('chanHuiFinishView').setHidden(false);
                    },
                    after:function(){
                        Ext.getCmp('chanHuiFinishView').setHidden(true);

                    }
                });
                if(!Ext.getCmp('chanHuiFinishView').getMasked())
                {
                    Ext.getCmp('chanHuiFinishView').setMasked()
                }
                animation.run(Ext.get('chanHuiFinishView'));
            }
        }
    }
});