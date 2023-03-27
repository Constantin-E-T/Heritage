import React, { Component } from 'react';
import InvoiceForm from './Invoice/InvoiceForm';

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
        <InvoiceForm />
      </div>
    );
  }
}

export default Services;

