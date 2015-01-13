Ext.define('fo.view.HomeView', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        id: 'homeView',
        ui: 'light',
        card: false,
        layout: {
            type: 'fit'
        },
        items: [
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
                        text: '许愿',
                        handler: function () {
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
                        handler: function () {
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
                        handler: function () {
                            Navigation.pushOrActivateView('fangSheng','fo.view.FangShengView');
                        }
                    },
                    {
                        text: '梵呗',
                        handler: function () {
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
                    }
                ]},
            {
                styleHtmlContent: true,
                layout: {
                    type: 'hbox'
                },
                style: {
                    backgroundImage: 'url(resources/images/bgNew.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover'
                },
                items: [
                    {
                        id: 'guangMang',
                        style: 'position:absolute;top:5%;z-index:20;width:50%;height:40%;',
                        xtype: 'image',
                        src: 'resources/images/gm.png'
                    },
                    {
                        id: 'huoYanLeft',
                        style: 'position:absolute;',
                        xtype: 'image',
                        zIndex: 10,
                        src: 'resources/images/huoyan.gif'
                    },
                    {
                        id: 'huoYanRight',
                        style: 'position:absolute;',
                        xtype: 'image',
                        zIndex: 10,
                        src: 'resources/images/huoyan.gif'
                    },
                    {
                        id: 'laZhuLeft',
                        style: 'position:absolute;top:45%;width:10%;height:40%;',
                        xtype: 'image',
                        zIndex: 10,
                        src: 'resources/images/laZhu.png'
                    },
                    {
                        id: 'laZhuRight',
                        zIndex: 10,
                        style: 'position:absolute;top:45%;width:10%;height:40%;',
                        xtype: 'image',
                        src: 'resources/images/laZhu.png'
                    },
                    {
                        id: 'flowerViewInLeft',
                        xtype: 'image',
                        width: '100%',
                        style: 'position:absolute;z-index:10;',
                        src: 'resources/images/huaPingNor.png',
                        listeners: {
                            tap: function () {
                                Navigation.showView('flowerListView', 'fo.view.FlowerListView');
                            }
                        }
                    },
                    {
                        id: 'flowerViewInRight',
                        xtype: 'image',
                        width: '100%',
                        style: 'position:absolute;z-index:10;',
                        src: 'resources/images/huaPingNor.png',
                        listeners: {
                            tap: function () {
                                Navigation.showView('flowerListView', 'fo.view.FlowerListView');
                            }
                        }
                    },
                    {
                        id: 'xiangLuView',
                        xtype: 'image',
                        width: '100%',
                        style: 'position:absolute;z-index:10;',
                        src: 'resources/images/banjian/xiangLuNor.png',
                        listeners: {
                            tap: function () {
                                Navigation.showView('gongXiangView', 'fo.view.GongXiangListView');
                            }
                        }
                    },
                    {
                        id: 'xiangLuAlternateView',
                        xtype: 'image',
                        width: '100%',
                        style: 'position:absolute;z-index:10;',
                        src: 'resources/images/gongxiang/香3.png',
                        listeners: {
                            tap: function () {
                                Navigation.showView('gongXiangView', 'fo.view.GongXiangListView');
                            }
                        }
                    },
                    {
                        id: 'ranDengView',
                        xtype: 'image',
                        width: '100%',
                        style: 'position:absolute;z-index:10;',
                        src: 'resources/images/banjian/ranDeng.png',
                        listeners: {
                            tap: function () {
                                Navigation.showView('lampOilListView', 'fo.view.LampOilListView');
                            }
                        }
                    },
                    {


                        xtype: 'image',
                        width: '100%',
                        zIndex: 9,
                        style: 'position:absolute;background-size:contain;background-position:bottom;',
                        id: 'mainFoImage',
                        src: 'resources/images/foxiangs/12.png',
                        listeners: {
                            tap: function () {
                                Navigation.showView('foxiangList', 'fo.view.InlineDataView');
                            }
                        }


                    },


                    {
                        flex: 75,
                        id: 'leftColumn',
                        frame: false,
                        border: false,
                        bodyStyle: 'background:transparent;',
                        xtype: 'panel',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                id: 'leftColumnFruit',
                                frame: false,
                                border: false,
                                bodyStyle: 'background:transparent;',
                                style: 'margin-left:10px',
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        id: 'fruitViewInLeft',
                                        xtype: 'image',
                                        width: '100%',
                                        style: 'background-position:bottom right;' +
                                            'background-size:contain',
                                        src: 'resources/images/panZiNor.png',
                                        listeners: {
                                            tap: function () {
                                                Navigation.showView('fruitListView', 'fo.view.FruitListView');
                                            }
                                        }
                                    }
                                ]
                            },
                            {

                                flex: 50,
                                frame: false,
                                border: false,
                                html: '',
                                bodyStyle: 'background:transparent;',
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox'
                                }
                            }
                        ]
                    },
                    {
                        flex: 120,
                        frame: false,
                        id: 'middleColumn',
                        border: false,
                        bodyStyle: 'background:transparent;',
                        xtype: 'panel',
                        layout: {
                            type: 'vbox'
                        },
                        items: [


                            {

                                flex: 20,
                                frame: false,
                                border: false,
                                html: '',
                                bodyStyle: 'background:transparent;',
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox'
                                }
                            }
                        ]
                    },
                    {
                        flex: 75,
                        xtype: 'panel',
                        frame: false,
                        border: false,
                        bodyStyle: 'background:transparent;',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                id: 'rightColumnFruit',
                                frame: false,
                                border: false,
                                bodyStyle: 'background:transparent;',
                                style: 'margin-right:10px;',
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        id: 'fruitViewInRight',
                                        xtype: 'image',
                                        width: '100%',

                                        style: 'background-position:bottom right;' +
                                            'background-size:contain',
                                        src: 'resources/images/panZiNor.png',
                                        listeners: {
                                            tap: function () {
                                                Navigation.showView('fruitListView', 'fo.view.FruitListView');
                                            }
                                        }
                                    }
                                ]
                            },
                            {

                                flex: 50,
                                frame: false,
                                border: false,
                                html: '',
                                bodyStyle: 'background:transparent;',
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox'
                                }
                            }
                        ]

                    }
                ]
            }

        ],
        listeners: {
            initialize: function () {

//                Ext.getBody().
                var screenWidth = Ext.Viewport.getWindowWidth();
//                alert(Ext.Viewport.getWindowHeight());
                var timeCount = screenWidth / 640;
                var flowerHeight = 220 * timeCount;
                var flowerTop = 290 * timeCount;
                var flowerLeftX = 20 * timeCount;
                var flowerWidth = 210 * timeCount;
                var flowerViewInLeft = Ext.getCmp('flowerViewInLeft');
                flowerViewInLeft.setHeight(flowerHeight);
                flowerViewInLeft.setTop(flowerTop);
                flowerViewInLeft.setLeft(flowerLeftX);
                flowerViewInLeft.setWidth(flowerWidth);

                var flowerViewInRight = Ext.getCmp('flowerViewInRight');
                flowerViewInRight.setHeight(flowerHeight);
                flowerViewInRight.setTop(flowerTop);
                flowerViewInRight.setLeft(410 * timeCount);
                flowerViewInRight.setWidth(flowerWidth);
                var baseHeightFruit = 640;
                var fruitHeight = baseHeightFruit * timeCount;
                var leftColumnFruit = Ext.getCmp('leftColumnFruit');
                leftColumnFruit.setHeight(fruitHeight);

                var rightColumnFruit = Ext.getCmp('rightColumnFruit');
                rightColumnFruit.setHeight(fruitHeight);


                var mainFoImage = Ext.getCmp('mainFoImage');
                mainFoImage.setHeight(timeCount * 400);
                mainFoImage.setTop(timeCount * 120);
                mainFoImage.setLeft((screenWidth - 300 * timeCount) / 2);
                mainFoImage.setWidth(timeCount * 300);

                var xiangLuView = Ext.getCmp('xiangLuView');
                xiangLuView.setHeight(80 * timeCount);
                xiangLuView.setTop(530 * timeCount);
                xiangLuView.setLeft(290 * timeCount);
                xiangLuView.setWidth(60 * timeCount);

                var ranDengView = Ext.getCmp('ranDengView');
                ranDengView.setHeight(60 * timeCount);
                ranDengView.setTop(600 * timeCount);
                ranDengView.setLeft(290 * timeCount);
                ranDengView.setWidth(60 * timeCount);

                var baseHeightLaZhu = 480;
                var laZhuY = baseHeightLaZhu * timeCount;
                var laZhuHeight = 140 * timeCount;
                var laZhuLeftX = 180 * timeCount;
                var laZhuWidth = 64 * timeCount;
                var laZhuLeft = Ext.getCmp('laZhuLeft');
                laZhuLeft.setHeight(laZhuHeight);
                laZhuLeft.setTop(laZhuY);
                laZhuLeft.setLeft(laZhuLeftX);
                laZhuLeft.setWidth(laZhuWidth);


                var laZhuRightX = 395 * timeCount;
                var laZhuLRight = Ext.getCmp('laZhuRight');
                laZhuLRight.setHeight(laZhuHeight);
                laZhuLRight.setTop(laZhuY);
                laZhuLRight.setLeft(laZhuRightX);
                laZhuLRight.setWidth(laZhuWidth);


                var huoYanY = 446 * timeCount;
                var huoYanWidth = 12 * timeCount;
                var huoYanHeight = 40 * timeCount;
                var huoYanLeft = Ext.getCmp('huoYanLeft');
                huoYanLeft.setHeight(huoYanHeight);
                huoYanLeft.setTop(huoYanY);
                huoYanLeft.setLeft(laZhuLeftX + laZhuWidth / 2 - huoYanWidth / 2);
                huoYanLeft.setWidth(huoYanWidth);

                var huoYanRight = Ext.getCmp('huoYanRight');
                huoYanRight.setHeight(huoYanHeight);
                huoYanRight.setTop(huoYanY);
                huoYanRight.setLeft(laZhuRightX + laZhuWidth / 2 - huoYanWidth / 2);
                huoYanRight.setWidth(huoYanWidth);

                var guangMangHeight = 400 * timeCount;
                var guangMangWidth = 360 * timeCount;
                var guangMangY = 100 * timeCount;
                var guangMang = Ext.getCmp('guangMang');
                guangMang.setWidth(guangMangWidth);
                guangMang.setHeight(guangMangHeight);
                guangMang.setTop(guangMangY);
                guangMang.setLeft((screenWidth - guangMangWidth) / 2);


                var xiangLuAlternateView = Ext.getCmp('xiangLuAlternateView');
                xiangLuAlternateView.hide();
                xiangLuAlternateView.setHeight(140 * timeCount);
                xiangLuAlternateView.setTop(467 * timeCount);
                xiangLuAlternateView.setLeft(278 * timeCount);
                xiangLuAlternateView.setWidth(80 * timeCount);

            },
            painted: function () {
                var guangMang = Ext.getCmp('guangMang');
                var left = Ext.Viewport.getWindowWidth() / 2 - guangMang.element.dom.clientWidth / 2;
                guangMang.setLeft(left);

            }

        }




    }



});


