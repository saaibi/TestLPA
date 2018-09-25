import React from 'react';

import Save from '../../../Common/Button';
import Clean from '../../../Common/Button';

const ActionBar = (props) => (
	<div>
		<div className="input-field col s6">
			<Save
				className="waves-effect waves-light btn"
				texto="Save"
				icon="save"
				classNameIcon="left"
				onClick={props.createClient}
			/>
		</div>
		<div className="input-field col s6">
			<Clean
				className="waves-effect waves-light btn"
				texto="Clear"
				icon="delete_sweep"
				classNameIcon="left"
				onClick={props.createClient}
			/>
		</div>
	</div>
);

export default ActionBar;
