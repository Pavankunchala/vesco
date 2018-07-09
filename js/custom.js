/*==============================================
                    SERVICES
================================================*/
$(function () {
    //Animate on scroll
    new WOW().init();
})

/*==============================================
                    WORK
================================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});


/*==============================================
                    TEAM
================================================*/

$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

    });

});

/*==============================================
                    TESTIMONIALS
================================================*/

$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

    });

});

/*==============================================
                    STATS
================================================*/
$(function () {

    $('.counter').counterUp({

        delay: 10,
        time: 2000
    });

});

/*==============================================
                    CLIENTS
================================================*/

$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

    });

});

//smooth scrolling

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});