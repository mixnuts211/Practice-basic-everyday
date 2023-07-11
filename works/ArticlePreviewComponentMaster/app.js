const sharePopUp = document.querySelector(".card-text-info-share");
const shareBtn = document.querySelector(".card-text-info-btn");

const btnClickHandler = () => {
  const currDisplay = sharePopUp.style.visibility;
  console.log(currDisplay);
  let newState;
  if (currDisplay === "hidden") {
    newState = "visible";
  } else {
    newState = "hidden";
  }
  sharePopUp.style.visibility = newState;
};

shareBtn.addEventListener("click", btnClickHandler);
