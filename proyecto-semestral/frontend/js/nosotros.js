/* =======================
   MAPA DE SUCURSALES
   ======================= */

// Crear mapa
const mapa = L.map("mapa-sucursales").setView(
    [-33.45, -70.65],
    5
);


// Agregar mapa de OpenStreetMap
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
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
// CREAR MARCADORES
// =======================

sucursales.forEach(function (sucursal) {

    const marcador = L.marker([
        sucursal.latitud,
        sucursal.longitud
    ]).addTo(mapa);


    marcador.bindPopup(
        `
        <strong>HuertoHogar</strong><br>
        <strong>${sucursal.nombre}</strong><br>
        ${sucursal.region}
        `
    );

});