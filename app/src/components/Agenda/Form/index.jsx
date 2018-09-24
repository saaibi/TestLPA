import React from 'react';

import LabelUpdate from './Partials/LabelUpdate';
import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';

const Form = (props) => (
	<div >
		<LabelUpdate visible />
		<div className="row">
			<Fields loadClient={props.loadClient}/>
			<ActionBar  createClient={props.createClient}/>
		</div>
	</div>
);

export default Form;
