$.ui.isAjaxApp = true;
$.ui.useOSThemes = false;
$.ui.backButtonText = "返回";
$.ui.setLeftSideMenuWidth('320px');
//$.ui.showBackButton = false;


$.ui.autoLaunch = true;//Note:true for develop.
//不显示返回按钮
//$.ui.setRightSideMenuWidth('0px');
//$.feat.nativeTouchScroll=false;

//间隔N秒后，开始launch，这N秒用于显示splashscreen
var init = function () {
    $.ui.launch();
    window.setTimeout(function () {
        navigator.splashscreen.hide();
    }, 2000);

//    window.setTimeout(function () {
//        $.ui.launch();
//    }, 2000);
};

document.addEventListener("DOMContentLoaded", init, false);
//if($.os.ios7||($.os.ios&&navigator.userAgent.match(/8_/)) ){
//    console.log('ios7~8');
//    $('.header').css("height",'62px');
//    $('.header').css(" padding-top","15px");
//}



