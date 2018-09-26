import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clienActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import Modal from '../Common/Modal';

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
		},
		headerModal: "",
		contentModal: "",
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
		const { value, name } = event.target;
		this.setState({
			client: {
				...client,
				[name]: value
			}
		})
	}

	optionsClient = (e) => {
		const { headerModal, contentModal, id } = e;
		this.setState({
			headerModal,
			contentModal
		})
		this.props.dispatch(clienActions.getById(id));
		$('#modalClient').modal('open')
	}

	render() {
		const { clients ,client } = this.props;
		

		if (clients.isLoading) {
			if (!clients.clients) {
				return (
					<div>
						<p>Loading....</p>
					</div>
				)
			}
		}
		console.log(client)
		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createClient={this.createClient} loadClient={this.loadClient} />
				</div>
				<div className="col s12 m8 l9">
					<Grid clients={clients.clients} optionsClient={this.optionsClient} />
				</div>
				<Modal
					id="modalClient"
					header={this.state.headerModal}
					content={this.state.contentModal}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	clients: state.client,
	client: state.client.client,
});

export default connect(mapStateToProps)(Client);
