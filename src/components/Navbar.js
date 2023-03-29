import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS library for animations
AOS.init();

class Navbar extends Component {
  componentDidMount() {
    // Add scroll event listener when component is mounted
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove scroll event listener when component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Handle the navbar button transformation on scroll
    const currentScrollPosition = window.pageYOffset;
    const button = document.querySelector(".navbar-toggler");

    if (currentScrollPosition > this.lastScrollPosition) {
      // Scrolling down
      button.style.transform = "translateX(-40px)";
    } else {
      // Scrolling up or initial position
      button.style.transform = "translateX(0)";
    }

    this.lastScrollPosition = currentScrollPosition;
  };

  render() {
    return (
      // Render the navbar with React Bootstrap components
      <nav
        className="navbar navbar-expand-lg navbar-custom sticky-top"
        id="nav"
      >
        <NavLink className="navbar-brand d-lg-none" to="/">
          <h1>Heritage Haulage</h1>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-aos="slide-right"
          data-aos-duration="1500"
          data-aos-delay="0"
          data-aos-easing="ease-in-out"
          onClick={() => AOS.refresh()}
        >
          <i
            className="fas fa-truck custom-toggler-icon"
            style={{ color: "white" }}
          ></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarToggle"
        >
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink className="navbar-brand d-none d-lg-block img-fluid">
            <h1>Heritage Haulage</h1>
          </NavLink>

          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/invoice">
                  Invoice
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">
                  Team
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
