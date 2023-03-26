import React, { Component } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from 'mapbox-gl';
// import './Services.css';


mapboxgl.accessToken = 'pk.eyJ1IjoibW94eS0iLCJhIjoiY2xmbGZ5M2kzMDFsdDN3bGwwazZkZDl1MyJ9.5Ub-_HIlHEOo5kaHtkrJjA';

class Services extends Component {
  
  render() {
    return (
      <div>
        <p>Services</p>
      </div>
    );
  }
}

export default Services;