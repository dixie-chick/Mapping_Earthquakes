
// Add console.log to check to see if our code is working.
console.log("working");



// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([44.0, -80.0], 2);


// create the tile layer: STep 1 create street view tile layer which will be default
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "streets-v11",
    accessToken: API_KEY
});
// Create dark view tile layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "satellite-streets-v11",
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Street": streets,
  "Satellite Streets": satelliteStreets
};
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/dixie-chick/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grab GeoJSON data
d3.json(torontoHoods).then(function(data){
  console.log(data);
  L.geoJSON(data).addTo(map);
});

// // Create a style for the lines.
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);

//   //GeoJSON layer with retrieved data
// L.geoJson(data, {
//     style: myStyle,
//     onEachFeature:function(feature, layer) {
//     layer.blindPopup("<h3>Airline: " + feature.properties.arline + "</h3> <hr> <h3>Destination: " + feature.properties.dst + "</h3>");
//     }
// })
// .addTo(map);
// });