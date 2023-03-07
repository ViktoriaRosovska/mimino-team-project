$(document).ready(function(){
    $('.rest-slider').slick({
        appendArrows: $('.rest-menu-slide-btn'),
        speed: 700,
        easing: 'ease',
        waitForAnimate: false,
        fade:true,
        responsive: [
            {
                breakpoint: 1440,
                settings: 'unslick',
           }
        ],
        mobileFirst:true,
    });

    // $('.rest-slider').slick('setPosition');
});