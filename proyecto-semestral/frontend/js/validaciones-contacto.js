document.addEventListener("DOMContentLoaded", () => {

    console.log("Validaciones de contacto inicializadas.");

    // Obtener formulario
    const formContacto =
        document.getElementById("formContacto");

    // Si no existe el formulario, detener el script
    if (!formContacto) {
        return;
    }

    const inputNombre =
        document.getElementById("contactoNombre");

    const inputEmail =
        document.getElementById("contactoEmail");

    const inputAsunto =
        document.getElementById("contactoAsunto");

    const inputMensaje =
        document.getElementById("contactoMensaje");


    const errorNombre =
        document.getElementById("errorContactoNombre");

    const errorEmail =
        document.getElementById("errorContactoEmail");

    const errorAsunto =
        document.getElementById("errorContactoAsunto");

    const errorMensaje =
        document.getElementById("errorContactoMensaje");

    const mensajeContacto =
        document.getElementById("mensajeContacto");


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


        // Comprobar formato básico del correo
        const formatoEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoEmail.test(email)) {

            errorEmail.textContent =
                "Ingresa un correo electrónico válido.";

            return false;
        }

        errorEmail.textContent = "";

        return true;
    }


    function validarAsunto() {

        const asunto =
            inputAsunto.value.trim();

        if (asunto === "") {

            errorAsunto.textContent =
                "El asunto es obligatorio.";

            return false;
        }

        if (asunto.length < 3) {

            errorAsunto.textContent =
                "El asunto debe tener al menos 3 caracteres.";

            return false;
        }

        if (asunto.length > 100) {

            errorAsunto.textContent =
                "El asunto no puede superar los 100 caracteres.";

            return false;
        }

        errorAsunto.textContent = "";

        return true;
    }


    function validarMensaje() {

        const mensaje =
            inputMensaje.value.trim();

        if (mensaje === "") {

            errorMensaje.textContent =
                "El mensaje es obligatorio.";

            return false;
        }

        if (mensaje.length < 10) {

            errorMensaje.textContent =
                "El mensaje debe tener al menos 10 caracteres.";

            return false;
        }

        if (mensaje.length > 500) {

            errorMensaje.textContent =
                "El mensaje no puede superar los 500 caracteres.";

            return false;
        }

        errorMensaje.textContent = "";

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

    inputAsunto.addEventListener(
        "input",
        validarAsunto
    );

    inputMensaje.addEventListener(
        "input",
        validarMensaje
    );


    formContacto.addEventListener(
        "submit",
        function(event) {

            // Evitar recarga de página
            event.preventDefault();


            // Ejecutar todas las validaciones
            const nombreValido =
                validarNombre();

            const emailValido =
                validarEmail();

            const asuntoValido =
                validarAsunto();

            const mensajeValido =
                validarMensaje();


            // Si existe algún error
            if (
                !nombreValido ||
                !emailValido ||
                !asuntoValido ||
                !mensajeValido
            ) {

                mensajeContacto.textContent =
                    "Por favor, corrige los errores del formulario.";

                mensajeContacto.className =
                    "mensaje-error";

                return;
            }


            mensajeContacto.textContent =
                "Mensaje enviado correctamente. ¡Gracias por contactarnos!";

            mensajeContacto.className =
                "feedback-container exito";


            // Limpiar formulario
            formContacto.reset();

        }
    );

});
