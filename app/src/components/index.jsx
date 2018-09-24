import React,{Component} from 'react';
import { connect } from "react-redux";

import AppHeader from './AppHeader';
import Agenda from './Agenda';

class AppAgenda extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<AppHeader />
				<Agenda />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}
const connectedLoginPage = connect(mapStateToProps)(AppAgenda);
export { connectedLoginPage as AppAgenda };
