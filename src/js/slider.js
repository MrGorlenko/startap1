$(document).ready(function(){
    $('.slider__base').slick({
        infinite: true,
        arrows: false,
        centerPadding: '0',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        pauseOnHover: false,
        swipe: false,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                fade: false
                }
            }
        ]
    });
  });