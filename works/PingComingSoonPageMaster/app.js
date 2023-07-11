const emailInput = document.querySelector(".main-section-email-input");
const emailBtn = document.querySelector(".main-section-email-btn");
const emailError = document.querySelector(".main-section-email-form-error");

const inputValidationHandler = () => {
  if (emailInput.validity.typeMismatch) {
    emailInput.style.border = "1px solid var(--light-red)";
    emailBtn.style.backgroundColor = "var(--pale-blue)";
    emailError.style.visibility = "visible";
  }
};

const preventHandler = (e) => e.preventDefault;

emailBtn.addEventListener("click", inputValidationHandler);
emailBtn.addEventListener("click", preventHandler);
emailInput.addEventListener("invalid", (e) => e.preventDefault());
