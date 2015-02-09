var MedicalHomeServer = {
    restServer: 'http://192.168.1.98:8088/',
    address:{
        login:function(username,password){
            var sha1Password = hex_sha1(password);
            var formatUrl=MedicalHomeServer.restServer+'doctor.action.php/login?telephone={0}&pwd={1}';
            var restUrl =formatUrl.format(username,sha1Password) ;
            return restUrl;
        },
        getDiscussDetails:function(discussId){
            var formatUrl=MedicalHomeServer.restServer+'doctor.action.php/getDiscuss?id={0}';
            var restUrl =formatUrl.format(discussId) ;
            return restUrl;
        },
        getTopicDetails:function(topicId){
            var formatUrl=MedicalHomeServer.restServer+'doctor.action.php/getTopic?id={0}';
            var restUrl =formatUrl.format(topicId) ;
            return restUrl;
        },
        getMagazineDetails:function(magazineId){
            var formatUrl=MedicalHomeServer.restServer+'doctor.action.php/getMagazine?id={0}';
            var restUrl =formatUrl.format(magazineId) ;
            return restUrl;
        },
        getTopicBySubject:function(subjectCode,pageIndex){
            if(MedicalHome.isDebug){
                return 'data/topicsInSubject.json';
            }
            var formatUrl=MedicalHomeServer.restServer+'topic.action.php/get?id={0}&pageIndex={1}';
            var restUrl =formatUrl.format(keshiCode,pageIndex) ;
            return restUrl;
        },
        getFriends:function(){
            return 'data/friends.json';
        }
    }

};