MedicalHome.viewController.huiZhen = {
    createMedicalRecordClick: function () {
//        var isLogin = MedicalHome.auth.checkLogin();
//        if (isLogin) {
        $.ui.loadContent('#createMedicalRecord');
//        }
    },
    showPatientDetails: function () {
        var restUrl = 'data/patientDetails.json';
        $.getJSON(restUrl, function (patientDetail) {
            MedicalHome.viewController.huiZhen._loadPatientCaseItem(patientDetail);
            $.ui.loadContent('#panel_patient_caseitem');
        });
    },
    _loadPatientCaseItem: function (patientDetail) {
        $("#h1PatientCaseItem").html(patientDetail.name + "的病历");
        var div = $("#patientCaseItemList");
        div.html('');
        var caseList = patientDetail.history;

        if (caseList && caseList.length > 0) {

            for (var index = 0; index < caseList.length; index++) {
                var caseItem = caseList[index];
                //caseList是所有病历的数据，现在已经进到某一个病历中了，比如：主诉
                //那么这里只要主诉的，所以不是主诉的（不等于COM_ID的）一律过滤掉
//            if(caseItem.Type != COM_ID) {
//                continue;
//            }

                var date = changeNumberToyyyyMMdd(caseItem.DateLine);
                var html =
                    "<div>" +
                        "<div class='blank' style='border-right: 0;'></div>" +
                        "<div class='title' style='border-left:#ddd 2px solid;'>" +
                        "<div class='date'>{0}</div>" +
                        "</div>" +
                        "</div>" +
                        "<div>" +
                        "<div class='blank_2' style='border-right: 0;'></div>" +
                        "<div class='content' style='border-left:#ddd 2px solid;'>" +
                        "<div>{1}</div>" +
                        '<div class="img itemImg"  style="/*noinspection CssUnknownTarget*/background-image: url(\'image/default.png\');background-size: cover;"></div>' +
                        '<div class="img itemImg"  style="/*noinspection CssUnknownTarget*/background-image: url(\'image/default.png\');background-size: cover;"></div>' +
                        '<div class="img itemImg"  style="/*noinspection CssUnknownTarget*/background-image: url(\'image/default.png\');background-size: cover;"></div>' +
                        "</div>" +
                        "</div><div class='clear'></div>"+
                        '<div >' +

                        ' </div>' ;
                var content = ubb2html(caseItem.Cont);
                div.append(html.format(date, content));
            }
        }

        //遍历所有的a元素，添加点击显示大图的行为
        div.find("a").each(
            function () {
                var href = $(this).attr("href");
                $(this).attr("link", href);
                $(this).attr("href", "#");
                $(this).click(
                    function () {
                        $("#panelImagePreivew").attr("src", $(this).attr("link"));
                        $.ui.showModal('panel_image');
                    }
                );
            }
        );
    }
};

MedicalHome.viewController.me = {
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
    }
}
