document.addEventListener('DOMContentLoaded', function() {
    const snapSections = document.querySelectorAll('.snap-section2');
    const cardContainer = document.querySelector('.row');
    const fadeOverlay = document.querySelector('.fade-overlay');
    const initialBackground = '../IMAGES/tierradentro.png'; // Ruta de la imagen inicial
    let cards = Array.from(cardContainer.children);
    let currentIndex = 0;

    function updateBackground(newBackground) {
        snapSections[1].style.backgroundImage = `linear-gradient(180deg, #0000008c 0%, #0000008c 100%), url('${newBackground}')`;
    }

    function rotateCardsForward() {
        fadeOverlay.classList.add('active');
        setTimeout(() => {
            const currentBackground = snapSections[1].style.backgroundImage.split('url("')[1].split('")')[0];
            updateBackground(cards[0].querySelector('.card').getAttribute('data-bg'));
            cards.push(cards.shift());
            cards[cards.length - 1].querySelector('.card').setAttribute('data-bg', currentBackground);
            cards[cards.length - 1].querySelector('img').src = currentBackground;
            cardContainer.appendChild(cards[cards.length - 1]);
            fadeOverlay.classList.remove('active');
        }, 1000);
    }

    function rotateCardsBackward() {
        fadeOverlay.classList.add('active');
        setTimeout(() => {
            const currentBackground = snapSections[1].style.backgroundImage.split('url("')[1].split('")')[0];
            updateBackground(cards[cards.length - 1].querySelector('.card').getAttribute('data-bg'));
            cards.unshift(cards.pop());
            cards[0].querySelector('.card').setAttribute('data-bg', currentBackground);
            cards[0].querySelector('img').src = currentBackground;
            cardContainer.insertBefore(cards[0], cardContainer.firstChild);
            fadeOverlay.classList.remove('active');
        }, 1000);
    }

    document.getElementById('next').addEventListener('click', rotateCardsForward);
    document.getElementById('prev').addEventListener('click', rotateCardsBackward);

    updateBackground(initialBackground);
});
