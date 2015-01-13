Ext.define('Navigation', {
   singleton:true,
   showView:function(viewId,viewClass){
        var view=Ext.getCmp(viewId);
        if(view==null)
        {
            view = Ext.create(viewClass,{id:viewId});
            Ext.Viewport.add(view);
        }
        else{
            view.show();
        }
    },
    goHome:function(){
        var mainFoView = Ext.getCmp('mainFoView');
        var homeView=Ext.getCmp('homeView');
        mainFoView.pop(mainFoView.getItems().length - 1);
        mainFoView.setActiveItem(homeView);
        if(Ext.getCmp('xuYuanForm'))
        {
            Ext.getCmp('xuYuanForm').hide();
        }
        if(Ext.getCmp('chanHuiForm'))
        {
            Ext.getCmp('chanHuiForm').hide();
        }
    },
    showOrActivateView:function(viewId,viewClass){
        var view=Ext.getCmp(viewId);
        if(view==null)
        {
            view = Ext.create(viewClass,{id:viewId});
            Ext.Viewport.add(view);
        }
        else{
            Ext.Viewport.setActiveItem(view);

        }
    },
    pushOrActivateView:function(viewId,viewClass){
        var mainFoView = Ext.getCmp('mainFoView');
        var view=Ext.getCmp(viewId);
        if(view==null)
        {
            view = Ext.create(viewClass,{id:viewId});
            mainFoView.push(view);
        }
        else{
            mainFoView.setActiveItem(view);
        }
        return view;
    },
    pushOrShowView:function(viewId,viewClass){
        var mainFoView = Ext.getCmp('mainFoView');
        var view=Ext.getCmp(viewId);
        if(view==null)
        {
            view = Ext.create(viewClass,{id:viewId});
            mainFoView.push(view);
        }
        else{
            view.show();
        }
    },
    popBack:function(){
        var mainFoView = Ext.getCmp('mainFoView');
        mainFoView.pop(1);
    }
});