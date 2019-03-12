import React from "react";
import Header from "./../Header/Header";
import Admin from "./../Admin/Admin";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import Orders from "./../Orders/Orders";
import Products from "./../Products/Products";
import { Route, Switch } from "react-router-dom";
import { masterCustomerList } from "./masterCustomerList";
import Customer from "./../Customers/Customer";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customerList: {}
    };

    this.handleAddingNewCustomer = this.handleAddingNewCustomer.bind(this);
    this.handleDeletingCustomer = this.handleDeletingCustomer.bind(this);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path="/admin"
            render={(props) => <Admin {...props}
              customers={this.state.customerList}
              onAddingNewCustomer={this.handleAddingNewCustomer}/>}
          />

          <Route
            exact path="/admin/customers"
            render={(props) => <Customers {...props}
              customers={this.state.customerList}
              onAddingNewCustomer={this.handleAddingNewCustomer}
              onDeletingCustomer={this.handleDeletingCustomer}/>}
          />

          <Route
            exact path={"/admin/customers/:customerId"}
            render={ (props) => <Customer {...props}
              customers={this.state.customerList}
              onDeletingCustomer={this.handleDeletingCustomer}/>}
          />

          <Route exact path="/admin/locations" component={Locations} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/products" component={Products} />
        </Switch>
      </div>
    );
  }

  handleAddingNewCustomer(newCustomer) {
    let newCustomerList = Object.assign({}, this.state.customerList, {
      [newCustomer.id]: newCustomer
    });
    console.log(newCustomerList);
    // let newCustomerList = this.state.customerList.slice();

    // newCustomerList.push(newCustomer);

    this.setState({customerList: newCustomerList});
  }

  handleDeletingCustomer(deleteThisCustomer) {
    console.log("handle delete", deleteThisCustomer);
    this.setState({
      customerList: this.state.customerList.filter(customer => customer.id !== deleteThisCustomer)});
  }

}

export default App;
