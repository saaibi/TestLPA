import React from 'react';

import Nombre from '../../../Common/Input';
import Celular from '../../../Common/Input';

const Campos = () => (
	<div>
		<div className="input-field col s12">
			<Nombre />
			<label htmlFor="firts_name">Firts Name</label>
		</div>
		<div className="input-field col s12">
			<Celular className="" />
			<label htmlFor="last_name">Last Name</label>
		</div>

	</div>
);

export default Campos;
