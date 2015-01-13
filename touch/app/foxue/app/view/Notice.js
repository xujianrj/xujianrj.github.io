Ext.define('fo.view.Notice', {
    extend: 'Ext.Container',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number'
    ],
    config: {
        id: 'noticeView',
        cls:'noticeViewCls',
        modal: false,
//        enter: 'top',
//        showAnimation: 'fadeIn',
//        exit: 'top',
//        hideAnimation: 'fadeOut',
//        duration:1000,
        bottom: 0,
        width: 100,
        height: 30,
        styleHtmlContent: true,
        scrollable: false,
        listeners:{
            initialize:function(){
                var left=Ext.Viewport.getWindowWidth()/2-50;
                this.setLeft(left);
            }
        }
    }
});
