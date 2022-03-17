// Menu

const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
// const navClose = document.querySelector(".main-nav__toggle");
const showNav = document.querySelector(".main-nav__wrapper");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    showNav.classList.add("main-nav__wrapper--show");
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add("main-nav--closed");
    showNav.classList.remove("main-nav__wrapper--show");
    navMain.classList.remove('main-nav--opened');
  }
});

// navClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   navMain.classList.add("main-nav--closed");
// });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (showNav.classList.contains("main-nav__wrapper--show")) {
      navMain.classList.add("main-nav--closed");
      showNav.classList.remove("main-nav__wrapper--show");
    }
  }
});
