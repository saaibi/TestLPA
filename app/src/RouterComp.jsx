import React, {Component} from  "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "./helpers";
import { alertActions } from "./actions/alert.actions";
import {  AppAgenda } from "./components";
// import { HomePage } from "./HomePage";
// import { LoginPage } from "./LoginPage";
// import { RegisterPage } from "./RegisterPage";

import {  clienActions } from "./actions/client.actions";

class RouterComp extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <div>
                <Route path="/" component={AppAgenda} />
                {/* <Route path="/login" component={LoginPage} /> */}
                {/* <Route path="/register" component={RegisterPage} /> */}
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(RouterComp);
export { connectedApp as RouterComp };
