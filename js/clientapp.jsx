// @flow

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Perf from "react-addons-perf";
import App from "./app";

window.Perf = Perf;
Perf.start();
// Force render top-level App component
const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
};
renderApp();

if (module.hot) {
  module.hot.accept("./app", () => {
    renderApp();
  });
}

render(<App />, document.getElementById("app"));
