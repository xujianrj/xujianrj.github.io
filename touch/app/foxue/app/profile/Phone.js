Ext.define('fo.profile.Phone', {
    extend: 'fo.profile.Base',

    config: {
    },

    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
    }
});
