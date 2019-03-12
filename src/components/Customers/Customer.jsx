import React from "react";
import PropTypes from "prop-types";
import EditCustomerForm from "./../Customers/EditCustomerForm";

function Customer(props) {

  function findCustomer(id) {
    for (let key in props.customers) {
      if (id === props.customers[key].id) {
        return props.customers[key];
      }
    }
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

      <EditCustomerForm customer={customer}/>
    </div>
  );
}

Customer.propTypes = {
  match: PropTypes.object,
  customers: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  postalCode: PropTypes.string
};

export default Customer;
