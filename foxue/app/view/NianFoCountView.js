Ext.define('fo.view.NianFoCountView', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        ui: 'light',
        card: false,
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                ui: 'light',
                docked: 'top',
                items: [
                    {
                        xtype: 'segmentedbutton',
                        allowDepress: true,
                        id: 'optionSelector',
                        style: 'margin-left:10px',
                        items: [
                            {
                                text: '正数',
                                id: 'buttonZheng',
                                pressed: true
                            },
                            {
                                text: '倒数',
                                id: 'buttonDao'
                            }
                        ],
                        listeners: {
                            toggle: function (container, button, pressed) {
                                if (pressed) {
                                    Configuration.isAddNianFoCount = button.id == 'buttonZheng';
                                    MyAccount.user.isZhengShuPage= Configuration.isAddNianFoCount?'1':'0';
                                    Rest.updateUserSettings(MyAccount.user,true);
                                    var addButtonText = "<img src='resources/images/add.png' style='height:128px' /><br/>增加次数";
                                    var subtractionText = "<img src='resources/images/delete.png' style='height:128px' /><br/>减少次数";
                                    var actualText = Configuration.isAddNianFoCount ? addButtonText : subtractionText;
                                    Ext.getCmp('recordButton').setHtml(actualText);
                                    if (!Configuration.isAddNianFoCount) {
                                        Ext.getCmp('nianFoTotalCount').setValue(Configuration.nianFoCount);
                                        Ext.getCmp('countContentPanel').setHtml(Configuration.nianFoCount + '次');
//                                        Ext.getCmp('countContentPanel').setHtml(Configuration.totalNianFoCountSetting + '次');
                                    }
                                    else {
                                        Configuration.nianFoCount = 0;
                                        Ext.getCmp('countContentPanel').setHtml(Configuration.nianFoCount + '次');
                                    }
                                    Ext.getCmp('totalCountSettings').setHidden(Configuration.isAddNianFoCount);
                                }

                            }
                        }
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: '清除',
                        ui: 'action',
                        listeners: {
                            tap: function () {
                                Configuration.nianFoCount = 0;
                                Ext.getCmp('countContentPanel').setHtml(Configuration.nianFoCount + '次');
                            }
                        }
                    }
                ]
            },
            {
                layout: {
                    type: 'vbox'
                },
                items: [

                    {
                        height: 80,
                        style: 'background-color:#b4b4b4;',
                        layout: {
                            type: 'hbox'
                        },
                        items: [

                            {
                                flex: 1,
                                style: 'font-size:40px;text-align:center;margin-top:20px;background-color:#b4b4b4;',
                                id: 'countContentPanel',
                                html: '0000次',
                                layout: {type: 'vbox'  }
                            }
                        ]
                    },
                    {
                        height: 60,
                        id: 'totalCountSettings',
                        hidden:true,
                        style: 'border-top:1px solid #666;background-color:#b4b4b4;',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                style:'background-color:#b4b4b4;',
                                id: 'nianFoTotalCount',
                                xtype: 'textfield',
                                label: '念佛次数',
                                labelWidth:'40%',
//                                labelCls:'',
                               clearIcon:false,
                                maxValue: 100,
                                listeners: {
                                    change:function(ele, value, direction, eOpts ){
                                        Configuration.nianFoCount = Configuration.totalNianFoCountSetting = value;
                                        Ext.getCmp('countContentPanel').setHtml(Configuration.totalNianFoCountSetting + '次');
                                    MyAccount.user.keCount=Configuration.nianFoCount;
                                        Rest.updateUserSettings(MyAccount.user,true);
                                    }
                                }
                            }
//                            ,
//                            {
//                                xtype      : 'spinnerfield',
//                                name       : 'spinner',
//                                label      : '倒计总数',
//                                minValue   : 0,
//                                maxValue   : 10000,
//                                id:'nianFoTotalCount',
//                                labelWidth:'35%',
//                                stepValue  : 1,
//                                style: 'background-color:#b4b4b4;',
//                                value:60,
//                                width:'100%',
//                                cycle      : true,
//                                listeners: {
//                                    spin:function(ele, value, direction, eOpts ){
//                                        Configuration.nianFoCount = Configuration.totalNianFoCountSetting = value;
//                                        Ext.getCmp('countContentPanel').setHtml(Configuration.totalNianFoCountSetting + '次');
//                                    MyAccount.user.keCount=Configuration.nianFoCount;
//                                        Rest.updateUserSettings(MyAccount.user,true);
//                                    }
//                                }
//                            }
                        ]
                    },


                    {
                        flex: 1,
                        xtype: 'button',
                        layout: {
                            type: 'hbox'
                        },
                        id: 'recordButton',
                        style: 'border-radius:0px;border-left:0px;border-right:0px;border-bottom:0px;background-color:#b4b4b4;',
                        ui: 'plain',
                        html: "<img src='resources/images/add.png'  style='height:128px'/><br/>增加次数",
                        listeners: {
                            tap: function () {
                                if (Configuration.isAddNianFoCount) {
                                    Configuration.nianFoCount++;
                                }
                                else {
                                    if (Configuration.nianFoCount > 0) {
                                        Configuration.nianFoCount--;
                                    }
                                }

                                Ext.getCmp('countContentPanel').setHtml(Configuration.nianFoCount + '次');
                            }
                        }

                    }
                ]
            }

        ],
        listeners: {
            initialize: function () {
            },
            painted: function () {
//                Ext.getCmp('optionSelector').setPressedButtons( MyAccount.user.isZhengShuPage=="1"?0:1);

                Ext.getCmp('optionSelector').setPressedButtons( MyAccount.user.isZhengShuPage=="\u0001"?0:1);
            }

        }




    }



});


