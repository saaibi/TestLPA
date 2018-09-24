import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { clienActions } from "../actions/client.actions";

class HomePage extends React.Component {
  componentDidMount() {
    console.log("Props HomePage");
    console.log(this.props);

    this.props.dispatch(clienActions.getAllClient());
  }

  handleDeleteUser(id) {
    return e => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
    console.log("user and users");
    console.log(users);
    console.log(user);
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>
          Hi {user.firstName} {user.lastName}!
        </h1>
        <p>You're logged in with React!!</p>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {users.items && (
          <ul>
            {users.items.map((user, index) => (
              <li key={user.id}>
                {user.firstName +
                  " - " +
                  user.lastName +
                  " -  " +
                  user.password}
                {user.deleting ? (
                  <em> - Deleting...</em>
                ) : user.deleteError ? (
                  <span className="text-danger">
                    {" "}
                    - ERROR: {user.deleteError}
                  </span>
                ) : (
                  <span>
                    {" "}
                    - <a onClick={this.handleDeleteUser(user.id)}>Delete</a>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  console.log("State HomePage  ");
  console.log(state);
  return {
    user,
    users
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
