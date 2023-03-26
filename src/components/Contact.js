import React, {Component} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from 'mapbox-gl';
import './Contact.css';
import pin from '../assets/images/pin.png';
 
mapboxgl.accessToken = 'pk.eyJ1IjoibW94eS0iLCJhIjoiY2xmbGZ5M2kzMDFsdDN3bGwwazZkZDl1MyJ9.5Ub-_HIlHEOo5kaHtkrJjA';

export default class Contact extends Component {
  constructor(props) 
 {
  super(props)
  this.state = {
    lng: -1.1013463074087266,
    lat: 50.80151276175477,
    zoom: 14
   };
   this.mapContainer = React.createRef();
  }
  componentDidMount() 
 {
  const { lng, lat, zoom } = this.state;
  const map = new mapboxgl.Map({
    container: this.mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
  });
  }
  render() {
<ReactMapGL width="100vw" height="100vh">
  <Marker 
    longitude= {-1.1013463074087266} 
    latitude={50.80151276175477} >
    <img src={pin} />
  </Marker>
</ReactMapGL>
    return (
      <div class='contact-container row'>
        <div ref={this.mapContainer} className="map-container col-lg-8" />
          <form class='contact col-lg-4' name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required/>
              </div>
              <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" class="form-control" id="subject" name="subject" required/>
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control" rows="5" id="message" name="message" required></textarea>
              </div>
              <div class="form-group">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}