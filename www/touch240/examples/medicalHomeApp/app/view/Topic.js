Ext.define('MedicalHome.view.Topic', {
    extend: 'Ext.List',
    xtype: 'Topic',
    id: 'topics',
    config: {
        scrollable: {
            directionLock: true,
            direction: 'vertical',
            momentumEasing: {
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
//        defaultType: 'mydataitem',
//        useComponents: true,
        store: 'Topics',
        cls: 'dataview-basic',
        plugins: [
            { xclass: 'Ext.plugin.ListPaging',
                autoPaging: true
            },
            { xclass: 'Ext.plugin.PullRefresh' }
        ],
        emptyText: '<p class="no-searches">No tweets found matching that search</p>',
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="img pullDownListItemImg" style="background-image: url(resources/image/default.png);"></div>',
            '<div class="content"><div class="name">{doctorName} {hospitalName}</div>',
            '<div class="affiliation">{content}</div>' +
                '<div class="content" style="margin-top: 10px;">' +
                '<span class="downloadIcon medicalIcon"></span><span>20</span>' +
                '<span class="replyIcon medicalIcon"></span>20' +
                '<span class="favoritesIcon medicalIcon"></span>20' +
                '<span class="bookmarksIcon medicalIcon"></span>20' +
                '</div>' +
                '</div>',
            {
                posted: timeAgoInWords
            }
        ),
        itemCls: 'grayBackground'
    }
});