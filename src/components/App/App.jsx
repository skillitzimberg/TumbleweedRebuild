import React from "react";
import Admin from "./../Admin/Admin";
import Header from "./../Header/Header";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
  );
}

export default App;
