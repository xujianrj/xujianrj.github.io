var MedicalHome = {
    isLocalDebug: true
};
MedicalHome.util = {
};
MedicalHome.local = {
    getDiscussList: function () {
       return JSON.parse(localStorage.getItem('discussList'));

    },
    setDiscussList: function (data) {
        return localStorage.setItem('discussList',JSON.stringify(data));
    },
    getTopicList: function () {
        return JSON.parse(localStorage.getItem('topicList'));
    },
    setTopicList: function (data) {
        return localStorage.setItem('topicList',JSON.stringify(data));
    },
    getMagazineList: function () {
        return JSON.parse(localStorage.getItem('magazineList'));
    },
    setMagazineList: function (data) {
        return localStorage.setItem('magazineList',JSON.stringify(data));
    },
    getContacts: function () {
        return JSON.parse(localStorage.getItem('contacts'));
    },
    setContacts: function (data) {
        return localStorage.setItem('contacts',JSON.stringify(data));
    },
    getFriends: function () {
        return JSON.parse(localStorage.getItem('friends'));
    },
    setFriends: function (data) {
        return localStorage.setItem('friends',JSON.stringify(data));
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