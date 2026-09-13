// ===============================
// PRODUCTOS - HUERTOHOGAR
// ===============================

// Esperamos a que cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {

    // Obtenemos todos los botones "Ver producto"
    const botones = document.querySelectorAll(".producto .boton");

    // Recorremos cada botón
    botones.forEach(function (boton, indice) {

        boton.addEventListener("click", function (evento) {

            // Evitamos que el enlace funcione de la manera normal
            evento.preventDefault();

            // Lista de códigos en el mismo orden que aparecen
            // los productos en productos.html
            const codigos = [
                "FR001",
                "FR002",
                "FR003",
                "VR001",
                "VR002",
                "VR003",
                "PO001",
                "PO003",
                "PL001"
            ];

            // Obtenemos el código correspondiente al producto
            const codigoProducto = codigos[indice];

            // Enviamos el código a detalle-producto.html
            window.location.href =
                "detalle-producto.html?id=" + codigoProducto;
        });
    });
});

