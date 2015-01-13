
Ext.define('fo.view.ShiMiaoListView', {
    extend: 'Ext.Container',
    requires: ['fo.model.Text'],
    config: {
        layout:'fit',
//        cls: 'demo-list',
        items: [{
            width: '100%',
            height:  '100%',
            xtype: 'list',
            store: 'ShiMiaos',
            itemTpl: '{name}',
			itemMap:{
				minimumHeight: 'auto',
			},
            cls:'class_list',
            listeners:{
                itemsingletap: function (view, index, target, record, e, eOpts){
                        Ext.Viewport.setActiveItem(0);
                        var mainFoView=Ext.getCmp('mainFoView');
                        var detailCard=Ext.create('fo.view.TextDetailsView');
                        Ext.Ajax.request({
                            url: 'resources/text/shiMiao/'+ record.get('name')+'.txt' ,
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
//                itemsingletap:function(){
//                    Ext.Ajax.request({
//                        url: 'resources/text/香.txt' ,
//                        success: function(response) {
//                            var mainFoView=Ext.getCmp('mainFoView');
//                            var detailCard=Ext.create('fo.view.TextDetailsView');
//                            detailCard.setHtml(response.responseText);
////                            Ext.Viewport.add(detailCard);
//                            mainFoView.push(detailCard);
////                            Ext.Viewport.setActiveItem(detailCard);
//                        },
//                        failure: function() {
//                            var detailCard=Ext.create('Ext.Panel');
//                            detailCard.setHtml("Loading failed.");
//                            mainFoView.push(detailCard);
//                        }
//                    });
//                }

                }
        }
        ]
    }
});
