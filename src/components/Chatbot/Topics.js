import React from 'react';

const Topics = (props) => {
  const { actionProvider } = props;

  return (
    <div>
      <h4>Topics:</h4>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-2">
            <button
              onClick={() => actionProvider.handleCompanyInfo()}
              className="btn btn-primary w-100"
            >
              Company Information
            </button>
          </div>
          <div className="col-sm-12 mb-2">
            <button
              onClick={() => actionProvider.handlePortsInfo()}
              className="btn btn-primary w-100"
            >
              Ports We Work With
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mb-2">
            <button
              onClick={() => actionProvider.handleDeliveryLocations()}
              className="btn btn-primary w-100"
            >
              Delivery Locations in the UK
            </button>
          </div>
          <div className="col-sm-12 mb-2">
            <button
              onClick={() => actionProvider.handleServices()}
              className="btn btn-primary w-100"
            >
              Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
