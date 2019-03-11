import React from "react";
import PropTypes from "prop-types";

function Customer({ customer }) {
  return (
    <div>
      <div className="container">
        <h3>{customer.firstName} {customer.lastName}</h3>
        <p>{customer.phone}</p>
        <p>{customer.email}</p>
        <p>{customer.postalCode}</p>
      </div>
    </div>
  );
}

Customer.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  postalCode: PropTypes.string
};

export default Customer;
