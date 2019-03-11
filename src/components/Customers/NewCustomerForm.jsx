import React from "react";
// import { v4 } from 'uuid';
// import Moment from 'moment';
// import c from './../constants';
// import { connect } from 'react-redux';

function NewCustomerForm(){

  let _firstName = null;
  let _lastName = null;
  let _phone = null;
  let _email = null;
  let _postalCode = null;

  function handleNewCustomerFormSubmission(event) {
    event.preventDefault();
    console.log("New Customer Form Submitted");
    props.onNewCustomerCreation({ firstName: _firstName.value, lastName: _lastName.value, phone: _phone.value, email: _email.value, postalCode: _postalCode })
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
      <form onSubmit={handleNewCustomerFormSubmission}>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          ref={(input) => {_firstName = input;}}/>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
          ref={(input) => {_lastName = input;}}/>
        <input
          type='text'
          id='phone'
          placeholder='Phone Number'
          ref={(input) => {_phone = input;}}/>
        <input
          type='text'
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}/>
        <input
          type='text'
          id='postalCode'
          placeholder='Zip Code'
          ref={(input) => {_postalCode = input;}}/>
        <button type='submit'>Add to Customers</button>
      </form>
    </div>
  );
}

export default NewCustomerForm;
