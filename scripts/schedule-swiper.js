var swiper = new Swiper('.swiper-container', {
    scrollbar: '.swiper-scrollbar',
    effect: 'coverflow',
    direction: 'vertical',
    loop: false,
    slideToClickedSlide: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 500,
        modifier: 1,
        slideShadows: false
    },
    freeMode:false,
    freeModeSticky:true
});