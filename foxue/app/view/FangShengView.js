Ext.define('fo.view.FangShengView', {
    extend: 'Ext.Container',

    requires: [
        'Ext.carousel.Carousel'
    ],

    config: {
        id: 'fangSheng',
        cls: 'cards',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [

            {
                id: 'fangshengCarouselView',
                xtype: 'carousel',
                indicator:false,
                items: [
                    {
                        cls: 'card',
                        style: {
                            backgroundImage: 'url(resources/images/fangsheng/chitang.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top left',
                            backgroundSize: 'cover'
                        },
                        items: [
                            {
                                xtype: 'img',
                                src: 'resources/icons/right.png',
                                id: 'rightNavigation',
                                modal: true,
                                top: 20,
                                right: 0,
                                height: 48,
                                width: 100,
                                listeners: {
                                    tap: function () {
                                        var fangshengCarouselView = Ext.getCmp('fangshengCarouselView');
                                        fangshengCarouselView.next();
                                    }
                                }
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/鸟.png',
                                id: 'animalNiao',
                                modal: true,
                                bottom: 10,
                                left: '20%',
                                height: 48,
                                width: 50,
                                listeners: {
                                    tap: function () {
                                        var screenHeight = Ext.Viewport.getWindowHeight() - 100;
                                        var screenWidth = Ext.Viewport.getWindowWidth();
                                        var imageInHome = Ext.getCmp('animalImage1');
                                        imageInHome.setSrc('resources/images/fangsheng/鸟.gif');
                                            animation = new Ext.Anim({
                                                easing: 'easeIn',
                                                duration: 8000,
                                                autoClear: true,
                                                delay: 500,
                                                from: {
                                                    left: '-100px',
                                                    top: 0,
                                                    opacity: 1
                                                },
                                                to: {
                                                    left: screenWidth + 'px',
                                                    top: 0,
                                                    opacity: 0
                                                },
                                                before: function () {
                                                    var imageInHomeStart = Ext.getCmp('animalImage1');
                                                    imageInHomeStart.show();
                                                },
                                                after: function () {
                                                    var imageInHomeStart = Ext.getCmp('animalImage1');
                                                    imageInHomeStart.hide();
                                                }
                                            });
                                            imageInHome.setStyle('-moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);');
                                        animation.run(Ext.get('animalImage1'));
                                        Rest.updateUserCredit(20);
                                    }
                                }
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/乌龟.png',
                                id: 'animalWuGui',
                                modal: true,
                                bottom: 10,
                                left: '44%',
                                height: 48,
                                width: 50,
                                listeners: {
                                    tap: function () {
                                        var screenHeight = Ext.Viewport.getWindowHeight() - 100;
                                        var screenWidth = Ext.Viewport.getWindowWidth();
                                        var imageInHome = Ext.getCmp('animalImage2');
                                        var animation = new Ext.Anim({
                                            easing: 'easeIn',
                                            duration: 8000,
                                            autoClear: false,
                                            delay: 500,
                                            from: {
                                                left: '-100px',
                                                top: screenHeight + 'px',
                                                opacity: 1
                                            },
                                            to: {
                                                left: screenWidth + 'px',
                                                top: screenHeight / 2 + 'px',
                                                opacity: 0
                                            },
                                            before: function () {
                                                var imageInHomeStart = Ext.getCmp('animalImage2');
                                                imageInHomeStart.show();
                                            },
                                            after: function () {
                                            }
                                        });
                                        imageInHome.setSrc('resources/images/fangsheng/乌龟.gif');
                                        imageInHome.setStyle('-moz-transform:rotate(45deg); -webkit-transform:rotate(45deg);');
                                        animation.run(Ext.get('animalImage2'));
                                        Rest.updateUserCredit(20);
                                    }
                                }
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/鱼.png',
                                id: 'animalYu',
                                modal: true,
                                bottom: 10,
                                right: '20%',
                                height: 48,
                                width: 50,
                                listeners: {
                                    tap: function () {
                                        var screenHeight = Ext.Viewport.getWindowHeight() - 100;
                                        var screenWidth = Ext.Viewport.getWindowWidth();
                                        var imageInHome = Ext.getCmp('animalImage3');
                                        var animation = new Ext.Anim({
                                            easing: 'easeIn',
                                            duration: 8000,
                                            autoClear: false,
                                            delay: 500,
                                            from: {
                                                left: '-100px',
                                                top: screenHeight + 'px',
                                                opacity: 1
                                            },
                                            to: {
                                                left: screenWidth + 'px',
                                                top: screenHeight / 2 + 'px',
                                                opacity: 0
                                            },
                                            before: function () {
                                                var imageInHomeStart = Ext.getCmp('animalImage3');
                                                imageInHomeStart.show();
                                            },
                                            after: function () {
                                            }
                                        });
                                        imageInHome.setSrc('resources/images/fangsheng/鱼.gif');
                                        imageInHome.setStyle('-moz-transform:rotate(45deg); -webkit-transform:rotate(45deg);');
                                        animation.run(Ext.get('animalImage3'));
                                        Rest.updateUserCredit(20);
                                    }
                                }
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/鸟.gif',
                                style: '-moz-transform:rotate(45deg); -webkit-transform:rotate(45deg);',
                                id: 'animalImage1',
                                modal: true,
                                height: 100,
                                width: 100,
//                                left:-100,
                                bottom: 0,
                                hidden: true
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/乌龟.gif',
                                style: '-moz-transform:rotate(45deg); -webkit-transform:rotate(45deg);',
                                id: 'animalImage2',
                                modal: true,
                                height: 100,
                                width: 100,
                                bottom: 0,
                                hidden: true
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/鱼.gif',
                                style: '-moz-transform:rotate(45deg); -webkit-transform:rotate(45deg);',
                                id: 'animalImage3',
                                modal: true,
                                height: 100,
                                width: 100,
                                bottom: 0,
                                hidden: true
                            },

                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/牛.gif',
                                id: 'animalImage4',
                                modal: true,
                                height: 90,
                                width: 150,
                                bottom: 0,
                                hidden: true
                            },

                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/羊.gif',
                                id: 'animalImage5',
                                modal: true,
                                height: 90,
                                width: 150,
                                bottom: 0,
                                hidden: true
                            }
                        ]
                    },
                    {
                        html: '',
                        cls: 'card',
                        style: {
                            backgroundImage: 'url(resources/images/fangsheng/muchang.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom left',
                            backgroundSize: 'cover'
                        },
                        items: [
                            {
                                xtype: 'img',
                                src: 'resources/icons/left.png',
                                id: 'leftNavigation',
                                modal: true,
                                top: 20,
                                height: 48,
                                width: 100,
                                listeners: {
                                    tap: function () {
                                        var fangshengCarouselView = Ext.getCmp('fangshengCarouselView');
                                        fangshengCarouselView.previous();
                                    }
                                }
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/牛.png',
                                id: 'animalNiu',
                                modal: true,
                                bottom: 10,
                                left: '25%',
                                height: 48,
                                width: 50,
                                listeners: {
                                    tap: function () {
                                        var screenHeight = Ext.Viewport.getWindowHeight() - 100;
                                        var screenWidth = Ext.Viewport.getWindowWidth();
                                        var imageInHome = Ext.getCmp('animalImage4');
                                        var animation = new Ext.Anim({
                                            easing: 'easeIn',
                                            duration: 2500,
                                            autoClear: false,
                                            delay: 500,
                                            from: {
                                                left: screenWidth / 4*5 + 'px',
                                                top: (screenHeight - 150) + 'px',
                                                opacity: 1
                                            },
                                            to: {
                                                left: screenWidth / 4 *5 + 'px',
                                                top: (screenHeight - 150) + 'px',
                                                opacity: 0
                                            },
                                            before: function () {
                                                var imageInHomeStart = Ext.getCmp('animalImage4');
                                                imageInHomeStart.show();
                                            },
                                            after: function () {
                                                var imageInHomeStart = Ext.getCmp('animalImage4');
                                                imageInHomeStart.setSrc('resources/images/fangsheng/羊.gif');
                                            }
                                        });
                                        imageInHome.setSrc('resources/images/fangsheng/牛.gif');
                                        imageInHome.setStyle('-moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);');
                                        animation.run(Ext.get('animalImage4'));
                                        Rest.updateUserCredit(20);
                                    }
                                }
                            },
                            {
                                xtype: 'img',
                                src: 'resources/images/fangsheng/羊.png',
                                id: 'animalYang',
                                modal: true,
                                bottom: 10,
                                right: '25%',
                                height: 48,
                                width: 50,
                                listeners: {
                                    tap: function () {
                                        var screenHeight = Ext.Viewport.getWindowHeight() - 100;
                                        var screenWidth = Ext.Viewport.getWindowWidth();
                                        var imageInHome = Ext.getCmp('animalImage5');
                                        var animation = new Ext.Anim({
                                            easing: 'easeIn',
                                            duration: 5000,
                                            autoClear: false,
                                            delay: 500,
                                            from: {
                                                left: screenWidth / 2 * 3 + 'px',
                                                top: (screenHeight - 150) + 'px',
                                                opacity: 1
                                            },
                                            to: {
                                                left: screenWidth / 2 * 3 + 'px',
                                                top: (screenHeight - 150) + 'px',
                                                opacity: 0
                                            },
                                            before: function () {
                                                var imageInHomeStart = Ext.getCmp('animalImage5');
                                                imageInHomeStart.show();
                                            }
                                        });
                                        imageInHome.setSrc('resources/images/fangsheng/羊.gif');
                                        imageInHome.setStyle('-moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);');
                                        animation.run(Ext.get('animalImage5'));
                                        Rest.updateUserCredit(20);
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: {
            initialize: function () {
            }
        }
    }
});
