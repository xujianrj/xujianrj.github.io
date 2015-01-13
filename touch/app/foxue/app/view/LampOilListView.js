Ext.define('fo.view.LampOilListView', {
    extend: 'Ext.Container',
    requires: ['fo.model.LampOil'],
    config: {
        layout: 'fit',
        styleHtmlContent: true,
        hideOnMaskTap: true,
        modal: true,
        top: 0,
        width: '100%',
        height: '100%',
        items: [
            {
                xtype: 'dataview',
                scrollable: true,
                inline: true,
                cls: 'dataview-inline absolutePos',
                itemTpl: '<div class="img" style="background-image: url({filename});background-size:contain;"></div><div class="foxueListItem">{name}</div>',
                store: 'LampOils',
                listeners: {
                    itemsingletap: function (view, index, target, record, e, eOpts) {
                        Ext.Viewport.setActiveItem(0);
                        var imageInHome = Ext.getCmp('ranDengView');
                        imageInHome.setSrc('resources/images/banjian/ranDeng-oil.png');
                        if (Configuration.isGongDeSet == false) {
                            var expiredTime = new Date();
                            expiredTime.setDate(expiredTime.getDate() + 1);
                            MyAccount.user.shangGongExpiredTime = expiredTime;
                            MyAccount.user.ranDeng='true';
                            Rest.updateUserSettings(MyAccount.user);
                            Rest.updateUserCredit(5);
                            Configuration.isGongDeSet = true;
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
        listeners: {
            initialize: function () {
                var self = this;
                setTimeout(function () {
                    self.hide();
                }, 100);
                this.element.on('tap', function () {
                    this.hide();
                }, this);
            }
        }
    }
});