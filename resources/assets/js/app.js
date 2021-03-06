//var Vue = require('vue');

$(document).ready(function () {
    /*
     * Slick Caroussel
     */

    $(document.querySelector('.slick-container')).slick({
        dots: false,
        autoplay: true,
        mobileFirst: true,

    });

    /*
     * INFINITE SCROLL
     */

    var ias = jQuery.ias({
        //negativeMargin: 500,
        container: '#Products',
        item: '.Product',
        pagination: '.pagination',
        next: '.pagination .active.item + a'
    });

    ias.extension(new IASSpinnerExtension({
        src: '/img/infinity.gif',
        html: '<div style="position: fixed; left: 50%; margin-left: -50px; bottom: 0"><img src="{src}"/></div>'
    }));

    /*
     * DROPDOWNS
     */

    $('.dropdown')
        .dropdown({
            on: 'hover'
        })
    ;

    /*
     * CLOSING BUTTON
     */

    $('.message .close')
        .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade')
            ;
        })
    ;

    /*
     FIX HEADER
     */

    // fix menu when passed
    $('#Header')
        .visibility({
            once: false,
            onBottomPassed: function () {
                $('#MobileMenu').show();
            },
            onBottomPassedReverse: function () {
                $('#MobileMenu').hide();
            }
        })
    ;

    /*
     * SIDEBAR
     */

    $('#MobileSidebar').sidebar('attach events', '.toggle.button');

    $('#ToggleSidebar').removeClass('disabled');

    /*
     * Sticky
     */
    $(".ProductDetails__meta").stick_in_parent()
        .on("sticky_kit:bottom", function (e) {
            e.target.style.bottom = "3px";
        });

    /*
     * Price Slider
     */

    var slider = document.querySelector('.PriceSlider__container');

    if (slider) {
        var url = new URI();
        var start = 10;

        if (url.hasQuery('max_price')) start = url.query(true).max_price;

        noUiSlider.create(slider, {
            start: [start],
            step: 5,
            range: {
                'min': [0],
                '95%': [180],
                'max': [2000]
            }
        });

        var priceSliderValue = document.querySelector('.PriceSlider__current');

        slider.noUiSlider.on('update', function (values, handle) {
            priceSliderValue.innerHTML = values[handle] + '€';
        });

        slider.noUiSlider.on('change', function (value) {
            url.setQuery('max_price', parseInt(value));

            window.location.href = url.href();
        });
    }


    /*
     * POPUPS
     */

    $(document).on('click', '.new_window', function (e) {
        e.preventDefault();

        $.popupWindow($(this).attr('href'));
    });
});