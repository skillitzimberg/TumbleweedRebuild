import React from "react";
import Customer from "./../Customers/Customer";
import NewCustomerForm from "./../Customers/NewCustomerForm";
// import PropTypes from "prop-types";

function Customers() {
  return (
    <div>
      <div className="container">
        <p>Customers Works</p>
        <Customer />
        <NewCustomerForm />
      </div>
    </div>
  );
}

export default Customers;
