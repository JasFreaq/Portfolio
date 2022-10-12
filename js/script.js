$(document).ready(function() {

    $('#slides').superslides( {
        play: 4000,
        animation: 'fade'
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Game Developer.", "Student.", "Professional."],
        typeSpeed: 80,
        startDelay: 1000,
        backSpeed: 60,
        loop: true,
        showCursor: false
    });

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

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countedUp = false;

    $(window).scroll(function() {

        if (window.scrollY > skillsTopOffset - $(window).height() + 200) {
            
            $('.chart').easyPieChart( {
                easing: 'easeInOut',
                barColor: '#fe0065',
                trackColor: '#d3d3d3',
                scaleColor: '#d3d3d3',
                scaleLength: 4,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }

        if (!countedUp && window.scrollY > statsTopOffset - $(window).height() + 200) {

            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());
        
                element.countup(endVal);
            });

            countedUp = true;
        }

    });

    $(".items").isotope( {
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
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