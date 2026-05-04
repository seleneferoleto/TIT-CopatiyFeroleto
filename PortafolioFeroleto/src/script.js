// Ejemplo de animación simple con JS
document.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('nombre');
    nombre.style.opacity = 0;
    nombre.style.transition = 'opacity 1.5s';
    setTimeout(() => {
        nombre.style.opacity = 1;
    }, 400);
});
