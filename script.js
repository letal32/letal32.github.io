$(document).ready(function () {
    
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 100) {
            $('nav').removeClass('navbar-basic');
            $('nav').addClass('navbar-scroll');
        } else {
            $('nav').addClass('navbar-basic');
            $('nav').removeClass('navbar-scroll'); 
        }
    });

    $("nav").find("a").click(function(e) {
        e.preventDefault();
        const section = $(this).attr("href");
        const offTop = $(section).offset().top;
        
        $(window).scrollTop(offTop-50);
        
    });

});