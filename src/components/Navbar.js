import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.module.css';
import heritageLogo from '../assets/images/heritageLogo.png';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light row shadow-sm sticky-top" 
      style={{backgroundColor:'#094912'}}>

        <NavLink className="navbar-brand col-6" to="/">
          <img style={{width: '175px', height: '75px'}} src={heritageLogo} alt='logo'/>
        </NavLink>
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
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" style={{color:'#c9944e', fontSize:'large'}}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" style={{color:'#c9944e', fontSize:'large'}}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" style={{color:'#c9944e', fontSize:'large'}}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team" style={{color:'#c9944e', fontSize:'large'}}>
                Drivers/Team
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
