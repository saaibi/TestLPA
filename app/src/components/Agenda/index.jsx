import React,{Component} from 'react';
import { connect } from 'react-redux';

import { clienActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import mockData from './mockData';

class Agenda extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(clienActions.getAllClient());
	}

	render() {
		const { client } = this.props;
		return (	
			<div className="row">
				<div className="col s12 m4 l3">
					<Form />
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
