function triggerSubmitButtonClick() {
  document
    .querySelector(".form-detail__button")
    .dispatchEvent(new Event("click"));
}

function personalMenuOpen() {
  let menu = document.querySelector(".popup");
  let actualMenuDisplay = getComputedStyle(menu).display;
  actualMenuDisplay === "none"
    ? (menu.style.display = "block")
    : (menu.style.display = "none");

  console.log(actualMenuDisplay);
}

function adaptiveMenuOpen() {
  let menu = document.querySelector(".popup_adaptive");
  let blur = document.querySelector(".blur");
  let menuImage = document.querySelector("#adaptive_menu_image")
  let scroll = document.getElementsByTagName('body')[0];
  let actualMenuDisplay = getComputedStyle(menu).display;

  if (actualMenuDisplay === "none") {
    menuImage.src="./public/imgs/header/MenuClose.png";
    menu.style.display = "flex";
    blur.style.display = "block";
    scroll.style.overflow = 'hidden'
  } else {
    menuImage.src="./public/imgs/header/MenuOpen.png";
    menu.style.display = "none";
    blur.style.display = "none";
    scroll.style.overflow = 'visible'
  }
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
