const emailForm = document.querySelector(".email-form");
const emailInput = document.querySelector(".main-section-email-input");
const emailValidMessage = document.querySelector(".email-valid-message");
const emailValidIcon = document.querySelector(".email-valid-error");
const emailBtn = document.querySelector(".main-section-email-btn");

const emailInputValid = () => {
  if (emailInput.validity.typeMismatch) {
    emailValidMessage.style.visibility = "visible";
    emailValidIcon.style.visibility = "visible";
    emailForm.style.outline = "2px solid var(--light-red)";
    emailBtn.style.backgroundImage =
      "linear-gradient(var(--main-red), var(--main-red))";
  }
};

const btnPrevent = (e) => {
  e.preventDefault;
};

emailBtn.addEventListener("click", emailInputValid);
emailBtn.addEventListener("click", btnPrevent);
emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
});
