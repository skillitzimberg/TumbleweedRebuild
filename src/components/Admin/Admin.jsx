import React from "react";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import Orders from "./../Orders/Orders";
import Products from "./../Products/Products";
// import PropTypes from "prop-types";

function Admin() {
  return (
    <div>
      <div className="container">
        <p>Admin Works</p>
        <Customers />
      </div>
    </div>
  );
}

export default Admin;
