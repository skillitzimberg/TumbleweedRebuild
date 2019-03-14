import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewLocationForm(props){
  let _locationName = null;
  let _locationAddress = null;
  let _locationPostalCode = null;
  let _locationDescription = null;

  function handleNewLocationFormSubmission(event) {
    event.preventDefault();

    props.onNewLocationCreation(
      {
        locationName: _locationName.value,
        locationAddress: _locationAddress.value,
        locationPostalCode: _locationPostalCode.value,
        locationDescription: _locationDescription.value,
        id: v4()
      }
    );

    _locationName.value = "";
    _locationAddress.value = "";
    _locationPostalCode.value = "";
    _locationDescription.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewLocationFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Market Name"
          ref={(input) => {_locationName = input;}}/>
        <input
          type="text"
          id="streetAddress"
          placeholder="Market Address"
          ref={(input) => {_locationAddress = input;}}/>
        <input
          type="text"
          id="postalCode"
          placeholder="Zip Code"
          ref={(input) => {_locationPostalCode = input;}}/>
        <textarea
          id="description"
          placeholder="Market Description"
          ref={(textarea) => {_locationDescription = textarea;}}/>
        <button type="submit">Add to Locations</button>
      </form>
    </div>
  );
}

NewLocationForm.propTypes = {
  onNewLocationCreation: PropTypes.func
};

export default NewLocationForm;
