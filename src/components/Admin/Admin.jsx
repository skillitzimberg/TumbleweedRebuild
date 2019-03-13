import React from "react";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import Orders from "./../Orders/Orders";
import Products from "./../Products/Products";
import PropTypes from "prop-types";

function Admin(props) {
  console.log("Admin props: ", props)
  return (
    <div className="container">
      <Customers
        customers={props.customers}
        onAddingNewCustomer={props.onAddingNewCustomer}
      />
      <Locations />
      <Products
        products={props.products}
        onAddingNewProduct={props.onAddingNewProduct}
      />
      <Orders />
    </div>
  );
}

Admin.propTypes = {
  customers: PropTypes.object,
  onAddingNewCustomer: PropTypes.func,
  products: PropTypes.object,
  onAddingNewProduct: PropTypes.func
};

export default Admin;
