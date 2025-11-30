/* Animación de scroll (queda igual) */
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

/* Animación de frase → logo como fondo */
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const welcome = document.querySelector('.hero .welcome');

  if (!hero || !welcome) return;

  const VISIBLE_MS = 2500; // tiempo visible de la frase
  const FADE_MS = 900;     // tiempo del fade

  setTimeout(() => {
    hero.classList.add('welcome-hidden');

    setTimeout(() => {
      hero.classList.add('show-logo');
    }, FADE_MS);

  }, VISIBLE_MS);
});
