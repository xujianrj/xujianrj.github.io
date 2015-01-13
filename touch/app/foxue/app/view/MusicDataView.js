Ext.define('fo.view.MusicDataView', {
    extend: 'Ext.Container',
    requires: ['fo.model.Music'],
    config: {
        id:'musicDataView',
        flex:1,
        layout: 'fit',
        cls: 'ks-basic',
        items: [{
            xtype: 'dataview',
            scrollable: {
                direction: 'vertical'
            },
            cls: 'dataview-basic',
            //itemTpl: '<div style="float: left;"><img src="resources/icons/fanbai/playthis.png" /></div><div class="name" style="font-size: 20px;padding-top: 4px;padding-left: 50px">{name}</div>',
			itemTpl: '<span class="music_name">{name}</span>',
//            store:'Musics'
           store: { xclass : 'fo.store.Musics'},
            listeners: {
                itemsingletap: function (view, index, target, record, e, eOpts){
                    Configuration.currentMusicIndex=index;
                        var musicPlayer=Ext.getCmp('musicPlayer');
//                        musicPlayer.setUrl('resources/music/'+ record.get('name')+'.mp3');
                    musicPlayer.setUrl(record.get('filename'));
                        musicPlayer.play();
                    var musicPlayButton=Ext.getCmp('musicPlayButton');
                    musicPlayButton.setSrc('resources/icons/fanbai/pause.png');
                    var musicText=Ext.getCmp('musicText');
                    musicText.setHtml(record.get('name'));
                    Configuration.isPlaying=true;
                }
            }
        }]

    }
});