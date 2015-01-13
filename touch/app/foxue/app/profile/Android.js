Ext.define('fo.profile.Android', {
    extend: 'fo.profile.Base',

    config: {
        views: ['MainView','HomeView']
    },

    isActive: function() {
        return Ext.os.is.Android;
    },

    launch: function() {

      var mainView=  Ext.create('fo.view.android.MainView');
        Ext.Viewport.setActiveItem(mainView);
       Ext.Viewport.add(mainView);
    }
});
