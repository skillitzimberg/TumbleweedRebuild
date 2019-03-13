import React from "react";
import PropTypes from "prop-types";
import ProductList from "./../Products/ProductList";
import NewProductForm from "./../Products/NewProductForm";
import "./productStyles.css";

function Products(props) {
  console.log("Products props: ", props)
  return (
    <div>
      <div className="products">
        <p>Products</p>

        <ProductList
          products={props.products}
          onDeletingProduct={props.onDeletingProduct}
        />

      <NewProductForm onNewProductCreation={props.onAddingNewProduct}/>
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.object,
  onAddingNewProduct: PropTypes.func,
  onNewProductCreation: PropTypes.func,
  onDeletingProduct: PropTypes.func
};

export default Products;
