MedicalHome.util.Rest = {
    login: function (username, password) {
        var restUrl = MedicalHomeServer.address.login(username, password);
        JSONP.invoke(restUrl, function (data) {
            console.log(data);
        });
    },
    loadDiscussion: function () {
        var template =MedicalHome.viewController.mingYiHui.discussItemTemplate;
        var restUrl = 'data/discussions.json';
        $.getJSON(restUrl, function (data) {
            var contentHtml = $('#topicList').html();
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.content,item.responseCount,
                item.agreeCount,item.favCount,item.shareCount,item.picture1,item.picture2,item.picture3,item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#topicList", contentHtml);
            $('.itemImg').bind('click', MedicalHome.viewController.imageItemClick);
            MedicalHome.local.setDiscussList(data);
        });

    },
    loadBlogs: function () {
        var template =MedicalHome.viewController.mingYiHui.topicItemTemplate;
        var restUrl = 'data/topics.json';
        $.getJSON(restUrl, function (data) {
            var contentHtml = $('#topicList').html();
            $.each(data, function (index, item) {
                var html = template.format(item.doctorName, item.hospitalName, item.content,item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#topicList", contentHtml);
            MedicalHome.local.setTopicList(data);
        });
    },
    loadMagazines: function () {
        var template =MedicalHome.viewController.mingYiHui.magazineItemTemplate;
        var restUrl = 'data/magazines.json';
        $.getJSON(restUrl, function (data) {
            var contentHtml = $('#topicList').html();
            $.each(data, function (index, item) {
                var html = template.format(item.date, item.title,item.id);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#topicList", contentHtml);
            MedicalHome.local.setMagazineList(data);
        });
    },

    getQueryStringByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

};