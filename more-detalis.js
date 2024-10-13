// Obtener todos los botones que abren modales
var btns = document.querySelectorAll(".item, .card-button");

// Añadir evento de clic a cada botón
btns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.style.display = "block";

        // Desactivar el desplazamiento de la página principal
        document.body.style.overflow = 'hidden';

        // Obtener el <span> que cierra el modal
        var span = modal.getElementsByClassName("close")[0];

        // Cuando el usuario haga clic en <span> (x), cierra el modal
        span.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = ''; // Restaurar el desplazamiento
        }

        // Cuando el usuario haga clic en cualquier lugar fuera del modal, lo cierra
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = ''; // Restaurar el desplazamiento
            }
        }
    }
});
