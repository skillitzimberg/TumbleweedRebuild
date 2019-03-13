import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function ProductList({products, onDeletingProduct}) {
  console.log("ProductList props: ", products)

  function deleteProduct(productId) {
    event.preventDefault();

    onDeletingProduct(productId);
  }

  return (
    <div className="container">
      {Object.keys(products).map((productId) => {
        let product = products[productId];
        return <div key={v4()}>
          <Link
            to={`/admin/products/${product.id}`}
          >
            <p>{product.productName}</p>
          </Link>
          <button onClick={() => {deleteProduct(product.id);}}>Delete</button>
        </div>;
      }
      )}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.object,
  onDeletingProduct: PropTypes.func
};

export default ProductList;
