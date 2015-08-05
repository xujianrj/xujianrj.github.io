

var menuDisabled = false;

jQuery(function($) {

    $(window).load(function() { // makes sure the whole site is loaded
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 170,
            itemMargin: 5,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel",
            start: function(slider){
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('#main-wrapper').delay(350).css({'overflow':'visible'});
            }
        });
    });
    
    $(document).ready( function() {        

        if($(window).width() > 767) {
           var navWidth = $('.navbar .navbar-nav').width();

            $('hgroup').css("maxWidth",navWidth + "px");
            //Note:make the image slider full width.
//            $('.templatemo-content').css("maxWidth",navWidth + "px");
            $('.footer-wrapper').css("maxWidth",navWidth + "px");
        }

        $('.site-name').click(function(){
            location.reload();
        });   
		

        // backstretch for background image
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 400});

        $(".nav a").on('click',function(e){
            if( $(this).hasClass("external") ) {
                return;
            }
            e.preventDefault();
            if (menuDisabled == false) // check the menu is disabled?
            {
                menuDisabled = true; // disable the menu
                
                var name = $(this).attr('href');
                $('.nav li').removeClass('active');

                var menuClass = $(this).parent('li'); // .attr('class')
                $(menuClass).addClass('active');
                if(name.indexOf('package')>-1){
                    window.location.href=name;
                    return;
                }
                // get image url and assign to backstretch for background
                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 400}); //backstretch for background fade in/out
                
                // content slide in/out
                $("section.active").animate({left:-$("section.active").outerWidth()}, 300,function(){
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name+"-text").removeClass("inactive");
                    $(name+"-text").css({left:'703px', top:'0px'});
                    $(name+"-text").show();
                    $(name+"-text").animate({left:'0px'}, 300,function(){
                        $(this).addClass("active");
                        
//                        google.maps.event.trigger(map, 'resize'); // resize map
                        $.backstretch("resize"); // resize the background image
                        $(window).resize();
                        
                        menuDisabled = false; // enable the menu
                    });
                });                
            }
            return;
        });
        loadPosts();


    }); // document.ready

});

var map = '';

function initialize() {
    return;
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(16.8496189,96.1288854)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
}

function loadGoogleMap(){
    // load google map
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
    'callback=initialize';
    document.body.appendChild(script);
}

function loadPosts(){
   var template=' <a href="{0}">{1} <span style="float: right">{2}</span></a>'+
        '<br><span>{3}</span><br>';
    $.get('posts.json',function(res){
        console.log(res);
        $.each(res,function(index,item){
            $('#postContainer').append(template.format(item.url,item.name,item.date,item.desc));
        });
    })
}

function onSectionButtonClick(self){
    var name = $(self).attr('href');
    // get image url and assign to backstretch for background
    var imgSrc = $("img"+name+"-img").attr('src');
    $.backstretch(imgSrc, {speed: 400}); //backstretch for background fade in/out
    $("section.active").animate({left:-$("section.active").outerWidth()}, 300,function(){
        $(this).removeClass("active");
        $(this).hide();
        $(name+"-text").removeClass("inactive");
        $(name+"-text").css({left:'703px', top:'0px'});
        $(name+"-text").show();
        $(name+"-text").animate({left:'0px'}, 300,function(){
            $(this).addClass("active");

//                        google.maps.event.trigger(map, 'resize'); // resize map
            $.backstretch("resize"); // resize the background image
            $(window).resize();

            menuDisabled = false; // enable the menu
        });
    });
}