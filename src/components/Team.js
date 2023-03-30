import React from "react";
// Import staff data from a JSON file
import staffData from "../assets/data/staff.json";
// Import CSS modules for local styling
import styles from "./Team.module.css";
// Import Helmet to manage document head
import { Helmet } from "react-helmet";

const Team = () => {
  // Destructure the "staff" array from the imported data
  const { staff } = staffData;

  return (
    <div>
      {/* Set the document title using Helmet */}
      <Helmet>
        <title>Heritage Haulage - Team</title>
      </Helmet>
      <div className="container">
        <div className="row">
          {/* Map over the staff array and render a card for each member */}
          {staff.map((member) => (
            <div key={member.id} className="col-md-4 col-sm-6 my-2">
              <div className="card">
                {/* Render the member's profile picture and apply local styles */}
                <img
                  src={process.env.PUBLIC_URL + "/" + member.profilePicture}
                  alt={`${member.name}`}
                  className={`card-img-top ${styles.profile__image}`}
                />
                <div className="card-body bg-custom-1">
                  {/* Render the member's name, role, and truck registration (if applicable) */}
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {member.role}
                  </h6>
                  {member.truckRegistration && (
                    <p className="card-text">
                      Truck: {member.truckRegistration}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
