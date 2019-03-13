import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewProductForm(props){
  let _productName = null;
  let _productType = null;
  let _ingredients = null;
  let _productDescription = null;
  let _productPrice = null;

  function handleNewProductFormSubmission(event) {
    event.preventDefault();

    props.onNewProductCreation(
      {
        productName: _productName.value,
        productType: _productType.value,
        ingredients: _ingredients.value,
        productDescription: _productDescription.value,
        productPrice: _productPrice.value,
        id: v4()
      }
    );

    _productName.value = "";
    _productType.value = "";
    _ingredients.value = "";
    _productDescription.value = "";
    _productPrice.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Product Name"
          ref={(input) => {_productName = input;}}/>
        <input
          type="text"
          id="type"
          placeholder="Type"
          ref={(input) => {_productType = input;}}/>
        <input
          type="number"
          id="price"
          placeholder="Price"
          ref={(input) => {_productPrice = input;}}/>
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          ref={(textarea) => {_ingredients = textarea;}}/>
        <textarea
          id="description"
          placeholder="Description"
          ref={(textarea) => {_productDescription = textarea;}}/>
        <button type="submit">Add to Products</button>
      </form>
    </div>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;
