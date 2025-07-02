"use strict";
// Get the header element
const header = document.querySelector(".header");
const btn = document.querySelector(".ri-menu-line");
const closeBtn = document.querySelector(".ri-close-large-fill");
const showMenu = document.querySelector(".show-menu");
// Get the initial offset position of the header
const sticky = header.offsetTop;

// Function to make header sticky on scroll
function makeHeaderSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// Add scroll event listener
window.addEventListener("scroll", makeHeaderSticky);

btn.addEventListener("click", () => {
  showMenu.classList.add("active");
  header.classList.add("get-up");
});

closeBtn.addEventListener("click", () => {
  showMenu.classList.remove("active");
  header.classList.remove("get-up");
});
