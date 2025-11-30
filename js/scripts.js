// Fade in general para elementos con .fade
const faders = document.querySelectorAll('.fade');

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.2 }
);

faders.forEach((el) => obs.observe(el));
