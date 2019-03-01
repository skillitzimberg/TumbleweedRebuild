import React from "react";
import Admin from "./../Admin/Admin";
import Error404 from "./../Error404";
import Header from "./../Header/Header";
import Customers from "./../Customers/Customers";
import Products from "./../Products/Products";
import Orders from "./../Orders/Orders";
import Locations from "./../Locations/Locations";
import { Switch, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Header />
      <p>App Works</p>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/customers" component={Customers} />
        <Route exact path="/admin/products" component={Products} />
        <Route exact path="/admin/orders" component={Orders} />
        <Route exact path="/admin/locations" component={Locations} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
