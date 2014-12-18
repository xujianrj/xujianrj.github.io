/**
 * Created by xujian on 12/18/14.
 */
Ext.define('MedicalHome.util.Rest', {
    restServer: 'http://localhost/MedicalHome/Service/',
    singleton: true,
    login: function () {
        var restRrl = this.restServer + 'index.php/Home/User/login?id=1';
        Ext.Ajax.request({
            url: restRrl,
            success: function (response) {
            },
            failure: function () {
            }
        });
    },
    getData: function (url) {
        var discussionsStore = Ext.getStore('Discussions');
        Ext.Ajax.request({
            url: url,
            success: function (response) {
                var datas = eval("(" + response.responseText + ")");
                Ext.Array.each(datas, function (discussion) {
                    var speakerModel = Ext.create('MedicalHome.model.Discussion', discussion);
                    discussionsStore.add(speakerModel);
                });
            }
        });
    },
    logout: function () {
        var userSettings = '';
        var restRrl = Rest.restServer + 'index.php/Home/User/logout?id=1';
        Ext.Ajax.request({
            url: restRrl,
            params: userSettings,
            success: function (response) {
            },
            failure: function () {
            }
        });
    },
    getQueryStringByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

});