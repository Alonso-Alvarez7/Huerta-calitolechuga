document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formUsuario');
    const tabla = document.getElementById('tablaUsuariosBody');

    let usuarios = JSON.parse(localStorage.getItem('hh_usuarios')) || [
        { nombre: 'Admin Huerto', email: 'admin@duoc.cl', rol: 'Administrador' }
    ];

    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];

    function guardarYRenderizar() {
        localStorage.setItem('hh_usuarios', JSON.stringify(usuarios));
        renderizarTabla();
    }

    function renderizarTabla() {
        tabla.innerHTML = '';
        usuarios.forEach((u, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${u.nombre}</td>
                <td>${u.email}</td>
                <td><strong>${u.rol}</strong></td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarUsuario(${index})">Eliminar</button>
                </td>
            `;
            tabla.appendChild(tr);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('usrNombre').value.trim();
        const email = document.getElementById('usrEmail').value.trim();
        const rol = document.getElementById('usrRol').value;
        const errorEmail = document.getElementById('errorUsrEmail');

        const dominioValido = dominiosPermitidos.some(d => email.toLowerCase().endsWith(d));

        if (!dominioValido) {
            errorEmail.textContent = 'Correo no permitido (@duoc.cl, @profesor.duoc.cl o @gmail.com).';
            return;
        }

        usuarios.push({ nombre, email, rol });
        guardarYRenderizar();
        form.reset();
        errorEmail.textContent = '';
    });

    window.eliminarUsuario = (index) => {
        if (confirm('¿Deseas eliminar este usuario?')) {
            usuarios.splice(index, 1);
            guardarYRenderizar();
        }
    };

    renderizarTabla();
});