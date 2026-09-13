document.addEventListener('DOMContentLoaded', () => {
    console.log("Script de autenticación inicializado.");

    const formLogin = document.getElementById('formLogin');
    const inputEmail = document.getElementById('loginEmail');
    const inputPassword = document.getElementById('loginPassword');

    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');
    const mensajeFeedback = document.getElementById('mensajeFeedback');

    // Regla de Negocio: Dominios oficiales permitidos
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];

    // Validaciones en tiempo real
    if (inputEmail) inputEmail.addEventListener('input', validarEmail);
    if (inputPassword) inputPassword.addEventListener('input', validarPassword);

    // Procesar inicio de sesión al enviar el formulario
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página

            const esEmailValido = validarEmail();
            const esPassValida = validarPassword();

            if (esEmailValido && esPassValida) {
                const emailVal = inputEmail.value.trim().toLowerCase();

                // Determinación del Rol según regla del proyecto
                let rolAsignado = 'Cliente';
                if (emailVal.endsWith('@duoc.cl') || emailVal.endsWith('@profesor.duoc.cl')) {
                    rolAsignado = 'Administrador';
                }

                // Estructura del usuario logueado en LocalStorage
                const usuarioSesion = {
                    email: emailVal,
                    rol: rolAsignado,
                    fechaIngreso: new Date().toISOString()
                };

                // Guardar la sesión activa
                localStorage.setItem('hh_usuario_actual', JSON.stringify(usuarioSesion));

                // Mensaje de éxito
                if (mensajeFeedback) {
                    mensajeFeedback.textContent = `¡Bienvenido! Sesión iniciada como [${rolAsignado}]. Redirigiendo...`;
                    mensajeFeedback.style.display = 'block';
                    mensajeFeedback.className = "feedback-container exito";
                }

                // Redirección condicionada por Rol
                setTimeout(() => {
                    if (rolAsignado === 'Administrador') {
                        window.location.href = "admin/admin-home.html";
                    } else {
                        window.location.href = "index.html";
                    }
                }, 1500);

            } else {
                if (mensajeFeedback) {
                    mensajeFeedback.textContent = "Por favor, corrige los errores señalados en el formulario.";
                    mensajeFeedback.style.display = 'block';
                    mensajeFeedback.className = "feedback-container error";
                }
            }
        });
    }

    // Función: Validar Correo Electrónico
    function validarEmail() {
        if (!inputEmail) return false;
        const valor = inputEmail.value.trim().toLowerCase();
        
        if (valor === '') {
            if (errorEmail) errorEmail.textContent = 'El correo electrónico es obligatorio.';
            return false;
        }

        if (valor.length > 100) {
            if (errorEmail) errorEmail.textContent = 'El correo no puede exceder los 100 caracteres.';
            return false;
        }

        const dominioValido = dominiosPermitidos.some(dominio => valor.endsWith(dominio));

        if (!dominioValido) {
            if (errorEmail) errorEmail.textContent = 'Dominio no permitido. Debe usar @duoc.cl, @profesor.duoc.cl o @gmail.com';
            return false;
        }

        if (errorEmail) errorEmail.textContent = '';
        return true;
    }

    // Función: Validar Contraseña
    function validarPassword() {
        if (!inputPassword) return false;
        const valor = inputPassword.value.trim();

        if (valor === '') {
            if (errorPassword) errorPassword.textContent = 'La contraseña es obligatoria.';
            return false;
        }

        if (valor.length < 4 || valor.length > 10) {
            if (errorPassword) errorPassword.textContent = 'La contraseña debe tener entre 4 y 10 caracteres.';
            return false;
        }

        if (errorPassword) errorPassword.textContent = '';
        return true;
    }
});