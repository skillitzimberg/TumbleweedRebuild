import React from "react";
import PropTypes from "prop-types";
import EditOrderForm from "./../Orders/EditOrderForm";

class Order extends React.Component {
  constructor(props) {
    super(props);
    const order = props.orders[props.match.params.orderId];

    this.state = {
      orderName: order.orderName,
      orderType: order.orderType,
      ingredients: order.ingredients,
      orderDescription: order.orderDescription,
      orderPrice: order.orderPrice,
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
        orderName: this.state.orderName,
        orderType: this.state.orderType,
        ingredients: this.state.ingredients,
        orderDescription: this.state.orderDescription,
        orderPrice: this.state.orderPrice,
        id: this.state.id
      });
  }

  render() {
    const order = this.state;
    return (
      <div>
        <div className="container">
          <h3>{this.state.orderName}</h3>
          <p>{this.state.orderType}</p>
          <p>{this.state.ingredients}</p>
          <p>{this.state.orderDescription}</p>
          <p>{this.state.orderPrice}</p>
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
  orderName: PropTypes.string,
  onEditOrder: PropTypes.func
};

export default Order;
