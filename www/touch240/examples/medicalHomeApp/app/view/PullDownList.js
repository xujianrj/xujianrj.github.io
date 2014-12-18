var timeAgoInWords = function (date) {
    try {
        var now = Math.ceil(Number(new Date()) / 1000),
            dateTime = Math.ceil(Number(new Date(date)) / 1000),
            diff = now - dateTime,
            str;

        if (diff < 60) {
            return String(diff) + ' seconds ago';
        } else if (diff < 3600) {
            str = String(Math.ceil(diff / (60)));
            return str + (str == "1" ? ' minute' : ' minutes') + ' ago';
        } else if (diff < 86400) {
            str = String(Math.ceil(diff / (3600)));
            return str + (str == "1" ? ' hour' : ' hours') + ' ago';
        } else if (diff < 60 * 60 * 24 * 365) {
            str = String(Math.ceil(diff / (60 * 60 * 24)));
            return str + (str == "1" ? ' day' : ' days') + ' ago';
        } else {
            return Ext.Date.format(new Date(date), 'jS M \'y');
        }
    } catch (e) {
        return '';
    }
};

Ext.define('MedicalHome.view.PullDownList', {
//    extend: 'Ext.List',
    extend: 'Ext.Container',
    xtype: 'PullDownList',
    id: 'pullDownList',
    config: {
        layout: 'fit',
        //Note:scrollable here is prevent scroll vertical and horizontal at the same time.
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
        items: [
            {
                xtype: 'list',
                useSimpleItems: false,
                variableHeights: true,
                infinite: true,
                disableSelection: true,
                allowDeselect: false,
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                scrollToTopOnRefresh: false,
                store: 'Discussions',
                cls: 'dataview-basic',
                plugins: [
                    { xclass: 'Ext.plugin.ListPaging',
                        autoPaging: true
                    },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],
                emptyText: '<p class="no-searches">No tweets found matching that search</p>',
//                itemCls:'tenMargin',
                itemTpl: Ext.create('Ext.XTemplate',

                    '<div class="content tenMargin" style="padding-bottom: 10px;"><div class="name" style="text-align: left">{doctorName} {hospitalName}</div>',
                    '<div class="affiliation" style="text-align: left">{content}</div>' +
                        '<div class="img pullDownListItemImg" style="background-image: url(resources/image/default.png);"></div>',
                    '<div class="img pullDownListItemImg" style="background-image: url(resources/image/default.png);"></div>',
                    '<div class="img pullDownListItemImg" style="background-image: url(resources/image/default.png);"></div>',
                    '<div class="content" style="margin-top: 10px;margin-bottom:4px;float: left;">' +
                        '<span class="downloadIcon medicalIcon"></span><span>20</span>' +
                        '<span class="replyIcon medicalIcon" style="margin-left: 30px;"></span>20' +
                        '<span class="favoritesIcon medicalIcon" style="margin-left: 30px;"></span>20' +
                        '<span class="bookmarksIcon medicalIcon" style="margin-left: 30px;"></span>20' +
                        '</div>',
                    '</div>',
                    {
                        posted: timeAgoInWords
                    }
                )
            }
        ]


    }
});