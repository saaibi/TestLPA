import React from 'react';

import AppHeader from './AppHeader';
import Clients from './Agenda';

class AppAgenda extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<AppHeader />
				<Clients />
			</div>
		);
	}
}

export default AppAgenda;
