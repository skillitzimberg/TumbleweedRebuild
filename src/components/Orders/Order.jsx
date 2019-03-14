import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import EditOrderForm from "./../Orders/EditOrderForm";

class Order extends React.Component {
  constructor(props) {
    super(props);
    const order = props.orders[props.match.params.orderId];

    this.state = {
      orderDateTime: order.orderDateTime,
      scheduledPickupDate: order.scheduledPickupDate,
      id: order.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEditFormSubmission(event) {
    event.preventDefault();

    this.props.onEditOrder(
      {
        orderDateTime: this.state.orderDateTime,
        scheduledPickupDate: this.state.scheduledPickupDate,
        id: this.state.id
      });
  }

  render() {
    const order = this.state;
    const scheduledPickup = new Moment(this.state.scheduledPickupDate).format("MMM Do YY");
    return (
      <div>
        <div className="container">
          <h3>Order Id: {this.state.id}</h3>
          <p>Order Placed: {this.state.orderDateTime}</p>
          <p>Scheduled Pickup: {scheduledPickup}</p>
        </div>

        <EditOrderForm
          order={order}
          onEditOrder={this.props.onEditOrder}
          onChange={this.handleChange}
          onEditFormSubmission={this.handleEditFormSubmission}/>
      </div>
    );
  }
}

Order.propTypes = {
  match: PropTypes.object,
  orders: PropTypes.object,
  orderDateTime: PropTypes.string,
  onEditOrder: PropTypes.func
};

export default Order;
