document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const items = slider.querySelectorAll('.list .item');
        const thumbnails = slider.querySelectorAll('.thumbnail .item');
        let itemActive = items.length - 1;  // Empezamos en el último debido a la inicialización inicial

        function showSlider() {
            items.forEach(item => item.classList.remove('active'));
            thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

            items[itemActive].classList.add('active');
            thumbnails[itemActive].classList.add('active');
        }

        // Cambia inmediatamente a la primera imagen tan pronto como sea posible
        setTimeout(() => {
            itemActive = 0;  // Cambia a la primera imagen
            showSlider();
        }, 100);  // Reducir el tiempo a 100 ms para una transición rápida

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentIndex = Array.from(items).indexOf(entry.target);
                    if (currentIndex !== itemActive) {
                        itemActive = currentIndex;
                        showSlider();
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        items.forEach(item => observer.observe(item));

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                itemActive = index;
                showSlider();
            });
        });

        // Configurar el autorun para seguir funcionando normalmente
        setInterval(() => {
            itemActive = (itemActive + 1) % items.length;
            showSlider();
        }, 7000);
    });
});
