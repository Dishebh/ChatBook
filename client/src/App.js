import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
