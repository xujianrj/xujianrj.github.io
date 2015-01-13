Ext.define('fo.view.AnimalList2View', {
    extend: 'Ext.Container',
    requires: ['fo.model.Animal'],
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
                store: 'Animal2s',
                listeners: {
                    itemsingletap: function (view, index, target, record, e, eOpts){
                        var screenHeight=Ext.Viewport.getWindowHeight()-100;
                        var screenWidth=Ext.Viewport.getWindowWidth();
                        var imageInHome = Ext.getCmp('animalImage2');
                            var animation = new Ext.Anim({
                                easing: 'easeIn',
                                duration: 5000,
                                autoClear: false,
                                delay:200,
                                from: {
                                    left:screenWidth/2*3+'px',
                                    top:(screenHeight-50)+'px',
                                    opacity:1
                                },
                                to:{
                                    left:screenWidth/2*3+'px',
                                    top:(screenHeight-50)+'px',
                                    opacity:0
                                },
                                before:function(){
                                    var imageInHomeStart = Ext.getCmp('animalImage2');
                                    imageInHomeStart.show();
                                }
                            });
                        if(record.get('name')=='牛')
                        {
                            animation=new Ext.Anim({
                                easing: 'easeIn',
                                duration: 2500,
                                autoClear: false,
                                delay:200,
                                from: {
                                    left:screenWidth/2*3+'px',
                                    top:(screenHeight-50)+'px',
                                    opacity:1
                                },
                                to:{
                                    left:screenWidth/2*3+'px',
                                    top:(screenHeight-50)+'px',
                                    opacity:0
                                },
                                before:function(){
                                    var imageInHomeStart = Ext.getCmp('animalImage2');
                                    imageInHomeStart.show();
                                },
                                after:function(){
                                }
                            });
                        }
                        imageInHome.setSrc('resources/images/fangsheng/' + record.get('name') + '.gif');
                        imageInHome.setStyle('-moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);');
                        animation.run(Ext.get('animalImage2'));
                        Rest.updateUserCredit(20);

                    }
                }
            }


        ],
        listeners:{
            initialize:function(){
                this.element.on('tap', function(){
                    this.hide();
                }, this);
            }
        }
    }
});