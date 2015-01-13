Ext.define('fo.view.MainView', {
    extend: 'Ext.navigation.View',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        autoDestroy:false,
        id: 'mainFoView',
        ui: 'light',
        layout: {
            type: 'card',
            animation: {
                type: 'fade',
                duration: 500
            }
        },
        navigationBar: false,
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center',
                align: 'center'
            },
            scrollable: {
                direction: 'horizontal',
                indicators: false
            }
        },
        items: [
            Ext.create('fo.view.HomeView'),
            {
                xtype: 'toolbar',
                ui: 'light',
                layout: {
                    pack: 'center',
                    align: 'center'
                },
                docked: 'bottom',
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },
                items: [
                    {
                        text: '首页',
                        handler: function () {
                            var mainFoView = Ext.getCmp('mainFoView');
                            var homeView=Ext.getCmp('homeView');
                            mainFoView.pop(mainFoView.getItems().length - 1);
                            mainFoView.setActiveItem(homeView);
                            if(Ext.getCmp('xuYuanForm'))
                            {
                                Ext.getCmp('xuYuanForm').hide();
                            }
                            if(Ext.getCmp('chanHuiForm'))
                            {
                                Ext.getCmp('chanHuiForm').hide();
                            }
                        }
                    },
                    {
                        text: '上供',
                        handler: function () {
                            Ext.Viewport.removeMenu('bottom');
                            var mainFoView = Ext.getCmp('mainFoView');
                            Ext.Viewport.setMenu(mainFoView.menuForOperate('bottom'), {
                                side: 'bottom',
                                cover: true
                            });
                            Ext.Viewport.toggleMenu('bottom');
                        }
                    },
                    {
                        text: '定课',
                        handler: function () {
                            Navigation.pushOrActivateView('dingKeView','fo.view.DingKeView');
                        }
                    },
                    {
                        text: '常识',
                        handler: function () {
                            var mainFoView = Ext.getCmp('mainFoView');
                            var view =Ext.getCmp('changShiView');
                            if(view==null){
                                var view = Ext.create('fo.view.BasicList',{id:'changShiView'});
                                mainFoView.push(view);
                            }
                            else{
                                mainFoView.setActiveItem(view);
                            }
                        }
                    },
                    {
                        text: '设置',
                        handler: function () {
                            Navigation.pushOrActivateView('myGongDe','fo.view.Settings');
                        }
                    }
                ]}

        ]
    },
    doSetHidden: function (hidden) {
        this.callParent(arguments);

        if (hidden) {
            Ext.Viewport.removeMenu('left');
            Ext.Viewport.removeMenu('right');
            Ext.Viewport.removeMenu('bottom');
            Ext.Viewport.removeMenu('top');
        } else {
//            Ext.Viewport.setMenu(this.menuForSide('top'), {
//                side: 'top'
//            });
//
//            Ext.Viewport.setMenu(this.menuForSide('bottom'), {
//                side: 'bottom',
//
//                cover: true
//            });
//
//            Ext.Viewport.setMenu(this.menuForSide('left'), {
//                side: 'left',
//                cover: true
//            });
//
//            Ext.Viewport.setMenu(this.menuForSide('right'), {
//                side: 'right',
//                reveal: true
//            });
        }
    },
    menuForOperate:function(side){
        var items = [
            {
                text: '佛像',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    Navigation.goHome();
                    Navigation.showView('foxiangList', 'fo.view.InlineDataView');
                }
            },
            {
                text: '献花',
                scope: this,
                handler: function () {

                    Ext.Viewport.hideMenu(side);
                    Navigation.goHome();
                    Navigation.showView('flowerListView', 'fo.view.FlowerListView');
                }
            },
            {
                text: '献果',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    Navigation.goHome();
                    Navigation.showView('fruitListView', 'fo.view.FruitListView');
                }
            },
            {
                text: '上香',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    Navigation.goHome();
                    Navigation.showView('gongXiangView', 'fo.view.GongXiangListView');
                }
            },
            {
                text: '供灯',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    Navigation.goHome();
                    Navigation.showView('lampOilListView', 'fo.view.LampOilListView');
                }
            }
        ];

        var className = 'Ext.Menu';
        if (Ext.theme.name == "Blackberry") {
            if (['top', 'bottom'].indexOf(side) != -1) {
                className = 'Ext.ux.ApplicationMenu';
            } else {
                className = 'Ext.ux.ContextMenu';
            }
        }
        if(Ext.getCmp('operateMenu')!=null){
            return Ext.getCmp('operateMenu');
        }
        else
        {
        return Ext.create(className, {
            items: items,
            listeners:{
                painted:function(){
                    Ext.select('div.x-mask').addCls('fo')
                },
                hide:function(){
                    Ext.select('div.x-mask').removeCls('fo')
                }
            },
            id:'operateMenu'
        });
        }
    },
    menuForFo: function (side) {
        var items = [
            {
                text: '许愿',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    var mainFoView = Ext.getCmp('mainFoView');
                    var chanHuiForm = Ext.getCmp('chanHuiForm');
                    if (chanHuiForm != null) {
                        chanHuiForm.hide();
                    }
                    Navigation.showView('xuYuanSelectorView','fo.view.XuYuanSelectorView');
                }
            },
            {
                text: '忏悔',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    var mainFoView = Ext.getCmp('mainFoView');
                    var view = Ext.getCmp('chanHuiForm');
                    var xuYuanForm = Ext.getCmp('xuYuanForm');
                    if (xuYuanForm != null) {
                        xuYuanForm.hide();
                    }
                    if (view == null) {
                        view = Ext.create('fo.view.ChanHuiForm');
                        mainFoView.push(view);
                    }
                    else {
                        view.show();
                    }
                }
            },
            {
                text: '放生',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    Navigation.pushOrActivateView('fangSheng','fo.view.FangShengView');
                }
            },
            {
                text: '梵呗',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    var mainFoView = Ext.getCmp('mainFoView');
                    var view = Ext.getCmp('fanBai');
                    if(view==null)
                    {
                        view= Ext.create('fo.view.FanBai');
                        Ext.Viewport.add(view);
                    }
                    else{
                    }
                    Ext.Viewport.setActiveItem(view);
                }
            },
            {
                text: '定课',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    Navigation.pushOrActivateView('dingKeView','fo.view.DingKeView');
                }
            }

        ];

        var className = 'Ext.Menu';
        if (Ext.theme.name == "Blackberry") {
            if (['top', 'bottom'].indexOf(side) != -1) {
                className = 'Ext.ux.ApplicationMenu';
            } else {
                className = 'Ext.ux.ContextMenu';
            }
        }

        return Ext.create(className, {
            items: items
        });
    },

    menuForBaike: function (side) {
        var items = [
            {
                text: '寺庙参访',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    Navigation.pushOrActivateView('shiMiaoView','fo.view.ShiMiaoListView');
                }
            },
            {
                text: '常用经典',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    var mainFoView = Ext.getCmp('mainFoView');
                    Navigation.pushOrActivateView('foJingListView','fo.view.FoJingListView')
                }
            },
            {
                xtype: 'button',
                text: '佛学常识',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    var mainFoView = Ext.getCmp('mainFoView');
                    var view =Ext.getCmp('changShiView');
                    if(view==null){
                        var view = Ext.create('fo.view.BasicList',{id:'changShiView'});
                        mainFoView.push(view);
                    }
                    else{
                        mainFoView.setActiveItem(view);
                    }
                }
            }
        ];

        var className = 'Ext.Menu';
        if (Ext.theme.name == "Blackberry") {
            if (['top', 'bottom'].indexOf(side) != -1) {
                className = 'Ext.ux.ApplicationMenu';
            } else {
                className = 'Ext.ux.ContextMenu';
            }
        }
        if(Ext.getCmp('baikeMenu')!=null){
            return Ext.getCmp('baikeMenu');
        }
        else{
            return Ext.create(className, {
            items: items,
            id:'baikeMenu',
            listeners:{
                painted:function(){
                    Ext.select('div.x-mask').addCls('fo')
                },
                hide:function(){
                    Ext.select('div.x-mask').removeCls('fo')
                }
            }
        });
        }
    }



});


