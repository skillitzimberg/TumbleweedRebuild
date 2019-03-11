import React from "react";
import Header from "./../Header/Header";
import Admin from "./../Admin/Admin";
import Customers from "./../Customers/Customers";
import Locations from "./../Locations/Locations";
import { Route, Switch } from "react-router-dom";
import { masterCustomerList } from "./masterCustomerList";

function App() {
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/admin" render={(props) => <Admin {...props} customers={masterCustomerList}/>} />
          <Route exact path="/admin/customers" render={(props) => <Customers {...props} customers={masterCustomerList}/>} />
          <Route exact path="/admin/locations" component={Locations} />
        </Switch>
      </div>
  );
}

export default App;
