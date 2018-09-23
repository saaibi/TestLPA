import React from 'react';

import Guardar from '../../../Common/Button';
import Limpiar from '../../../Common/Button';

const Actions = () => (
	<div className="">
		<Guardar className="waves-effect waves-light btn" texto="Guardar" />
		<Limpiar className="waves-effect waves-light btn" texto="Limpiar" />
	</div>
);

export default Actions;
