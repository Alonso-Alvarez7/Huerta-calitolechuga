/* =======================
   MAPA DE SUCURSALES
   ======================= */

// Crear mapa
const mapa = L.map("mapa-sucursales", {
    zoomControl: true
});


// =======================
// MAPA DE OPENSTREETMAP
// =======================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(mapa);


// =======================
// SUCURSALES
// =======================

const sucursales = [
    {
        nombre: "Santiago",
        region: "Región Metropolitana",
        latitud: -33.4489,
        longitud: -70.6693
    },

    {
        nombre: "Valparaíso",
        region: "Región de Valparaíso",
        latitud: -33.0472,
        longitud: -71.6127
    },

    {
        nombre: "Viña del Mar",
        region: "Región de Valparaíso",
        latitud: -33.0245,
        longitud: -71.5518
    },

    {
        nombre: "Concepción",
        region: "Región del Biobío",
        latitud: -36.8201,
        longitud: -73.0444
    },

    {
        nombre: "Nacimiento",
        region: "Región del Biobío",
        latitud: -37.5028,
        longitud: -72.6736
    },

    {
        nombre: "Villarrica",
        region: "Región de La Araucanía",
        latitud: -39.2820,
        longitud: -72.2279
    },

    {
        nombre: "Puerto Montt",
        region: "Región de Los Lagos",
        latitud: -41.4693,
        longitud: -72.9424
    }
];


// =======================
// LÍMITES DE CHILE
// =======================

const limitesChile = L.latLngBounds(
    [-56, -76],
    [-17, -66]
);


// Mostrar Chile completo
mapa.fitBounds(limitesChile);


// =======================
// CREAR MARCADORES
// =======================

sucursales.forEach(function (sucursal) {

    const marcador = L.marker([
        sucursal.latitud,
        sucursal.longitud
    ]).addTo(mapa);


    marcador.bindPopup(`
        <div class="popup-sucursal">
            <strong>HuertoHogar</strong>
            <br>
            <strong>${sucursal.nombre}</strong>
            <br>
            ${sucursal.region}
        </div>
    `);


    // Al hacer clic en el marcador
    marcador.on("click", function () {

        mapa.flyTo(
            [
                sucursal.latitud,
                sucursal.longitud
            ],
            10,
            {
                duration: 1
            }
        );

        marcador.openPopup();
    });

});


// =======================
// CORREGIR TAMAÑO DEL MAPA
// =======================

// Esperar a que la página termine de cargar
window.addEventListener("load", function () {

    setTimeout(function () {

        mapa.invalidateSize();

        mapa.fitBounds(limitesChile);

    }, 300);

});