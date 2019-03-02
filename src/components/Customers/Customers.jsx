import React from "react";
import PropTypes from "prop-types";
import CustomerList from "./../Customers/CustomerList";
import NewCustomerForm from "./../Customers/NewCustomerForm";

function Customers(props) {
  return (
    <div>
      <div className="container">
        <p>Customers Works</p>
        <CustomerList customers={props.customers}/>
        <NewCustomerForm />
      </div>
    </div>
  );
}

Customers.propTypes = {
  customers: PropTypes.array
};

export default Customers;
