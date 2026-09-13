document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formProducto');
    const tabla = document.getElementById('tablaProductosBody');

    // Cargar o inicializar productos en LocalStorage
    let productos = JSON.parse(localStorage.getItem('hh_productos')) || [
        { codigo: 'PROD001', nombre: 'Manzana Orgánica 1kg', precio: 1500, stock: 12 },
        { codigo: 'PROD002', nombre: 'Lechuga Hidropónica', precio: 900, stock: 3 }
    ];

    function guardarYRenderizar() {
        localStorage.setItem('hh_productos', JSON.stringify(productos));
        renderizarTabla();
    }

    function renderizarTabla() {
        tabla.innerHTML = '';
        productos.forEach((p, index) => {
            const tr = document.createElement('tr');
            
            // Regla de Negocio: Alerta de Stock Crítico (<= 5 unidades)
            const estadoStock = p.stock <= 5 
                ? `<span class="alerta-stock">¡Stock Crítico! (${p.stock})</span>` 
                : `<span style="color:var(--exito); font-weight:600;">Normal (${p.stock})</span>`;

            tr.innerHTML = `
                <td>${p.codigo}</td>
                <td>${p.nombre}</td>
                <td>$${Number(p.precio).toLocaleString('es-CL')}</td>
                <td>${p.stock}</td>
                <td>${estadoStock}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
                </td>
            `;
            tabla.appendChild(tr);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const codigo = document.getElementById('prodCodigo').value.trim();
        const nombre = document.getElementById('prodNombre').value.trim();
        const precio = parseFloat(document.getElementById('prodPrecio').value);
        const stock = parseInt(document.getElementById('prodStock').value);

        // Validaciones simples
        if (!codigo || !nombre || isNaN(precio) || isNaN(stock) || precio <= 0 || stock < 0) {
            alert('Por favor, completa todos los campos con valores válidos.');
            return;
        }

        // Regla: Código Único
        if (productos.some(p => p.codigo.toLowerCase() === codigo.toLowerCase())) {
            document.getElementById('errorCodigo').textContent = 'El código ya existe.';
            return;
        }

        productos.push({ codigo, nombre, precio, stock });
        guardarYRenderizar();
        form.reset();
        document.getElementById('errorCodigo').textContent = '';
    });

    window.eliminarProducto = (index) => {
        if (confirm('¿Seguro que deseas eliminar este producto?')) {
            productos.splice(index, 1);
            guardarYRenderizar();
        }
    };

    renderizarTabla();
});