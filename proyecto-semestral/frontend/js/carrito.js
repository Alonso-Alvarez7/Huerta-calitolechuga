// ==========================================
// CARRITO DE COMPRAS - HUERTOHOGAR
// ==========================================


// ==========================================
// OBTENER CARRITO DESDE LOCALSTORAGE
// ==========================================

// Si ya existe un carrito guardado,
// lo recuperamos.
//
// Si no existe, comenzamos con un arreglo vacío.

let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];


// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

const carritoLista =
    document.getElementById("carrito-lista");

const carritoContador =
    document.getElementById("carrito-contador");

const carritoTotalProductos =
    document.getElementById("carrito-total-productos");

const carritoTotal =
    document.getElementById("carrito-total");

const botonVaciar =
    document.getElementById("vaciar-carrito");


// ==========================================
// FORMATEAR MONEDA
// ==========================================

// Convierte un número en pesos chilenos.
//
// Ejemplo:
// 1200 → $1.200

function formatearMoneda(valor) {

    return new Intl.NumberFormat("es-CL", {

        style: "currency",

        currency: "CLP",

        maximumFractionDigits: 0

    }).format(valor);
}


// ==========================================
// GUARDAR CARRITO
// ==========================================

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}


// ==========================================
// ACTUALIZAR CONTADOR
// ==========================================

function actualizarContador() {

    // Sumamos las cantidades de todos
    // los productos.

    const cantidadTotal = carrito.reduce(

        (total, producto) => {

            return total + producto.cantidad;

        },

        0

    );


    carritoContador.textContent = cantidadTotal;

}


// ==========================================
// MOSTRAR CARRITO
// ==========================================

function mostrarCarrito() {

    // Limpiamos el contenido anterior.

    carritoLista.innerHTML = "";


    // Si el carrito está vacío.

    if (carrito.length === 0) {

        carritoLista.innerHTML = `

            <div class="carrito-vacio">

                <h2>
                    Tu carrito está vacío
                </h2>

                <p>
                    Agrega productos desde nuestra tienda.
                </p>

                <a
                    href="productos.html"
                    class="boton"
                >
                    Ver productos
                </a>

            </div>

        `;


        carritoTotalProductos.textContent = "0";

        carritoTotal.textContent = "$0";

        actualizarContador();

        return;

    }


    // ==========================================
    // MOSTRAR CADA PRODUCTO
    // ==========================================

    carrito.forEach(producto => {

        const subtotal =
            producto.precio * producto.cantidad;


        const elemento =
            document.createElement("article");


        elemento.classList.add("item-carrito");


        elemento.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                class="imagen-carrito"
            >


            <div class="informacion-carrito">

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    Precio:
                    ${formatearMoneda(producto.precio)}
                </p>

                <p>
                    Subtotal:
                    ${formatearMoneda(subtotal)}
                </p>

            </div>


            <div class="cantidad-carrito">

                <button
                    type="button"
                    onclick="disminuirCantidad('${producto.id}')"
                >
                    −
                </button>


                <span>
                    ${producto.cantidad}
                </span>


                <button
                    type="button"
                    onclick="aumentarCantidad('${producto.id}')"
                >
                    +
                </button>

            </div>


            <button
                type="button"
                class="boton-eliminar"
                onclick="eliminarDelCarrito('${producto.id}')"
            >
                Eliminar
            </button>

        `;


        carritoLista.appendChild(elemento);

    });


    // ==========================================
    // CALCULAR TOTAL DE PRODUCTOS
    // ==========================================

    const cantidadTotal = carrito.reduce(

        (total, producto) => {

            return total + producto.cantidad;

        },

        0

    );


    carritoTotalProductos.textContent =
        cantidadTotal;


    // ==========================================
    // CALCULAR PRECIO TOTAL
    // ==========================================

    const precioTotal = carrito.reduce(

        (total, producto) => {

            return total +
                (producto.precio * producto.cantidad);

        },

        0

    );


    carritoTotal.textContent =
        formatearMoneda(precioTotal);


    // Actualizar contador del header.

    actualizarContador();

}


// ==========================================
// AUMENTAR CANTIDAD
// ==========================================

function aumentarCantidad(id) {

    const producto =
        carrito.find(item => item.id === id);


    if (!producto) {

        return;

    }


    producto.cantidad++;


    guardarCarrito();

    mostrarCarrito();

}


// ==========================================
// DISMINUIR CANTIDAD
// ==========================================

function disminuirCantidad(id) {

    const producto =
        carrito.find(item => item.id === id);


    if (!producto) {

        return;

    }


    producto.cantidad--;


    // Si llega a cero,
    // eliminamos el producto.

    if (producto.cantidad <= 0) {

        carrito =
            carrito.filter(item => item.id !== id);

    }


    guardarCarrito();

    mostrarCarrito();

}


// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function eliminarDelCarrito(id) {

    carrito =
        carrito.filter(item => item.id !== id);


    guardarCarrito();

    mostrarCarrito();

}


// ==========================================
// VACIAR CARRITO
// ==========================================

function vaciarCarrito() {

    if (carrito.length === 0) {

        return;

    }


    const confirmar =
        confirm(
            "¿Estás seguro de que deseas vaciar el carrito?"
        );


    if (!confirmar) {

        return;

    }


    carrito = [];


    guardarCarrito();

    mostrarCarrito();

}


// ==========================================
// BOTÓN VACIAR CARRITO
// ==========================================

if (botonVaciar) {

    botonVaciar.addEventListener(
        "click",
        vaciarCarrito
    );

}


// ==========================================
// INICIAR CARRITO
// ==========================================

mostrarCarrito();