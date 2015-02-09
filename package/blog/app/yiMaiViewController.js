//$.bind($('#btnInvite'), "click", function () {
//        MedicalHome.viewController.yiMai.renderInviteActionSheet();
////        $.ui.loadContent('#inviteDoctor');
//    }
//);


MedicalHome.viewController.yiMai = {
    contactItemTemplate: '<li onclick="$.ui.loadContent(\'#doctorDetails\')">' +
        ' <img class="circleimg" src="image/sampleImg/avatar.png" style="float: left;height: 50px;"/>'+
        '<div  class="row" style="padding-left: 10px;">' +
        '<div style="width: 200px"  >' +
        '<div class="floatLeft subTitle" >{0}</div><div class="floatLeft subTitle"> {1}</div> <div style="clear: both;"></div>' +
        '<div class="context">{2} {3}</div>' +
        '</div>' +
        '</div>' +
        '</li>',
    mightKnowTemplate: '<li onclick="$.ui.loadContent(\'#doctorDetails\')">' +
        ' <img class="circleimg" src="image/sampleImg/avatar.png" style="float: left;height: 50px;"/>'+
        '<div  class="row" style="padding-left: 10px;">' +
        '<div style="width: 200px" >' +
        '<div class="floatLeft subTitle" >{0}</div><div class="floatLeft subTitle"> {1}</div> <div style="clear: both;"></div>' +
        '<div class="context">{2} {3}</div>' +
//        '<div class="button" onclick="MedicalHome.viewController.yiMai.renderInviteActionSheet();" >加好友</div>' +
        '</div>' +
        '</div>' +
        '</li>',
    messageTemplate: '<li onclick="MedicalHome.viewController.yiMai.showMessageDetails();">' +
        ' <img class="circleimg" src="image/sampleImg/avatar.png" style="float: left;height: 50px;"/>'+
        '<div  class="row" style="padding-left: 10px;">' +
        '<div  >' +
        '<div class="floatLeft subTitle" >{0}</div><div class="floatLeft subTitle"> {1}</div> <div style="clear: both;"></div>' +
        '<div class="context" style="overflow: hidden;width: 200px;white-space: nowrap;">{2}</div>' +
        '</div>' +
        '</div>' +
        '</li>',
    renderPlusActionSheet: function () {
        $.ui.actionsheet([
            { text: '扫一扫',
                handler: function () {
                    cordova.plugins.barcodeScanner.scan(
                        function (result) {
                            $.ui.popup('扫描结果是：' + result.text);
//                  console.log(result.text);
//                            alert("We got a barcode\n" +
//                                "Result: " + result.text + "\n" +
//                                "Format: " + result.format + "\n" +
//                                "Cancelled: " + result.cancelled);
                        },
                        function (error) {
                            console.log("Scanning failed: " + error);
                        }
                    );
                }
            },
            {
                text: '添加医生',
                handler: function () {
                }
            }
        ]);

    },

    loadContacts: function (isReload) {
        var template = MedicalHome.viewController.yiMai.contactItemTemplate;
        if (MedicalHome.local.getContacts() == null || isReload) {
            var restUrl = 'data/contacts.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.doctorName, item.hospitalName, item.dept,item.level, item.id);
                    contentHtml += html;
                });
                $.ui.updateContentDiv("#contactList", contentHtml);
                MedicalHome.local.setContacts(data);
            });
        }
        else {
            var data = MedicalHome.local.getContacts();
            var contentHtml = '';
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.dept,item.level, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#contactList", contentHtml);
        }
        $.ui.toggleSideMenu(false);
    },
    loadMessages: function (isReload) {
        var template = MedicalHome.viewController.yiMai.messageTemplate;
        if (MedicalHome.local.getMessages() == null || isReload) {
            var restUrl = 'data/messages.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.from, item.date, item.content, item.id);
                    contentHtml += html;
                });
                $.ui.updateContentDiv("#contactList", contentHtml);
                MedicalHome.local.setMessages(data);
            });
        }
        else {
            var data = MedicalHome.local.getMessages();
            var contentHtml = '';
            $.each(data, function (index, item) {
                var html = template.format(item.from, item.date, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#contactList", contentHtml);
        }
        $.ui.toggleSideMenu(false);
    },
    showMightKnow: function (isReload) {
        var template = MedicalHome.viewController.yiMai.mightKnowTemplate;
        if (MedicalHome.local.getMightKnow() == null || isReload) {
            var restUrl = 'data/mightKnows.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.doctorName, item.hospitalName, item.dept,item.level, item.id);
                    contentHtml += html;
                });
                $.ui.updateContentDiv("#contactList", contentHtml);
                MedicalHome.local.setMightKnow(data);
            });
        }
        else {
            var data = MedicalHome.local.getMightKnow();
            var contentHtml = '';
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.dept,item.level, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#contactList", contentHtml);
        }
        $.ui.toggleSideMenu(false);
    },
    showMessageDetails:function(){
        var restUrl = 'data/messageHistory.json';
        $.getJSON(restUrl, function (arrMessage) {
//            var contentHtml = '';
//            $.each(data, function (index, item) {
//                var html = template.format(item.doctorName, item.hospitalName, item.dept,item.level, item.id);
//                contentHtml += html;
//            });
            var div = $("#divDialog");
            var html = "";
            for(var index = 0; index < arrMessage.length; index++) {
                html =MedicalHome.viewController.common.createOneMessageOnScreen(arrMessage[index]);

                if(index == 0) {
                    div.append("<div class='clear'></div>");
                }
                div.prepend(html);

//            if(arrMessage[index].type == "voice") {
//                downloadAudio(arrMessage[index].content);
//            }
            }

            //绑定完成后，滚到最下面
            $.ui.scrollToBottom('panel_myquestion_detail', 500);
            $.ui.loadContent('#panel_myquestion_detail');
        });


    },


    friendItemClick: function (discussId) {
        if (MedicalHome.isDebug) {
            $('#discussDetails_title').html('[Debug]脊柱关节病');
            $('#discussDetails_content').html('[Debug]脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓' +
                '脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、韧带' +
                '、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激' +
                '脊髓脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、' +
                '韧带、肌肉发生病变，进而压迫');
            $.ui.loadContent('#discussDetails');
        }
        else {
            var restUrl = MedicalHomeServer.address.getDiscussDetails(discussId);
            JSONP.invoke(restUrl, function (data) {
                $('#discussDetails_title').html(data.title);
                $('#discussDetails_content').html(data.content);
                $.ui.loadContent('#discussDetails');
            });
        }
    }
};

