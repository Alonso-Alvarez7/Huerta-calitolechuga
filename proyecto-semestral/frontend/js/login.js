
// Obtener el formulario
const loginForm = document.getElementById("loginForm");

// Obtener el mensaje de error
const mensajeError = document.getElementById("mensajeError");

// Escuchar el envío del formulario
loginForm.addEventListener("submit", function(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los valores escritos por el usuario
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();

    // Limpiar mensaje anterior
    mensajeError.textContent = "";

    // Validar que los campos no estén vacíos
    if (correo === "" || password === "") {

        mensajeError.textContent =
            "Debes completar todos los campos.";

        return;
    }

    // Mostrar los datos solamente para comprobar que funciona
    console.log("Correo:", correo);
    console.log("Contraseña:", password);

    alert("Formulario recibido correctamente.");
});
