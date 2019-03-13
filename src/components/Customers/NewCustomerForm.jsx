import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewCustomerForm(props){
  let _firstName = null;
  let _lastName = null;
  let _phone = null;
  let _email = null;
  let _postalCode = null;

  function handleNewCustomerFormSubmission(event) {
    event.preventDefault();

    props.onNewCustomerCreation(
      {
        firstName: _firstName.value,
        lastName: _lastName.value,
        phone: _phone.value,
        email: _email.value,
        postalCode: _postalCode.value,
        id: v4()
      }
    );

    _firstName.value = "";
    _lastName.value = "";
    _phone.value = "";
    _email.value = "";
    _postalCode.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewCustomerFormSubmission}>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          ref={(input) => {_firstName = input;}}
          required/>

        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          ref={(input) => {_lastName = input;}}
          required/>

        <input
          type="text"
          id="phone"
          placeholder="Phone Number"
          ref={(input) => {_phone = input;}}
          pattern="[0-9]{10,15}"
          required/>

        <input
          type="text"
          id="email"
          placeholder="Email"
          ref={(input) => {_email = input;}}
          pattern="[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}"
          required/>

        <input
          type="text"
          id="postalCode"
          placeholder="Zip Code"
          pattern="[A-Za-z0-9-]{5,10}"
          ref={(input) => {_postalCode = input;}}/>

        <button type="submit">Add to Customers</button>
      </form>
    </div>
  );
}

NewCustomerForm.propTypes = {
  onNewCustomerCreation: PropTypes.func
};

export default NewCustomerForm;
