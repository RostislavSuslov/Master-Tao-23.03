$(document).ready(function() {

    $('.first-screen-slider').slick({
        dots: true,
        infinite: true,
        appendArrows: '.first-screen-slider__arrows',
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});