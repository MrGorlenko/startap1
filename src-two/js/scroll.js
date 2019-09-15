$(document).ready(function(){
    $("#menu-desktop").on("click","a",function(event){
        event.preventDefault();
        var elem  = $(this).attr('href'),
            top = $(elem).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#menu").on("click","a",function(event){
        event.preventDefault();
        var elem  = $(this).attr('href'),
            top = $(elem).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#menu-two").on("click","a",function(event){
        event.preventDefault();
        var elem  = $(this).attr('href'),
            top = $(elem).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });
});

