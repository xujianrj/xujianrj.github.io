
Ext.define('fo.view.ZaoWanKeView', {
    extend: 'Ext.Container',
    requires: ['fo.model.Text'],
    config: {
        layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
            type: 'fit',
            align: 'center',
            pack: 'center'
        },
        style: '',

        cls: 'demo-list',
        items: [{
            xtype: 'list',
            store: 'ZaoWanKes',
			cls: 'class_list',
            style:'',
//            onItemDisclosure:true,
			itemMap:{
				minimumHeight: 'auto'
			},
            disableSelection:true,
            itemTpl: '{name}',
            listeners:{
                itemsingletap: function (view, index, target, record, e, eOpts)
                {
                    var mainFoView=Ext.getCmp('mainFoView');

                    Ext.Ajax.request({
//                        url: 'resources/text/香.txt' ,
                        url: 'resources/text/zaoWanKe/'+ record.get('name')+'.txt' ,
                        success: function(response) {
                           var detailCard = Navigation.pushOrActivateView('zaoWanKeDetailsView','fo.view.ZaoWanKeDetailsView');
//                            if (detailCard == null) {
//                                detailCard=Ext.create('fo.view.ZaoWanKeDetailsView',{id:'zaoWanKeDetailsView'});
//                                detailCard.setHtml(response.responseText);
//                                mainFoView.push(detailCard);
//                            }
//                            else {
//                                detailCard.setHtml(response.responseText);
//                                detailCard.show();
//                            }
                            detailCard.setHtml(response.responseText);
                            var zaoWanKeTitle=Ext.getCmp('zaoWanKeTitle');
                            zaoWanKeTitle.setHtml(record.get('name'));
                        },
                        failure: function() {
                            detailCard.setHtml("Loading failed.");
                            mainFoView.push(detailCard);
                        }
                    });
                }

            }
        }
//            {
//                docked: 'bottom',
//                xtype: 'toolbar',
//                items: [
//                    {
//                        text: '返回', handler: function () {
//                        Ext.Viewport.setActiveItem(0);
//                    } }
//                ]
//            }
        ]
    }
});
