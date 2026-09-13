// Obtener el formulario
const loginForm = document.getElementById("loginForm");

// Obtener el mensaje de error
const mensajeError = document.getElementById("mensajeError");

// Dominios permitidos
const dominiosPermitidos = [
    "@duoc.cl",
    "@profesor.duoc.cl",
    "@gmail.com"
];


// Usuarios provisorios
const usuariosIniciales = [
    {
        nombre: "Admin Huerto",
        email: "admin@duoc.cl",
        password: "1234",
        rol: "Administrador"
    },
    {
        nombre: "Vendedor Huerto",
        email: "vendedor@duoc.cl",
        password: "1234",
        rol: "Vendedor"
    },
    {
        nombre: "Cliente Prueba",
        email: "cliente@gmail.com",
        password: "1234",
        rol: "Cliente"
    }
];


// Crear usuarios provisorios solamente
// si todavía no existen
if (!localStorage.getItem("hh_usuarios")) {

    localStorage.setItem(
        "hh_usuarios",
        JSON.stringify(usuariosIniciales)
    );
}


// Procesar inicio de sesión
loginForm.addEventListener("submit", function(event) {

    // Evitar recargar la página
    event.preventDefault();


    // Obtener correo
    const correo = document
        .getElementById("correo")
        .value
        .trim()
        .toLowerCase();


    // Obtener contraseña
    const password = document
        .getElementById("password")
        .value
        .trim();


    // Limpiar mensaje anterior
    mensajeError.textContent = "";


    // Validar campos vacíos
    if (correo === "" || password === "") {

        mensajeError.textContent =
            "Debes completar todos los campos.";

        return;
    }


    // Validar dominio
    const dominioValido = dominiosPermitidos.some(
        dominio => correo.endsWith(dominio)
    );


    if (!dominioValido) {

        mensajeError.textContent =
            "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.";

        return;
    }


    // Validar largo de contraseña
    if (password.length < 4 || password.length > 10) {

        mensajeError.textContent =
            "La contraseña debe tener entre 4 y 10 caracteres.";

        return;
    }


    // Obtener usuarios
    const usuarios = JSON.parse(
        localStorage.getItem("hh_usuarios")
    ) || [];


    // Buscar usuario
    const usuarioEncontrado = usuarios.find(
        usuario =>
            usuario.email.toLowerCase() === correo &&
            usuario.password === password
    );


    // Usuario inexistente
    if (!usuarioEncontrado) {

        mensajeError.textContent =
            "Correo o contraseña incorrectos.";

        return;
    }


    // Crear sesión
    const usuarioSesion = {

        nombre: usuarioEncontrado.nombre,

        email: usuarioEncontrado.email,

        rol: usuarioEncontrado.rol,

        fechaIngreso: new Date().toISOString()
    };


    // Guardar sesión
    localStorage.setItem(
        "hh_usuario_actual",
        JSON.stringify(usuarioSesion)
    );


    // Redireccionar según el rol
    if (
        usuarioEncontrado.rol === "Administrador" ||
        usuarioEncontrado.rol === "Vendedor"
    ) {

        window.location.href = "admin/admin-home.html";

    } else {

        window.location.href = "index.html";
    }

});