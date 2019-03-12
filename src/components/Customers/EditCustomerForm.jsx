import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
// import Moment from 'moment';
// import c from './../constants';
// import { connect } from 'react-redux';

function EditCustomerForm({customer}){
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
        id: v4()
      }
    );

    // const { dispatch } = props;
    // const action = {
    //   type: 'ADD_TICKET',
    //   id: v4(),
    //   firstName: _firstName.value,
    //   lastName: _lastName.value,
    //   phone: _phone.value,
    //   email: _email.value,
    //   postl: _postalCode.value,
    //   dateAdded: new Moment(),
    // };
    // dispatch(action);

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
          type='text'
          id='firstName'
          placeholder='First Name'
          value={customer.firstName}
          ref={(input) => {_firstName = input;}}/>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
          value={customer.lastName}
          ref={(input) => {_lastName = input;}}/>
        <input
          type='text'
          id='phone'
          placeholder='Phone Number'
          value={customer.phone}
          ref={(input) => {_phone = input;}}/>
        <input
          type='text'
          id='email'
          placeholder='Email'
          value={customer.email}
          ref={(input) => {_email = input;}}/>
        <input
          type='text'
          id='postalCode'
          placeholder='Zip Code'
          value={customer.postalCode}
          ref={(input) => {_postalCode = input;}}/>
        <button type='submit'>Add to Customers</button>
      </form>
    </div>
  );
}

EditCustomerForm.propTypes = {
  onEditCustomer: PropTypes.func
};

export default EditCustomerForm;
