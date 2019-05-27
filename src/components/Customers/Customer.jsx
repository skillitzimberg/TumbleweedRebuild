import React from "react";
import PropTypes from "prop-types";
import EditCustomerForm from "./../Customers/EditCustomerForm";

class Customer extends React.Component {
  constructor(props) {
    super(props);

    const customer = this.getCustomer(props.customers, props.match.params.id)

    this.state = {
      firstName: customer.first_name,
      lastName: customer.last_name,
      phone: customer.phone,
      email: customer.email,
      postalCode: customer.postal_code,
      id: customer.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
  }

  getCustomer(customers, id) {
    let customer;
    for (let i = 0; i < customers.length; i++) {
      if (customers[i].id == id) {
        customer = customers[i]
      }
    }
    return customer
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
    const customer = this.state;
    return (
      <div>
        <div className="container">
          <h3>{this.state.firstName} {this.state.lastName}</h3>
          <p>{this.state.phone}</p>
          <p>{this.state.email}</p>
          <p>{this.state.postalCode}</p>
        </div>

        <EditCustomerForm
          customer={customer}
          onEditCustomer={this.props.onEditCustomer}
          onChange={this.handleChange}
          onEditFormSubmission={this.handleEditFormSubmission} />
      </div>
    );
  }
}

Customer.propTypes = {
  match: PropTypes.object,
  customers: PropTypes.array,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  postalCode: PropTypes.string,
  onEditCustomer: PropTypes.func
};

export default Customer;
