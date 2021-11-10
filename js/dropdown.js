let dropdownBox = document.querySelector(".absolute-menu");
let dropDownActive = document.querySelector(".dropdown-icon");
let closeButton = document.querySelector(".absolute-menu-close");
let subMenu = document.querySelector(".absolute-sub-menu");
let subMenuButton = document.querySelector(".absolute-menu-cooperation");
let backButton = document.querySelector(".absolute-menu-back");


dropDownActive.addEventListener("click", () => {
  dropdownBox.style.height = "100vh";
});

closeButton.addEventListener("click", () => {
  dropdownBox.style.height = "0";
});

subMenuButton.addEventListener("click", () => {
  subMenu.style.display = "block";
});

backButton.addEventListener("click", () => {
  subMenu.style.display = "none";
});