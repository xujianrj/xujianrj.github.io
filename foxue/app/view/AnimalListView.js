Ext.define('fo.view.AnimalListView', {
    extend: 'Ext.Container',
    requires: ['fo.model.Animal'],
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
                zIndex: 100,
                xtype: 'dataview',
                scrollable: true,
                inline: true,
                cls: 'dataview-inline absolutePos',
                itemTpl: '<div class="img" style="background-image: url({filename});background-size:contain;"></div><div class="foxueListItem">{name}</div>',
                store: 'Animals',
                listeners: {
                    itemsingletap: function (view, index, target, record, e, eOpts) {
                        var screenHeight = Ext.Viewport.getWindowHeight() - 100;
                        var screenWidth = Ext.Viewport.getWindowWidth();
                        var imageInHome = Ext.getCmp('animalImage');
                        var animation = new Ext.Anim({
                            easing: 'easeIn',
                            duration: 8000,
                            autoClear: false,
                            delay: 200,
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
                                var imageInHomeStart = Ext.getCmp('animalImage');
                                imageInHomeStart.show();
                            },
                            after: function () {
                            }
                        });
                        imageInHome.setSrc('resources/images/fangsheng/' + record.get('name') + '.gif');
                        imageInHome.setStyle('-moz-transform:rotate(45deg); -webkit-transform:rotate(45deg);');
                        if (record.get('name') == '鸟') {
                            animation = new Ext.Anim({
                                easing: 'easeIn',
                                duration: 8000,
                                autoClear: false,
                                delay: 200,
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
                                    var imageInHomeStart = Ext.getCmp('animalImage');
                                    imageInHomeStart.show();
                                },
                                after: function () {
                                }
                            });
                            imageInHome.setStyle('-moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);');
                        }
                        animation.run(Ext.get('animalImage'));
                        Rest.updateUserCredit(20);
                    }
                }
            }


        ],
        listeners: {
            initialize: function () {
                this.element.on('tap', function () {
                    this.hide();
                }, this);
            }
        }
    }
});