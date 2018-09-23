import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Grid from "./Grid";

class Clients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
	const { contactos, dispatch} = this.props;
	console.log(this.props)
    return (
      <div className="row">
        <div className="col s3">
          <Form dispatch={dispatch}/>
        </div>
        <div className="col s9">
          <Grid contactos={contactos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contactos: state.contactos.contactos
});

export default connect(mapStateToProps)(Clients);
