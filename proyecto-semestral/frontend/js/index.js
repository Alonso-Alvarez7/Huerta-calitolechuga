document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".producto .boton");

    const codigos = [
        "FR001",
        "FR002",
        "FR003"
    ];

    botones.forEach(function (boton, indice) {

        boton.addEventListener("click", function (evento) {

            evento.preventDefault();

            const codigoProducto = codigos[indice];

            window.location.href =
                "detalle-producto.html?id=" + codigoProducto;
        });
    });
});