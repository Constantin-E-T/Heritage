import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {

  render() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light row">
      <a className="navbar-brand col-5" href="/home">
      <Link to="/">Logo Img</Link>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/team">
              Drivers/Team
            </a>
          </li>
        </ul>
      </div>
    </nav>

  );
}
}

export default Navbar;