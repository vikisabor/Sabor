// Ocultar barra superior (logo + menú) al hacer scroll
let lastScroll = 0;

window.addEventListener("scroll", function () {
    const topBar = document.querySelector(".top-bar");
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
        // scrolling hacia abajo → ocultar
        topBar.classList.add("hidden");
    } else {
        // scrolling hacia arriba → mostrar
        topBar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});
