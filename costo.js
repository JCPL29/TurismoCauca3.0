document.addEventListener('DOMContentLoaded', function() {
    const botonConfirmar = document.getElementById('button-addon2');
    const inputDias = document.getElementById('diasHospedaje');
    const costDisplay = document.querySelector('.cost');

    // Inicializa el total del paquete como $0 cuando se carga la página
    costDisplay.textContent = `Total del paquete: $0`;

    if (!botonConfirmar || !inputDias || !costDisplay) {
        console.error('No se encontraron uno o más de los elementos del formulario.');
        return;
    }

    botonConfirmar.addEventListener('click', function() {
        fetch('precios.json')
            .then(response => response.json())
            .then(data => {
                actualizarTotal(data, inputDias, costDisplay);
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON:', error);
            });
    });
});

function actualizarTotal(precios, inputDias, costDisplay) {
    const dias = parseInt(inputDias.value);
    const hotelElegido = document.querySelector('input[name="listGroupRadioHotel"]:checked').value;
    const transporteElegido = document.querySelector('input[name="listGroupRadioTransporte"]:checked').value;

    // Primero, desvanecemos el elemento
    costDisplay.style.opacity = '0';

    // Esperamos a que termine la transición de opacidad antes de actualizar el valor
    setTimeout(() => {
        let total = 0;
        if (!isNaN(dias) && dias > 0) {
            total += precios.hoteles[hotelElegido] * (dias - 1);
            total += precios.transporte[transporteElegido];
        } else {
            total = 0; // Asegura que el total sea 0 si los días no son válidos o antes de confirmar
        }

        costDisplay.textContent = `Total del paquete: $${total}`;

        // Reaparecemos el elemento con el nuevo valor
        costDisplay.style.opacity = '1';
    }, 500); // Coincide con la duración de la transición de opacidad
}
