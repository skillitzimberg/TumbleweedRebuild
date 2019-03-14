import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewOrderForm(props){
  let _orderName = null;
  let _orderType = null;
  let _ingredients = null;
  let _orderDescription = null;
  let _orderPrice = null;

  function handleNewOrderFormSubmission(event) {
    event.preventDefault();

    props.onNewOrderCreation(
      {
        orderName: _orderName.value,
        orderType: _orderType.value,
        ingredients: _ingredients.value,
        orderDescription: _orderDescription.value,
        orderPrice: _orderPrice.value,
        id: v4()
      }
    );

    _orderName.value = "";
    _orderType.value = "";
    _ingredients.value = "";
    _orderDescription.value = "";
    _orderPrice.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewOrderFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Order Name"
          ref={(input) => {_orderName = input;}}/>
        <input
          type="text"
          id="type"
          placeholder="Type"
          ref={(input) => {_orderType = input;}}/>
        <input
          type="number"
          id="price"
          placeholder="Price"
          ref={(input) => {_orderPrice = input;}}/>
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          ref={(textarea) => {_ingredients = textarea;}}/>
        <textarea
          id="description"
          placeholder="Description"
          ref={(textarea) => {_orderDescription = textarea;}}/>
        <button type="submit">Add to Orders</button>
      </form>
    </div>
  );
}

NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func
};

export default NewOrderForm;
