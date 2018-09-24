import React from 'react';

import LabelUpdate from './Partials/LabelUpdate';
import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';

const Form = () => (
	<div >
		<LabelUpdate visible />
		<div className="row">
			<Fields />
			<ActionBar />
		</div>
	</div>
);

export default Form;
