$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav nav-link').on('click', function () {
        $('menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    /*$('nav a[href*="#"]').on('click',function(){
        $('html, body').animate(keyframes: {
            scrollTop: $($(this).attr('href')).offset().top -100
        }, options:2000);
    });

    $('nav a[href*="#"]').on('click',function(){
        $('html, body').animate(keyframes: {
            scrollTop: 0
        }, options:2000);
    });

    /AOS.init(
        {
            easing: 'ease',
            duration: 1000,
            once:true,
        }
    );*/
});