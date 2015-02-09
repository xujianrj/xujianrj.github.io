MedicalHome.viewController = {

},

    MedicalHome.viewController.imagePreview = {
        show: function (imageUrl) {
            $("#panelImagePreivew").attr("src", imageUrl);
            $.ui.showModal('panel_image');
//        modalPanelImageId = "panel_image";
        }

    };
MedicalHome.viewController.common = {
    imageItemClick: function (e) {
        MedicalHome.viewController.imagePreview.show('./image/sampleImg/discuss.jpg');
        e.preventDefault();
        e.stopPropagation();
    },
    createOneMessageOnScreen: function (message) {
        var content = "";
        var leftOrRight = "";
        //如果发送方是我，放在右边显示，否则在左边显示
//        CURRENT_USER.UserId='';
        var currentUserId = '';
        if (message.senderId == currentUserId) {
            leftOrRight = "right";
        }
        else {
            leftOrRight = "left";
        }

        if (message.type == "text") {
            content = message.content;
        }
        else if (message.type == "voice") {
            var time = new Date().getTime();

            if (leftOrRight == "left") {
                content =
                    "<span id=\"voice_{1}\" onclick=\"playAudio('{2}', 'voice_{1}', {3}, '{4}');\" class='icon volume-high marL15'></span>" +
                        "<span class='voice_duration'>{0}\"</span>";
            }
            else if (leftOrRight == "right") {
                content =
                    "<span class='voice_duration marL15'>{0}\"</span>" +
                        "<span id=\"voice_{1}\" onclick=\"playAudio('{2}', 'voice_{1}', {3}, '{4}');\" class='icon volume-high'></span>";
            }
            content = content.format(message.duration, time, message.content, message.duration, leftOrRight);
        }
        else if (message.type == "image") {
            var sub = "http://{0}:{1}".format(_config.ServerIP, _config.ServerPort);
            var img = sub + "/" + message.content;
            var img_big = sub + "/" + message.content_img;
            content = "<a onclick='showPreviewImage(\"{0}\");' href='#panel_myquestion_image_preview'><img src='{1}' /></a>"
                .format(img_big, img);
        }
        //如果type不对，默认按照文字处理
        else {
            content = message.content;
        }

        var avatar;
        //生成头像
//    if(message.senderId == currentUserId) {
//        avatar = DoctorInfo.flag.info.Avatar;
//    }
//    else {
//        avatar = COM_VALUE.Avatar;
//    }
//    var head_url = 'http://{0}:{1}/{2}'
//        .format(_config.ServerIP, _config.ServerPort, avatar);

        var head_url = 'image/default.png';

        var html =
            "<div>" +
                "<img class='" + leftOrRight + " dialog_head' src='{0}' />" +
                "<p class='{1}'>{2}</p>" +
                "</div>";

        html = html.format(head_url, leftOrRight, content);
        html += "<div class='clear'></div>";
        return html;
    }

};

$.bind($('#mingYiHui_createTopicButton'), "click", function () {
        if (MedicalHome.auth.checkLogin()) {
            $.ui.loadContent('#createTopic');
        }
    }
);


MedicalHome.viewController.main = {
}
