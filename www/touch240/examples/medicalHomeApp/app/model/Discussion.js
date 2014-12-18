Ext.define('MedicalHome.model.Discussion', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'doctorName',
            'hospitalName',
            'content',
            'isPro',
            'responseCount',
            'agreeCount',
            'favCount',
            'shareCount'

        ]
    }
});
