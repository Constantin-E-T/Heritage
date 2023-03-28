import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div class='container'>
        <h3 class='row justify-content-center'>
          Services
        </h3>
        <br></br>
          <div class='row justify-content-center'>
            Our modern fleet ensures reliable and efficient services, ranging from single pallet deliveries to full load shipments. 
            Delivering to a wide variety of locations and working with several major ports we can guarantee you our service anywhere in the UK.
          </div>
          
        <div class='row align-items'>
          <div class='col-md-4'>
            <br></br>
            <ul style={{'list-style-type':'none'}}>
              <li><h6>Services include:</h6></li>
              <li>Container Transport </li>
              <li>Tautliners</li> 
              <li>Refrigerated Shipping</li> 
              <li>Full load shipments</li>
              <li>Groupage deliveries</li>  
              <li>Single pallet deliveries</li>
              </ul>
          </div>
          <div class='col-md-4'>
            <br></br>
            <ul style={{'list-style-type':'none'}}>
              <li><h6>Some of the major areas we cover:</h6></li>
              <li>London</li>
              <li>Manchester</li> 
              <li>Birmingham</li> 
              <li>Glasgow</li>
              <li>Leeds</li>  
              <li>Liverpool</li>
              </ul>
          </div>
          <div class='col-md-4'>
            <br></br>
            <ul style={{'list-style-type':'none'}}>
              <li><h6>Major Port locations:</h6></li>
              <li>Port of Southampton</li>
              <li>Port of Felixstowe</li> 
              <li>Port of London Gateway</li> 
              <li>Port of Liverpool</li>
              <li>Port of Bristol</li>
              </ul>
          </div>
        </div>
        <div class='row justify-content-center'>
          <a class="btn btn-primary" href="/invoice" role="button">Create Invoice</a>
          <a class="btn btn-primary" href="/contact" role="button">Request Quote</a>
        </div>
      </div>
    );
  }
}

export default Services;

