new Swiper('.hero-room-slider', {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    768: {
      spaceBetween: 32,
    },
  },
});
