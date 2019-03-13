import React from "react";
import PropTypes from "prop-types";

class EditCustomerForm extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      firstName: this.props.customer.firstName,
      lastName: this.props.customer.lastName,
      phone: this.props.customer.phone,
      email: this.props.customer.email,
      postalCode: this.props.customer.postalCode,
      id: this.props.customer.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleEditFormSubmission(event) {
    event.preventDefault();

    this.props.onEditCustomer(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        postalCode: this.state.postalCode,
        id: this.state.id
      }
    );
  }

  render() {
    return (
      <div>

      <form onSubmit={this.handleEditFormSubmission}>
        <label>
          Name:
          <input name="firstName" type="text" placeholder="Type it" value={this.state.firstName} onChange={this.handleChange} />
          <input name="lastName" type="text" placeholder="Type it" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <input name="phone" type="text" placeholder="Type it" value={this.state.phone} onChange={this.handleChange} />
        <input name="email" type="text" placeholder="Type it" value={this.state.email} onChange={this.handleChange} />
        <input name="postalCode" type="text" placeholder="Type it" value={this.state.postalCode} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}

EditCustomerForm.propTypes = {
  customer: PropTypes.object,
  onEditCustomer: PropTypes.func
};

export default EditCustomerForm;
