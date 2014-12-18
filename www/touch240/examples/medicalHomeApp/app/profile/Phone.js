Ext.define('MedicalHome.profile.Phone', {
    extend: 'MedicalHome.profile.Base',

    config: {
        controllers: ['Main'],
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Phone; // || Ext.os.is.Desktop;
    },

    launch: function() {
        console.log('launch tabs');
        Ext.create('MedicalHome.view.BottomTabs');
//        Ext.create('MedicalHome.view.phone.Main');
        this.callParent();
    }
});
