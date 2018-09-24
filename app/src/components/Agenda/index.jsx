import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clienActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import mockData from './mockData';

class Agenda extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		client: {
			firstName: "",
			lastName: "",
			document: "",
			credit: {}
		}
	}

	componentWillMount() {
		this.props.dispatch(clienActions.getAllClient());
	}

	createClient = (e) => {
		console.log("######", e)
	}

	loadClient = (event) => {
		console.log("$$$$$", event.target.value)
	}

	render() {
		const { client } = this.props;
		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createClient={this.createClient} loadClient={this.loadClient} />
				</div>
				<div className="col s12 m8 l9">
					<Grid contactos={client} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	client: state.client.items,
});

export default connect(mapStateToProps)(Agenda);
