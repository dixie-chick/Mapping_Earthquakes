// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Alternative methos to modify each attribute in the map object using curly braces
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Add a marker to the map for LA
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
// use marker as a circle
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

 // Edit the above
 L.circleMarker([34.0522, -118.2437], {
    radius: 100,
    color: "black",
    fillColor: "yellow"
 }).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);