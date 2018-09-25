import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clienActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';

class Client extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		client: {
			firstName: "",
			lastName: "",
			client_id: "",
			credit: {}
		}
	}

	componentWillMount() {
		this.props.dispatch(clienActions.getAllClient());
	}

	createClient = (e) => {
		e.preventDefault();
		this.props.dispatch(clienActions.createClient(this.state.client));
	}

	loadClient = (event) => {
		const { client } = this.state;
		const { value ,name } = event.target;
		this.setState({
			client:{
				...client,
				[name]:value
			}
		})
	}

	render() {
		const { client } = this.props;

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
