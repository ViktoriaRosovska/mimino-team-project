(() => {
  let slider;

  function createSlider(slidesPerView) {
    slider?.destroy();
    slider = new Swiper(".swiper-restaurant", {
      slidesPerView: slidesPerView,
      centeredSlides: false,
      loop: true,
      spaceBetween: 30,

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

  subscribe("(min-width: 1440px)", 5);
  subscribe("(min-width: 768px) and (max-width: 1439px)", 2);
  subscribe("(max-width: 767px)", 2);
})();
