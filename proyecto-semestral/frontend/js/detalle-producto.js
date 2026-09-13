// ==========================================
// DETALLE DE PRODUCTOS - HUERTOHOGAR
// ==========================================

const productos = {

    // ==========================================
    // FRUTAS FRESCAS
    // ==========================================

    FR001: {
        nombre: "Manzanas Fuji",
        imagen: "img/ManzanasFuji.png",
        precio: "$1.200 CLP por kilo",
        descripcion:
            "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres.",
        origen: "Valle del Maule, Chile",
        disponibilidad: "Disponible",
        stock: "150 kilos",
        sostenibilidad:
            "Cultivadas utilizando prácticas responsables con el medio ambiente.",
        descripcionDetallada:
            "Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
        ideas:
            "Perfectas para consumir solas, en ensaladas, postres o como ingrediente en smoothies."
    },

    FR002: {
        nombre: "Naranjas Valencia",
        imagen: "img/NaranjasValencia.png",
        precio: "$1.000 CLP por kilo",
        descripcion:
            "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes.",
        origen: "Chile",
        disponibilidad: "Disponible",
        stock: "200 kilos",
        sostenibilidad:
            "Cultivadas en condiciones que favorecen la calidad y frescura del producto.",
        descripcionDetallada:
            "Estas naranjas son cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.",
        ideas:
            "Ideales para preparar zumos frescos, ensaladas de frutas o consumirlas directamente."
    },

    FR003: {
        nombre: "Plátanos Cavendish",
        imagen: "img/PlátanosCavendish.png",
        precio: "$800 CLP por kilo",
        descripcion:
            "Plátanos maduros y dulces, perfectos para el desayuno o como snack energético.",
        origen: "Chile",
        disponibilidad: "Disponible",
        stock: "250 kilos",
        sostenibilidad:
            "Producto seleccionado considerando prácticas responsables de producción.",
        descripcionDetallada:
            "Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada.",
        ideas:
            "Perfectos para el desayuno, como snack energético o para preparar batidos y postres."
    },


    // ==========================================
    // VERDURAS ORGÁNICAS
    // ==========================================

    VR001: {
        nombre: "Zanahorias Orgánicas",
        imagen: "img/ZanahoriasOrgánicas.png",
        precio: "$900 CLP por kilo",
        descripcion:
            "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins.",
        origen: "Región de O'Higgins, Chile",
        disponibilidad: "Disponible",
        stock: "100 kilos",
        sostenibilidad:
            "Cultivadas sin pesticidas mediante prácticas orgánicas.",
        descripcionDetallada:
            "Son una excelente fuente de vitamina A y fibra, ideales para complementar una alimentación saludable.",
        ideas:
            "Ideales para ensaladas, jugos o como snack saludable."
    },

    VR002: {
        nombre: "Espinacas Frescas",
        imagen: "img/EspinacasFrescas.png",
        precio: "$700 CLP por bolsa de 500g",
        descripcion:
            "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes.",
        origen: "Chile",
        disponibilidad: "Disponible",
        stock: "80 bolsas",
        sostenibilidad:
            "Cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.",
        descripcionDetallada:
            "Espinacas frescas y nutritivas que aportan vitaminas y minerales a una alimentación equilibrada.",
        ideas:
            "Perfectas para ensaladas, batidos verdes y diferentes preparaciones saludables."
    },

    VR003: {
        nombre: "Pimientos Tricolores",
        imagen: "img/PimientosTricolores.png",
        precio: "$1.500 CLP por kilo",
        descripcion:
            "Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos.",
        origen: "Chile",
        disponibilidad: "Disponible",
        stock: "120 kilos",
        sostenibilidad:
            "Cultivados mediante prácticas responsables de producción.",
        descripcionDetallada:
            "Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta.",
        ideas:
            "Ideales para salteados, ensaladas, guisos y platos coloridos."
    },


    // ==========================================
    // PRODUCTOS ORGÁNICOS
    // ==========================================

    PO001: {
        nombre: "Miel Orgánica",
        imagen: "img/MielOrgánica.png",
        precio: "$5.000 CLP por frasco de 500g",
        descripcion:
            "Miel pura y orgánica producida por apicultores locales.",
        origen: "Chile",
        disponibilidad: "Disponible",
        stock: "50 frascos",
        sostenibilidad:
            "Producida por apicultores locales mediante prácticas responsables.",
        descripcionDetallada:
            "Miel pura y orgánica, rica en antioxidantes y con un sabor inigualable.",
        ideas:
            "Perfecta para endulzar de manera natural tus comidas y bebidas."
    },

    // ==========================================
    // QUINUA ORGÁNICA
    // ==========================================
    // Estos datos son agregados para completar
    // el producto, ya que el PDF no especifica
    // precio ni stock para este producto.

    PO003: {
        nombre: "Quinua Orgánica",
        imagen: "img/QuinuaOrgánica.png",
        precio: "$3.500 CLP por bolsa de 500g",
        descripcion:
            "Quinua orgánica de excelente calidad, ideal para complementar una alimentación saludable.",
        origen: "Chile",
        disponibilidad: "Disponible",
        stock: "60 bolsas",
        sostenibilidad:
            "Cultivada mediante prácticas agrícolas responsables y respetuosas con el medio ambiente.",
        descripcionDetallada:
            "La quinua orgánica es un alimento versátil que puede utilizarse en distintas preparaciones y acompañamientos.",
        ideas:
            "Ideal para ensaladas, acompañamientos, bowls, sopas y otras preparaciones saludables."
    },


    // ==========================================
    // PRODUCTOS LÁCTEOS
    // ==========================================
    // Estos datos son agregados para completar
    // el producto, ya que el PDF no especifica
    // precio ni stock para este producto.

    PL001: {
        nombre: "Leche Entera",
        imagen: "img/LecheEntera.png",
        precio: "$1.200 CLP por litro",
        descripcion:
            "Leche entera fresca, proveniente de granjas locales y seleccionada por su calidad.",
        origen: "Granjas locales de Chile",
        disponibilidad: "Disponible",
        stock: "100 litros",
        sostenibilidad:
            "Producto proveniente de granjas locales que trabajan con prácticas responsables.",
        descripcionDetallada:
            "Leche entera fresca y de calidad, ideal para complementar una alimentación equilibrada.",
        ideas:
            "Puede consumirse directamente o utilizarse en desayunos, batidos, postres y distintas preparaciones."
    }

};


// ==========================================
// OBTENER EL CÓDIGO DEL PRODUCTO
// ==========================================

const parametros = new URLSearchParams(window.location.search);

const codigo = parametros.get("id");


// ==========================================
// BUSCAR EL PRODUCTO
// ==========================================

const producto = productos[codigo];


// ==========================================
// MOSTRAR EL PRODUCTO
// ==========================================

if (producto) {

    // Nombre
    document.getElementById("nombre-producto").textContent =
        producto.nombre;


    // Imagen
    const imagen = document.getElementById("imagen-producto");

    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;


    // Precio
    document.getElementById("precio-producto").textContent =
        producto.precio;


    // Descripción principal
    document.getElementById("descripcion-producto").textContent =
        producto.descripcion;


    // Origen
    document.getElementById("origen-producto").textContent =
        producto.origen;


    // Disponibilidad
    document.getElementById("disponibilidad-producto").textContent =
        producto.disponibilidad;


    // Stock
    document.getElementById("stock-producto").textContent =
        producto.stock;


    // Prácticas sostenibles
    document.getElementById("sostenibilidad-producto").textContent =
        producto.sostenibilidad;


    // Descripción detallada
    document.getElementById("descripcion-detallada").textContent =
        producto.descripcionDetallada;


    // Ideas para disfrutar
    document.getElementById("ideas-producto").textContent =
        producto.ideas;


    // Cambiar título de la pestaña
    document.title =
        producto.nombre + " | HuertoHogar";

} else {

    // ==========================================
    // PRODUCTO NO ENCONTRADO
    // ==========================================

    document.getElementById("nombre-producto").textContent =
        "Producto no encontrado";

    document.getElementById("descripcion-producto").textContent =
        "El producto seleccionado no existe o no está disponible.";

}

