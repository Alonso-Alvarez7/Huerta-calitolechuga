document.addEventListener("DOMContentLoaded", () => {

    // Obtener formulario
    const form =
        document.getElementById("formUsuario");


    // Obtener tabla
    const tabla =
        document.getElementById("tablaUsuariosBody");


    // Dominios permitidos
    const dominiosPermitidos = [
        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com"
    ];


    // Obtener usuarios almacenados
    let usuarios = JSON.parse(
        localStorage.getItem("hh_usuarios")
    ) || [];


    // Guardar y actualizar tabla
    function guardarYRenderizar() {

        localStorage.setItem(
            "hh_usuarios",
            JSON.stringify(usuarios)
        );

        renderizarTabla();
    }


    // Mostrar usuarios
    function renderizarTabla() {

        tabla.innerHTML = "";


        usuarios.forEach((usuario, index) => {

            const tr =
                document.createElement("tr");


            tr.innerHTML = `

                <td>
                    ${usuario.nombre}
                </td>

                <td>
                    ${usuario.email}
                </td>

                <td>
                    <strong>
                        ${usuario.rol}
                    </strong>
                </td>

                <td>
                    <button
                        class="btn-eliminar"
                        onclick="eliminarUsuario(${index})">

                        Eliminar

                    </button>
                </td>

            `;


            tabla.appendChild(tr);
        });
    }


    // Crear usuario
    form.addEventListener("submit", function(event) {

        event.preventDefault();


        // Obtener datos
        const nombre =
            document
                .getElementById("usrNombre")
                .value
                .trim();


        const email =
            document
                .getElementById("usrEmail")
                .value
                .trim()
                .toLowerCase();


        const rol =
            document
                .getElementById("usrRol")
                .value;


        const errorEmail =
            document.getElementById("errorUsrEmail");


        // Validar nombre
        if (nombre === "") {

            alert(
                "Debes ingresar el nombre del usuario."
            );

            return;
        }


        // Validar correo
        if (email === "") {

            errorEmail.textContent =
                "Debes ingresar un correo.";

            return;
        }


        // Validar dominio
        const dominioValido =
            dominiosPermitidos.some(
                dominio =>
                    email.endsWith(dominio)
            );


        if (!dominioValido) {

            errorEmail.textContent =
                "Correo no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com.";

            return;
        }


        // Verificar correo duplicado
        const usuarioExiste =
            usuarios.some(
                usuario =>
                    usuario.email.toLowerCase() === email
            );


        if (usuarioExiste) {

            errorEmail.textContent =
                "El correo ya está registrado.";

            return;
        }


        // Contraseña provisoria
        const passwordProvisoria = "1234";


        // Crear nuevo usuario
        const nuevoUsuario = {

            nombre: nombre,

            email: email,

            password: passwordProvisoria,

            rol: rol
        };


        // Agregar usuario
        usuarios.push(nuevoUsuario);


        // Guardar
        guardarYRenderizar();


        // Limpiar formulario
        form.reset();


        // Limpiar error
        errorEmail.textContent = "";


        // Informar contraseña provisoria
        alert(
            "Usuario creado correctamente.\n\n" +
            "Contraseña provisoria: 1234"
        );

    });


    // Eliminar usuario
    window.eliminarUsuario = function(index) {

        if (
            confirm(
                "¿Deseas eliminar este usuario?"
            )
        ) {

            usuarios.splice(index, 1);

            guardarYRenderizar();
        }

    };


    // Mostrar usuarios al cargar
    renderizarTabla();

});