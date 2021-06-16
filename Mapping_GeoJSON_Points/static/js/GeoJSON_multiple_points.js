
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// create the tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
});

// Add streets layer map
streets.addTo(map);
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/dixie-chick/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
createFeatures(data.features);
});

function createFeatures(airportData) {
  function onEachFeature(feature,layer){
    console.log(feature)
    console.log(layer)
    layer.bindPopup(",h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }
// d3.json(airportData, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h1>" + feature.properties.faa + "</h1> <h2>" + feature.properties.name + "</h2>");
//    }

}).addTo(map);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
});