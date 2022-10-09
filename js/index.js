var mobileMenu = document.querySelector(".mobileMenu");
var sideMenuBtn = document.querySelector(".sideMenuBtn");
var navControler = document.querySelectorAll(".navControl");

for (let i = 0; i < navControler.length; i++) {
  navControler[i].addEventListener("click", handleNavOpenClose);
}
function handleNavOpenClose(event) {
  sideMenuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}
