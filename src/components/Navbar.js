import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom" id='nav'>

        <NavLink className="navbar-brand d-lg-none" to="/">
          <h1>Heritage Haulage</h1>
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          
          <NavLink className="navbar-brand d-none d-lg-block img-fluid">
            <h1>Heritage Haulage</h1>
          </NavLink>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/invoice">Invoice</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team">Team</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
