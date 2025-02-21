document.addEventListener('DOMContentLoaded', function() {
  const basePath = "/IMAGES/";

  const images = [
    `url("${basePath}POPAYAN/torre.JPEG")`,
    `url("${basePath}SILVIA/principal.JPEG")`,
    `url("${basePath}PURACE/condor1.JPEG")`,
    `url("${basePath}TIERRADENTRO/hipogeo2.JPEG")`
  ];
  
    const gradients = [
        'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 255))',
        'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 255))',
        'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 255))',
        'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 255))'
      ];
    
      let currentIndex = 0;
      const slideshowElement = document.getElementById('agencia');
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      slideshowElement.appendChild(overlay);
    
      function changeBackground() {
        overlay.style.opacity = 1;
        setTimeout(() => {
          slideshowElement.style.backgroundImage = `${gradients[currentIndex]}, ${images[currentIndex]}`;
          currentIndex = (currentIndex + 1) % images.length;
          setTimeout(() => {
            overlay.style.opacity = 0;
          }, 200); // Espera el tiempo de la transición antes de ocultar el overlay
        }, 800); // Espera el tiempo de la transición antes de cambiar la imagen
      }
    
      // Cambia la imagen de fondo cada 5 segundos
      setInterval(changeBackground, 5000);
    
      // Cambia la imagen inmediatamente al cargar la página
      changeBackground();
    });