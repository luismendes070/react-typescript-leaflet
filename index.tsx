import { MyComponent } from './MyComponent';
// import { ErrorBoundary } from './ErrorBoundary';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

try{
  
  require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });

  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  // Import stylesheets
import './style.css';

const L = require("leaflet");

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div id="map"></div>`;

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 13
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// create a red polygon from an array of LatLng points
var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];

var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

// zoom the map to the polygon
map.fitBounds(polygon.getBounds());
  
  root.render(
    <StrictMode>
      <MyComponent>
      <App/>
      </MyComponent>
      
    </StrictMode>
  );

}catch(error){
console.log('\n React + leaflet exception.');
}finally{
console.log('\n React TypeScript App function finally.');
}
