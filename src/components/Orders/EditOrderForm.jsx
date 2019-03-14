import React from "react";
import PropTypes from "prop-types";

class EditOrderForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <form onSubmit={this.props.onEditFormSubmission}>
          <input
            name="orderName"
            type="text"
            defaultValue={this.props.order.orderName}
            onChange={this.props.onChange}
            required />

          <input
            name="orderType"
            type="text"
            defaultValue={this.props.order.orderType}
            onChange={this.props.onChange}
            required />

          <input
            name="ingredients"
            type="text"
            defaultValue={this.props.order.ingredients}
            onChange={this.props.onChange}
            required />

          <input
            name="orderDescription"
            type="text"
            defaultValue={this.props.order.orderDescription}
            onChange={this.props.onChange}
            required />

          <input
            name="orderPrice"
            type="text"
            defaultValue={this.props.order.orderPrice}
            pattern="[0-9]+"
            onChange={this.props.onChange} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onEditFormSubmission: PropTypes.func,
  onChange: PropTypes.func
};

export default EditOrderForm;
