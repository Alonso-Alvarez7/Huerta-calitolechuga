// ==========================================
// DETALLE DE PRODUCTOS - HUERTOHOGAR
// ==========================================


// ==========================================
// OBTENER PRODUCTO DESDE LA URL
// ==========================================

const parametros =
    new URLSearchParams(window.location.search);


const codigo =
    parametros.get("id");


const producto =
    productos[codigo];


// ==========================================
// MOSTRAR PRODUCTO
// ==========================================

if (producto) {

    // ==========================================
    // NOMBRE
    // ==========================================

    document.getElementById("nombre-producto").textContent =
        producto.nombre;


    // ==========================================
    // IMAGEN
    // ==========================================

    const imagen =
        document.getElementById("imagen-producto");


    imagen.src =
        producto.imagen;


    imagen.alt =
        producto.nombre;


    // ==========================================
    // PRECIO
    // ==========================================

    document.getElementById("precio-producto").textContent =
        formatearMoneda(producto.precio) +
        " por " +
        producto.unidad;


    // ==========================================
    // DESCRIPCIÓN
    // ==========================================

    document.getElementById("descripcion-producto").textContent =
        producto.descripcion;


    // ==========================================
    // INFORMACIÓN
    // ==========================================

    document.getElementById("origen-producto").textContent =
        producto.origen;


    document.getElementById("disponibilidad-producto").textContent =
        producto.disponibilidad;


    document.getElementById("stock-producto").textContent =
        producto.stock +
        " " +
        producto.unidad;


    document.getElementById("sostenibilidad-producto").textContent =
        producto.sostenibilidad;


    // ==========================================
    // INFORMACIÓN ADICIONAL
    // ==========================================

    document.getElementById("descripcion-detallada").textContent =
        producto.descripcionDetallada;


    document.getElementById("ideas-producto").textContent =
        producto.ideas;


    // ==========================================
    // CONFIGURAR CANTIDAD
    // ==========================================

    const cantidad =
        document.getElementById("cantidad");


    cantidad.min = 1;

    cantidad.max = producto.stock;

    cantidad.value = 1;


    // ==========================================
    // MOSTRAR UNIDAD
    // ==========================================

    document.getElementById("unidad-producto").textContent =
        producto.unidad;


    // ==========================================
    // ACTUALIZAR TÍTULO
    // ==========================================

    document.title =
        producto.nombre +
        " | HuertoHogar";


    // ==========================================
    // CONTROL DE STOCK
    // ==========================================

    cantidad.addEventListener("input", function () {

        const valor =
            parseInt(cantidad.value);


        const mensaje =
            document.getElementById("mensaje-stock");


        // ==========================================
        // CANTIDAD MAYOR AL STOCK
        // ==========================================

        if (valor > producto.stock) {

            cantidad.value =
                producto.stock;


            mensaje.textContent =
                "⚠️ Has alcanzado el máximo disponible " +
                "en stock: " +
                producto.stock +
                " " +
                producto.unidad +
                ".";


            mensaje.style.color =
                "#c0392b";


            return;

        }


        // ==========================================
        // CANTIDAD MENOR A 1
        // ==========================================

        if (valor < 1 || isNaN(valor)) {

            cantidad.value = 1;


            mensaje.textContent =
                "La cantidad mínima es 1.";


            mensaje.style.color =
                "#c0392b";


            return;

        }


        // ==========================================
        // STOCK MÁXIMO
        // ==========================================

        if (valor === producto.stock) {

            mensaje.textContent =
                "⚠️ Has alcanzado el máximo disponible " +
                "en stock: " +
                producto.stock +
                " " +
                producto.unidad +
                ".";


            mensaje.style.color =
                "#c0392b";


            return;

        }


        // ==========================================
        // CANTIDAD VÁLIDA
        // ==========================================

        mensaje.textContent = "";

    });


    // ==========================================
    // AGREGAR AL CARRITO
    // ==========================================

    const botonCarrito =
        document.getElementById("agregar-carrito");


    botonCarrito.addEventListener("click", function (evento) {

        evento.preventDefault();


        const cantidadSeleccionada =
            parseInt(cantidad.value);


        const mensaje =
            document.getElementById("mensaje-stock");


        // ==========================================
        // VALIDAR CANTIDAD
        // ==========================================

        if (
            isNaN(cantidadSeleccionada) ||
            cantidadSeleccionada < 1 ||
            cantidadSeleccionada > producto.stock
        ) {

            return;

        }


        // ==========================================
        // AGREGAR USANDO CARRITO.JS
        // ==========================================

        const resultado =
            agregarAlCarrito(
                codigo,
                cantidadSeleccionada
            );


        // ==========================================
        // MOSTRAR RESULTADO
        // ==========================================

        mensaje.textContent =
            resultado.mensaje;


        if (resultado.exito) {

            mensaje.style.color =
                "#2e7d32";

        } else {

            mensaje.style.color =
                "#c0392b";

        }

    });


// ==========================================
// PRODUCTO NO ENCONTRADO
// ==========================================

} else {

    document.getElementById("nombre-producto").textContent =
        "Producto no encontrado";


    document.getElementById("descripcion-producto").textContent =
        "El producto seleccionado no existe o no está disponible.";

}


// ==========================================
// FORMATO DE MONEDA
// ==========================================

function formatearMoneda(valor) {

    return new Intl.NumberFormat("es-CL", {

        style: "currency",

        currency: "CLP",

        maximumFractionDigits: 0

    }).format(valor);

}