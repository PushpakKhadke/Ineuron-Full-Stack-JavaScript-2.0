const togglebar = document.querySelector(".hamburger");
const navMenu = document.querySelector(".logo-navlist");

togglebar.addEventListener("click", mobileMenu);

function mobileMenu() {
    togglebar.classList.toggle("active");
    navMenu.classList.toggle("active");
}