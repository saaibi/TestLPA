import React from 'react';

import Save from '../../../Common/Button';
import Clean from '../../../Common/Button';

const ActionBar = () => (
	<div>
		<div className="input-field col s6">
			<Save className="waves-effect waves-light btn" texto="Guardar" />
		</div>
		<div className="input-field col s6">
			<Clean className="waves-effect waves-light btn" texto="Limpiar" />
		</div>
	</div>
);

export default ActionBar;
