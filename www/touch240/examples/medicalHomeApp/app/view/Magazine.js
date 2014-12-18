
Ext.define('MedicalHome.view.Magazine', {
    extend: 'Ext.List',
    xtype: 'Magazine',
    id: 'magazines',
    config: {
        scrollable: {
            directionLock: true,
            direction: 'vertical',
            momentumEasing:  {
                momentum: {
                    acceleration: 30,
                    friction: 0.5
                },
                bounce: {
                    acceleration: 0.0001,
                    springTension: 0.9999
                },
                minVelocity: 3
            },
            outOfBoundRestrictFactor: 0
        },
        useSimpleItems: false,
        variableHeights: true,
        infinite: true,
        disableSelection: true,
        allowDeselect: false,
        scrollToTopOnRefresh: false,

        store:
            'Magazines',
        cls: 'dataview-basic',
        plugins: [
            { xclass: 'Ext.plugin.ListPaging',
                autoPaging: true
            },
            { xclass: 'Ext.plugin.PullRefresh' }
        ],
        emptyText: '<p class="no-searches">No tweets found matching that search</p>',
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="img pullDownListItemImg" style="background-image: url({photo});"></div>',
            '<div class="content"><div class="name">{doctorName} {hospitalName}</div>',
            '<div class="affiliation">{content}</div></div>',
            {
                posted: timeAgoInWords
            }
        ),
        listeners: {
        }
    }
});