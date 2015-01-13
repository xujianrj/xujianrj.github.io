Ext.define('fo.profile.Tablet', {
    extend: 'fo.profile.Base',

    config: {
    },

    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {

        var mainView = Ext.create('fo.view.MainView');

       Ext.Viewport.add(mainView);
        Ext.Viewport.setActiveItem(mainView);
        Rest.syncUserInfo();
    }
});
