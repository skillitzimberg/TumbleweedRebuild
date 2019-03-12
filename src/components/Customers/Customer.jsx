import React from "react";
import PropTypes from "prop-types";

function Customer(props) {
  function findCustomer(id) {
    for (let i = 0; i < props.customers.length; i++) {
      if (id === props.customers[i].id) {
        return props.customers[i];
      }
    }
  }

  function deleteCustomer(customerId) {
    event.preventDefault();

    console.log(customerId);

    // props.onDeletingCustomer();
  }

  const customer = findCustomer(props.match.params.customerId);

  return (
    <div>
      <div className="container">
        <h3>{customer.firstName} {customer.lastName}</h3>
        <p>{customer.phone}</p>
        <p>{customer.email}</p>
        <p>{customer.postalCode}</p>
      </div>

      <button type="submit" onClick={deleteCustomer(customer.id)}>Delete</button>
    </div>
  );
}

Customer.propTypes = {
  match: PropTypes.object,
  customers: PropTypes.array,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  postalCode: PropTypes.string,
  onDeletingCustomer: PropTypes.func
};

export default Customer;
