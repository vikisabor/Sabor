/* Ocultar logo al hacer scroll SOLO en páginas internas */
document.addEventListener('DOMContentLoaded', function () {

  const logoFixed = document.querySelector('.logo-fixed');

  // Si estoy en index, NO hacer nada
  if (document.body.classList.contains('inicio')) return;

  if (!logoFixed) return;

  const HIDE_SCROLL_Y = 80;

  function checkScroll() {
    const y = window.scrollY;

    if (y > HIDE_SCROLL_Y) {
      logoFixed.classList.add('logo-hidden');
    } else {
      logoFixed.classList.remove('logo-hidden');
    }
  }

  checkScroll();

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
});
