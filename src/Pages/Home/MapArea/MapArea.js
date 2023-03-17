import React, { useEffect } from 'react';
import './MapArea.css';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFmaXp1cnJhaGFtYW4iLCJhIjoiY2t4YTlzMXh5MDhnZjJvcXExY3M2eGhxdCJ9.kWOWkCqkx4KvwLF9f8sLpw';

const MapArea = () => {

     useEffect(()=>{
          const map = new mapboxgl.Map({
               container: 'map',
               style: 'mapbox://styles/mapbox/streets-v11',
               center: [91.880722, 24.886436],
               zoom: 13
               });
                
               map.addControl(
               new MapboxDirections({
               accessToken: mapboxgl.accessToken
               }),
               'top-left'
               );
     },[])

     return (
          <div>
               <div id="map"></div>
          </div>
     );
};

export default MapArea;