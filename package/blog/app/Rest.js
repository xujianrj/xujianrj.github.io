MedicalHome.util.Rest = {
    login: function (username, password) {
        var restUrl = MedicalHomeServer.address.login(username, password);
        JSONP.invoke(restUrl, function (data) {
            console.log(data);
        });
    },

    loadBlogs: function (restUrl) {
        var template =MedicalHome.viewController.mingYiHui.topicItemTemplate;
        $.getJSON(restUrl, function (data) {
            var contentHtml = $('#topicList').html();
            $.each(data, function (index, item) {
                var html = template.format(item.title,item.date,item.url);
                contentHtml += html;
            });
            $.ui.updateContentDiv("#topicList", contentHtml);
        });
    },


    getQueryStringByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

};