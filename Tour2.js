// Obtener los elementos del DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel-tour');
let SliderDom = carouselDom.querySelector('.carousel-tour .list-tour');
let thumbnailBorderDom = document.querySelector('.carousel-tour .thumbnail-tour');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item-tour');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000; // Tiempo de animación de la transición

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

// Eliminar temporizador automático
/* let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext); */

let runTimeOut;

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel-tour .list-tour .item-tour');
    let thumbnailItemsDom = document.querySelectorAll('.carousel-tour .thumbnail-tour .item-tour');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     nextDom.click();
    // }, timeAutoNext);
}
