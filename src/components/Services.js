import React, { Component } from "react";
import Stockbanner from "../assets/images/Stockbanner.jpg";
import "../assets/css/Services.css";
import 'font-awesome/css/font-awesome.min.css';


class Services extends Component {
  render() {
    return (
      <div className="container text-justify">
        <div className="container my-5">
          <h4 className="heading-line-height">Services</h4>

          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column mt-2">
                <a
                  className="btn btn-primary btn-block mb-4"
                  href="/invoice"
                  role="button"
                >
                  Create Invoice
                </a>
                <a
                  className="btn btn-primary btn-block mb-4"
                  href="/contact"
                  role="button"
                >
                  Request Quote
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center text-md-left">
              Our modern fleet ensures reliable and efficient services, ranging
              from single pallet deliveries to full load shipments. Delivering
              to a wide variety of locations and working with several major
              ports we can guarantee you our service anywhere in the UK.
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="row">
          <div className="col-md-4">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <h6 className="heading-line-height">Services include:</h6>
              </li>

              <li>Container Transport </li>
              <li>Tautliners</li>
              <li>Refrigerated Shipping</li>
              <li>Full load shipments</li>
              <li>Groupage deliveries</li>
              <li>Single pallet deliveries</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <h6 className="heading-line-height">
                  Some of the major areas we cover:
                </h6>
              </li>

              <li>London</li>
              <li>Manchester</li>
              <li>Birmingham</li>
              <li>Glasgow</li>
              <li>Leeds</li>
              <li>Liverpool</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <h6 className="heading-line-height">Major Port locations:</h6>
              </li>

              <li>Port of Southampton</li>
              <li>Port of Felixstowe</li>
              <li>Port of London Gateway</li>
              <li>Port of Liverpool</li>
              <li>Port of Bristol</li>
            </ul>
          </div>
        </div>
        <img
          src={Stockbanner}
          className="img-fluid mb-5"
          alt="responsive banner img"
        />
      </div>
    );
  }
}

export default Services;
