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

// -----------------------------
// Ocultar logo al hacer scroll
// -----------------------------
document.addEventListener('DOMContentLoaded', function () {
  const logoFixed = document.querySelector('.logo-fixed');
  const heroLogo = document.querySelector('.hero-logo');

  if (!logoFixed) return; // si no existe, nada que hacer

  // Umbral de scroll en px para ocultar el logo
  const HIDE_SCROLL_Y = 80;

  // Si el usuario hace scroll hacia abajo más de HIDE_SCROLL_Y se oculta el logo.
  // Si vuelve hacia arriba al tope (scrollY < HIDE_SCROLL_Y) se muestra.
  let lastScrollY = window.scrollY;

  function checkScroll() {
    const y = window.scrollY || window.pageYOffset;

    if (y > HIDE_SCROLL_Y) {
      // ocultar ambos (logo fijo y logo en hero si existe)
      logoFixed.classList.add('logo-hidden');
      if (heroLogo) heroLogo.classList.add('logo-hidden');
    } else {
      // mostrar
      logoFixed.classList.remove('logo-hidden');
      if (heroLogo) heroLogo.classList.remove('logo-hidden');
    }
    lastScrollY = y;
  }

  // Llamar al cargar para asegurar estado correcto
  checkScroll();

  // Optimizado: throttle sencillo con requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Opcional: si querés que al hacer focus en el menú también se oculte,
  // podés agregar listeners de enfoque. Por ahora no lo hacemos.
});
