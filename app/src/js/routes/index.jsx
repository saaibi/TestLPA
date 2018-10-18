import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../store";
import { AppClient } from "../components/Clients/RoutComp";
import { AppSample } from "../components/Samples/RoutComp";
import { AppResult } from "../components/Results/RoutComp";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/clients" component={AppClient} />
          <Route path="/results" component={AppResult} />
          <Route path="/samples" component={AppSample} />
        </div>
      </Router>
    </div>
  )
}

export default Routes