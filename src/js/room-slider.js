// new Swiper('.hero-room-slider', {
//   // Default parameters
//   slidesPerView: 2,
//   spaceBetween: 20,
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // Responsive breakpoints
//   breakpoints: {
//     768: {
//       spaceBetween: 32,
//     },
//   },
// });

(() => {
  let slider;

  function createSlider(slidesPerView) {
    slider?.destroy();
    slider = new Swiper(".room-hero-swiper", {
      slidesPerView: 1.5,
      spaceBetween: 32,
      centeredSlides: false,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  function subscribe(query, slidesPerView) {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", e => e.matches ? createSlider(slidesPerView) : null)
    if (mq.matches)
      createSlider(slidesPerView);
  }

  subscribe("(min-width: 1440px)", 1.5);
  subscribe("(min-width: 768px) and (max-width: 1439px)", 1.5);
  subscribe("(max-width: 767px)", 1.5);
})();

