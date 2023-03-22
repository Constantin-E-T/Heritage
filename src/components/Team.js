<<<<<<< HEAD
import React from 'react';
import staffData from '../assets/data/staff.json';
import styles from './Team.module.css';

const Team = () => {
    const { staff } = staffData;
  
    return (
      <div className="container">
        <div className="row">
          {staff.map((member) => (
            <div key={member.id} className="col-md-4 col-sm-6 my-2">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + '/' + member.profilePicture}
                  alt={`${member.name}`}
                  className={`card-img-top ${styles.profile__image}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                  {member.truckRegistration && (
                    <p className="card-text">Truck: {member.truckRegistration}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
=======
import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div>
        <p>Team</p>
      </div>
    );
  }
}
>>>>>>> NavBar

export default Team;