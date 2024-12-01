document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const menuLinks = document.querySelectorAll('.menu a'); // Selecciona todos los enlaces dentro del menú

    // Abre o cierra el menú al hacer clic en el botón de menú
    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('open');
    });
});