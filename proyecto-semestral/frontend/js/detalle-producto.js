// ==========================================
// DETALLE DE PRODUCTOS - HUERTOHOGAR
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
// OBTENER PRODUCTO DESDE LA URL
// ==========================================

const parametros = new URLSearchParams(window.location.search);

const codigo = parametros.get("id");

const producto = productos[codigo];


// ==========================================
// MOSTRAR PRODUCTO
// ==========================================

if (producto) {

    document.getElementById("nombre-producto").textContent =
        producto.nombre;


    // Imagen
    const imagen = document.getElementById("imagen-producto");

    imagen.src = producto.imagen;

    imagen.alt = producto.nombre;


    // Precio
    document.getElementById("precio-producto").textContent =
        formatearMoneda(producto.precio) + " por " + producto.unidad;


    // Descripción
    document.getElementById("descripcion-producto").textContent =
        producto.descripcion;


    // Información
    document.getElementById("origen-producto").textContent =
        producto.origen;

    document.getElementById("disponibilidad-producto").textContent =
        producto.disponibilidad;

    document.getElementById("stock-producto").textContent =
        producto.stock + " " + producto.unidad;

    document.getElementById("sostenibilidad-producto").textContent =
        producto.sostenibilidad;


    // Información adicional
    document.getElementById("descripcion-detallada").textContent =
        producto.descripcionDetallada;

    document.getElementById("ideas-producto").textContent =
        producto.ideas;


    // ==========================================
    // CONFIGURAR CANTIDAD
    // ==========================================

    const cantidad = document.getElementById("cantidad");

    cantidad.min = 1;

    cantidad.max = producto.stock;

    cantidad.value = 1;


    // Mostrar unidad
    document.getElementById("unidad-producto").textContent =
        producto.unidad;


    // Actualizar título
    document.title =
        producto.nombre + " | HuertoHogar";


    // ==========================================
    // CONTROL DE STOCK
    // ==========================================

    cantidad.addEventListener("input", function () {

        const valor = parseInt(cantidad.value);

        const mensaje = document.getElementById("mensaje-stock");


        // Si se ingresa un número mayor al stock
        if (valor > producto.stock) {

            cantidad.value = producto.stock;

            mensaje.textContent =
                "⚠️ Has alcanzado el máximo disponible en stock: " +
                producto.stock +
                " " +
                producto.unidad +
                ".";

            return;
        }


        // Si se ingresa un número menor a 1
        if (valor < 1 || isNaN(valor)) {

            cantidad.value = 1;

            mensaje.textContent =
                "La cantidad mínima es 1.";

            return;
        }


        // Si se selecciona exactamente el stock máximo
        if (valor === producto.stock) {

            mensaje.textContent =
                "⚠️ Has alcanzado el máximo disponible en stock: " +
                producto.stock +
                " " +
                producto.unidad +
                ".";

            return;
        }


        // Si la cantidad es válida
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


        // Validar cantidad
        if (
            isNaN(cantidadSeleccionada) ||
            cantidadSeleccionada < 1 ||
            cantidadSeleccionada > producto.stock
        ) {

            return;

        }


        // Obtener carrito existente
        let carrito =
            JSON.parse(localStorage.getItem("carrito")) || [];


        // Buscar si el producto ya existe
        const productoExistente =
            carrito.find(item => item.id === codigo);


        if (productoExistente) {

            const cantidadDisponible =
                producto.stock - productoExistente.cantidad;


            if (cantidadSeleccionada > cantidadDisponible) {

                mensaje.textContent =
                    "⚠️ No puedes agregar esa cantidad. " +
                    "Solo quedan " +
                    cantidadDisponible +
                    " " +
                    producto.unidad +
                    " disponibles.";

                mensaje.style.color = "#c0392b";

                return;
            }


            productoExistente.cantidad +=
                cantidadSeleccionada;

        } else {

            carrito.push({

                id: codigo,

                nombre: producto.nombre,

                imagen: producto.imagen,

                precio: producto.precio,

                cantidad: cantidadSeleccionada

            });

        }


        // Guardar carrito
        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );


        // Mostrar mensaje
        const mensaje =
            document.getElementById("mensaje-stock");


        mensaje.textContent =
            "✅ Producto agregado al carrito.";


        mensaje.style.color = "#2e7d32";

    });
} else {

    // ==========================================
    // PRODUCTO NO ENCONTRADO
    // ==========================================

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

