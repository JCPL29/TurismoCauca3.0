document.querySelectorAll('input[name="listGroupRadioHotel"]').forEach(input => {
    input.addEventListener('change', function() {
        updateCarouselImages(this.value);
    });
});

function updateCarouselImages(hotel) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Limpia el contenido actual del carrusel

    // Definir los conjuntos de imágenes para cada hotel
    const imageSets = {
        hotelSinLimites: ['./IMAGES/hotel1_1.jpg', './IMAGES/hotel1_2.jpg', './IMAGES/hotel1_3.jpg'],
        hotelDannMonasterio: ['./IMAGES/hotel2_1.jpg', './IMAGES/hotel2_2.jpg', './IMAGES/hotel2_3.jpg'],
        thirdHotel: ['./IMAGES/hotel3_1.jpg', './IMAGES/hotel3_2.jpg', './IMAGES/hotel3_3.jpg']
    };

    // Agregar nuevas imágenes al carrusel
    imageSets[hotel].forEach((src, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
        const img = document.createElement('img');
        img.src = src;
        img.className = 'd-block w-100';
        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
}