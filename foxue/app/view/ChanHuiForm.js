Ext.define('fo.view.ChanHuiForm', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number'
    ],
    config: {
        id: 'chanHuiForm',
        style:'background:#e5d8c0;',
        modal: true,
        hideOnMaskTap: true,
        enter: 'bottom',
        showAnimation: 'fadeIn',
        exit: 'bottom',
        hideAnimation: 'fadeOut',
        bottom: 0,
        width: '100%',
        height:'50%',
        styleHtmlContent: true,
        scrollable: false,
        items: [
            {
                xtype: 'textareafield',
                id:'chanHuiText',
                name : 'chanHui',
                style: 'background:#E0D3B5;height:100%',
                placeHolder:'请写下你的忏悔',
                layout: 'fit',
                height:'1000px',
                clearIcon:false
            },
            {
                style: 'background:#e5d9c0;',
                xtype: 'container',
                docked: 'top',
                defaults: {
                    xtype: 'button',
                    style: 'margin: .5em'
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        text: '取消',
                        scope: this,
						cls: 'btn_ecs',
                        hasDisabled: false,
                        handler: function(btn){
                            var xuYuanForm=Ext.getCmp('chanHuiForm');
                            xuYuanForm.hide();
                        }
                    },
                    {
                        text: '确定',
						cls: 'btn_enter',
                        handler: function(){
                            var gongde=parseInt(MyAccount.user.gongDe);
                            if(gongde<5)
                            {
                                Rest.showNotice("功德值不足");
                                return;
                            }

                            var chanHuiForm=Ext.getCmp('chanHuiForm');
                            var content=Ext.getCmp('chanHuiText').getValue();
                            var chanHuiUrl=Rest.restServer+'index.php/Home/Biz/chanHui?uid='
                                +MyAccount.user.user_id+'&content='+content+'&token='+MyAccount.user.dynamic_token;
                            Rest.updateUserCredit(-5);
                            Ext.Ajax.request({
                                url: chanHuiUrl,
                                success: function(response) {

                                },
                                failure: function() {
                                }
                            });
//                            var animation = new Ext.Anim({
//                                easing: 'easeIn',
//                                duration: 2500,
//                                autoClear: false,
//                                delay: 200,
//                                from: {
//                                    left: screenWidth / 2 * 3 + 'px',
//                                    top: (screenHeight - 150) + 'px',
//                                    opacity: 1
//                                },
//                                to: {
//                                    left: screenWidth / 2 * 3 + 'px',
//                                    top: (screenHeight - 150) + 'px',
//                                    opacity: 0
//                                },
//                                before: function () {
//                                }
//                            });
//                            animation.run(Ext.get('animalImage2'));
//                            chanHuiForm.showMask();
//                            Ext.Viewport.showMask();
//                            Ext.Viewport.getActiveItem

                            chanHuiForm.reset();
                            chanHuiForm.hide();
                            Navigation.showView('chanHuiFinishView', 'fo.view.ChanHuiFinishView');
                        }
                    }
                ]
            }
        ]
    }
});
