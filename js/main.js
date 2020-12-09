$(document).ready(function () {
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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible")
  });
  var modalButton = $('[data-toggle=modal]');
  var CloseModalButton = $('.modal_close');
  var modalOverlay = $(".modal_overlay");
  var modalDialog = $(".modal_dialog");
  modalButton.on('click', openModal);
  CloseModalButton.on('click', closeModal);

  $(document).on('keydown', function(event) {
    if (event.code === 'Escape') {
      console.log('keydown');
        closeWindow();
    }
});

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal_overlay").addClass("modal_overlay--visible");
    $(targetModal).find(".modal_dialog").addClass("modal_dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal_overlay--visible");
    modalDialog.removeClass("modal_dialog--visible");
  }

  function closeWindow(event) {
    modalOverlay.removeClass("modal_overlay--visible");
    modalDialog.removeClass("modal_dialog--visible");
  }

});