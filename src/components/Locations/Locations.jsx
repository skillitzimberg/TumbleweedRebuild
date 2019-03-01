import React from "react";
import Location from "./../Locations/Location";
import NewLocationForm from "./../Locations/NewLocationForm";
// import PropTypes from "prop-types";

function Locations() {
  return (
    <div>
      <div className="container">
        <p>Locations Works</p>
        <Location />
        <NewLocationForm />
      </div>
    </div>
  );
}

export default Locations;
