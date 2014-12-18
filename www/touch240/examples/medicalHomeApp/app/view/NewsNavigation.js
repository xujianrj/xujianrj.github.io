Ext.define('MedicalHome.view.NewsNavigation', {
    extend: 'Ext.NavigationView',
    xtype: 'NewsNavigation',

    config: {
//        navigationBar:false,
        items: [
            {

                title: 'First',
                items: [
                    {
                        xtype: 'PullDownList'
                    }
                ]
            }
        ]
//        html:'这里是医脉'
    }
});
