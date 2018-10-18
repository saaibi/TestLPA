import React,{Component} from 'react';
import { connect } from "react-redux";

import AppHeader from '../AppHeader';

class AppSample extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="SAMPLES" />
			</div>
		);
	}
}

const connectedSample = connect()(AppSample);
export { connectedSample as AppSample };
