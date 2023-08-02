const menuBtn = document.querySelector(".menu-btn");

const menuOpen = () => {
  document.body.classList.toggle("m-menu-display");
};
menuBtn.addEventListener("click", menuOpen);
