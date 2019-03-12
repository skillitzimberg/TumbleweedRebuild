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
          onDeletingCustomer={props.onDeletingCustomer}
        />

        <NewCustomerForm onNewCustomerCreation={props.onAddingNewCustomer}/>
      </div>
    </div>
  );
}

Customers.propTypes = {
  customers: PropTypes.object,
  onAddingNewCustomer: PropTypes.func,
  onNewCustomerCreation: PropTypes.func,
  onDeletingCustomer: PropTypes.func
};

export default Customers;
