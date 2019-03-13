import React from "react";
import PropTypes from "prop-types";

class EditCustomerForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      customerToEdit: props.customer
    };

    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
  }

  handleEditFormSubmission(event) {
    event.preventDefault();

    let _firstName = null;
    let _lastName = null;
    let _phone = null;
    let _email = null;
    let _postalCode = null;

    this.props.onEditCustomer(
      {
        firstName: this._firstName.value,
        lastName: this._lastName.value,
        phone: this._phone.value,
        email: this._email.value,
        postalCode: this._postalCode.value,
        id: this.state.customerToEdit.id
      }
    );

    this._firstName.value = "";
    this._lastName.value = "";
    this._phone.value = "";
    this._email.value = "";
    this._postalCode.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEditFormSubmission}>
          <input
            type="text"
            id="firstName"
            placeholder={this.state.customerToEdit.firstName}
            ref={(input) => {this._firstName = input;}}
            required/>

          <input
            type="text"
            id="lastName"
            placeholder={this.state.customerToEdit.lastName}
            ref={(input) => {this._lastName = input;}}
            required/>

          <input
            type="text"
            id="phone"
            placeholder={this.state.customerToEdit.phone}
            ref={(input) => {this._phone = input;}}
            pattern="[0-9]{10,15}"
            required/>

          <input
            type="text"
            id="email"
            placeholder={this.state.customerToEdit.email}
            ref={(input) => {this._email = input;}}
            pattern="[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}"
            required/>

          <input
            type="text"
            id="postalCode"
            placeholder={this.state.customerToEdit.postalCode}
            pattern="[A-Za-z0-9-]{5,10}"
            ref={(input) => {this._postalCode = input;}}/>

          <button type="submit">Edit Customer</button>
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
