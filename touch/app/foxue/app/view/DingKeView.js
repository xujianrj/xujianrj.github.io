Ext.define('fo.view.DingKeView', {
    extend: 'Ext.tab.Panel',

    config: {
        ui: 'dark',
        tabBar: {
            ui: 'dark',
            layout: {
                pack: 'center'
            }
        },
        activeTab: 1,
        items: [
            {
                id:'tab1',
                title: '计数',
                layout: {
                    type: 'fit'
                },
                items: [
                    Ext.create('fo.view.NianFoCountView', {id: 'nianFoCountView'})
                ]
            },
            {
                id:'tab2',
                title: '计时',
                layout: {
                    type: 'fit'
                },
                items: [
                    Ext.create('fo.view.NianFoTimeView', {id: 'nianFoTimeView'})
                ]
            },
            {
                id:'tab3',
                title: '早晚课',
                layout: {
                    type: 'fit'
                },
                items: [
                    Ext.create('fo.view.ZaoWanKeView', {id: 'zaoWanKeView'})
                ]
            }
        ],
        listeners:{
            painted: function(panel) {
                Ext.getCmp('dingKeView').setActiveItem( parseInt(MyAccount.user.dingKePageIndex));
                var restRrl = Rest.restServer + 'index.php/Home/Notice/finishDingKeById?openid=' + MyAccount.user.wechat_openid;
                Ext.Ajax.request({
                    url: restRrl,
                    success: function (response) {
                    },
                    failure: function () {
                    }
                });
            },
            activeitemchange:function( self, value, oldValue, eOpts )
            {
                var activeIndex=0;
                switch (value.id){
                    case "tab1":
                        activeIndex=0;
                        break;
                    case "tab2":
                        activeIndex=1;
                        break;
                    case "tab3":
                        activeIndex=2;
                        break;
                    default :
                        activeIndex=0;
                        break;
                }
//               var activeIndex= self.items.findIndex('id', value.id);
                MyAccount.user.dingKePageIndex =activeIndex;
                Rest.updateUserSettings(MyAccount.user, true);

            },
            tap:function(){

            }

        }
    }
});




