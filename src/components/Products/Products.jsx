import React from "react";
import Product from "./../Products/Product";
import NewProductForm from "./../Products/NewProductForm";
// import PropTypes from "prop-types";

function Products() {
  return (
    <div>
      <div className="container">
        <p>Products Works</p>
        <Product />
        <NewProductForm />
      </div>
    </div>
  );
}

export default Products;
