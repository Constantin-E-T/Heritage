import React, { Component } from 'react';
import Stockbanner from '../assets/images/Stockbanner.jpg'

class Services extends Component {
  render() {
    return (
      <div className='container text-justify'>
        <h3 className='row justify-content-center'>
          Services
        </h3>
        <div className='row justify-content-center'>
          <a className="btn btn-primary" href="/invoice" role="button">Create Invoice</a>
          <a className="btn btn-primary" href="/contact" role="button">Request Quote</a>
        </div>
          <div className='row justify-content-center'>
            Our modern fleet ensures reliable and efficient services, ranging from single pallet deliveries to full load shipments. 
            Delivering to a wide variety of locations and working with several major ports we can guarantee you our service anywhere in the UK.
          </div>
          
        <div className='row'>
          <div className='col-md-4'>
            <br></br>
            <ul style={{'listStyleType':'none'}}>
              <li><h6>Services include:</h6></li>
              <li>Container Transport </li>
              <li>Tautliners</li> 
              <li>Refrigerated Shipping</li> 
              <li>Full load shipments</li>
              <li>Groupage deliveries</li>  
              <li>Single pallet deliveries</li>
              </ul>
          </div>
          <div className='col-md-4'>
            <br></br>
            <ul style={{'listStyleType':'none'}}>
              <li><h6>Some of the major areas we cover:</h6></li>
              <li>London</li>
              <li>Manchester</li> 
              <li>Birmingham</li> 
              <li>Glasgow</li>
              <li>Leeds</li>  
              <li>Liverpool</li>
              </ul>
          </div>
          <div className='col-md-4'>
            <br></br>
            <ul style={{'listStyleType':'none'}}>
              <li><h6>Major Port locations:</h6></li>
              <li>Port of Southampton</li>
              <li>Port of Felixstowe</li> 
              <li>Port of London Gateway</li> 
              <li>Port of Liverpool</li>
              <li>Port of Bristol</li>
              </ul>
          </div>
        </div>
        <img src={Stockbanner} className='img-fluid' alt='responsive banner img'/>
      </div>
    );
  }
}

export default Services;

