MedicalHome.viewController.mingYiHui = {
    sectionIndex: 0,
    topicItemTemplate: '<li onclick="MedicalHome.viewController.mingYiHui.topicItemClick(\'{2}\');">' +
        '<div  class="row">' +
        '<div >' +
        '<div class="floatLeft subTitle" >{0}</div><div class="floatLeft subTitle" style="right:10px;position: absolute"> {1}</div> <div style="clear: both;"></div>' +
        '</div>' +
//        '<img class="circleimg" src="image/sampleImg/avatar.png" style="height: 40px;right: 10px;position: absolute;"/>' +
        '</div>' +
//        '<img src="image/sampleImg/topicCover.png" style="height:200px;">' +
//        '<div class="iconContainer thirdTitle">' +
//        '<a class="icon icon-comment hbox contentIcon" >20</a>' +
//        '<a class="icon icon-zan hbox contentIcon" >20</a>' +
//        '</div>' +
        '</li>',
    loadDepartmentSidebar: function () {
        var contentHtml = $('#ul_menu_Sidebar').html();
        $.each(MedicalHome.data.departments, function (index, item) {
            var template = '<li onclick="MedicalHome.viewController.mingYiHui.onSubjectSelected({1});"><a href="#af1">{0}</a></li>';
            var html = template.format(item.name, item.code);
            contentHtml += html;
        });
        $.ui.updateContentDiv("#ul_menu_Sidebar", contentHtml);
    },
    onSubjectSelected: function (code) {
        var restUrl = MedicalHomeServer.address.getTopicBySubject(code, 0);
        MedicalHome.util.Rest.loadBlogs(restUrl);
        $.ui.toggleLeftSideMenu();
    },
    renderAll: function (isReload) {
        MedicalHome.viewController.mingYiHui.renderTopics(isReload);
    },
    renderTopics: function (isReload) {
            var restUrl = 'data/blogs.json';
            MedicalHome.util.Rest.loadBlogs(restUrl);
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
        $('.itemImg').bind('click', MedicalHome.viewController.common.imageItemClick);
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
            $('.itemImg').bind('click', MedicalHome.viewController.common.imageItemClick);
        }
    },
    topicItemClick: function (url) {
        console.log(url);
//        $.ui.loadContent("http://www.codesky.net/article/200912/168404.html");
        $('#blogFrame')[0].src=url;
            $.ui.loadContent('#blogDetails');
    },
    magazineItemClick: function (magazineId) {
        if (MedicalHome.isDebug) {
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