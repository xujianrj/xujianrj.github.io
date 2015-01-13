
Ext.define('fo.view.FoJingListView', {
    extend: 'Ext.Container',
    requires: ['fo.model.Text'],
    config: {
        layout:'fit',
        items: [{
            width: '100%',
            height:  '100%',
            xtype: 'list',
            store: 'FoJings',
            itemTpl: '{name}',
			itemMap:{
				minimumHeight: 'auto'
			},
            cls:'class_list',
            listeners:{
                itemsingletap: function (view, index, target, record, e, eOpts){
                        Ext.Viewport.setActiveItem(0);
                        var mainFoView=Ext.getCmp('mainFoView');
                        var detailCard=Ext.create('fo.view.TextDetailsView');
                        Ext.Ajax.request({
                            url: 'resources/text/foJing/'+ record.get('name')+'.txt' ,
                            success: function(response) {

                                detailCard.setHtml(response.responseText);
                                mainFoView.push(detailCard);
                            },
                            failure: function() {
                                detailCard.setHtml("Loading failed.");
                                mainFoView.push(detailCard);
                            }
                        });
                }
                }
        }
        ]
    }
});
