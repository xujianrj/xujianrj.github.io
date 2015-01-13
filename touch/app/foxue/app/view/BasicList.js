Ext.define('fo.view.BasicList', {
    extend: 'Ext.Container',
    requires: ['fo.model.Text'],
    config: {
        layout:'fit',
//        cls: 'demo-list',
        items: [{
            width: '100%',
            height:  '100%',
            xtype: 'list',
            store: 'BaiKes',
            style:'',
//            onItemDisclosure:true,
            itemTpl: '{name}',
			itemMap:{
				minimumHeight: 'auto'
			},
            cls:'class_list',
            listeners:{
                itemsingletap: function (view, index, target, record, e, eOpts){
//                        Ext.Viewport.setActiveItem(0);
                        var mainFoView=Ext.getCmp('mainFoView');
                        var detailCard=Ext.create('fo.view.TextDetailsView');
//                        Ext.Ajax.request({
//                            url: 'resources/text/baiKe/'+ record.get('name')+'.txt' ,
//
//                            success: function(response) {
//
//                                detailCard.setHtml(response.responseText);
                    var changShiUrl=record.get('url');
                            detailCard.setChangShiUrl(changShiUrl);
                                mainFoView.push(detailCard);
//                            },
//                            failure: function() {
//                                detailCard.setHtml("Loading failed.");
//                                mainFoView.push(detailCard);
//                            }
//                        });
//                    var changShiUrl=record.get('url');
//                    window.location.href=changShiUrl;
//                    window.open(changShiUrl);
//                    Ext.data.JsonP.request({
////                        url: 'resources/text/baiKe/'+ record.get('name')+'.txt' ,
//                        url:'http://rufodao.qq.com/a/20141009/034668.htm',
//                        success: function(response) {
//                            detailCard.setHtml(response.responseText);
//                            mainFoView.push(detailCard);
//                        },
//                        failure: function() {
//                            detailCard.setHtml("Loading failed.");
//                            mainFoView.push(detailCard);
//                        }
//                    });


                }

                }
        }
        ]
    }
});
