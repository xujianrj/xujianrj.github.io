Ext.define('MedicalHome.util.Proxy', {
    singleton: true,
    requires: ['Ext.data.JsonP'],

    process: function (url) {
        var speakerStore = Ext.getStore('Speakers'),
            speakerIds = [],
            speakerModel;

        Ext.data.JsonP.request({
            url: url,
            callbackName: 'feedCb',

            success: function (data) {
                Ext.Array.each(data.proposals, function (proposal) {
                    Ext.Array.each(proposal.speakers, function (speaker) {
                        // don't add duplicates or items with no photos.
                        if (speakerIds.indexOf(speaker.id) == -1 && speaker.photo && speakerIds.length < 25) {
                            speakerIds.push(speaker.id);

                            speakerModel = Ext.create('MedicalHome.model.Speaker', speaker);
                            speakerStore.add(speakerModel);
                        }
                    });
                });
            }
        });
    }
});

Ext.define('MedicalHome.store.Speakers', {
    extend: 'Ext.data.Store',
    pageSize: 1,
    autoLoad: false,
    clearOnPageLoad: true,
    config: {
        model: 'MedicalHome.model.Speaker'
    },
    listeners: {
        beforeload: function (store) {
            MedicalHome.util.Proxy.process('feed.js');
        }
    }
});
