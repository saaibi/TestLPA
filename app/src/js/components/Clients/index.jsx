import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clienActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import mockData from './mockData';

class Client extends Component {
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
		console.log(client.clients)

		if (client.isLoading || !client.clients) {
			return (
				<div>
					<p>Loading....</p>
				</div>
			)
		}
		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createClient={this.createClient} loadClient={this.loadClient} />
				</div>
				<div className="col s12 m8 l9">
					<Grid clients={client.clients} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	client: state.client,
});

export default connect(mapStateToProps)(Client);
