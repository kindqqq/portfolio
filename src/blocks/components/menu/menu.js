//константы для выезжающего меню
const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  overCloseElem = document.querySelector(".menu__overlay"),
  closeLi = document.querySelector(".menu__list");

//активировать меню
hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
//деактивировать меню по клуку на крестик
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});
//деактивировать меню по клуку на overflay
overCloseElem.addEventListener("click", () => {
  menu.classList.remove("active");
});
//деактивировать меню по клуку елементов списка
closeLi.addEventListener("click", () => {
  menu.classList.remove("active");
});
