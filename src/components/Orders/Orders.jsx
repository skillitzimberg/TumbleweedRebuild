import React from "react";
import Order from "./../Orders/Order";
import NewOrderForm from "./../Orders/NewOrderForm";
// import PropTypes from "prop-types";

function Orders() {
  return (
    <div>
      <div className="container">
        <p>Orders Works</p>
        <Order />
        <NewOrderForm />
      </div>
    </div>
  );
}

export default Orders;
