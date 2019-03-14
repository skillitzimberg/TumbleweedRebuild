import React from "react";
import PropTypes from "prop-types";
import OrderList from "./../Orders/OrderList";
import NewOrderForm from "./../Orders/NewOrderForm";
import "./orderStyles.css";

function Orders(props) {
  console.log("Orders: ", props);
  return (
    <div>
      <div className="orders">
        <p>Orders</p>

        <OrderList
          orders={props.orders}
          onDeletingOrder={props.onDeletingOrder}
        />

        <NewOrderForm onNewOrderCreation={props.onAddingNewOrder}/>
      </div>
    </div>
  );
}

Orders.propTypes = {
  orders: PropTypes.object,
  onAddingNewOrder: PropTypes.func,
  onNewOrderCreation: PropTypes.func,
  onDeletingOrder: PropTypes.func
};

export default Orders;
