import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// const store = createStore(rootReducer);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById("react-app-root")
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept("./components/App/App", () => {
    render(App);
  });
}
/*eslint-enable */
