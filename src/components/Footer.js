import React, { useState, useEffect } from "react";
import moment from "moment";
import AOS from "aos"; // Import AOS library for animations
import "aos/dist/aos.css"; // Import AOS styles

import teamData from "../assets/data/developers.json";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(
    moment().format("MMMM Do, YYYY")
  );
  const currentYear = moment().format("YYYY");

  AOS.init({
    duration: 1500,
  });

  useEffect(() => {
    // Update current date every minute
    const timer = setInterval(() => {
      setCurrentDate(moment().format("MMMM Do, YYYY"));
    }, 60000);

    return () => {
      // Clear the interval when component is unmounted
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="navbar-custom text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-justify" data-aos="fade-right" data-aos-delay="200">
            <h5 className="mb-3">Web Application Development Team</h5>
            <ul className="list-unstyled">
              {teamData.map((member, index) => (
                <li key={index}>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    {member.name}
                  </a>{" "}
                  - {member.role}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 text-md-right text-left" data-aos="fade-left" data-aos-delay="400">
            <p className="mb-3">Today's date: {currentDate}</p>
            <p className="mb-0 text-white">
              {" "}
              <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=18+Blossom+Portsmouth+PO1+3JH"
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                Address:
              </a>
            </p>
            <p className="mb-0 text-white">18 Blossom </p>
            <p className="mb-0 text-white">Portsmouth PO1 3JH</p>
            <p className="mb-0 text-white">
              <i className="fa fa-phone mr-2" aria-hidden="true"></i>{" "}
              <a href="tel:08081889006" className="text-white">
                Phone: 0808 188 9006
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <small>
              &copy; {currentYear} Heritage Haulage. All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
