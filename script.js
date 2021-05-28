const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector("nav ul");

console.log(navbar.classList)
function openMenu() {
  menuIcon.classList.toggle("open");
  navbar.classList.toggle("active");
    console.log('click')
};

menuIcon.addEventListener('click', openMenu)