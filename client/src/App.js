import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import ProfileForm from "./components/profile-forms/ProfileForm";
import AddEducation from "./components/profile-forms/AddEducation";
import AddExperience from "./components/profile-forms/AddExperience";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/profiles" component={Profiles}></Route>
            <Route exact path="/profiles/:id" component={Profile}></Route>
            <Route exact path="/edit-profile" component={ProfileForm} />
            <Route exact path="/add-experience" component={AddExperience} />
            <Route exact path="/add-education" component={AddEducation} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
