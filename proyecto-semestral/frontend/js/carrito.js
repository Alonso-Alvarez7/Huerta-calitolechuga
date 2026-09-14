// ==========================================
// CARRITO DE COMPRAS - HUERTOHOGAR
// ==========================================


// ==========================================
// LISTA DE PRODUCTOS
// ==========================================

const productos = {

    // ==========================================
    // FRUTAS
    // ==========================================

    FR001: {
        nombre: "Manzanas Fuji",
        imagen: "img/ManzanasFuji.png",
        precio: 1200,
        unidad: "kilos",

        descripcion:
            "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. " +
            "Perfectas para meriendas saludables o como ingrediente en postres. " +
            "Estas manzanas son conocidas por su textura firme y su sabor equilibrado " +
            "entre dulce y ácido.",

        origen: "Valle del Maule, Chile",
        disponibilidad: "Disponible",
        stock: 150,

        sostenibilidad:
            "Producto cultivado en el Valle del Maule.",

        descripcionDetallada:
            "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. " +
            "Perfectas para meriendas saludables o como ingrediente en postres. " +
            "Estas manzanas son conocidas por su textura firme y su sabor equilibrado " +
            "entre dulce y ácido.",

        ideas:
            "Perfectas para meriendas saludables o como ingrediente en postres."
    },


    FR002: {
        nombre: "Naranjas Valencia",
        imagen: "img/NaranjasValencia.png",
        precio: 1000,
        unidad: "kilos",

        descripcion:
            "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para " +
            "zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas " +
            "que aseguran su dulzura y jugosidad.",

        origen: "Chile",
        disponibilidad: "Disponible",
        stock: 200,

        sostenibilidad:
            "Cultivadas en condiciones climáticas óptimas.",

        descripcionDetallada:
            "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para " +
            "zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas " +
            "que aseguran su dulzura y jugosidad.",

        ideas:
            "Ideales para preparar zumos frescos y refrescantes."
    },


    FR003: {
        nombre: "Plátanos Cavendish",
        imagen: "img/PlátanosCavendish.png",
        precio: 800,
        unidad: "kilos",

        descripcion:
            "Plátanos maduros y dulces, perfectos para el desayuno o como snack " +
            "energético. Estos plátanos son ricos en potasio y vitaminas, ideales " +
            "para mantener una dieta equilibrada.",

        origen: "Chile",
        disponibilidad: "Disponible",
        stock: 250,

        sostenibilidad:
            "Producto seleccionado para ofrecer una alternativa saludable y nutritiva.",

        descripcionDetallada:
            "Plátanos maduros y dulces, perfectos para el desayuno o como snack " +
            "energético. Estos plátanos son ricos en potasio y vitaminas, ideales " +
            "para mantener una dieta equilibrada.",

        ideas:
            "Perfectos para el desayuno o como snack energético."
    },


    // ==========================================
    // VERDURAS
    // ==========================================

    VR001: {
        nombre: "Zanahorias Orgánicas",
        imagen: "img/ZanahoriasOrgánicas.png",
        precio: 900,
        unidad: "kilos",

        descripcion:
            "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. " +
            "Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos " +
            "o como snack saludable.",

        origen: "Región de O'Higgins, Chile",
        disponibilidad: "Disponible",
        stock: 100,

        sostenibilidad:
            "Cultivadas sin pesticidas.",

        descripcionDetallada:
            "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. " +
            "Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos " +
            "o como snack saludable.",

        ideas:
            "Ideales para ensaladas, jugos o como snack saludable."
    },


    VR002: {
        nombre: "Espinacas Frescas",
        imagen: "img/EspinacasFrescas.png",
        precio: 700,
        unidad: "bolsas de 500g",

        descripcion:
            "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. " +
            "Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan " +
            "su calidad y valor nutricional.",

        origen: "Chile",
        disponibilidad: "Disponible",
        stock: 80,

        sostenibilidad:
            "Cultivadas bajo prácticas orgánicas.",

        descripcionDetallada:
            "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. " +
            "Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan " +
            "su calidad y valor nutricional.",

        ideas:
            "Perfectas para ensaladas y batidos verdes."
    },


    VR003: {
        nombre: "Pimientos Tricolores",
        imagen: "img/PimientosTricolores.png",
        precio: 1500,
        unidad: "kilos",

        descripcion:
            "Pimientos rojos, amarillos y verdes, ideales para salteados y platos " +
            "coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden " +
            "un toque vibrante y saludable a cualquier receta.",

        origen: "Chile",
        disponibilidad: "Disponible",
        stock: 120,

        sostenibilidad:
            "Producto seleccionado considerando prácticas responsables de producción.",

        descripcionDetallada:
            "Pimientos rojos, amarillos y verdes, ideales para salteados y platos " +
            "coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden " +
            "un toque vibrante y saludable a cualquier receta.",

        ideas:
            "Ideales para salteados y platos coloridos."
    },


    // ==========================================
    // OTROS PRODUCTOS
    // ==========================================

    PO001: {
        nombre: "Miel Orgánica",
        imagen: "img/MielOrgánica.png",
        precio: 5000,
        unidad: "frascos de 500g",

        descripcion:
            "Miel pura y orgánica producida por apicultores locales. Rica en " +
            "antioxidantes y con un sabor inigualable, perfecta para endulzar " +
            "de manera natural tus comidas y bebidas.",

        origen: "Chile",
        disponibilidad: "Disponible",
        stock: 50,

        sostenibilidad:
            "Producida por apicultores locales.",

        descripcionDetallada:
            "Miel pura y orgánica producida por apicultores locales. Rica en " +
            "antioxidantes y con un sabor inigualable, perfecta para endulzar " +
            "de manera natural tus comidas y bebidas.",

        ideas:
            "Perfecta para endulzar de manera natural tus comidas y bebidas."
    },


    PO003: {
        nombre: "Quinua Orgánica",
        imagen: "img/QuinuaOrgánica.png",
        precio: 3500,
        unidad: "bolsas de 500g",

        descripcion:
            "Quinua orgánica de excelente calidad, ideal para complementar " +
            "una alimentación saludable.",

        origen: "Chile",
        disponibilidad: "Disponible",
        stock: 60,

        sostenibilidad:
            "Cultivada mediante prácticas agrícolas responsables y respetuosas " +
            "con el medio ambiente.",

        descripcionDetallada:
            "La quinua orgánica es un alimento versátil que puede utilizarse " +
            "en distintas preparaciones y acompañamientos.",

        ideas:
            "Ideal para ensaladas, acompañamientos, bowls, sopas y otras " +
            "preparaciones saludables."
    },


    PL001: {
        nombre: "Leche Entera",
        imagen: "img/LecheEntera.png",
        precio: 1200,
        unidad: "litros",

        descripcion:
            "Leche entera fresca, proveniente de granjas locales y seleccionada " +
            "por su calidad.",

        origen: "Granjas locales de Chile",
        disponibilidad: "Disponible",
        stock: 100,

        sostenibilidad:
            "Producto proveniente de granjas locales que trabajan con " +
            "prácticas responsables.",

        descripcionDetallada:
            "Leche entera fresca y de calidad, ideal para complementar " +
            "una alimentación equilibrada.",

        ideas:
            "Puede consumirse directamente o utilizarse en desayunos, batidos, " +
            "postres y distintas preparaciones."
    }
};


// ==========================================
// OBTENER CARRITO DESDE LOCALSTORAGE
// ==========================================

let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];


// ==========================================
// ACTUALIZAR DATOS DE PRODUCTOS DEL CARRITO
// ==========================================

carrito.forEach(producto => {

    const productoOriginal =
        productos[producto.id];


    if (productoOriginal) {

        producto.nombre =
            productoOriginal.nombre;

        producto.imagen =
            productoOriginal.imagen;

        producto.precio =
            productoOriginal.precio;

        producto.stock =
            productoOriginal.stock;

        producto.unidad =
            productoOriginal.unidad;

    }

});


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

    const cantidadTotal = carrito.reduce(

        (total, producto) => {

            return total + producto.cantidad;

        },

        0

    );


    if (carritoContador) {

        carritoContador.textContent =
            cantidadTotal;

    }

}


// ==========================================
// AGREGAR PRODUCTO AL CARRITO
// ==========================================

function agregarAlCarrito(id, cantidad) {

    const producto =
        productos[id];


    if (!producto) {

        return {
            exito: false,
            mensaje: "Producto no encontrado."
        };

    }


    // Buscar si ya existe en el carrito

    const productoExistente =
        carrito.find(item => item.id === id);


    // ==========================================
    // SI EL PRODUCTO YA EXISTE
    // ==========================================

    if (productoExistente) {

        const cantidadDisponible =
            producto.stock -
            productoExistente.cantidad;


        if (cantidad > cantidadDisponible) {

            return {
                exito: false,
                mensaje:
                    "⚠️ No puedes agregar esa cantidad. " +
                    "Solo quedan " +
                    cantidadDisponible +
                    " " +
                    producto.unidad +
                    " disponibles."
            };

        }


        productoExistente.cantidad +=
            cantidad;

    }


    // ==========================================
    // SI EL PRODUCTO NO EXISTE
    // ==========================================

    else {

        carrito.push({

            id: id,

            nombre: producto.nombre,

            imagen: producto.imagen,

            precio: producto.precio,

            cantidad: cantidad,

            stock: producto.stock,

            unidad: producto.unidad

        });

    }


    guardarCarrito();

    actualizarContador();


    return {
        exito: true,
        mensaje: "✅ Producto agregado al carrito."
    };

}


// ==========================================
// MOSTRAR CARRITO
// ==========================================

function mostrarCarrito() {

    // Esta función solamente se ejecuta
    // cuando estamos en carrito-compras.html.

    if (!carritoLista) {

        return;

    }


    carritoLista.innerHTML = "";


    // ==========================================
    // CARRITO VACÍO
    // ==========================================

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


        if (carritoTotalProductos) {

            carritoTotalProductos.textContent = "0";

        }


        if (carritoTotal) {

            carritoTotal.textContent = "$0";

        }


        actualizarContador();

        return;

    }


    // ==========================================
    // MOSTRAR PRODUCTOS
    // ==========================================

    carrito.forEach(producto => {

        const subtotal =
            producto.precio *
            producto.cantidad;


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
    // TOTAL DE PRODUCTOS
    // ==========================================

    const cantidadTotal = carrito.reduce(

        (total, producto) => {

            return total + producto.cantidad;

        },

        0

    );


    if (carritoTotalProductos) {

        carritoTotalProductos.textContent =
            cantidadTotal;

    }


    // ==========================================
    // PRECIO TOTAL
    // ==========================================

    const precioTotal = carrito.reduce(

        (total, producto) => {

            return total +
                (producto.precio *
                producto.cantidad);

        },

        0

    );


    if (carritoTotal) {

        carritoTotal.textContent =
            formatearMoneda(precioTotal);

    }


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


    // ==========================================
    // VALIDAR STOCK
    // ==========================================

    if (producto.cantidad >= producto.stock) {

        alert(
            "No puedes agregar más unidades. " +
            "Has alcanzado el stock disponible de " +
            producto.stock +
            " " +
            producto.unidad +
            "."
        );

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