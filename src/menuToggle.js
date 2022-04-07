const btnToggle = document.querySelector(".menu-toggle");
const linkNav = document.querySelectorAll(".menu-principal a");
const menuPrincipal = document.querySelector(".menu-principal");

btnToggle.addEventListener("click", () => {
  menuPrincipal.classList.toggle("toggle-ativado");
});

linkNav.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    menuPrincipal.classList.toggle("toggle-ativado");
  });
});
