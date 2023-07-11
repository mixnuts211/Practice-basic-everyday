const mobileMenuBtn = document.querySelector(".header-hidden-menu-btn");
const mobileMenuCloseBtn = document.querySelector(".header-close-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu-wrap");

const showMenu = () => {
  mobileMenu.style.display = "block";
};
const closeMenu = () => {
  mobileMenu.style.display = "none";
};

mobileMenuBtn.addEventListener("click", showMenu);
mobileMenuCloseBtn.addEventListener("click", closeMenu);
