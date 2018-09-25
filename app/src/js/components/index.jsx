import React,{Component} from 'react';
import { connect } from "react-redux";

import AppHeader from './AppHeader';
import Client from './Clients';

class AppClient extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<AppHeader />
				<Client />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}
const connectedLoginPage = connect(mapStateToProps)(AppClient);
export { connectedLoginPage as AppClient };
