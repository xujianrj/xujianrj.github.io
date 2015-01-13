Ext.define('fo.view.Settings', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: '我的设置',
                defaults: {
                    labelWidth: '50%'
                },
                items: [
                    {
                        id: 'usernameText',
                        xtype: 'textfield',
                        name: 'name',
                        label: '用户',
                        placeHolder: '在这里显示你的用户名',
                        autoCapitalize: true,
                        readOnly: true,
                        clearIcon: true
                    },
                    {
                        id: 'myGongDeText',
                        xtype: 'textfield',
                        name: 'gongde',
                        label: '我的功德',
                        placeHolder: '0',
                        autoCapitalize: true,
                        readOnly: true,
                        clearIcon: true
                    },
                    {
                        id: 'enableNoticeField',
                        xtype: 'togglefield',
                        name: 'enableNotice',
                        label: '启用通知'
                    },
                    Ext.create('Ext.ux.field.TimePicker', {
                        id: 'zaoTime',
                        destroyPickerOnHide: true,
                        name: 'zaoTime',
                        label: '早课时间',
                        picker: {
                            doneButton: "确认",
                            cancelButton: "取消"
                        },
                        value: new Date()
                    }),
                    Ext.create('Ext.ux.field.TimePicker', {
                        id: 'wanTime',
                        destroyPickerOnHide: true,
                        name: 'wanTime',
                        label: '晚课时间',
                        picker: {

                            doneButton: "确认",
                            cancelButton: "取消",
                            slotOrder: ['hour', 'minute', 'meridiem']
                        },
                        value: new Date()
                    })
                ]
            },
            {
                xtype: 'container',
                defaults: {
                    xtype: 'button',
                    cls: 'settingButtonCls'
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        text: '保存',
                        handler: function () {
                            var zaoTime = Ext.getCmp('zaoTime');
                            var wanTime = Ext.getCmp('wanTime');
                            var zaoTimeHours = zaoTime.getValue().getHours() < 10 ? "0" + zaoTime.getValue().getHours() : zaoTime.getValue().getHours();
                            var wanTimeHours = wanTime.getValue().getHours() < 10 ? "0" + wanTime.getValue().getHours() : wanTime.getValue().getHours();
                            var zaoTimeMinutes = zaoTime.getValue().getMinutes() < 10 ? "0" + zaoTime.getValue().getMinutes() : zaoTime.getValue().getMinutes();
                            var wanTimeMinutes = wanTime.getValue().getMinutes() < 10 ? "0" + wanTime.getValue().getMinutes() : wanTime.getValue().getMinutes();
                            MyAccount.user.zanKeNotifyTime = zaoTimeHours + ":" + zaoTimeMinutes;
                            MyAccount.user.wanKeNotifyTime = wanTimeHours + ":" + wanTimeMinutes;
                            var enableNotice = Ext.getCmp('enableNoticeField').getValue();
                            MyAccount.user.enableNotice = enableNotice;
                            Rest.updateUserSettings(MyAccount.user);
                            Navigation.popBack();
                        }
                    },
                    {
                        text: '返回',
                        handler: function () {
                            Navigation.popBack();
                        }
                    }
                ]
            }
        ],
        listeners: {
            painted: function () {
                var user = Ext.create('fo.model.User', {
                    name: MyAccount.user.username,
                    gongde: MyAccount.user.gongDe
                });
                var form = Ext.getCmp('myGongDe');
                form.setRecord(user);
                var zaoTime = Ext.getCmp('zaoTime');
                var wanTime = Ext.getCmp('wanTime');
                if (MyAccount.user.zanKeNotifyTime != null && MyAccount.user.zanKeNotifyTime != '') {
                    var zaoTimeArray = MyAccount.user.zanKeNotifyTime.split(":");
                    var zanTimeDateValue = new Date();
                    zanTimeDateValue.setHours(zaoTimeArray[0]);
                    zanTimeDateValue.setMinutes(zaoTimeArray[1]);
                    zaoTime.setValue(zanTimeDateValue);
                }
                if (MyAccount.user.wanKeNotifyTime != null && MyAccount.user.wanKeNotifyTime != '') {
                    var wanTimeArray = MyAccount.user.wanKeNotifyTime.split(":");
                    var wanTimeDateValue = new Date();
                    wanTimeDateValue.setHours(wanTimeArray[0]);
                    wanTimeDateValue.setMinutes(wanTimeArray[1]);
                    wanTime.setValue(wanTimeDateValue);
                }
                Ext.getCmp('enableNoticeField').setValue(MyAccount.user.enableNotice == "\u0001"||MyAccount.user.enableNotice == "1" ? 1 : 0);
            }
        }
    }
});
