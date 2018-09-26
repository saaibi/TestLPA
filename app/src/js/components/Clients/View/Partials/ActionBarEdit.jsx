import React from 'react';

import AddCredit from '../../../Common/Button';

const ActionBarEdit = (props) => (
	<div>
		<div className="input-field col s6">
			<AddCredit
				className="btn-floating halfway-fab green pulse"
				icon="edit"
				classNameIcon="prefix"
				onClick={(e) => props.updateClient(id)}
			/>

		</div>
	</div>
);

export default ActionBarEdit;
