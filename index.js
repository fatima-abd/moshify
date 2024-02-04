const menu = document.querySelector(".main-nav");

const showMenu = document.querySelector(".open-mobile-menu");
const closeMenu = document.querySelector(".close-mobile-menu");

showMenu.addEventListener("click", function () {
  menu.classList.toggle("visibleMenu");
  showMenu.classList.toggle("hidden-button");
  closeMenu.classList.toggle("hidden-button");
});

closeMenu.addEventListener("click", function () {
  menu.classList.toggle("visibleMenu");
  closeMenu.classList.toggle("hidden-button");
  showMenu.classList.toggle("hidden-button");
});
