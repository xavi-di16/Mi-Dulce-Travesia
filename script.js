// Lógica de la Calculadora Interactiva
function calcularRecaudacion() {
    const inputBandejas = document.getElementById('calc-bandejas').value;
    const bandejas = parseInt(inputBandejas) || 0;
    
    const precioVentaSugerido = 8000;
    const margenGanancia = 2000;
    
    const totalVenta = bandejas * precioVentaSugerido;
    const totalRecaudado = bandejas * margenGanancia;

    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    });

    const calcVenta = document.getElementById('calc-venta');
    const calcMargen = document.getElementById('calc-margen');

    if (calcVenta && calcMargen) {
        calcVenta.innerText = formatter.format(totalVenta);
        calcMargen.innerText = formatter.format(totalRecaudado);
    }
}

// Lógica del Menú Hamburguesa
function inicializarMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        // Abrir/cerrar menú al tocar la hamburguesa
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú automáticamente al seleccionar una opción
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// Inicializar funciones cuando el documento carga
window.onload = function() {
    calcularRecaudacion();
    inicializarMenu();
};
