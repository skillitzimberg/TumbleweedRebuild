import React from "react";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import Orders from "./../Orders/Orders";
import Products from "./../Products/Products";
import PropTypes from "prop-types";

function Admin(props) {
  console.log("Admin: ", props);
  return (
    <div className="container">
      <Customers
        customers={props.customers}
        onAddingNewCustomer={props.onAddingNewCustomer}
      />

      <Locations
        locations={props.locations}
        onAddingNewLocation={props.onAddingNewLocation}
      />

      <Products
        products={props.products}
        onAddingNewProduct={props.onAddingNewProduct}
      />

      <Orders
        customers={props.customers}
        locations={props.locations}
        products={props.products}
        orders={props.orders}
        onAddingNewOrder={props.onAddingNewOrder}
      />
    </div>
  );
}

Admin.propTypes = {
  customers: PropTypes.array,
  onAddingNewCustomer: PropTypes.func,
  locations: PropTypes.object,
  onAddingNewLocation: PropTypes.func,
  orders: PropTypes.object,
  onAddingNewOrder: PropTypes.func,
  products: PropTypes.object,
  onAddingNewProduct: PropTypes.func
};

export default Admin;
