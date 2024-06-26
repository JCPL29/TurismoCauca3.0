const words = ["Popayán", "Silvia", "Purace", "Tierradentro"];
const images = {
  "Popayán": "../IMAGES/parque.JPEG",
  "Silvia": "../IMAGES/silvia.jpg",
  "Purace": "../IMAGES/purace4.jpg",
  "Tierradentro": "../IMAGES/tierradentro5.jpg"
};
const typewriterElement = document.getElementById('typewriter');
typewriterElement.className = 'typewriter'; // Añadir la clase para el estilo
const inicioReservaElement = document.querySelector('.inicio-reserva'); // Seleccionar el contenedor de fondo
let currentWordIndex = 0;
let currentCharIndex = 0;
let writing = true;

function typeWriterEffect() {
  if (writing) {
    // Escribir el texto letra por letra
    if (currentCharIndex < words[currentWordIndex].length) {
      typewriterElement.textContent += words[currentWordIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeWriterEffect, 100);
    } else {
      writing = false;
      // Cambiar el fondo cuando la palabra está completamente escrita
      inicioReservaElement.style.backgroundImage = `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%), url('${images[words[currentWordIndex]]}')`;
      setTimeout(typeWriterEffect, 3000); // Esperar antes de empezar a borrar
    }
  } else {
    // Borrar el texto letra por letra
    if (currentCharIndex > 0) {
      typewriterElement.textContent = words[currentWordIndex].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(typeWriterEffect, 100);
    } else {
      writing = true;
      currentWordIndex = (currentWordIndex + 1) % words.length; // Pasar a la siguiente palabra
      setTimeout(typeWriterEffect, 500);
    }
  }
}

// Iniciar el efecto
typeWriterEffect();
