document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.snap-section');
    const overlay = document.querySelector('.overlay');
    let currentSection = 0;
    let isTransitioning = false;
  
    window.addEventListener('wheel', function(event) {
      event.preventDefault();
  
      if (isTransitioning) return;
  
      isTransitioning = true;
      const direction = event.deltaY > 0 ? 1 : -1;
      let nextSection = currentSection + direction;
  
      if (nextSection < 0 || nextSection >= sections.length) {
        isTransitioning = false;
        return; // No hace nada si la próxima sección está fuera de los límites
      }
  
      // Inicia el fundido
      overlay.style.visibility = 'visible';
      overlay.style.opacity = 1;
  
      setTimeout(() => {
        // Cambiar la sección visible
        sections[currentSection].style.transform = 'translateY(' + (-100 * direction) + 'vh)';
        sections[nextSection].style.transform = 'translateY(0)';
  
        setTimeout(() => {
          // Espera para asegurar que la transformación ha sido aplicada
          window.scrollTo({ top: sections[nextSection].offsetTop, behavior: 'instant' });
  
          // Finalizar el fundido y revelar el nuevo contenido
          overlay.style.opacity = 0;
          setTimeout(() => {
            overlay.style.visibility = 'hidden';
            currentSection = nextSection; // Actualiza la sección actual a la nueva sección
            isTransitioning = false;
          }, 500);
        }, 500);
      }, 500);
    });
  });
  