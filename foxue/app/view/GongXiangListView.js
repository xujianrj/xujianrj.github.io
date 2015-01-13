Ext.define('fo.view.GongXiangListView', {
    extend: 'Ext.Container',
    requires: ['fo.model.GongXiang'],
    config: {
        layout: 'fit',
        hideOnMaskTap:true,
        modal:true,
        top: 0,
        width: '100%',
        height:'100%',
        styleHtmlContent: true,
        items: [
            {
                zIndex:100,
                xtype: 'dataview',
                scrollable: true,
                inline: true,
                cls: 'dataview-inline absolutePos',
                itemTpl: '<div class="img" style="background-image: url({filename});background-size:contain;"></div><div class="foxueListItem">{name}</div>',
                store: 'GongXiangs',
                listeners: {
                    itemsingletap: function (view, index, target, record, e, eOpts){
                        var xiangLuAlternateView = Ext.getCmp('xiangLuAlternateView');
                        xiangLuAlternateView.show();
                        var imageFoImage = Ext.getCmp('xiangLuView');
                        imageFoImage.hide();
                        if(Configuration.isGongXiangSet==false)
                        {
                            var expiredTime=new Date();
                            expiredTime.setDate(expiredTime.getDate()+1);
                            MyAccount.user.shangGongExpiredTime=expiredTime;
                            MyAccount.user.gongXiang='true';
                            Rest.updateUserSettings(  MyAccount.user,true);
                            Rest.updateUserCredit(5);
                            Configuration.isGongXiangSet=true;
                        }
                        Ext.Viewport.setActiveItem(0);
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