Ext.define('fo.view.InlineDataView', {
    extend: 'Ext.Container',
    requires: ['fo.model.FoXiang'],
    config: {
        layout: 'fit',
        styleHtmlContent: true,
        hideOnMaskTap:true,
        modal:true,
        top: 0,
        width: '100%',
        height:'100%',
        items: [
            {
                zIndex:100,
                xtype: 'dataview',
                scrollable: true,
                inline: true,
                cls: 'dataview-inline absolutePos',
                itemTpl: '<div class="img" style="background-image: url({filename});background-size:contain;"></div><div class="foxueListItem">{name}</div>',
                store: 'FoXiangs',
                listeners: {
                    itemsingletap: function (view, index, target, record, e, eOpts){
                            Ext.Viewport.setActiveItem(0);
                            var imageFoImage = Ext.getCmp('mainFoImage');
                        var screenWidth = Ext.Viewport.getWindowWidth();
                        var timeCount = screenWidth / 640;
                        var guangMangY = 90 * timeCount;
                        if( record.get('id')=="13")
                        {
                            guangMangY=140*timeCount;
                        }
                        var guangMang = Ext.getCmp('guangMang');
                        guangMang.setTop(guangMangY);
                            imageFoImage.setSrc('resources/images/foxiangs/' + record.get('id') + '.png');

                        MyAccount.user.foxiang=record.get('id');
                        var expiredTime=new Date();
                        expiredTime.setDate(expiredTime.getDate()+1);
                        MyAccount.user.shangGongExpiredTime=expiredTime;
                        Rest.updateUserSettings(  MyAccount.user);
                    }
                }
            },
            {
                docked: 'bottom',
                xtype: 'toolbar',
                items: [
                    {
                        text: '返回', handler: function () {
                    } }
                ]
            }


        ],
        listeners:{
            initialize:function(){
                var self=this;
                setTimeout(function(){self.hide();},100);
                this.element.on('tap', function(){
                    this.hide();
                }, this);
            }
        }
    }
});