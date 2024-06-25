document.addEventListener('DOMContentLoaded', function() {
    const botonBuscar = document.querySelector('.buscar');
    const entrada = document.getElementById('entrada');
    const salida = document.getElementById('salida');
    const opcionesHabitacion = document.querySelectorAll('input[name="listGroupRadioHabitacion"]');
    const opcionesTransporte = document.querySelectorAll('input[name="listGroupRadioTransporte"]');
    const costDisplay = document.querySelector('.cost');
    const costoHabitacionDisplay = document.querySelector('.costo-habitacion');
    const costoTransporteDisplay = document.querySelector('.costo-transporte');

    if (!botonBuscar || !entrada || !salida || !costDisplay || !costoHabitacionDisplay || !costoTransporteDisplay) {
        console.error('No se encontraron uno o más de los elementos del formulario.');
        return;
    }

    const calcularCostos = () => {
        const fechaEntrada = new Date(entrada.value);
        const fechaSalida = new Date(salida.value);
        const diferenciaTiempo = fechaSalida.getTime() - fechaEntrada.getTime();
        const diasHospedaje = Math.max(0, diferenciaTiempo / (1000 * 3600 * 24));

        fetch('precios.json')
            .then(response => response.json())
            .then(data => {
                actualizarTotal(data, diasHospedaje, costDisplay, costoHabitacionDisplay, costoTransporteDisplay);
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON:', error);
            });
    };

    botonBuscar.addEventListener('click', calcularCostos);

    opcionesHabitacion.forEach(option => {
        option.addEventListener('change', calcularCostos);
    });

    opcionesTransporte.forEach(option => {
        option.addEventListener('change', calcularCostos);
    });
});

function actualizarTotal(precios, diasHospedaje, costDisplay, costoHabitacionDisplay, costoTransporteDisplay) {
    const hotelElegido = document.querySelector('input[name="listGroupRadioHabitacion"]:checked').value;
    const transporteElegido = document.querySelector('input[name="listGroupRadioTransporte"]:checked').value;

    costDisplay.style.opacity = '0';
    costoHabitacionDisplay.style.opacity = '0';
    costoTransporteDisplay.style.opacity = '0';

    setTimeout(() => {
        let costoHabitacion = precios.hoteles[hotelElegido];
        let costoTransporte = precios.transporte[transporteElegido];
        let total = 0;

        if (!isNaN(diasHospedaje) && diasHospedaje > 1) {
            total = (costoHabitacion * (diasHospedaje - 1)) + costoTransporte;
        } else {
            costoHabitacion = 0; // Asegura que no se muestre un costo si los días no son válidos
            costoTransporte = 0;
            total = 0;
        }

        costDisplay.textContent = `Total del paquete: $${total.toFixed(0)}`;
        costoHabitacionDisplay.textContent = `Costo habitación por noche: $${costoHabitacion.toFixed(0)}`;
        costoTransporteDisplay.textContent = `Costo del transporte: $${costoTransporte.toFixed(0)}`;

        costDisplay.style.opacity = '1';
        costoHabitacionDisplay.style.opacity = '1';
        costoTransporteDisplay.style.opacity = '1';
    }, 500);
}
