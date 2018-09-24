import React from 'react';

import Guardar from '../../../Common/Button';
import Limpiar from '../../../Common/Button';

const BarraDeAcciones = () => (
	<div>
		<div className="input-field col s6">
			<Guardar className="waves-effect waves-light btn" texto="Guardar" />
		</div>
		<div className="input-field col s6">
			<Limpiar className="waves-effect waves-light btn" texto="Limpiar" />
		</div>
	</div>
);

export default BarraDeAcciones;
