import React from "react";
import PropTypes from "prop-types";
import LocationList from "./../Locations/LocationList";
import NewLocationForm from "./../Locations/NewLocationForm";
import "./locationStyles.css";

function Locations(props) {
  console.log("Locations props: ", props)
  return (
    <div>
      <div className="locations">
        <p>Locations</p>

        <LocationList
          locations={props.locations}
          onDeletingLocation={props.onDeletingLocation}
        />

      <NewLocationForm onNewLocationCreation={props.onAddingNewLocation}/>
      </div>
    </div>
  );
}

Locations.propTypes = {
  locations: PropTypes.object,
  onAddingNewLocation: PropTypes.func,
  onNewLocationCreation: PropTypes.func,
  onDeletingLocation: PropTypes.func
};

export default Locations;
