// @flow

import React from "react";
import { Route } from "react-router-dom";
import type { Match } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./landing";
import Search from "./search";
import Details from "./details";
import preload from "../data.json";

const PageNotFound = () => <h1> 404 </h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={props => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find(
              (show: Show) => props.match.params.id === show.imdbID
            );
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={PageNotFound} />
    </div>
  </Provider>
);

export default App;
