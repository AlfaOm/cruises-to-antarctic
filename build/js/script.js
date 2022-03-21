// Menu popup

const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const showNav = document.querySelector(".main-nav__wrapper");
const menuItem = document.querySelectorAll(".main-nav__wrapper a");


navMain.classList.remove("main-nav--nojs");

function handlerToggleMenu(item) {
  item.addEventListener("click", function() {
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
}
handlerToggleMenu(navToggle);


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (showNav.classList.contains("main-nav__wrapper--show")) {
      navMain.classList.add("main-nav--closed");
      showNav.classList.remove("main-nav__wrapper--show");
    }
  }
});

// Закрытие меню по клику на пункт меню
menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove('main-nav--opened');
  });
});



// Маска для номера телефона

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll("#input-tel input"), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "8___ ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});
