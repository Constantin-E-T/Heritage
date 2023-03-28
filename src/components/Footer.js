import React, { useState, useEffect } from 'react';
import moment from 'moment';

import teamData from '../assets/data/developers.json';

const Footer = () => {
    const [currentDate, setCurrentDate] = useState(moment().format('MMMM Do, YYYY'));
    const currentYear = moment().format('YYYY');
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDate(moment().format('MMMM Do, YYYY'));
      }, 60000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <footer className="navbar-custom text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-justify">
              <h5 className="mb-3">Web Application Development Team</h5>
              <ul className="list-unstyled">
                {teamData.map((member, index) => (
                  <li key={index}>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white">
                      {member.name}
                    </a>{' '}
                    - {member.role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 text-md-right text-left">
              <p className="mb-3">Today's date: {currentDate}</p>
              <p className="mb-0"> <i className="fa fa-map-marker mr-2" aria-hidden="true"></i> Address:</p>
              <p className="mb-0">18 Blossom </p>
              <p className="mb-0">Portsmouth PO1 3JH</p>
              <p className="mb-0"><i className="fa fa-phone mr-2" aria-hidden="true"></i> Phone: 0808 188 9006</p>
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

  
  
  
  
  
  