// Función para abrir el modal de personalización
function personalizarLatte(latteNombre) {
    const modal = document.getElementById("personalizar-latte");
    const latteNombreElement = document.getElementById("latte-nombre");

    latteNombreElement.innerText = latteNombre;
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Función para agregar al carrito (puedes personalizar esta función)
function agregarAlCarrito() {
    const leche = document.getElementById("tipo-leche").value;
    const azucar = document.getElementById("tipo-azucar").value;
    const temperatura = document.querySelector('input[name="temperatura"]:checked').value;

    // Aquí puedes agregar la lógica para agregar al carrito de compras
}
// Agrega el siguiente código al archivo Script.js
document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al botón o enlace que abrirá el modal
    var openModalButton = document.getElementById("openModalButton");

    // Obtén una referencia al modal
    var modal = document.getElementById("modal");

    // Agrega un evento click al botón o enlace
    openModalButton.addEventListener("click", function () {
        // Cuando se hace clic en el botón o enlace, muestra el modal
        modal.style.display = "block";
    });

    // También debes tener un botón o enlace para cerrar el modal
    var closeModalButton = document.getElementById("closeModalButton");

    // Agrega un evento click al botón o enlace para cerrar el modal
    closeModalButton.addEventListener("click", function () {
        // Cuando se hace clic en el botón o enlace de cierre, oculta el modal
        modal.style.display = "none";
    });
});
