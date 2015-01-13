//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

Ext.application({
    name: "fo",
    startupImage: {
        '320x460': 'resources/startup/320x460.png', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },
    phoneStartupScreen: 'resources/startup/640x920.png',
    tabletStartupScreen:  'resources/startup/640x920.png',

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@144.png'
    },
    models: [ 'FoXiang',
        'Music',
        'GongXiang', 'LampOil', 'Text', 'Fruit', 'Flower','Animal','ZaoWanKe'],

    stores: [ 'FoXiangs', 'GongXiangs',
        'LampOils', 'Fruits', 'Flowers',
        'Musics',
       'Animals','Animal2s','ZaoWanKes','BaiKes','ShiMiaos','FoJings'
        ],

    views: [
        'HomeView',
        'MainView',
        'XuYuanForm', 'MusicDataView',
        'Settings', 'InlineDataView',
        'BasicList', 'FanBai', 'GongXiangListView', 'FlowerListView','ChanHuiFinishView',
        'Notice','Settings',
        'FruitListView', 'ChanHuiForm', 'FangShengView', 'TextDetailsView','AnimalListView',
        'ZaoWanKeView','LampOilListView','ShiMiaoListView','ZaoWanKeDetailsView','XuYuanSelectorView',
        'XuYuanTreeView','FoJingListView'
        ],

    requires: [
        'Ext.Container',
        'Ext.Button',
        'Ext.Toolbar',
        'Ext.TitleBar',
        'Ext.data.JsonP',
        'Ext.Ajax',
        'Ext.tab.Panel',
        'Ext.MessageBox',
        'Ext.XTemplate',
        'fo.store.FoXiangs',
        'fo.store.Musics',
        'fo.model.User',
        'Rest',
        'Navigation',
        'Configuration',
        'Ext.ux.field.TimePicker'
    ],

    launch: function () {

        Ext.define('MyAccount', { extend: 'Ext.data.Model', singleton: true, fields: [
          'user'
        ] });
        Rest.syncUserInfo();
        var notice = Ext.create('fo.view.Notice');
        Ext.Viewport.add(notice);
    },
    showFeature: function () {
        var key = null;
        var value = false;
        var content = "";
        var text = '';
        console.log('Available features:');
        for (key in Ext.feature.has) {
            value = Ext.feature.has[key];
            text = key + ': ' + value;
            if (true) {
                content += text + '\r\n';
            }
            console.log(text);
        }
    },
    getQueryStringByName:function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
},
    showDeviceOS: function () {
        Ext.Msg.alert("INFO", content);
        if (Ext.os.is.MacOS)
            Ext.Msg.alert("INFO", "Welcome MacOS user!");
        if (Ext.os.is.Blackberry)
            Ext.Msg.alert("INFO", "Welcome Blackberry user!");
        if (Ext.os.is.iPad)
            Ext.Msg.alert("INFO", "Welcome iPad user!");
        if (Ext.os.is.Windows) {
            var str = "Welcome Windows user!";
            if (Ext.os.deviceType === "Desktop")
                str += "Looks like you are running this sample on Desktop";
            Ext.Msg.alert("INFO", str);
        }
    }
});


