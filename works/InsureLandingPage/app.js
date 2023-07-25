const menuBtn = document.querySelector(".m-only");

const showMenu = () => {
  const mMenu = document.querySelector(".gnb");
  mMenu.classList.toggle("m-menu-hidden");
  menuBtn.classList.toggle("m-menu-open-btn");
};

menuBtn.addEventListener("click", showMenu);
