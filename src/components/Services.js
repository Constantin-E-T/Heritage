import React, { Component, useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from 'mapbox-gl';
import './Services.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibW94eS0iLCJhIjoiY2xmbGZ5M2kzMDFsdDN3bGwwazZkZDl1MyJ9.5Ub-_HIlHEOo5kaHtkrJjA';



class Services extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
  lng: -1.101260476720519,
  lat: 50.801241532202766,
  zoom: 12
  };
  this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
    container: this.mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
    }
  
  render() {
    return (
    <div>
    <br></br>
      <h4>Services</h4>
      <div id='service-text'>
        <p>Our modern fleet ensures reliable and efficient services, ranging from single pallet deliveries to full load shipments.</p>
        <p>HH services include: Container Transport, Tautliners, Refrigerated Shipping, Full load shipments, Groupage deliveries and Single pallet deliveries</p>
        <p>We deliver all over the UK including major cities such as London, Manchester, Birmingham, Glasgow, Leeds, Liverpool and more.</p>
      </div>
      <div class='row justify-content-center'>
        <ul id='port-locations' class='md-col-4'>
        <br></br>
          <h6>We work with several major ports across the UK.</h6>
          <p>follow the links below</p>
          <br></br>
            <p>
              Port of Southampton
            </p>
            <p>
              Port of Felixstowe
            </p>
            <p>
              Port of London Gateway
            </p>
            <p>
              Port of Liverpool
            </p>
            <p>
              Port of Bristol
            </p>
        </ul>
        <div id='map' ref={this.mapContainer} className="map-container" class='md-col-8' /> 
      </div>
    </div>
    );
  }
}

export default Services;

