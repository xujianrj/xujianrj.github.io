Ext.define('fo.view.XuYuanForm', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number'
    ],
    config: {
        id: 'xuYuanForm',
        style: 'background:#e5d8c0;',
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
                name: 'xuyuan',
                id:'xuYuanText',
                style: 'background:#E0D3B5;height:100%',
                placeHolder:'请写下你的祈愿',
                layout: 'fit',
                id:'xuYuanText',
                height:'1000px',
                clearIcon:false
            },
            {
                id:'xuYuanType',
                xtype:'hiddenfield',
                name:'许愿类型'
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
                        handler: function (btn) {
                            var xuYuanForm = Ext.getCmp('xuYuanForm');
                            xuYuanForm.hide();
                        }
                    },
                    {
                        text: '确定',
						cls: 'btn_enter',
                        handler: function () {
                            var gongde=parseInt(MyAccount.user.gongDe);
                            if(gongde<5)
                            {
                                Rest.showNotice("功德值不足");
                                return;
                            }
                            var content=Ext.getCmp('xuYuanText').getValue();
                            var type=Ext.getCmp('xuYuanType').getValue();
                            Navigation.pushOrActivateView('xuYuanTreeView','fo.view.XuYuanTreeView');
                            var xuYuanUrl=Rest.restServer+'index.php/Home/Biz/xuyuan?uid='
                                +MyAccount.user.user_id+'&content='+content+'&token='+MyAccount.user.dynamic_token
                                +'&type='+type;
                            Rest.updateUserCredit(-5);
                            Ext.Ajax.request({
                                url: xuYuanUrl,
                                success: function(response) {
                                    Ext.getCmp('xuYuanForm').reset();
                                },
                                failure: function() {
                                }
                            });
                            var xuYuanForm = Ext.getCmp('xuYuanForm');
                            xuYuanForm.hide();


                        }
                    }
                ]
            }
        ]
    }
});
