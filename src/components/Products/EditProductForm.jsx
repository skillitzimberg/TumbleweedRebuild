import React from "react";
import PropTypes from "prop-types";

class EditProductForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <form onSubmit={this.props.onEditFormSubmission}>
          <input
            name="productName"
            type="text"
            defaultValue={this.props.product.productName}
            onChange={this.props.onChange}
            required />

          <input
            name="productType"
            type="text"
            defaultValue={this.props.product.productType}
            onChange={this.props.onChange}
            required />

          <input
            name="ingredients"
            type="text"
            defaultValue={this.props.product.ingredients}
            onChange={this.props.onChange}
            required />

          <input
            name="productDescription"
            type="text"
            defaultValue={this.props.product.productDescription}
            onChange={this.props.onChange}
            required />

          <input
            name="productPrice"
            type="float"
            defaultValue={this.props.product.productPrice}
            onChange={this.props.onChange} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onEditFormSubmission: PropTypes.func,
  onChange: PropTypes.func
};

export default EditProductForm;
