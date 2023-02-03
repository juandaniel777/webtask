const hamburguer = document.querySelector(".humburger");
const NavMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    NavMenu.classList.toggle("active");



})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    NavMenu.classList.remove("active");}
))