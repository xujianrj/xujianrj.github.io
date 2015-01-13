Ext.define("fo.store.Musics", {
    extend: 'Ext.data.Store',
//    alias: 'store.List',
    config: {
        model: 'fo.model.Music',
        storeId:'musics',
//        sorters: 'firstName',
//        grouper: function(record) {
//            return record.get('firstName')[0];
//        },
        data: [
            {id: 1, filename: 'resources/music/1.mp3',name:'心经-王菲'},
            {id: 2, filename: 'resources/music/2.mp3',name:'金刚萨埵百字明 - 仁钦林巴仁波切'},
            {id: 3, filename: 'resources/music/3.mp3',name:'白度母心咒 - 马常胜'},
            {id: 4, filename: 'resources/music/4.mp3',name:'大悲咒 - 齐豫'},
            {id: 5, filename: 'resources/music/5.mp3',name:'晨钟偈 - 佛光山梵呗团'}
//            {id: 1, filename: 'http://stream17.qqmusic.qq.com/35104753.mp3',name:'心经-王菲'},
//            {id: 2, filename: 'http://stream17.qqmusic.qq.com/34942446.mp3',name:'金刚萨埵百字明 - 仁钦林巴仁波切'},
//            {id: 3, filename: 'http://stream20.qqmusic.qq.com/31641711.mp3',name:'白度母心咒 - 马常胜'},
//            {id: 4, filename: 'http://stream15.qqmusic.qq.com/32553463.mp3',name:'大悲咒 - 齐豫'},
//            {id: 5, filename: 'http://stream20.qqmusic.qq.com/31484166.mp3',name:'晨钟偈 - 佛光山梵呗团'}
//            {id: 1, filename: 'resources/music/南無观世音菩萨 哲悟法师.mp3',name:'南無观世音菩萨 哲悟法师'},
//            {id: 2, filename: 'resources/music/南無观世音菩萨 寺院.mp3',name:'南無观世音菩萨 寺院'},
//            {id: 3, filename: 'resources/music/南無观世音菩萨 新加坡净宗学会.mp3',name:'南無观世音菩萨 新加坡净宗学会'},
//            {id: 4, filename: 'resources/music/南無观世音菩萨 茉莉花调.mp3',name:'南無观世音菩萨 茉莉花调'},
//            {id: 5, filename: 'resources/music/南無观世音菩萨(春朝调).mp3',name:'南無观世音菩萨(春朝调)'},
//            {id: 6, filename: 'resources/music/大悲咒 国语唱颂完美版.mp3',name:'大悲咒 国语唱颂完美版'},
//            {id: 7, filename: 'resources/music/大悲咒 灵岩山沙弥念诵.mp3',name:'大悲咒 灵岩山沙弥念诵'},
//            {id: 8, filename: 'resources/music/大悲咒寺 院唱诵.mp3',name:'大悲咒寺 院唱诵'},
//            {id: 9, filename: 'resources/music/妙法莲华经观世音菩萨普门品 读诵女声.mp3',name:'妙法莲华经观世音菩萨普门品 读诵女声'},
//            {id: 10, filename: 'resources/music/观世音菩萨 陈星.mp3',name:'观世音菩萨 陈星'},
//            {id: 11, filename: 'resources/music/观音灵感真言 舞曲节奏.mp3',name:'观音灵感真言 舞曲节奏'},
//            {id: 12, filename: 'resources/music/观音菩萨灭业障真言.mp3',name:'观音菩萨灭业障真言'}
        ]
    }
});
