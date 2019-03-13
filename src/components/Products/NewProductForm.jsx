import React from "react";

function NewProductForm(){

  let _name = null;
  let _type = null;
  let _ingredients = null;
  let _description = null;
  let _price = null;

  function handleNewProductFormSubmission(event) {
    event.preventDefault();

    _name.value = "";
    _type.value = "";
    _ingredients.value = "";
    _description.value = "";
    _price.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Product Name"
          ref={(input) => {_name = input;}}/>
        <input
          type="text"
          id="type"
          placeholder="Type"
          ref={(input) => {_type = input;}}/>
        <input
          type="text"
          id="price"
          placeholder="Price"
          ref={(input) => {_price = input;}}/>
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          ref={(textarea) => {_ingredients = textarea;}}/>
        <textarea
          id="description"
          placeholder="Description"
          ref={(textarea) => {_description = textarea;}}/>
        <button type="submit">Add to Products</button>
      </form>
    </div>
  );
}

export default NewProductForm;
