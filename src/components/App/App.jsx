import React from "react";
import Admin from "./../Admin/Admin";
import Error404 from "./../Error404";
import Header from "./../Header/Header";
import { Switch, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Header />
      <p>App Works</p>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
