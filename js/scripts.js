// Ocultar logo fijo y menú al hacer scroll
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const logo = document.querySelector(".logo-fixed");
    const menu = document.querySelector("nav");

    if (!logo || !menu) return;

    if (scrollY > 50) {
        logo.classList.add("logo-hidden");
        menu.classList.add("hidden");
    } else {
        logo.classList.remove("logo-hidden");
        menu.classList.remove("hidden");
    }
});
