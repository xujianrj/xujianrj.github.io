Ext.define('MedicalHome.view.Workmates', {
    xtype: 'Workmates',
    id: 'workmates',
    extend: 'Ext.Container',
    requires: ['MedicalHome.model.Contact'],
    config: {
        fullscreen: true,
        styleHtmlContent:true,
        layout: 'vbox',
        cls: 'ks-basic',
        items: [
            {
                xtype: 'toolbar',
                docked:'top',
                items: [
                    {
                        xtype: 'selectfield',
                        options: [
                            {text: '内科',  value: 'first'},
                            {text: '妇科', value: 'second'},
                            {text: '神经科',  value: 'third'}
                        ]
                    },
                    {
                        xtype: 'searchfield',
                        placeHolder:'Search',
                        name:'searchfield'
                    }
                ]
            },
            {
                flex:1,
                xtype: 'list',
                scrollable: {
                    direction: 'vertical'
                },
                grouped: true,
                cls: 'dataview-basic',
                itemTpl: '<div class="img" style="background-image: url({photo});"></div>' +
                    '<div class="content"><div class="name">{firstName} {lastName}</div>',
                store: 'Workmates'
            }
        ]
    }
});
