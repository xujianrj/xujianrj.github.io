/**
 * @class MedicalHome.controller.Main
 * @extends Ext.app.Controller
 *
 * This is an abstract base class that is extended by both the phone and tablet versions. This controller is
 * never directly instantiated, it just provides a set of common functionality that the phone and tablet
 * subclasses both extend.
 */
Ext.define('MedicalHome.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        /**
         * @private
         */
        viewCache: [],

        refs: {
            nav: '#globalNav',
            tabs:'#mainTabPanel',
            yiShengHui:'#yiShengHui',
            navAddButton:'#navAddButton',
            contactButton:'#contactButton',
            workmateButton:'#workmateButton',
            inviteDoctorButton:'#inviteDoctorButton',
//            createTopicButton: 'button[action=createTopic]',
//            addDoctorButton: 'button[action=addDoctor]',
            pullDownList:'#pullDownList'
        },

        control: {
            nav:{
                back:'onBackTap',
                swipe:'changeTab'
            },
            yiShengHui:{
                activeitemchange:'onYiShengHuiSectionChange'
            },
            pullDownList: {
                itemtap: 'onYanTaoItemClick',
                swipe:'changeTab'
            },
            workmateButton:{
                tap:'showWorkmates'
            },
            contactButton:{
                tap:'showContacts'
            },
            inviteDoctorButton:{
                tap:'showInviteFriendAction'
            },
            navAddButton:{
                tap:'navAddButtonClick'
            },
            tabs:{
                activeitemchange: 'showTab'
            }
        },

        routes: {
            'tab/:id': 'showTabById',
            'tab/:id/view/:xtypeId': 'showTabAndXType',
            'view/:xtypeId': 'showViewByXType'
        }

    },
    changeTab:function(event){
      debugger;
    },
    onBackTap:function(nav){
//        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
//            url: ''
//        }),true);
//        this.showTab();

    },
    showTabAndXType:function(id,xtypeId){
        this.getTabs().setActiveItem(parseInt(id));
        var isMainPanel=  this.getNav().getActiveItem().id=='mainTabPanel';
        this.getNavAddButton().setHidden(isMainPanel);
        this.getNav().push({
            xtype:xtypeId
        });
    },
    showViewByXType:function(xtypeId){
        var isMainPanel=  this.getNav().getActiveItem().id=='mainTabPanel';
        this.getNavAddButton().setHidden(isMainPanel);
        this.getNav().push({
            xtype:xtypeId
        });
    },
    showTabById:function(id){
        this.getTabs().setActiveItem(parseInt(id));
    },
    showTab:function(){
//        debugger;
        this.getNav().getNavigationBar().setTitle(this.getTabs().getActiveItem().config.title);
        switch (this.getTabs().getActiveItem().id){
            case 'mainTab1':
                this.getNavAddButton().setHidden(false);
                break;
            case 'mainTab2':
                this.getNavAddButton().setHidden(false);
                break;
            default :
                this.getNavAddButton().setHidden(true);
                break;
        }
    },
    onYiShengHuiSectionChange:function(view){
        debugger;
        var index=view.getActiveIndex();
        var yiShengHuiToolBar=Ext.getCmp('yiShengHuiToolBar');
        yiShengHuiToolBar.getItems()[index].setCls('active');

    },
    onYanTaoItemClick: function () {
        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'view/' + 'YanTaoDetails'
        }));
    },
    showWorkmates:function(){
        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'view/' + 'Workmates'
        }));
    },
    showContacts: function () {
        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'view/' + 'Contacts'
        }));
    },
    navAddButtonClick:function(){
        switch (this.getTabs().getActiveItem().id){
            case 'mainTab1':
                this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                    url: 'view/' + 'CreateTopic'
                }));
                break;
            case 'mainTab2':
                this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                    url: 'view/' + 'AddDoctor'
                }));
                break;
        }
    },
    showInviteFriendAction:function(){
        var items = [
            {

                text: 'QQ',
                ui: 'decline',
                scope: this,
                handler: function() {
                    this.actions.hide();
                }
            },
            {
                text: '微信',
                scope: this,
                handler: function() {
                    this.actions.hide();
                }
            },
            {
                text: '新浪微博',
                scope: this,
                handler: function() {
                    this.actions.hide();
                }
            },
            {
                xtype: 'button',
                text: '关闭',
                scope: this,
                handler: function() {
                    this.actions.hide();
                }
            }
        ];

        if (!this.actions) {
            this.actions = Ext.create('Ext.ActionSheet', {
                items: items
            });
        }

        Ext.Viewport.add(this.actions);
        this.actions.show();
    }


});
