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

        <CustomerList
          customers={props.customers}
        />

        <NewCustomerForm onNewCustomerCreation={props.onAddingNewCustomer}/>
      </div>
    </div>
  );
}

Customers.propTypes = {
  customers: PropTypes.array,
  onAddingNewCustomer: PropTypes.func,
  onNewCustomerCreation: PropTypes.func
};

export default Customers;
