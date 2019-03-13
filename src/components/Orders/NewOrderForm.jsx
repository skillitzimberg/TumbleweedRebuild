import React from "react";
// import { v4 } from "uuid";
// import Moment from "moment";
// import c from "./../constants";
// import { connect } from "react-redux";

function NewOrderForm(){

  let _customer = null;
  let _pickupLocation = null;
  let _pickupDate = null;

  function handleNewOrderFormSubmission(event) {
    event.preventDefault();
    // const { dispatch } = props;
    // const action = {
    //   type: "ADD_TICKET",
    //   id: v4(),
    //   customer: _customer.value,
    //   pickupLocation: _pickupLocation.value,
    //   pickupDate: _pickupDate.value,
    //   email: _email.value,
    //   postl: _postalCode.value,
    //   dateAdded: new Moment(),
    // };
    // dispatch(action);
    _customer.value = "";
    _pickupLocation.value = "";
    _pickupDate.value = "";
  }

  // - Order number
  // - Customer
  // - Pickup Location
  // - Scheduled Pickup Date
  // - Date the Order was Picked up
  // - List of Products ordered
  // - Quantities for each Product ordered
  // - Subtotal for each Product ordered
  // - Order total
  // - Status: pending/complete

  return (
    <div>
      <form onSubmit={handleNewOrderFormSubmission}>
        <input
          type="text"
          id="customer"
          placeholder="Customer"
          ref={(input) => {_customer = input;}}/>
        <input
          type="text"
          id="pickupLocation"
          placeholder="Pick Location"
          ref={(input) => {_pickupLocation = input;}}/>
        <input
          type="text"
          id="pickupDate"
          placeholder="Pickup Date"
          ref={(input) => {_pickupDate = input;}}/>
        <button type="submit">Add to Orders</button>
      </form>
    </div>
  );
}

export default NewOrderForm;
