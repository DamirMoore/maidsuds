function closeStickyEstimate() {
  var sticky = document.querySelector(".free-estimate-sticky");
  var closeButton = document.querySelector(".sticky-free-estimate-close");

  sticky.classList.remove("make-sticky");
  closeButton.classList.add("hide-close-button");
  console.log("sticky discovery closed");
}

// changes the copyrite year automatically
// takes html id of year <span> as argument
function dynamicCopyrite(yearId) {
  // dynamic copywrite year
  var yearHtml = document.querySelector(`#${yearId}`);
  var curYear = new Date().getFullYear();

  // change year in <span> element
  yearHtml.textContent = curYear;

  // use fallback for textContent
  if (yearHtml.innerHTML != curYear) {
    yearHtml.innerText = curYear;
  }
}
