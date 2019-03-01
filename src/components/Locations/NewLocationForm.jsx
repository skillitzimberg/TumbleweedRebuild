import React from 'react';
// import { v4 } from 'uuid';
// import Moment from 'moment';
// import c from './../constants';
// import { connect } from 'react-redux';

function NewLocationForm(){

  let _name = null;
  let _streetAddress = null;
  let _postalCode = null;
  let _description = null;

  function handleNewLocationFormSubmission(event) {
    event.preventDefault();
    console.log('New Location Form Submitted')
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
    _name.value = '';
    _streetAddress.value = '';
    _postalCode.value = '';
    _description.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewLocationFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Market Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='streetAddress'
          placeholder='Market Address'
          ref={(input) => {_streetAddress = input;}}/>
          <input
            type='text'
            id='postalCode'
            placeholder='Zip Code'
            ref={(input) => {_postalCode = input;}}/>
          <textarea
            id='description'
            placeholder='Market Description'
            ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Add to Locations</button>
      </form>
    </div>
  );
}

export default NewLocationForm;
