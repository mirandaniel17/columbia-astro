// src/header.js
let lastScrollTop = 0; // Variable para almacenar la posición del scroll
const header = document.querySelector('header'); // Seleccionar el header

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Obtener la posición actual del scroll

    if (scrollTop > lastScrollTop) {
        // Si estamos desplazándonos hacia abajo
        header.style.opacity = '0'; // Hacer el header transparente
        header.style.transform = 'translateY(-100%)'; // Mover el header hacia arriba
    } else {
        // Si estamos desplazándonos hacia arriba
        header.style.opacity = '1'; // Hacer el header visible
        header.style.transform = 'translateY(0)'; // Volver a la posición original
    }
    lastScrollTop = scrollTop; // Actualizar la posición del scroll
});
