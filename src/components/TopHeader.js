import React from 'react';
import WeatherWidget from './WeatherWidget';
import { Container, Row, Col } from "react-bootstrap";
import "./TopHeader.css"


const TopHeader = () => {
  return (
<div className="navbar-custom-light text-white">
  <Container fluid>
    <Row className="align-items-center">
      <Col xs={12} md={6} className="text-md-left ">
        <WeatherWidget />
      </Col>
      <Col xs={12} md={6} className="my-2 text-md-right">
        <i className="fas fa-phone mr-1"></i>
        <a href="tel:+1234567890" className="text-white">0808 188 9006</a>
        <span className="mx-3">|</span>
        <i className="fas fa-envelope mr-1"></i>
        <a href="mailto:info@example.com" className="text-white">info@example.com</a>
      </Col>
    </Row>
  </Container>
</div>


  );
};

export default TopHeader;
