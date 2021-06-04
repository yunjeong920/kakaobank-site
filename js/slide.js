$(function() {
  var swiper = new Swiper(".firstSwiper", {
    spaceBetween: 30,
    centerdSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
