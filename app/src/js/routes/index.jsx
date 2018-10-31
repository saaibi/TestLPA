import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../store";
import { AppClient } from "../components/Clients/RoutComp";
import { AppCredit } from "../components/Results/RoutComp";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/clients" component={AppClient} />
          <Route path="/credits" component={AppCredit} />
        </div>
      </Router>
    </div>
  )
}

export default Routes