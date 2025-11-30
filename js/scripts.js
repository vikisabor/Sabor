/* Animación al hacer scroll */
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(el => observer.observe(el));
});

/* Animación inicial: frase → fade → logo */
document.addEventListener("DOMContentLoaded", () => {
    const texto = document.querySelector(".welcome");
    const fondoLogo = document.getElementById("fondo-logo");

    if (!texto || !fondoLogo) return;

    const TIEMPO_VISIBLE = 2500; // ms
    const TIEMPO_FADE = 1200;

    // Espera visible
    setTimeout(() => {
        texto.classList.add("fade-out");

        setTimeout(() => {
            fondoLogo.classList.add("show");
        }, TIEMPO_FADE);

    }, TIEMPO_VISIBLE);
});
