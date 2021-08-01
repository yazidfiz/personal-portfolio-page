var nav = document.querySelector("nav"); // Identify target

window.addEventListener("scroll", function (event) {
  // To listen for event
  event.preventDefault();

  if (window.scrollY <= 50) {
    // Just an example
    nav.style.backgroundColor = "transparent"; // or default color
  } else {
    nav.style.backgroundColor = "#fff";
  }
});
