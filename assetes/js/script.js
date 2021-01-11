$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        rtl: true,
        dots: false,
        nav: true,
        margin: 8,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            },

        }
    })
});
