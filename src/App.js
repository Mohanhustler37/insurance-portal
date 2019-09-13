import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Company from './components/pages/company/Company';
import Insurance from './components/pages/insurance/Insurance';
import User from './components/pages/user/User';
import Companies from './components/home/Companies';
import CompanyInsurances from './components/home/CompanyInsurances';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        {/* <Route
            exact
            path="/companies/insurance"
            component={CompanyInsurance}
          /> */}
        <Switch>
          <Route
            exact
            path="/"
            component={Companies}
          />
          <Route
            exact
            path="/company/insurances/:id"
            component={CompanyInsurances}
          />
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
          {/* <Route
            exact
            path="/login"
            component={Login}
          /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
