Ext.Loader.setPath({
    'Ext': '../../src'
});

Ext.application({
    name: 'MedicalHome',
    requires: ['MedicalHome.store.Speakers','MedicalHome.util.Rest','MedicalHome.view.DiscussionItem'],

//    models:'Contact',

    controllers: ['Main'],
    views: [
        'Main', 'Icons', 'News', 'Me', 'Friends',
        'Clinic', 'YanTao', 'PullDownList', 'NewsNavigation','CreateTopic','AddDoctor',
        'FullContainer', 'YanTaoDetails','Topic','Magazine','Contacts','Workmates'
    ],
    models: ['Speaker', 'Contact', 'Discussion','Action','Workmate'],
    stores: [
        'Speakers', 'Discussions','Topics','Magazines','Contacts','Actions','Workmates'],


    launch: function () {
        MedicalHome.util.Rest.getData('ServerDiscussions.json');
//        setTimeout(function(){
        Ext.create('MedicalHome.view.FullContainer');
//        },2000);
          //Note: using the following code to adjustment ios status bar.
//        if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
//            Ext.select(".x-toolbar").applyStyles("height: 62px; padding-top: 15px;");
//        }

    }
});
