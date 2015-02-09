var MedicalHome = {
    isDebug: true
};
MedicalHome.util = {
};
MedicalHome.data = {
    departments: [
        {
            "name": "内科",
            "code": "1"
        },
        {
            "name": "外科",
            "code": "1"
        },
        {
            "name": "妇产科学",
            "code": "1"
        },
        {
            "name": "生殖中心",
            "code": "1"
        },
        {
            "name": "儿科学",
            "code": "1"
        },
        {
            "name": "骨外科",
            "code": "1"
        },
        {
            "name": "眼科学",
            "code": "1"
        },
        {
            "name": "口腔科学",
            "code": "1"
        },
        {
            "name": "耳鼻咽喉头颈科",
            "code": "1"
        },
        {
            "name": "肿瘤科",
            "code": "1"
        },
        {
            "name": "皮肤性病科",
            "code": "1"
        },
        {
            "name": "男科",
            "code": "1"
        },
        {
            "name": "皮肤美容",
            "code": "1"
        },
        {
            "name": "烧伤科",
            "code": "1"
        },
        {
            "name": "精神心理科",
            "code": "1"
        },
        {
            "name": "中医学",
            "code": "1"
        },
        {
            "name": "中西医结合科",
            "code": "1"
        },
        {
            "name": "传染病科",
            "code": "1"
        },
        {
            "name": "结核病科",
            "code": "1"
        },
        {
            "name": "介入医学科",
            "code": "1"
        },
        {
            "name": "康复医学科",
            "code": "1"
        },
        {
            "name": "运动医学科",
            "code": "1"
        },
        {
            "name": "麻醉医学科",
            "code": "1"
        },
        {
            "name": "职业病科",
            "code": "1"
        },
        {
            "name": "地方病科",
            "code": "1"
        },
        {
            "name": "营养科",
            "code": "1"
        },
        {
            "name": "医学影像学",
            "code": "1"
        },
        {
            "name": "病理科",
            "code": "1"
        }
    ]
}
MedicalHome.local = {
    getDiscussList: function () {
        return JSON.parse(localStorage.getItem('discussList'));

    },
    setDiscussList: function (data) {
        return localStorage.setItem('discussList', JSON.stringify(data));
    },
    getTopicList: function () {
        return JSON.parse(localStorage.getItem('topicList'));
    },
    setTopicList: function (data) {
        return localStorage.setItem('topicList', JSON.stringify(data));
    },
    getMagazineList: function () {
        return JSON.parse(localStorage.getItem('magazineList'));
    },
    setMagazineList: function (data) {
        return localStorage.setItem('magazineList', JSON.stringify(data));
    },
    getContacts: function () {
        return JSON.parse(localStorage.getItem('contacts'));
    },
    setContacts: function (data) {
        return localStorage.setItem('contacts', JSON.stringify(data));
    },
    getMightKnow: function () {
        return JSON.parse(localStorage.getItem('mightKnow'));
    },
    setMightKnow: function (data) {
        return localStorage.setItem('mightKnow', JSON.stringify(data));
    },
    getMessages: function () {
        return JSON.parse(localStorage.getItem('messages'));
    },
    setMessages: function (data) {
        return localStorage.setItem('messages', JSON.stringify(data));
    }

};
MedicalHome.auth = {
    checkLogin: function () {
        var account = localStorage.getItem('account');
        if (account == null) {
            $.ui.loadContent('#login', true, true, 'none');
            return false;
        }
        else {
            return true;
        }
    },
    login: function () {
        var panelAfterLogin = $('#panelAfterLogin').val();
        $.ui.loadContent('#' + panelAfterLogin, true, true, 'none');
        return;
        var username = $('#login_cellphone').val();
        var password = $('#login_password').val();
        var sha1Password = hex_sha1(password);
        var restUrl = MedicalHomeServer.address.login(username, password);
        JSONP.invoke(restUrl, function (data) {
            console.log(data);
            if (data == null) {
                console.log("login fail");
                //Note:login fail.
            }
            else {
                var account = {};
                account.username = username;
                account.password = sha1Password;
                localStorage.setItem('account', account);
                var panelAfterLogin = $('#panelAfterLogin').val();
                $.ui.loadContent('#' + panelAfterLogin);
            }

        });
    }

};