var hotelSlider = new Swiper('.swiper-container', {
    loop: true,

    keyboard: {
      enabled: true,
      loop: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  });

  var hotelSlider = new Swiper('.reviews-slider', {
    loop: true,

    keyboard: {
      enabled: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev',
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Click")
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
  })