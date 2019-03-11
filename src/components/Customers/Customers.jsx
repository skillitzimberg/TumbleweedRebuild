import React from "react";
import PropTypes from "prop-types";
import CustomerList from "./../Customers/CustomerList";
import NewCustomerForm from "./../Customers/NewCustomerForm";
import "./customerStyles.css";

function Customers(props) {
  return (
    <div>
      <div className="customers">
        <p>Customers</p>
        <CustomerList props={props} />
        <NewCustomerForm onNewCustomerCreation={props.onAddingNewCustomer} />
      </div>
    </div>
  );
}

Customers.propTypes = {
  customers: PropTypes.array,
  onNewCustomerCreation: PropTypes.func
};

export default Customers;
