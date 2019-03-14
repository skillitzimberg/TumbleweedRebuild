import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function OrderList({orders, onDeletingOrder}) {

  function deleteOrder(orderId) {
    event.preventDefault();

    onDeletingOrder(orderId);
  }

  return (
    <div className="container">
      {Object.keys(orders).map((orderId) => {
        let order = orders[orderId];
        return <div key={v4()}>
          <Link
            to={`/admin/orders/${order.id}`}
          >
            <p>{order.id}</p>
          </Link>
          <button onClick={() => {deleteOrder(order.id);}}>Delete</button>
        </div>;
      }
      )}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.object,
  onDeletingOrder: PropTypes.func
};

export default OrderList;
