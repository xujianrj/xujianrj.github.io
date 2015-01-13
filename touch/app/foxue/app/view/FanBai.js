Ext.define('fo.view.FanBai', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Audio'
    ],
    config: {
        fullscreen: true,
        id: 'fanBai',
        styleHtmlContent: true,
        style: 'background:#e5d8c0;',
//        layout: Ext.os.is.Android ? {
//            type: 'vbox',
//            pack: 'center',
//            align: 'center'
//        }
            layout: 'vbox',
        items: [
            {
                id:'musicText',
                height: 30,
                style:'text-align:center;line-height:30px;',
                html:'心经-王菲'
            } ,

            {
                id:'musicPlayerButtons',
                height: 80,
                layout:'hbox',
                style:'',
                items:[
                    {
                        flex:1
                    },
                    {
                        layout:'hbox',
                        xtype:'image',
						cls:"music_btn btn_prev",
                        style:'',
                        listeners:{
                            tap:function(){
                                if(Configuration.currentMusicIndex==0)
                                {
                                    return;
                                }
                           var store= Ext.data.StoreManager.lookup('musics');
                                Configuration.currentMusicIndex--;
                            var music=store.getAt(Configuration.currentMusicIndex);
                            var musicPlayer=Ext.getCmp('musicPlayer');
                                musicPlayer.setUrl(music.get('filename'));
                            musicPlayer.play();
                            var musicPlayButton=Ext.getCmp('musicPlayButton');
                            musicPlayButton.setSrc('resources/icons/fanbai/pause.png');
                            var musicText=Ext.getCmp('musicText');
                            musicText.setHtml(music.get('name'));
                            Configuration.isPlaying=true;
                        }
                        }
                    },
                    {
                        id:'musicPlayButton',
                        layout:'hbox',
                        xtype:'image',
						cls:"music_btn btn_play",
                        src:'resources/icons/fanbai/play.png',
                        listeners:{
                            tap:function(){
                                var musicPlayer=Ext.getCmp('musicPlayer');
                                Configuration.isPlaying=!Configuration.isPlaying;
                                if(Configuration.isPlaying)
                                {
                                    musicPlayer.play();
                                    this.setSrc('resources/icons/fanbai/pause.png');
                                }
                                else{
                                    musicPlayer.pause();
                                    this.setSrc('resources/icons/fanbai/play.png');
                                }
                            }
                        }


                    },
                    {
                        layout:'hbox',
                        xtype:'image',
						cls:"music_btn btn_next",
                        style:'',
                        listeners:{
                            tap:function(){
                                var store= Ext.data.StoreManager.lookup('musics');
                                if(Configuration.currentMusicIndex==store.getCount()-1)
                                {
                                    return;
                                }

                                Configuration.currentMusicIndex++;
                                var music=store.getAt(Configuration.currentMusicIndex);
                                var musicPlayer=Ext.getCmp('musicPlayer');
                                musicPlayer.setUrl(music.get('filename'));
                                musicPlayer.play();
                                var musicPlayButton=Ext.getCmp('musicPlayButton');
                                musicPlayButton.setSrc('resources/icons/fanbai/pause.png');
                                var musicText=Ext.getCmp('musicText');
                                musicText.setHtml(music.get('name'));
                                Configuration.isPlaying=true;
                            }
                        }
                    },

                    {
                        flex:1,
                        items:[
                            {
                                layout:'hbox',
                                xtype:'image',
                                cls:"music_btn btn_loopOnce",
                                id:'btnLoop',
                                listeners:{
                                    tap:function(){
                                        var musicPlayer=Ext.getCmp('musicPlayer');
                                        var loop=musicPlayer.getLoop();
                                        musicPlayer.setLoop(!loop);
                                        var cls=!loop?'btn_loopOnce':'btn_loop';
                                        Ext.getCmp('btnLoop').setCls(cls);

                                    }
                                }
                            },]
                    }

                ]
            } ,

            Ext.os.is.Android ?
            {
                id:'musicPlayer',
                xtype: 'audio',
                cls: 'myAudio',
                url: 'resources/music/1.mp3',
                loop: true,
                hidden:true,
                height: 100,
                enableControls: false,
                listeners:{
                    ended:function(){
                        var musicPlayer=Ext.getCmp('musicPlayer');
                        var loop=musicPlayer.getLoop();
                        if(loop)
                        {
                         return;
                        }
                        var store= Ext.data.StoreManager.lookup('musics');
                        if(Configuration.currentMusicIndex==store.getCount()-1)
                        {
                            Configuration.currentMusicIndex=0;
                        }
                        else{
                            Configuration.currentMusicIndex++;
                        }//list loop for music .
                        var music=store.getAt(Configuration.currentMusicIndex);
                        var musicPlayer=Ext.getCmp('musicPlayer');
                        musicPlayer.setUrl(music.get('filename'));
                        musicPlayer.play();
                        var musicPlayButton=Ext.getCmp('musicPlayButton');
                        musicPlayButton.setSrc('resources/icons/fanbai/pause.png');
                        var musicText=Ext.getCmp('musicText');
                        musicText.setHtml(music.get('name'));
                        Configuration.isPlaying=true;
                    }
                }
            } :
            {
                id:'musicPlayer',
                xtype: 'audio',
                cls: 'myAudio',
                url: 'resources/music/1.mp3',
                loop: true,
                hidden:true,
                height: 100,
                listeners:{
                    ended:function(){
                        var musicPlayer=Ext.getCmp('musicPlayer');
                        var loop=musicPlayer.getLoop();
                        if(loop)
                        {
                            return;
                        }
                        var store= Ext.data.StoreManager.lookup('musics');
                        if(Configuration.currentMusicIndex==store.getCount()-1)
                        {
                            Configuration.currentMusicIndex=0;
                        }
                        else{
                        Configuration.currentMusicIndex++;
                        }//list loop for music .
                        var music=store.getAt(Configuration.currentMusicIndex);
                        var musicPlayer=Ext.getCmp('musicPlayer');
//                        musicPlayer.setUrl('resources/music/'+ music.get('filename')+'.mp3');
                        musicPlayer.setUrl(music.get('filename'));
                        musicPlayer.play();
                        var musicPlayButton=Ext.getCmp('musicPlayButton');
                        musicPlayButton.setSrc('resources/icons/fanbai/pause.png');
                        var musicText=Ext.getCmp('musicText');
                        musicText.setHtml(music.get('name'));
                        Configuration.isPlaying=true;
                    }
                }
            },

            Ext.create('fo.view.MusicDataView'),

            {
                docked: 'bottom',
                xtype: 'toolbar',
                items: [
                    {
                        text: '返回', handler: function () {
                        Ext.Viewport.setActiveItem(0);
                    } }
                ]
            }
        ]
    }
});
