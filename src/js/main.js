import $ from "jquery";
import "slick-carousel";

$(function () {
    $('.header__burger').on('click', function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('a.header__link').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + "px"
        }, {
            duration: 3000,
            easing: "swing"
        });
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;
        $('.header__burger').removeClass('active');
        $('body').removeClass('lock');
        return false;
    });
    $(document).on('click', '.header__list > li > a', e => {
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;
        $('.header__burger').removeClass('active');
        $('body').removeClass('lock');
    });
    $(document).on('click', '.header__list > li > a', e => {
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;
        $('.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.logo__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                }
            }
        ]
    });
    $('.slider__box, .slider__box2').slick({
        responsive: [
            {
            breakpoint: 5000,
            settings:"unslick"
            },
            {
            breakpoint: 850,
            settings: {
                autoplay: true,
                autoplaySpeed: 3000,
                touchThreshhold: 10,
                adaptiveHeight: true,
                centerMode: true,
                dots: true,
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 3,
                lazyLoad: 'ondemand',
                }
            },
            {
            breakpoint: 700,
            settings: {
                centerMode: true,
                dots: true,
                centerPadding: '40px',
                slidesToShow: 2,
                lazyLoad: 'ondemand',
                }
            },
            {
            breakpoint: 500,
            settings: {
                centerMode: true,
                dots: true,
                centerPadding: '40px',
                slidesToShow: 1,
                lazyLoad: 'ondemand',
                }
            }
        ]
    });
});