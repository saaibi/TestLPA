import React from 'react';
import { connect } from 'react-redux';

import { clienActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import mockData from './mockData';

class Agenda extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.dispatch(clienActions.getAllClient());
	}

	render() {
		const { client } = this.props;
		return (
			<div className="agenda">
				<Form />
				<Grid contactos={ client } />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	client: state.client.items,
});

export default connect(mapStateToProps)(Agenda);
