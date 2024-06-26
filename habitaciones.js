document.querySelectorAll('input[name="listGroupRadioHabitacion"]').forEach(input => {
    input.addEventListener('change', function() {
        updateCarouselImages(this.value);
    });
});

function updateCarouselImages(habitacion) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Limpia el contenido actual del carrusel

    // Definir los conjuntos de imágenes para cada hotel
    const imageSets = {
        sencilla: ['./IMAGES/hotelPrueba1.jpg', './IMAGES/hotelPrueba2.jpeg', './IMAGES/hotelPrueba3.jpeg'],
        doble: ['./IMAGES/monasterio1.jpg', './IMAGES/monasterio2.jpg', './IMAGES/monasterio3.jpeg'],
        multiple: ['./IMAGES/achalay1.jpg', './IMAGES/achalay2.jpg', './IMAGES/achalay3.jpeg']
    };

    // Agregar nuevas imágenes al carrusel
    imageSets[habitacion].forEach((src, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
        const img = document.createElement('img');
        img.src = src;
        img.className = 'd-block w-100';
        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
}