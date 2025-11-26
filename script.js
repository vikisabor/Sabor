// Efecto suave al cambiar de página
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.href.includes(".html")) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => window.location = link.href, 300);
    }
  });
});
