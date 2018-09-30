import React,{Component} from 'react';
import { connect } from "react-redux";

import AppHeader from './AppHeader';
import Client from './Clients';

class AppClient extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader />
				<Client />
			</div>
		);
	}
}

const connectedLoginPage = connect()(AppClient);
export { connectedLoginPage as AppClient };
