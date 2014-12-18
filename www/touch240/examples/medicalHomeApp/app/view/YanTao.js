    Ext.define('MedicalHome.view.YanTao', {
        xtype:'YanTao',
        id:'yaoTaoView',
    extend: 'Ext.Container',
    requires: ['MedicalHome.model.Speaker'],
    config: {
        layout: 'fit',
        cls: 'ks-basic',
        plugins: [
            { xclass: 'Ext.plugin.ListPaging' },
            { xclass: 'Ext.plugin.PullRefresh' }
        ],
        items: [{
            xtype: 'dataview',
            scrollable: {
                direction: 'vertical'
            },

            cls: 'dataview-basic',
            itemTpl: '<div class="img" style="background-image: url({photo});"></div><div class="content"><div class="name">{first_name} {last_name}</div><div class="affiliation">{affiliation}</div></div>',
            store: 'Speakers'
        }]
    }
});
