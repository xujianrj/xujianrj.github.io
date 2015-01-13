Ext.define('fo.view.FlowerListView', {
    extend: 'Ext.Container',
    requires: ['fo.model.Flower'],
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
                cls:'absolutePos',
                xtype: 'dataview',
                scrollable: true,
                inline: true,
                cls: 'dataview-inline',
                itemTpl: '<div class="img" style="background-image: url({filename});background-size:contain;"></div><div class="foxueListItem">{name}</div>',
                store: 'Flowers',
                listeners: {
                    itemsingletap: function (view, index, target, record, e, eOpts){
                            Ext.Viewport.setActiveItem(0);
                            var imageViewLeft = Ext.getCmp('flowerViewInLeft');
                            var imageViewRight = Ext.getCmp('flowerViewInRight');
                            imageViewLeft.setSrc('resources/images/flower/' + record.get('name') + '.png');
                            imageViewRight.setSrc('resources/images/flower/' + record.get('name') + '.png');
                        MyAccount.user.flower=record.get('name');
                        var expiredTime=new Date();
                        expiredTime.setDate(expiredTime.getDate()+1);
                        MyAccount.user.shangGongExpiredTime=expiredTime;
                        Rest.updateUserSettings(  MyAccount.user);
                       if(Configuration.isFlowerSet==false)
                       {
                           Rest.updateUserCredit(5);
                           Configuration.isFlowerSet=true;
                       }


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