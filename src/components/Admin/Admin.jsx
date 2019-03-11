import React from "react";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import Orders from "./../Orders/Orders";
import Products from "./../Products/Products";
import { prependOnceListener } from "cluster";
// import PropTypes from "prop-types";

function Admin() {
  return (
      <div className="container">
        <Customers customers={props.customers}/>
        <Locations />
        <Products />
        <Orders />
      </div>
  );
}

export default Admin;
