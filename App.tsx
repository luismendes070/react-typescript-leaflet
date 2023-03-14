const L = require('leaflet');
// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import './style.css';

export async function fun():any{

  // var map = L.map('map').setView([51.505, -0.09], 13);

  // initialize the map on the "map" div with a given center and zoom
var map:any = L.map('map', {
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

var polygon2 = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

// zoom the map to the polygon
map.fitBounds(polygon.getBounds());

var latlngs2 = [
  [ // first polygon
    [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
    [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
  ],
  [ // second polygon
    [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
  ]
];

} // end function

export default function App() {

  const c = useEffect(fun());

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{c}</p>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
