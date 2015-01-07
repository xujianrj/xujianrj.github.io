//<!--<script type="text/javascript" charset="utf-8" src="./util/stringhelper.js"></script>-->
//    <!--<script type="text/javascript" src="util/sha1.js"></script>-->
//    <!--<script type="text/javascript" charset="utf-8" src="./rest/Rest.js"></script>-->
require.config({
    paths: {
        "jqaf": "../appframework",
        "appframeworkui": "../ui/appframework.ui",
        "stringhelper": "stringhelper",
        "sha1": "sha1",
        "Rest": "../app/Rest",
        "jsonpHelper": "jsonpHelper",
        "prepareData": '../app/prepareData',
        'server': '../app/server',
        'viewController': '../app/viewController',
        'application': '../app/application',
        'yiMaiViewController': '../app/yiMaiViewController',
        'cordova': '../cordova'
    },
    shim: {
        appframeworkui: {
            deps: [
                'jqaf'
            ]
        },
        viewController: {
            deps: [
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
//        'jqaf','appframeworkui',
        'application', "sha1", "Rest", "prepareData", "jsonpHelper", 'server', 'viewController', 'yiMaiViewController', 'cordova'],
    function () {
        $.ui.ready(function () {
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
        });


    }
);