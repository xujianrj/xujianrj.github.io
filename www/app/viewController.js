MedicalHome.viewController = {
    imageItemClick: function (e) {
        MedicalHome.viewController.imagePreview.show('./image/sampleImg/imagePreview.png');
        e.preventDefault();
        e.stopPropagation();
    }
};

$.bind($('#mingYiHui_createTopicButton'), "click", function () {
        if (MedicalHome.auth.checkLogin()) {
            $.ui.loadContent('#createTopic');
        }
    }
);

//$("#topicSection").on("swipeRight", function (e) {
//    if (MedicalHome.viewController.mingYiHui.sectionIndex > 0) {
//        MedicalHome.viewController.mingYiHui.sectionIndex--;
//        MedicalHome.viewController.mingYiHui.renderSection();
//    }
//    $('.button-grouped.flex.tabbed a').removeClass('pressed');
//    $('.button-grouped.flex.tabbed a').eq(MedicalHome.viewController.mingYiHui.sectionIndex).addClass('pressed');
//});
//
//$("#topicSection").on("swipeLeft", function (e) {
//    if (MedicalHome.viewController.mingYiHui.sectionIndex < 2) {
//        MedicalHome.viewController.mingYiHui.sectionIndex++;
//    }
//    $('.button-grouped.flex.tabbed a').removeClass('pressed');
//    $('.button-grouped.flex.tabbed a').eq(MedicalHome.viewController.mingYiHui.sectionIndex).addClass('pressed');
//    MedicalHome.viewController.mingYiHui.renderSection();
//});
MedicalHome.viewController.mingYiHui = {
    sectionIndex: 0,
    discussItemTemplate: '<li onclick="MedicalHome.viewController.mingYiHui.discussItemClick({10});">' +
        '<div class="name topicTitle subTitle" style="float: left;vertical-align: top;"  >{0}</div>' +
        '<div class="itemContent subTitle" style="float: left;"> {1}</div>' +
        '<div style="clear: both;"></div>' +
        '<div class="affiliation itemContent thirdTitle" style="text-align: left;">{2}</div>' +
        '<div >' +
        '<div class="img itemImg"  style="/*noinspection CssUnknownTarget*/background-image: url({7});background-size: cover;"></div>' +
        '<div class="img itemImg" style="/*noinspection CssUnknownTarget*/background-image: url({8});background-size: cover;"></div>' +
        '<div class="img itemImg" style="/*noinspection CssUnknownTarget*/background-image: url({9});background-size: cover;"></div>' +
        ' </div>' +
        '<div  class="iconContainer " style="width: 300px">' +
        '<a class="icon icon-taolun hbox contentIcon" >{3}</a>' +
        '<a class="icon icon-zan hbox contentIcon" >{4}</a>' +
//        '<a class="icon icon-shoucang hbox contentIcon" >{5}</a>' +
//        '<a class="icon icon-fenxiang hbox contentIcon">{6}</a>' +
        '</div>' +
        '</li>',

    magazineItemTemplate: '<li onclick="MedicalHome.viewController.mingYiHui.magazineItemClick({2});">' +
        '<div >' +
        '<div ><div class="subTitle" >{0}</div>' +
        '<div class="thirdTitle"> {1}</div>' +
        '<div class="iconContainer thirdTitle">' +
        '<a class="icon icon-taolun hbox contentIcon" >20</a>' +
        '<a class="icon icon-zan hbox contentIcon" >20</a>' +
//        '<a class="icon icon-shoucang hbox contentIcon">20</a>' +
//        '<a class="icon icon-fenxiang hbox contentIcon" >20</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>',
    topicItemTemplate: '<li onclick="MedicalHome.viewController.mingYiHui.topicItemClick({3});">' +
        '<div  class="row">' +
        '<div class="rowImageItem" style="background-image: url(./image/sampleImg/topic.jpg);background-size: cover;"></div>' +
        '<div style="width: 200px" >' +
        '<div class="floatLeft subTitle" >{0}</div><div class="floatLeft subTitle"> {1}</div> <div style="clear: both;"></div>' +
        '<div class="context">{2}</div>' +
        '<div class="iconContainer thirdTitle">' +
        '<a class="icon icon-taolun hbox contentIcon" >20</a>' +
        '<a class="icon icon-zan hbox contentIcon" >20</a>' +
//        '<a class="icon icon-shoucang hbox contentIcon">20</a>' +
//        '<a class="icon icon-fenxiang hbox contentIcon" >20</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>',
    createTopicButtonClick: function () {
        var isLogin = MedicalHome.auth.checkLogin();
        if (isLogin) {
            $.ui.loadContent('#createTopic');
        }
    },
    renderSection: function (isReload) {
        switch (MedicalHome.viewController.mingYiHui.sectionIndex) {
            case 0:
                MedicalHome.viewController.mingYiHui.renderDiscussions(isReload);
                break;
            case 1:
                MedicalHome.viewController.mingYiHui.renderTopics(isReload);
                break;
            case 2:
                MedicalHome.viewController.mingYiHui.renderMagazines(isReload);
                break;
        }
    },
    renderAll:function (isReload) {
        MedicalHome.viewController.mingYiHui.renderDiscussions(isReload);
        MedicalHome.viewController.mingYiHui.renderTopics(isReload);
        MedicalHome.viewController.mingYiHui.renderMagazines(isReload);

    },
    selectSectionByIndex: function (index) {
        MedicalHome.viewController.mingYiHui.sectionIndex = index;
        $('.button-grouped.flex.tabbed a').removeClass('pressed');
        $('.button-grouped.flex.tabbed a').eq(index).addClass('pressed');
        this.renderSection();
    },
    renderTopics: function (isReload) {
        if (MedicalHome.local.getTopicList() == null || isReload) {
            MedicalHome.util.Rest.loadTopics();
        }
        else {
            var data = MedicalHome.local.getTopicList();

            var contentHtml = $('#topicList').html();
//            $.ui.updateContentDiv("#topicList", contentHtml);
            $.each(data, function (index, item) {
                var html = MedicalHome.viewController.mingYiHui.topicItemTemplate.format(item.doctorName, item.hospitalName, item.content, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#topicList", contentHtml);
        }
    },

    renderMagazines: function (isReload) {
        if (MedicalHome.local.getMagazineList() == null || isReload) {
            MedicalHome.util.Rest.loadMagazines();
        }
        else {
            var data = MedicalHome.local.getMagazineList();
            var contentHtml = $('#topicList').html();
            $.each(data, function (index, item) {
                var html = MedicalHome.viewController.mingYiHui.magazineItemTemplate.format(item.date, item.title, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#topicList", contentHtml);
        }
    },
    renderDiscussions: function (isReload) {
        if (MedicalHome.local.getDiscussList() == null || isReload) {
            MedicalHome.util.Rest.loadDiscussion();
        }
        else {
            var discussList = MedicalHome.local.getDiscussList();
            var template = MedicalHome.viewController.mingYiHui.discussItemTemplate;
            var contentHtml = '';
            $.each(discussList, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.content, item.responseCount,
                    item.agreeCount, item.favCount, item.shareCount, item.picture1, item.picture2, item.picture3, item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#topicList", contentHtml);
            $('.itemImg').bind('click', MedicalHome.viewController.imageItemClick);
        }
    },
    discussItemClick: function (discussId) {
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
    },
    topicItemClick: function (topicId) {
        if (MedicalHome.isLocalDebug) {
            $('#topicDetails_title').html('[Debug]李学旺教授主讲肾病专题（一）');
            $('#topicDetails_content').html('[Debug]脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓' +
                '脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、韧带' +
                '、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激' +
                '脊髓脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、' +
                '韧带、肌肉发生病变，进而压迫');
            $.ui.loadContent('#topicDetails');
        }
        else {
            var restUrl = MedicalHomeServer.address.getTopicDetails(topicId);
            JSONP.invoke(restUrl, function (data) {
                $('#topicDetails_title').html(data.title);
                $('#topicDetails_content').html(data.content);
                $.ui.loadContent('#topicDetails');
            });
        }
    },
    magazineItemClick: function (magazineId) {
        if (MedicalHome.isLocalDebug) {
            $('#magazineDetails_title').html('[Debug]2014年8月刊');
            $('#magazineDetails_content').html('[Debug]脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓' +
                '脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、韧带' +
                '、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激' +
                '脊髓脊柱病就是脊柱的骨质、椎间盘、韧带、肌肉发生病变，进而压迫、牵引刺激脊髓脊柱病就是脊柱的骨质、椎间盘、' +
                '韧带、肌肉发生病变，进而压迫');
            $.ui.loadContent('#magazineDetails');
        }
        else {
            var restUrl = MedicalHomeServer.address.getMagazineDetails(magazineId);
            JSONP.invoke(restUrl, function (data) {
                $('#magazineDetails_title').html(data.title);
                $('#magazineDetails_content').html(data.content);
                $.ui.loadContent('#magazineDetails');
            });
        }
    }

};

MedicalHome.viewController.imagePreview = {
    show: function (imageUrl) {
        $("#panelImagePreivew").attr("src", imageUrl);
        $.ui.showModal('panel_image');
//        modalPanelImageId = "panel_image";
    }

};