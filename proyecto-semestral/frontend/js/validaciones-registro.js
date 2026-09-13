document.addEventListener("DOMContentLoaded", () => {

    console.log("Validaciones de registro inicializadas.");

    // Obtener formulario
    const formRegistro =
        document.getElementById("formRegistro");

    // Si no existe el formulario, detener el script
    if (!formRegistro) {
        return;
    }

    // Obtener campos
    const inputNombre =
        document.getElementById("registroNombre");

    const inputEmail =
        document.getElementById("registroEmail");

    const inputPassword =
        document.getElementById("registroPassword");

    const inputPasswordConfirm =
        document.getElementById("registroPasswordConfirm");

    // Obtener mensajes de error
    const errorNombre =
        document.getElementById("errorNombre");

    const errorEmail =
        document.getElementById("errorEmail");

    const errorPassword =
        document.getElementById("errorPassword");

    const errorPasswordConfirm =
        document.getElementById("errorPasswordConfirm");

    const mensajeFeedback =
        document.getElementById("mensajeFeedback");


    // Dominios permitidos
    const dominiosPermitidos = [
        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com"
    ];


    function validarNombre() {

        const nombre =
            inputNombre.value.trim();

        if (nombre === "") {

            errorNombre.textContent =
                "El nombre es obligatorio.";

            return false;
        }

        if (nombre.length < 2) {

            errorNombre.textContent =
                "El nombre debe tener al menos 2 caracteres.";

            return false;
        }

        if (nombre.length > 100) {

            errorNombre.textContent =
                "El nombre no puede superar los 100 caracteres.";

            return false;
        }

        errorNombre.textContent = "";

        return true;
    }


    function validarEmail() {

        const email =
            inputEmail.value
                .trim()
                .toLowerCase();

        if (email === "") {

            errorEmail.textContent =
                "El correo electrónico es obligatorio.";

            return false;
        }

        if (email.length > 100) {

            errorEmail.textContent =
                "El correo no puede superar los 100 caracteres.";

            return false;
        }

        // Comprobar dominio
        const dominioValido =
            dominiosPermitidos.some(
                dominio => email.endsWith(dominio)
            );

        if (!dominioValido) {

            errorEmail.textContent =
                "Dominio no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com.";

            return false;
        }


        // Obtener usuarios existentes
        const usuarios =
            JSON.parse(
                localStorage.getItem("hh_usuarios")
            ) || [];


        // Comprobar si el correo ya existe
        const correoExiste =
            usuarios.some(
                usuario =>
                    usuario.email.toLowerCase() === email
            );

        if (correoExiste) {

            errorEmail.textContent =
                "Este correo ya está registrado.";

            return false;
        }

        errorEmail.textContent = "";

        return true;
    }


    function validarPassword() {

        const password =
            inputPassword.value.trim();

        if (password === "") {

            errorPassword.textContent =
                "La contraseña es obligatoria.";

            return false;
        }

        if (
            password.length < 4 ||
            password.length > 10
        ) {

            errorPassword.textContent =
                "La contraseña debe tener entre 4 y 10 caracteres.";

            return false;
        }

        errorPassword.textContent = "";

        return true;
    }


    function validarPasswordConfirm() {

        const password =
            inputPassword.value.trim();

        const passwordConfirm =
            inputPasswordConfirm.value.trim();


        if (passwordConfirm === "") {

            errorPasswordConfirm.textContent =
                "Debes confirmar la contraseña.";

            return false;
        }


        if (password !== passwordConfirm) {

            errorPasswordConfirm.textContent =
                "Las contraseñas no coinciden.";

            return false;
        }

        errorPasswordConfirm.textContent = "";

        return true;
    }


    inputNombre.addEventListener(
        "input",
        validarNombre
    );

    inputEmail.addEventListener(
        "input",
        validarEmail
    );

    inputPassword.addEventListener(
        "input",
        validarPassword
    );

    inputPasswordConfirm.addEventListener(
        "input",
        validarPasswordConfirm
    );


    formRegistro.addEventListener(
        "submit",
        function(event) {

            // Evitar que la página se recargue
            event.preventDefault();


            // Ejecutar todas las validaciones
            const nombreValido =
                validarNombre();

            const emailValido =
                validarEmail();

            const passwordValida =
                validarPassword();

            const confirmacionValida =
                validarPasswordConfirm();


            // Si existe algún error
            if (
                !nombreValido ||
                !emailValido ||
                !passwordValida ||
                !confirmacionValida
            ) {

                mensajeFeedback.textContent =
                    "Por favor, corrige los errores del formulario.";

                mensajeFeedback.className =
                    "mensaje-error";

                return;
            }


            // Obtener usuarios existentes
            let usuarios =
                JSON.parse(
                    localStorage.getItem("hh_usuarios")
                ) || [];


            // Crear nuevo usuario
            const nuevoUsuario = {

                nombre:
                    inputNombre.value.trim(),

                email:
                    inputEmail.value
                        .trim()
                        .toLowerCase(),

                password:
                    inputPassword.value.trim(),

                // Todo registro público comienza
                // como Cliente
                rol: "Cliente"
            };


            // Agregar usuario
            usuarios.push(nuevoUsuario);


            // Guardar usuarios
            localStorage.setItem(
                "hh_usuarios",
                JSON.stringify(usuarios)
            );


            // Mostrar mensaje de éxito
            mensajeFeedback.textContent =
                "Cuenta creada correctamente. Redirigiendo al inicio de sesión...";

            mensajeFeedback.className =
                "feedback-container exito";


            // Limpiar formulario
            formRegistro.reset();


            // Ir al login después de 1,5 segundos
            setTimeout(() => {

                window.location.href =
                    "login.html";

            }, 1500);
        }
    );

});

