import React from "react";
import PropTypes from "prop-types";

function EditCustomerForm(props){
  let _firstName = null;
  let _lastName = null;
  let _phone = null;
  let _email = null;
  let _postalCode = null;

  function handleEditFormSubmission(event) {
    event.preventDefault();

    props.onEditCustomer(
      {
        firstName: _firstName.value,
        lastName: _lastName.value,
        phone: _phone.value,
        email: _email.value,
        postalCode: _postalCode.value,
        id: props.customer.id
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
      <form onSubmit={handleEditFormSubmission}>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          default
          ref={(input) => {_firstName = input;}}/>

        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          ref={(input) => {_lastName = input;}}/>

        <input
          type="text"
          id="phone"
          placeholder="Phone Number"
          ref={(input) => {_phone = input;}}/>

        <input
          type="text"
          id="email"
          placeholder="Email"
          ref={(input) => {_email = input;}}/>

        <input
          type="text"
          id="postalCode"
          placeholder="Zip Code"
          ref={(input) => {_postalCode = input;}}/>

        <button type="submit">Edit Customer</button>
      </form>
    </div>
  );
}

EditCustomerForm.propTypes = {
  customer: PropTypes.object,
  onEditCustomer: PropTypes.func
};

export default EditCustomerForm;
