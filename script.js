// Calculadora Interactiva para Instituciones
function calcularRecaudacion() {
    const inputBandejas = document.getElementById('calc-bandejas').value;
    const bandejas = parseInt(inputBandejas) || 0;
    
    // Constantes de precios basadas en los requerimientos del documento
    const precioVentaSugerido = 8000;
    const margenGanancia = 2000;
    
    const totalVenta = bandejas * precioVentaSugerido;
    const totalRecaudado = bandejas * margenGanancia;

    // Formateador de moneda ARS
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    });

    // Actualiza el DOM
    document.getElementById('calc-venta').innerText = formatter.format(totalVenta);
    document.getElementById('calc-margen').innerText = formatter.format(totalRecaudado);
}

// Inicializar calculadora al cargar la página para que muestre los valores base
window.onload = calcularRecaudacion;