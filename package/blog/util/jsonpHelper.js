var JSONP = {

    invoke: function (url, callback) {
        $.jsonP({
            url: url,
            success: function (res) {
                if (typeof res.error == 'timeout') {
                    $('#loginPrompt').html('<div style="color:red;margin:10px 0;">权限认证失败，请重新登录</div>');
                    $.ui.loadContent("#login", true, true, "slide");
                    $('#login_cellphone').focus();
                } else {
                    callback(res);
                }
            },
            error: function (ex) {
                var html =
                    "<div class='returnPrompt'>" +
                        "<div>网络异常,请检查网络设置</div>" +
                        "</div>";
                $($.ui.activeDiv).append(html);
                setTimeout(function(){
                    $(".returnPrompt").hide();
                },4000);
            }
        });
    }

}