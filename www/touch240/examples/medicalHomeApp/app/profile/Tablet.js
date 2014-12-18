Ext.define('MedicalHome.profile.Tablet', {
    extend: 'MedicalHome.profile.Base',

    config: {
        controllers: ['Main'],
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {
//        Ext.create('MedicalHome.view.tablet.Main');

        this.callParent();
    }
});
