$(window).on("load", function() {

    $(".loader .inner").fadeOut(750, function() {
        $(".loader").fadeOut(500);
    });

    $('#slides').superslides( {
        play: 4000,
        animation: 'fade'
    });

    var typed = new Typed(".typed", {
        strings: ["Game Developer.", "Software Engineer.", "Student.", "Professional."],
        typeSpeed: 80,
        startDelay: 1250,
        backSpeed: 60,
        loop: true,
        showCursor: false
    });

    $(".items").isotope( {
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});

$(document).ready(function() {
    
    $('.owl-carousel').owlCarousel( {
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    
    $(".filters a").click(function() {

        $(".filters .current").removeClass("current");
        $(this).addClass("current");
        
        var selector = $(this).attr("data-filter");
        $(".items").isotope( {
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        const body = $("body");

        if ($(window).scrollTop() >= navTop) {

            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        
        }
        else {
        
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        
        }
    }

});