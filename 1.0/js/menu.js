$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 500) {
        $('.menu').css('background-color','yellow');
    } else {
        $('.menu').css('background-color','blue');
    }
});