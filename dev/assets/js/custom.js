$(document).ready(function() {

    $('.first-screen-slider').slick({
        dots: true,
        infinite: true,
        appendArrows: '.first-screen-slider-arrows',
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

    mobileOnlySlider("#advantages-slider", true, false, 991);
    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
        {
            breakpoint: $breakpoint,
            settings: "unslick"
        }
        ]
    };

    slider.slick(settings);

    $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
        return;
        }
        if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
        }
    });
    } // Mobile Only Slider
});


const checkbox = document.querySelectorAll('[type="checkbox"]')


console.log(document.querySelectorAll('[type="checkbox"]'));

checkbox.forEach(item => {
    item.closest('.input-box').classList.add('has-checkbox')
    item.closest('.input-column').classList.add('padding')
})

document.getElementById('myfile').onchange = function() {

    //long name
    const fileName = document.getElementById('file-name');
    fileName.innerHTML = this.value;
    //short name
    // document.getElementById('file-name').innerHTML = this.files[0].name;

};