import React from "react";
// import PropTypes from "prop-types";

function Customer(props) {
  return (
    <div>
      <div className="container">
        <p>Customer Works</p>
        <h3>props.firstName props.lastName</h3>
        <p>props.phone</p>
        <p>props.email</p>
        <p>props.postalCode</p>
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
