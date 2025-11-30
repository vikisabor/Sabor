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

// Mostrar la frase, luego difuminar y mostrar el logo como fondo
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const welcome = document.querySelector('.hero .welcome');

  if (!hero || !welcome) return;

  // Tiempo que la frase permanece visible (ms)
  const VISIBLE_MS = 2500; // 2.5 s — podés aumentar si querés
  // Tiempo del fade antes de mostrar logo (ms)
  const FADE_MS = 900;

  // Aseguramos que el hero tenga la clase de entrada
  hero.classList.add('fade-in');

  // Después de VISIBLE_MS, ocultamos la frase (fade)
  setTimeout(() => {
    hero.classList.add('welcome-hidden');
    // Esperamos la transición de opacidad antes de mostrar el fondo
    setTimeout(() => {
      hero.classList.add('show-logo');
    }, FADE_MS);
  }, VISIBLE_MS);

  // Opcional: si querés que la frase vuelva luego de X segundos, podrías revertir aquí.
});
