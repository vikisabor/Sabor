/* Animación on-scroll */
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade");

  const options = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  elementos.forEach(el => observer.observe(el));
});

// --- EFECTO: FRASE SE DESVANECE Y APARECE LOGO DE FONDO ---

window.onload = function () {

    const texto = document.getElementById("bienvenida");
    const logoFondo = document.getElementById("fondo-logo");

    // Tiempo que la frase queda visible (en milisegundos)
    setTimeout(() => {

        // Desvanece la frase
        texto.style.opacity = "0";

        // Luego de desvanecer, aparece el logo
        setTimeout(() => {
            logoFondo.style.opacity = "1";
        }, 2000); // coincide con transición CSS

    }, 2500); // frase visible 2.5 segundos antes de desaparecer
};
