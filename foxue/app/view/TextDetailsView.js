
Ext.define('fo.view.TextDetailsView', {
    extend: 'Ext.Panel',
    setChangShiUrl:function(url){
        var html='<iframe id="frame" name="frame" src="'+url+'" frameborder="0" width="100%" height="10000px"/>';
        Ext.getCmp('changShiDetails').setHtml(html);
    },
    config: {
        scrollable:'false',
        layout:'fit',
        items:[
            {
                xtype: 'toolbar',
                ui: 'light',
                layout: {
                    pack: 'left',
                    align: 'left'
                },
                docked: 'top',
//                scrollable: {
//                    direction: 'horizontal',
//                    indicators: false
//                },
                items: [
                    {
                        text: '上一级',
                        style:'color:white',
                        handler: function () {
                            var mainFoView = Ext.getCmp('mainFoView');
                            mainFoView.pop(1);
                        }
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        id:'textTitle',
                        ui:'plain',
                        style:'color:white'
                    },
                    {
                        xtype: 'spacer'
                    }

                ]},
            {
                'xtype':'panel',
                layout:'fit',
                id:'changShiDetails',
//                scroll : false,
//                scrollable:false,
//                html:'<iframe id="frame" name="frame" src="http://rufodao.qq.com/a/20140509/048100.htm" width="100%" height=100%/>'
            }
        ]


    }



});