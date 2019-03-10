import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import Orders from "./../Orders/Orders";
import Products from "./../Products/Products";
import { masterCustomerList } from "./masterCustomerList";
// import PropTypes from "prop-types";

function Admin() {
  return (
    <Router>
      <div className="container">
        <Customers customers={masterCustomerList}/>
        <Locations />
        <Products />
        <Orders />
      </div>
    </Router>
  );
}

export default Admin;
