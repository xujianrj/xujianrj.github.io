Ext.define('Rest', {
    restServer: 'http://localhost/fo/Service/',
//    restServer: 'http://foxuewx.qq.com/Service/',
    singleton: true,
    updateUserCredit: function (adjustment) {
        var restRrl = Rest.restServer + 'index.php/Home/User/update?openid=' + MyAccount.user.wechat_openid + '&adjust=' + adjustment;
        MyAccount.user.gongDe = parseInt(MyAccount.user.gongDe) + parseInt(adjustment);
        Ext.Ajax.request({
            url: restRrl,
            success: function (response) {
            },
            failure: function () {
            }
        });
        var message = adjustment > 0 ? '增加' + adjustment + '积分' : '扣除' + (-adjustment) + '积分';
        Rest.showNotice(message);
    },
    updateUserSettings: function (userSettings, hideNotice) {
        var restRrl = Rest.restServer + 'index.php/Home/User/saveSetting?openid=' + MyAccount.user.wechat_openid;
        Ext.Ajax.request({
            url: restRrl,
            params: userSettings,
            success: function (response) {
            },
            failure: function () {
            }
        });
        var message = "保存成功";
        if (!hideNotice) {
            Rest.showNotice(message);
        }

    },
    showNotice: function (message) {
        Ext.getCmp('noticeView').setHtml(message);
        var animation = new Ext.Anim({
            easing: 'easeIn',
            duration: 3000,
            autoClear: false,
            delay: 200,
            from: {
                opacity: 1,
                top: 30
            },
            to: {
                opacity: 0,
                top: 0
            },
            before: function () {
                Ext.getCmp('noticeView').setHidden(false);
            },
            after: function () {

                Ext.getCmp('noticeView').setHidden(true);
            }
        });
        animation.run(Ext.get('noticeView'));
    },
    getQueryStringByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    getChangShiListView: function () {
        Ext.Ajax.request({
            withCredentials: true,
            useDefaultXhrHeader: false,
//        Ext.data.JsonP.request({
            url: 'http://c.open.qq.com/i/multi/multi_article.php?project_name=kzjovebvodxcjbv&oe=UTF-8&of=json&level=4&page=2&count=10&site=rushidao&column=daochangcanli,fojiaoshengdi,haiwaidaochang,nanchuansiyuan.sidamingshan,zangchuansiyuan,zushizuting&bSub=true',
            success: function (response) {
               alert(response);
                var view = Ext.create('fo.view.BasicList', {
                    id: 'changShiView',
                    data: [
                        {name: 'ads'},
                        {name: 'ads2'}
                    ]
                });
                mainFoView.push(view);
            },
                failure:function(){
                    alert('aaa');
            }
        });

    },
    syncUserInfo: function () {
        var code = Rest.getQueryStringByName('code');
        var homepage = Rest.getQueryStringByName('homepage');
        MyAccount.user = {wechat_openid: 'null', username: '未知', gongDe: 0};
        Ext.Ajax.request({
//           url: Rest.restServer+'index.php/Home/User/syncFromWeiXin?code='+code,

            //Note:Test code here for local debug.
            url: 'http://localhost/fo/service/index.php/Home/User/getUserById?id=o3xKBt5SK3OFwAVbf9AfqMi4fh78',
            success: function (response) {
                if (response.responseText.indexOf('user_id') == -1) {
                    Ext.Msg.alert("错误", "获取微信号失败。");
                }
                MyAccount.user = eval("(" + response.responseText + ")");

                var mainView = Ext.create('fo.view.MainView');
                Ext.Viewport.add(mainView);
                var foxiangList = Ext.create('fo.view.InlineDataView', {id: 'foxiangList'});
                Navigation.showView('flowerListView', 'fo.view.FlowerListView');
                Navigation.showView('gongXiangView', 'fo.view.GongXiangListView');
                Navigation.showView('lampOilListView', 'fo.view.LampOilListView');
                Navigation.showView('fruitListView', 'fo.view.FruitListView');
                Ext.Viewport.add(foxiangList);
                Ext.Viewport.setActiveItem(mainView);

                if (homepage == "dingke") {
                    Navigation.pushOrActivateView('dingKeView', 'fo.view.DingKeView');
                }
                else{
                    Rest.showNotice('欢迎 ' + MyAccount.user.username);
                }
                setTimeout(function () {
                    Ext.fly('appLoadingIndicator').destroy();
                    if(Ext.os.is.iOS&&(Ext.Viewport.getWindowHeight()==480
                        ||Ext.Viewport.getWindowHeight()==568
                        ||Ext.Viewport.getWindowHeight()==667)){
                        Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight()-64);
                    }
                }, 200);
                if(new Date(MyAccount.user.shangGongExpiredTime)<new Date())
                {
                    MyAccount.user.foxiang=MyAccount.user.flower=MyAccount.user.fruit=MyAccount.user.ranDeng
                    =MyAccount.user.gongXiang='';
                }

                if (MyAccount.user.foxiang) {
                    var imageFoImage = Ext.getCmp('mainFoImage');
                    imageFoImage.setSrc('resources/images/foxiangs/' + MyAccount.user.foxiang + '.png');
                }
                if (MyAccount.user.flower) {
                    var imageViewLeft = Ext.getCmp('flowerViewInLeft');
                    var imageViewRight = Ext.getCmp('flowerViewInRight');
                    imageViewLeft.setSrc('resources/images/flower/' + MyAccount.user.flower + '.png');
                    imageViewRight.setSrc('resources/images/flower/' + MyAccount.user.flower + '.png');
                }
                if (MyAccount.user.fruit) {
                    var fruitImageViewLeft = Ext.getCmp('fruitViewInLeft');
                    var fruitImageViewRight = Ext.getCmp('fruitViewInRight');
                    fruitImageViewLeft.setSrc('resources/images/fruit/' + MyAccount.user.fruit + '.png');
                    fruitImageViewRight.setSrc('resources/images/fruit/' + MyAccount.user.fruit + '.png');
                }
                if (MyAccount.user.ranDeng) {

                    var imageInHome = Ext.getCmp('ranDengView');
                    imageInHome.setSrc('resources/images/banjian/ranDeng-oil.png');
                }
                if (MyAccount.user.gongXiang) {
                    var xiangLuAlternateView = Ext.getCmp('xiangLuAlternateView');
                    xiangLuAlternateView.show();
                    var imageFoImage = Ext.getCmp('xiangLuView');
                    imageFoImage.hide();
                }

            },
            failure: function () {
                Ext.Msg.alert("错误", "获取微信号失败。");
                var mainView = Ext.create('fo.view.MainView');
                Ext.Viewport.add(mainView);
                var foxiangList = Ext.create('fo.view.InlineDataView', {id: 'foxiangList'});
                Navigation.showView('flowerListView', 'fo.view.FlowerListView');
                Navigation.showView('gongXiangView', 'fo.view.GongXiangListView');
                Navigation.showView('lampOilListView', 'fo.view.LampOilListView');
                Navigation.showView('fruitListView', 'fo.view.FruitListView');
                Ext.Viewport.add(foxiangList);
                Ext.Viewport.setActiveItem(mainView);
                if (homepage == "dingke") {
                    Navigation.pushOrActivateView('dingKeView', 'fo.view.DingKeView');
                }
                setTimeout(function () {
                    Ext.fly('appLoadingIndicator').destroy();
                    if(Ext.os.is.iOS&&(Ext.Viewport.getWindowHeight()==480
                        ||Ext.Viewport.getWindowHeight()==568
                        ||Ext.Viewport.getWindowHeight()==667)){
                        Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight()-64);
                    }
                }, 200);


            }
        });

    }

});