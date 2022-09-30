// Intro Slider (swiper js https://swiperjs.com/ )
// ****************
const introSlider = new Swiper('.intro-slider', {
    initialSlide: 1,
    slidesPerView: 1.8,
    slidesPerGroup: 1,
    spaceBetween: 200,
    centeredSlides: true,
    speed: 1000,
    navigation: {
        nextEl: '.intro-slider__button--next',
        prevEl: '.intro-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
});
