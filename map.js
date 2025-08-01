
var map = L.map('map').setView([42.1108, 8.6659], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var spots = [
    {
        name: "Punta Bellu",
        lat: 42.1261,
        lon: 8.6409,
        fond: "rocheux",
        especes: "Daurades, Sars, Loups"
    },
    {
        name: "Plage du Liamone",
        lat: 42.1033,
        lon: 8.6785,
        fond: "sableux",
        especes: "Daurades, Loups"
    },
    {
        name: "Capo di Feno",
        lat: 41.9264,
        lon: 8.6397,
        fond: "roche/sable",
        especes: "Loups, Dentis, Bonites"
    },
    {
        name: "Port de Cargèse",
        lat: 42.1314,
        lon: 8.5990,
        fond: "portuaire",
        especes: "Sars, Daurades"
    },
    {
        name: "Plage de Stagnone",
        lat: 42.1108,
        lon: 8.6659,
        fond: "sableux",
        especes: "Daurades, Loups, Seiches"
    }
];

spots.forEach(function(spot) {
    var popupContent = "<b>" + spot.name + "</b><br>" +
                       "Fond : " + spot.fond + "<br>" +
                       "Espèces : " + spot.especes;
    L.marker([spot.lat, spot.lon]).addTo(map).bindPopup(popupContent);
});
