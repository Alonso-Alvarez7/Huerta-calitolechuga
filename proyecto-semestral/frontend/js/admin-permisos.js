// Obtener usuario actualmente conectado
const usuarioActual = JSON.parse(
    localStorage.getItem("hh_usuario_actual")
);


// Si no existe una sesión,
// regresar al login
if (!usuarioActual) {

    window.location.href = "../login.html";
}


// Obtener rol del usuario
const rol = usuarioActual.rol;


// Definir permisos
const permisos = {

    Administrador: {

        home: true,

        productos: true,

        usuarios: true
    },


    Vendedor: {

        home: true,

        productos: true,

        usuarios: false
    },


    Cliente: {

        home: false,

        productos: false,

        usuarios: false
    }

};


// Buscar permisos del usuario
const permisosUsuario = permisos[rol];


// Si el rol no existe,
// cerrar la sesión
if (!permisosUsuario) {

    localStorage.removeItem(
        "hh_usuario_actual"
    );

    window.location.href =
        "../login.html";
}