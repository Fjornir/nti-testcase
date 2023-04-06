function triggerSubmitButtonClick() {
  document
    .querySelector(".form-detail__button")
    .dispatchEvent(new Event("click"));
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
