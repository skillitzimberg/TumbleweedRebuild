import React from "react";
import PropTypes from "prop-types";

function Customer(props) {
  // console.log("customer", props);
  return (
    <div>
      <div className="container">
        <h3>{props.customer.firstName} {props.customer.lastName}</h3>
        <p>{props.customer.phone}</p>
        <p>{props.customer.email}</p>
        <p>{props.customer.postalCode}</p>
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
