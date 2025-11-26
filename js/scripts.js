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
