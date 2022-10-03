// Intro Slider (swiper js https://swiperjs.com/ )
// ****************
const introSlider = new Swiper('.intro-slider', {
    initialSlide: 1,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 77,
    centeredSlides: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    navigation: {
        nextEl: '.intro-slider__button--next',
        prevEl: '.intro-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    breakpoints: {
        1400: {
            slidesPerView: 1,
            spaceBetween: 77,
        },

        1200: {
            slidesPerView: 1.2,
            spaceBetween: 50,
        },

        992: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 1.3,
            spaceBetween: 77,
        },
    },
});
