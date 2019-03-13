import React from "react";
import PropTypes from "prop-types";

class EditCustomerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <form onSubmit={this.props.onEditFormSubmission}>
          <input
            name="firstName"
            type="text"
            defaultValue={this.props.customer.firstName}
            onChange={this.props.onChange}
            required />

          <input
            name="lastName"
            type="text"
            defaultValue={this.props.customer.lastName}
            onChange={this.props.onChange}
            required />

          <input
            name="phone"
            type="text"
            defaultValue={this.props.customer.phone}
            onChange={this.props.onChange}
            pattern="[0-9.-]{10,15}"
            required />

          <input
            name="email"
            type="text"
            defaultValue={this.props.customer.email}
            onChange={this.props.onChange}
            pattern="[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}"
            required />

          <input
            name="postalCode"
            type="text"
            defaultValue={this.props.customer.postalCode}
            pattern="[A-Za-z0-9-]{5,10}"
            onChange={this.props.onChange} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

EditCustomerForm.propTypes = {
  customer: PropTypes.object,
  onEditFormSubmission: PropTypes.func,
  onChange: PropTypes.func
};

export default EditCustomerForm;
