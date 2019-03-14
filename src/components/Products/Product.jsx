import React from "react";
import PropTypes from "prop-types";
import EditProductForm from "./../Products/EditProductForm";

class Product extends React.Component {
  constructor(props) {
    super(props);
    const product = props.products[props.match.params.productId];

    this.state = {
      productName: product.productName,
      productType: product.productType,
      ingredients: product.ingredients,
      productDescription: product.productDescription,
      productPrice: product.productPrice,
      id: product.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEditFormSubmission(event) {
    event.preventDefault();

    this.props.onEditProduct(
      {
        productName: this.state.productName,
        productType: this.state.productType,
        ingredients: this.state.ingredients,
        productDescription: this.state.productDescription,
        productPrice: this.state.productPrice,
        id: this.state.id
      });
  }

  render() {
    const product = this.state;
    return (
      <div>
        <div className="container">
          <h3>{this.state.productName}</h3>
          <p>{this.state.productType}</p>
          <p>{this.state.ingredients}</p>
          <p>{this.state.productDescription}</p>
          <p>{this.state.productPrice}</p>
        </div>

        <EditProductForm
          product={product}
          onEditProduct={this.props.onEditProduct}
          onChange={this.handleChange}
          onEditFormSubmission={this.handleEditFormSubmission}/>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.object,
  products: PropTypes.object,
  productName: PropTypes.string,
  onEditProduct: PropTypes.func
};

export default Product;
