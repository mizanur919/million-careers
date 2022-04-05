var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.style.background = "#e4e4e4";
  } else {
    nav.style.background = "transparent";
  }
});
