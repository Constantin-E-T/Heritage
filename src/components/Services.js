import React, { Component } from "react";
import Stockbanner from "../assets/images/Stockbanner.jpg";
import "../assets/css/Services.css"; // Import CSS file for global styles
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome icons
import AOS from "aos"; // Import AOS library for animations
import "aos/dist/aos.css"; // Import AOS styles
import { Helmet } from "react-helmet"; // Import Helmet to manage document head

class Services extends Component {
  componentDidMount() {
    // Initialize AOS with custom settings on mount
    AOS.init({
      duration: 1500,
    });
  }

  render() {
    return (
      <div>
        {/* Set the document title using Helmet */}
        <Helmet>
          <title>Heritage Haulage - Services</title>
        </Helmet>
        <div className="container text-justify">
          {/* Render the main content of the page */}
          <div className="container my-5" data-aos="fade-up">
            <h4 className="heading-line-height">Services</h4>

            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="col-12 col-md-6" data-aos="fade-right">
                {/* Render buttons for creating an invoice and requesting a quote */}
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
              <div
                className="col-12 col-md-6 text-center text-md-left"
                data-aos="fade-left"
              >
                {/* Render text describing the company's services and fleet */}
                Our modern fleet ensures reliable and efficient services,
                ranging from single pallet deliveries to full load shipments.
                Delivering to a wide variety of locations and working with
                several major ports we can guarantee you our service anywhere in
                the UK.
              </div>
            </div>
          </div>

          {/* Render a horizontal rule with animation */}
          <hr data-aos="fade-up" data-aos-delay="100"></hr>
          <div className="row" data-aos="fade-up" data-aos-delay="400">
            {/* Render three columns with bullet points for services, areas, and port locations */}
            <div className="col-xl-4 p-0">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <h6 className="heading-line-height heading-with-icon">
                    <i className="fas fa-truck icon"></i> Services include:
                  </h6>
                </li>

                <li>Container Transport </li>
                <li>Tautliners</li>
                <li>Refrigerated Shipping</li>
                <li>Full load shipments</li>
                <li>Groupage deliveries</li>
                <li>Single pallet deliveries</li>
              </ul>
            </div>
            <div className="col-xl-4 p-0">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <h6 className="heading-line-height heading-with-icon">
                    <i className="fas fa-map-marker-alt icon"></i> Areas we
                    cover:
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
            <div className="col-xl-4 p-0">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <h6 className="heading-line-height heading-with-icon">
                    <i className="fas fa-ship icon"></i> Major Port locations:
                  </h6>
                </li>

                <li>Port of Southampton</li>
                <li>Port of Felixstowe</li>
                <li>Port of London Gateway</li>
                <li>Port of Liverpool</li>
                <li>Port of Bristol</li>
              </ul>
            </div>
          </div>
          {/* Render an image banner with animation */}
          <img
            src={Stockbanner}
            className="img-fluid mb-5"
            alt="responsive banner img"
            data-aos="zoom-in"
          />
        </div>
      </div>
    );
  }
}

export default Services;
