import React from 'react';

import Nombre from '../../../Common/Input';
import Celular from '../../../Common/Input';

const Campos = () => (
	<div className="agenda--form_inputs">
		<Nombre placeholder="Nombre" />
		<Celular className="celular" placeholder="Celular" />
	</div>
);

export default Campos;
