let ultimoScroll = 0;
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo-inicio');

window.addEventListener('scroll', () => {
    let actualScroll = window.scrollY;

    if (actualScroll > ultimoScroll) {
        // Bajando → ocultar
        menu.classList.add('ocultar');
        if (logo) logo.classList.add('ocultar');
    } else {
        // Subiendo → mostrar
        menu.classList.remove('ocultar');
        if (logo) logo.classList.remove('ocultar');
    }

    ultimoScroll = actualScroll;
});
