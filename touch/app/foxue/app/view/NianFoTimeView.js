Ext.define('fo.view.NianFoTimeView', {
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
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        id: 'bellView1',
                        cls: 'bellViewCls',
                        xtype: 'image',
                        width: '100%',
                        style: 'width:200px;height:250px;',
                        src: 'resources/images/qing2.png'
                    },
                    {
                        id: 'bellPlayer',
                        xtype: 'audio',
                        hidden: true,
                        url: 'resources/music/bell.mp3'
                    },
                    {
                        html: '点击时间选择总计时间',
                        style: 'background-color:#b7b7b7;'
                    },
                    {
                        height: 60,
//                        flex:1,
                        xtype: 'panel',
                        style: 'background-color:#b7b7b7;',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            Ext.create('Ext.ux.field.TimePicker', {
                                id: 'timeCounter',
                                destroyPickerOnHide: true,
                                name: 'countPicker',
//                                defaultTime: '10:00',
                                dateFormat: 'i:s',
                                style: 'border:0px;font-size:40px;',
                                picker: {
                                    doneButton: "确认",
                                    cancelButton: "取消",
                                    minuteIncrement: 1,
                                    secondIncrement: 1,
                                    hourText: '小时',
                                    minuteText: '分钟',
                                    useTitles: true,
                                    slotOrder: ['minute', 'second'],
                                    listeners: {
                                        change: function (self, value) {
                                            var zaoTimeSeconds = value.getSeconds() < 10 ? "0" + value.getSeconds() : value.getSeconds();
                                            var zaoTimeMinutes = value.getMinutes() < 10 ? "0" + value.getMinutes() : value.getMinutes();
                                            MyAccount.user.savedCountDownTime = zaoTimeMinutes + ":" + zaoTimeSeconds;
                                            MyAccount.user.tempCountDownTime = '';
                                            Rest.updateUserSettings(MyAccount.user, true);

                                        }
                                    }
                                },
                                value: new Date('2011-1-1 00:00:00')


                            })
                        ]
                    },
                    {
                        flex: 1,
                        id: 'totalCountSettings2',
                        style: 'border-top:1px solid #777777;background-color:#b4b4b4;',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'image',
                                height: '100%',
                                width: '100%',
                                id: 'imageCountDown',
                                style: 'background-size:cover',
                                src: 'resources/images/countdown.png'
                            }
                        ]
                    },
                    {
                        height: 100,
                        xtype: 'button',
                        layout: {
                            type: 'hbox'
                        },
                        id: 'buttonCountDown',
                        style: 'border-radius:0px;background-color:#157efb;',
                        ui: 'plain',
                        html: "开始",
                        listeners: {
                            tap: function () {
                                if (window.startCountDown) {
                                    window.clearInterval(window.timeCounterLoop);
                                    window.startCountDown = false;
                                    Ext.getCmp('buttonCountDown').setHtml('开始');
                                    Ext.getCmp('imageCountDown').setSrc('resources/images/countdown.png');
                                    var timeCounter = Ext.getCmp('timeCounter');
                                    var zaoTimeSeconds = timeCounter.getValue().getSeconds() < 10 ? "0" + timeCounter.getValue().getSeconds() : timeCounter.getValue().getSeconds();
                                    var zaoTimeMinutes = timeCounter.getValue().getMinutes() < 10 ? "0" + timeCounter.getValue().getMinutes() : timeCounter.getValue().getMinutes();
                                    MyAccount.user.tempCountDownTime = zaoTimeMinutes + ":" + zaoTimeSeconds;
                                    Rest.updateUserSettings(MyAccount.user, true);
                                }
                                else {
                                    var setTime = Ext.getCmp('timeCounter').getValue();
                                    if (setTime.getMinutes() == 0 && setTime.getSeconds() == 0) {
                                        return;
                                    }
                                    window.startCountDown = true;
                                    Ext.getCmp('imageCountDown').setSrc('resources/images/countdown.gif');
                                    Ext.getCmp('buttonCountDown').setHtml('停止');
                                    window.timeCounterLoop = setInterval(
                                        function () {
                                            var oldTime = Ext.getCmp('timeCounter').getValue();
                                            var newTime = new Date(oldTime.setSeconds(oldTime.getSeconds() - 1));
                                            Ext.getCmp('timeCounter').setValue(newTime);
                                            if (oldTime.getMinutes() == 0 && oldTime.getSeconds() == 0) {
                                                var animation = new Ext.Anim({
                                                    easing: 'easeIn',
                                                    duration: 2500,
                                                    autoClear: false,
                                                    delay: 200,
                                                    from: {
                                                        opacity: 1
                                                    },
                                                    to: {
                                                        opacity: 0
                                                    },
                                                    before: function () {
                                                        Ext.getCmp('imageCountDown').setHidden(true);
                                                    },
                                                    after: function () {
                                                        Ext.getCmp('imageCountDown').setHidden(false);
                                                    }
                                                });
                                                animation.run(Ext.get('bellView1'));
                                                var musicPlayer = Ext.getCmp('bellPlayer');
                                                musicPlayer.stop();
                                                musicPlayer.play();
                                                window.clearInterval(window.timeCounterLoop);
                                                window.startCountDown = false;
                                                Ext.getCmp('buttonCountDown').setHtml('开始');
                                                Ext.getCmp('imageCountDown').setSrc('resources/images/countdown.png');
                                            }
                                        }, 1000);
                                }


                            }
                        }

                    }
                ]
            }

        ],
        listeners: {
            initialize: function () {
                var bellView = Ext.getCmp('bellView1');
                var screenWidth = Ext.Viewport.getWindowWidth();
                var timeCount = screenWidth / 640;
                bellView.setTop(200 * timeCount);
                bellView.setLeft(200 * timeCount);
                bellView.setWidth(200 * timeCount);
                bellView.setHeight(250 * timeCount);
            },
            painted: function () {
                if (MyAccount.user.tempCountDownTime != '') {
                    Ext.Msg.show({
                        title: '提示',
                        message: '是否继续?',
                        width: 300,
                        buttons: [
                            {text: '是', itemId: 'yes', ui: 'action'},
                            {text: '否', itemId: 'no'}
                        ],
                        fn: function (buttonId) {
                            var isContinue = buttonId == 'yes';
                            var countTime = isContinue ? MyAccount.user.tempCountDownTime.split(":") : MyAccount.user.savedCountDownTime.split(":");
                            var timeDateValue = new Date();
                            timeDateValue.setSeconds(countTime[1]);
                            timeDateValue.setMinutes(countTime[0]);
                            var timeCounter = Ext.getCmp('timeCounter');
                            timeCounter.setValue(timeDateValue);
                        }
                    });
                }
                else {
                    var countTime = MyAccount.user.savedCountDownTime.split(":");
                    var timeDateValue = new Date();
                    timeDateValue.setSeconds(countTime[1]);
                    timeDateValue.setMinutes(countTime[0]);
                    var timeCounter = Ext.getCmp('timeCounter');
                    timeCounter.setValue(timeDateValue);
                }
            }
        }




    }



});


