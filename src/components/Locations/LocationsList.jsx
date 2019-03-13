import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function LocationList({locations, onDeletingLocation}) {

  function deleteLocation(locationId) {
    event.preventDefault();

    onDeletingLocation(locationId);
  }

  return (
    <div className="container">
      {Object.keys(locations).map((locationId) => {
        let location = locations[locationId];
        return <div key={v4()}>
          <Link
            to={`/admin/locations/${location.id}`}
          >
            <p>{location.firstName} {location.lastName}</p>
          </Link>
          <button onClick={() => {deleteLocation(location.id);}}>Delete</button>
        </div>;
      }
      )}
    </div>
  );
}

LocationList.propTypes = {
  locations: PropTypes.object,
  onDeletingLocation: PropTypes.func
};

export default LocationList;
