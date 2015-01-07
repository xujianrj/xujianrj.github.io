//$.bind($('#btnInvite'), "click", function () {
//        MedicalHome.viewController.yiMai.renderInviteActionSheet();
////        $.ui.loadContent('#inviteDoctor');
//    }
//);


MedicalHome.viewController.yiMai = {
    contactItemTemplate: '<li onclick="$.ui.loadContent(\'#doctorDetails\')">' +
        '<div  class="row">' +
        '<div class="rowImageItem" style="background-image: url(./image/sampleImg/avatar.png);background-size: cover;"></div>' +
        '<div style="width: 200px" >' +
        '<div class="floatLeft subTitle" >{0}</div><div class="floatLeft subTitle"> {1}</div> <div style="clear: both;"></div>' +
        '<div class="button" onclick="MedicalHome.viewController.yiMai.renderInviteActionSheet();" >邀请</div>' +
        '</div>' +
        '</div>' +
        '</li>',
    renderPlusActionSheet: function () {
        $.ui.actionsheet([
            { text: '扫一扫',
                handler: function () {
                    cordova.plugins.barcodeScanner.scan(

                        function (result) {
                            $.ui.popup('扫描结果是：'+result.text );
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
            { text: '发起群聊',
                handler: function () {
                    $.ui.goBack();
                }
            },
            {
                text: '添加医生',
                handler: function () {
//                   MedicalHome.viewController.yiMai.renderInviteActionSheet();
                }
            }
        ]);

    },
    renderInviteActionSheet: function () {
        $.ui.actionsheet([
            { text: 'QQ',
                handler: function () {
                    $.ui.goBack();
                }
            },
            {
                text: '朋友圈',
                handler: function () {
                    alert("hi");
                }
            },
            {
                text: '微信',
                handler: function () {
                    alert("hi");
                }
            },
            {
                text: '邮箱',
                handler: function () {
                    alert("hi");
                }
            },
            {
                text: '短信',
                handler: function () {
                    alert("goodbye");
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
                    var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
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
                var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#contactList", contentHtml);
        }
        $.ui.toggleSideMenu(false);
//        $.ui.loadContent("#contacts");
    },
    loadWorkmates:function(isReload){
        var template = MedicalHome.viewController.yiMai.contactItemTemplate;
        if (MedicalHome.local.getFriends() == null || isReload) {
            var restUrl = 'data/workmates.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                    contentHtml += html;
                });
                $.ui.updateContentDiv("#contactList", contentHtml);
                MedicalHome.local.setFriends(data);
            });
        }
        else {
            var data = MedicalHome.local.getFriends();
            var contentHtml = '';
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#contactList", contentHtml);
        }
        $.ui.toggleSideMenu(false);
    },
    loadLevelOneFriend:function(isReload){
        var template = MedicalHome.viewController.yiMai.contactItemTemplate;
        if (MedicalHome.local.getContacts() == null || isReload) {
            var restUrl = 'data/levelOneFriends.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
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
                var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#contactList", contentHtml);
        }
        $.ui.toggleSideMenu(false);
//        $.ui.loadContent("#levelOneFriend");
    },
    showLevelTwoFriend:function(isReload){
        var template = MedicalHome.viewController.yiMai.contactItemTemplate;
        if (MedicalHome.local.getContacts() == null || isReload) {
            var restUrl = 'data/levelTwoFriends.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                    contentHtml += html;
                });
                $.ui.updateContentDiv("#levelTwoFriendList", contentHtml);
                MedicalHome.local.setContacts(data);
            });
        }
        else {
            var data = MedicalHome.local.getContacts();
            var contentHtml = '';
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#levelTwoFriendList", contentHtml);
        }
        $.ui.loadContent("#levelTwoFriend");
    },
    showMightKnow:function(isReload){
        var template = MedicalHome.viewController.yiMai.contactItemTemplate;
        if (MedicalHome.local.getContacts() == null || isReload) {
            var restUrl = 'data/mightKnows.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                    contentHtml += html;
                });
                $.ui.updateContentDiv("#mightKnowList", contentHtml);
                MedicalHome.local.setContacts(data);
            });
        }
        else {
            var data = MedicalHome.local.getContacts();
            var contentHtml = '';
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#mightKnowList", contentHtml);
        }
        $.ui.loadContent("#mightKnow");
        mightKnow
    },
    showLevelOneFriend:function(isReload){
        var template = MedicalHome.viewController.yiMai.contactItemTemplate;
        if (MedicalHome.local.getContacts() == null || isReload) {
            var restUrl = 'data/levelOneFriends.json';
            $.getJSON(restUrl, function (data) {
                var contentHtml = '';
                $.each(data, function (index, item) {
                    var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                    contentHtml += html;
                });
                $.ui.updateContentDiv("#levelOneFriendList", contentHtml);
                MedicalHome.local.setContacts(data);
            });
        }
        else {
            var data = MedicalHome.local.getContacts();
            var contentHtml = '';
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#levelOneFriendList", contentHtml);
        }
        $.ui.loadContent("#levelOneFriend");
    },


    friendItemClick: function (discussId) {
        if (MedicalHome.isLocalDebug) {
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
