$(document).ready(function() {
    var $grid = $('.item').isotope();
    $('#menu').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
});
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        autoplay: false,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    })

});