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

/* --- Ocultar logo pequeño al hacer scroll --- */
document.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo-small");
  if (!logo) return;

  if (window.scrollY > 40) {
    logo.classList.add("logo-hide");
  } else {
    logo.classList.remove("logo-hide");
  }
});

document.addEventListener("scroll", () => {
    const logo = document.querySelector(".logo-fixed");

    if (!logo) return;

    if (window.scrollY > 40) {
        logo.classList.add("logo-hidden");
    } else {
        logo.classList.remove("logo-hidden");
    }
});
