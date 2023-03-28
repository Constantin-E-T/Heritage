import React from 'react';
import WeatherWidget from './WeatherWidget';

const TopHeader = () => {
  return (
    <div className="navbar-custom text-white py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <WeatherWidget />
          <div>
            <i className="fas fa-phone mr-1"></i>
            <a href="tel:+1234567890" className="text-white">0808 188 9006</a>
            <span className="mx-3">|</span>
            <i className="fas fa-envelope mr-1"></i>
            <a href="mailto:info@example.com" className="text-white">info@example.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
