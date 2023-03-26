// import React, { Component} from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import './Contact.css';
 
// mapboxgl.accessToken = 'pk.eyJ1IjoibW94eS0iLCJhIjoiY2xmbGZ5M2kzMDFsdDN3bGwwazZkZDl1MyJ9.5Ub-_HIlHEOo5kaHtkrJjA';

// export default class Contact extends Component {
//   constructor(props) 
//  {
//   super(props)
//   this.state = {
//     lng: -1.1013463074087266,
//     lat: 50.80151276175477,
//     zoom: 16
//    };
//    this.mapContainer = React.createRef();
//   }
//   componentDidMount() 
//  {
//   const { lng, lat, zoom } = this.state;
//   const map = new mapboxgl.Map({
//     container: this.mapContainer.current,
//     style: 'mapbox://styles/mapbox/streets-v12',
//     center: [lng, lat],
//     zoom: zoom
//   });
//   }
//   render() {
//     return (
//       <div>
//         <div ref={this.mapContainer} className="map-container" />
//       </div>
//     );
//   }
// }