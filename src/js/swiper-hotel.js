 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
   fade: true,
   autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true
});