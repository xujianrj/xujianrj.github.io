//./util/stringhelper
//    <!--<script type="text/javascript" src="util/sha1
//    ./rest/Rest
require.config({
    waitSeconds:100,
    paths: {
        "jqaf": "../appframework.min",
        "appframeworkui": "../ui/appframework.ui",
        "stringhelper": "stringhelper",
        "sha1": "sha1",
        "Rest": "../app/Rest",
        "jsonpHelper": "jsonpHelper",
        "prepareData": '../app/prepareData',
        'server': '../app/server',
        'viewController': '../app/viewController',
        'application': '../app/application',
'actionsheet':'../plugins/af.actionsheet',
'css3animate':'../plugins/af.css3animate',
//./plugins/af.passwordBox
'scroller':'../plugins/af.scroller',
//./plugins/af.selectBox
'touchEvents':'../plugins/af.touchEvents',
'touchLayer':'../plugins/af.touchLayer',
//./plugins/af.popup
'beforePageLoad':'../app/beforePageLoad',
        'yiMaiViewController': '../app/yiMaiViewController'
    },
    shim: {
        appframeworkui: {
            deps: [
                'touchEvents',
                'touchLayer',
                'scroller'
            ]
        },
        touchEvents:{
            deps: [
                'jqaf'
            ]
        },
        beforePageLoad:{
            deps: [
                'appframeworkui'
            ]
        },

        viewController: {
            deps: [
                'appframeworkui',
                'application',
                'server'
            ]
        },
        Rest: {
            deps: [
                'application',
                'viewController',
                'sha1',
                'jsonpHelper',
                'stringhelper',
                'server'
            ]
        },

        yiMaiViewController: {
            deps: ['viewController']
        },


        prepareData: {
            deps: ['Rest']
        }
    }
});

require(
    [
        'jqaf','appframeworkui','scroller','touchEvents','touchLayer',
        'beforePageLoad',
        'application', "sha1", "Rest", "prepareData", "jsonpHelper",
        'server', 'viewController', 'yiMaiViewController','css3animate'
    ],
    function () {
        //debugger;
        $.ui.launch();
        $("#splashscreen").remove();
        $.ui.ready(function () {
            //debugger;
//            MedicalHome.viewController.mingYiHui.renderSection();
            MedicalHome.viewController.mingYiHui.renderAll();
            MedicalHome.viewController.yiMai.loadContacts();
            if (MedicalHome.topicScroller == null) {
//                var options = {
//                    verticalScroll: true,
//                    horizontalScroll: false,
//                    scrollBars: true,  //display scrollbars
//                    refresh: true, //Adds 'Pull to refresh' at the top
//                    refreshFunction: function () {
//                        MedicalHome.viewController.mingYiHui.renderAll(true);
//                    } //callback function to execute on pull to refresh
//                }
                MedicalHome.topicScroller = $("#main").scroller();
                MedicalHome.topicScroller.addPullToRefresh();
                $.bind(MedicalHome.topicScroller, "refresh-release", function () {
                    MedicalHome.viewController.mingYiHui.renderAll(true);
                });
            }
            if ($.os.ios7 || ($.os.ios && navigator.userAgent.match(/8_/))) {
                console.log('ios7~8');
                $('.header').css("height", '62px');
                $('.header').css("padding-top", "15px");
            }
            $.ui.setLeftSideMenuWidth($("#afui").width()-60);//设置左边菜单的宽度为 整个页面的宽度减去60px;
            navigator.splashscreen.hide();

        });


    }
);