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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customerList: masterCustomerList
    }
  }

render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path="/admin"
            render={(props) => <Admin {...props}
            customers={this.state.customerList}/>}
            />

          <Route
            exact path="/admin/customers"
            render={(props) => <Customers {...props}
            customers={this.state.customerList}/>}
            />
          <Route
            exact path={`/admin/customers/:customerId`}
            render={ (props) => <Customer {...props} customers={this.state.customerList} /> }
            />
          <Route exact path="/admin/locations" component={Locations} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/products" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
