document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) { // Solo para dispositivos móviles
        const cards = document.querySelectorAll('.card-img-overlay');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 1
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }
});
