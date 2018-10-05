import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

 import { history } from "../store";
import { alertActions } from "../actions/alert.actions";
import { AppClient } from "../components";

class Routes extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    return (
      <div>
        <dir></dir>
        <Router history={history}>
          <div>
            <Route path="/clients" component={AppClient} />
          </div>
        </Router>
      </div>
    );
  }
}

const connectedApp = connect()(Routes);
export { connectedApp as Routes };
