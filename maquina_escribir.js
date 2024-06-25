const words = ["Popayán", "Silvia", "Purace", "Tierradentro"];
const typewriterElement = document.getElementById('typewriter');
typewriterElement.className = 'typewriter'; // Añadir la clase para el estilo
let currentWordIndex = 0;
let currentCharIndex = 0;
let writing = true;

function typeWriterEffect() {
  if (writing) {
    // Escribir el texto letra por letra
    if (currentCharIndex < words[currentWordIndex].length) {
      typewriterElement.textContent += words[currentWordIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeWriterEffect, 100); // Velocidad a la que se escribe cada letra
    } else {
      writing = false;
      setTimeout(typeWriterEffect, 7000); // Esperar antes de empezar a borrar
    }
  } else {
    // Borrar el texto letra por letra
    if (currentCharIndex > 0) {
      typewriterElement.textContent = words[currentWordIndex].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(typeWriterEffect, 100); // Velocidad a la que se borra cada letra
    } else {
      writing = true;
      currentWordIndex = (currentWordIndex + 1) % words.length; // Pasar a la siguiente palabra
      setTimeout(typeWriterEffect, 500); // Esperar antes de empezar a escribir de nuevo
    }
  }
}

// Iniciar el efecto
typeWriterEffect();
