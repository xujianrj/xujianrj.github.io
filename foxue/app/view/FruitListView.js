Ext.define('fo.view.FruitListView', {
    extend: 'Ext.Container',
    requires: ['fo.model.Fruit'],
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
                store: 'Fruits',
                listeners: {
                    itemsingletap: function (view, index, target, record, e, eOpts){
                            Ext.Viewport.setActiveItem(0);
                            var imageViewLeft = Ext.getCmp('fruitViewInLeft');
                            var imageViewRight = Ext.getCmp('fruitViewInRight');
                            imageViewLeft.setSrc('resources/images/fruit/' + record.get('name') + '.png');
                            imageViewRight.setSrc('resources/images/fruit/' + record.get('name') + '.png');
                        MyAccount.user.fruit=record.get('name');
                        var today=new Date();
                        var expiredTime=new Date();
                        expiredTime.setDate(expiredTime.getDate()+1);
                        MyAccount.user.shangGongExpiredTime=expiredTime;
                        Rest.updateUserSettings(  MyAccount.user);
                        if(Configuration.isFruitSet==false)
                        {
                            Rest.updateUserCredit(5);
                            Configuration.isFruitSet=true;
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
            },
        }
    }
});