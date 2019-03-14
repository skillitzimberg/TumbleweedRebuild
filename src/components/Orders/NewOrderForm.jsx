import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import Moment from "moment";

function NewOrderForm(props){
  let _scheduledPickupDate = null;

  function handleNewOrderFormSubmission(event) {
    event.preventDefault();

    props.onNewOrderCreation(
      {
        id: v4(),
        orderDateTime: new Moment().format("MMM Do YY, h:mm"),
        scheduledPickupDate: _scheduledPickupDate.value,

      });

    _scheduledPickupDate.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewOrderFormSubmission}>
        <input
          type="date"
          id="name"
          placeholder="Order Name"
          ref={(input) => {_scheduledPickupDate = input;}}/>

        <button type="submit">Add to Orders</button>
      </form>
    </div>
  );
}

NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func
};

export default NewOrderForm;
