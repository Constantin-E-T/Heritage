import React from 'react';
import WeatherWidget from './WeatherWidget';
import { Container, Row, Col } from "react-bootstrap";
import "./TopHeader.css"

/**
 * The TopHeader component represents the top section of the website's header, which contains
 * a weather widget and contact information. It is composed of two columns that are vertically
 * aligned in a row using React-Bootstrap's grid system.
 */
const TopHeader = () => {
  return (
    <div className="navbar-custom-light text-white">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left column with weather widget */}
          <Col xs={12} md={6} className="text-md-left">
            <WeatherWidget />
          </Col>

          {/* Right column with contact information */}
          <Col xs={12} md={6} className="my-2 text-md-right">
            <i className="fas fa-phone mr-1"></i>
            <a href="tel:0808 188 9006" className="text-white">0808 188 9006</a>
            <span className="mx-3">|</span>
            <i className="fas fa-envelope mr-1"></i>
            <a href="mailto:info@heritagehaulage.com" className="text-white">info@heritagehaulage.com</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
