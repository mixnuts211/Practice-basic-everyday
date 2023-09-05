document
  .querySelector(".clear-btn")
  .addEventListener("click", function readAlertHandler() {
    const alertCont = document.querySelector(".alert-cont");
    alertCont.querySelector(".alert-num").classList.add("display_none");
    alertCont.querySelectorAll(".alert-list li").forEach((list) => {
      list.dataset.alert = "read";
    });
    this.disabled = true;
  });
