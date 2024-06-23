document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const items = slider.querySelectorAll('.list .item');
        const thumbnails = slider.querySelectorAll('.thumbnail .item');
        let itemActive = 0;
        let refreshInterval;

        function showSlider() {
            items.forEach(item => item.classList.remove('active'));
            thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

            items[itemActive].classList.add('active');
            thumbnails[itemActive].classList.add('active');
            resetAutoRun();
        }

        function resetAutoRun() {
            clearInterval(refreshInterval);  // Limpia el intervalo actual
            refreshInterval = setInterval(() => {
                itemActive = (itemActive + 1) % items.length;
                showSlider();
            }, 7000);  // Reinicia el intervalo
        }

        // Inicializar el slider con la primera imagen visible
        setTimeout(() => {
            showSlider();  // Asegura que se muestre la primera imagen al cargar
        }, 100);

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
    });
});
