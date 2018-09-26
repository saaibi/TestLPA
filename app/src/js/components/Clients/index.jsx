import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clienActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import Edit from './Edit';
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
		clientEdit: {
			firstName: "",
			lastName: "",
			client_id: ""
		},
		headerModal: "",
		contentModal: "",
	}

	componentWillMount() {
		this.props.dispatch(clienActions.getAllClient());
	}

	componentWillReceiveProps(newProps) {
		const { clientEdit } = this.state;
		clientEdit.firstName = newProps.client.firstName;
		clientEdit.lastName = newProps.client.lastName;
		this.setState({ clientEdit });
	}

	createClient = (e) => {
		e.preventDefault();
		this.props.dispatch(clienActions.createClient(this.state.client));
	}

	updateClient = (e) => {
		e.preventDefault();
		const { clientEdit } = this.state;
		this.props.dispatch(clienActions.updateClient(clientEdit.client_id, clientEdit));
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

	loadClientEdit = (event) => {
		const { clientEdit } = this.state;
		const { value, name } = event.target;
		this.setState({
			clientEdit: {
				...clientEdit,
				[name]: value
			}
		})
	}

	optionsClient = (e) => {
		const { clientEdit } = this.state
		const { headerModal, contentModal, id } = e;

		clientEdit.client_id = id;

		this.setState({
			headerModal,
			contentModal,
			clientEdit
		});
		this.props.dispatch(clienActions.getById(id));
		$('#modalClient').modal('open')

	}

	render() {
		const { clients } = this.props;
		const { headerModal, contentModal, clientEdit } = this.state;

		if (clients.isLoading) {
			if (!clients.clients) {
				return (
					<div>
						<p>Loading....</p>
					</div>
				)
			}
		}

		let content = contentModal == "edit" ? content =
			<Edit client={clientEdit} updateClient={this.updateClient} loadClient={this.loadClientEdit} /> : content =
			"Hello!!";

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
					header={headerModal}
					content={content}
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
