import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Insurance from './components/pages/Insurance';
import User from './components/pages/User';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/company"
            component={Company}
          />
          <Route
            exact
            path="/insurance"
            component={Insurance}
          />
          <Route
            exact
            path="/user"
            component={User}
          />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
