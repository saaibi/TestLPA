import React from 'react';

import Fields from './Partials/Fields';
import ActionBarEdit from './Partials/ActionBarEdit';

const Edit = (props) => (
	<div >
		<Fields loadClient={props.loadClient} client={props.client} />
		<ActionBarEdit  createClient={props.createClient}/>
	</div>
);

export default Edit;