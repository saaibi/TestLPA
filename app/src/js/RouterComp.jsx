import React, {Component} from  "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "./utils/history";
import { alertActions } from "./actions/alert.actions";
import { AppClient  } from "./components";

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
      <div>
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <div>
                <Route path="/" component={AppClient} />
              </div>
            </Router>
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
