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

});