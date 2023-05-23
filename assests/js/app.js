const nav_hamburger = document.querySelector(".nav-hamburger")
const nav_menu = document.querySelector(".nav-menu")

nav_hamburger.addEventListener("click", () => {
    nav_menu.classList.toggle("active")
})