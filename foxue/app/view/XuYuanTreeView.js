
Ext.define('fo.view.XuYuanTreeView', {
    extend: 'Ext.Container',
    config: {
        styleHtmlContent: true,
        layout: {
            type: 'fit'
        },
        cls:'xuYuanTreeCls',
        listeners:{
            initialize:function(){
                this.element.on('tap', function(){
                    Navigation.popBack();
                    Navigation.pushOrShowView('xuYuanSelectorView','fo.view.XuYuanSelectorView');
                }, this);
            }
        }
    }


});