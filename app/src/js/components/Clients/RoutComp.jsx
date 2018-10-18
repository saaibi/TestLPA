import React,{Component} from 'react';
import { connect } from "react-redux";

import AppHeader from '../AppHeader';
import Client from '.';

class AppClient extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="CLIENTS" />
				<Client />
			</div>
		);
	}
}

const connectedClients = connect()(AppClient);
export { connectedClients as AppClient };
