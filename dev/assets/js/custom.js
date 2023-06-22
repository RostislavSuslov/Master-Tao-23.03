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


const checkbox = document.querySelectorAll('[type="checkbox"]')


console.log(document.querySelectorAll('[type="checkbox"]'));

checkbox.forEach(item => {
    item.closest('.input-box').classList.add('has-checkbox')
    item.closest('.input-column').classList.add('padding-top')
})

document.getElementById('myfile').onchange = function() {

    //long name




    const fileName = document.getElementById('file-name');
    fileName.innerHTML = this.value;

























    //short name
    // document.getElementById('file-name').innerHTML = this.files[0].name;

};