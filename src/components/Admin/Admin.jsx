import React from "react";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import Orders from "./../Orders/Orders";
import Products from "./../Products/Products";
import PropTypes from "prop-types";

function Admin(props) {
  return (
    <div className="container">
      <Customers
        customers={props.customers}
        onAddingNewCustomer={props.onAddingNewCustomer}
      />
      <Locations />
      <Products />
      <Orders />
    </div>
  );
}

Admin.propTypes = {
  customers: PropTypes.object,
  onAddingNewCustomer: PropTypes.func
};

export default Admin;
