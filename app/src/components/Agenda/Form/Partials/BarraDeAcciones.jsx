import React from 'react';

import Guardar from '../../../Common/Button';
import Limpiar from '../../../Common/Button';

const BarraDeAcciones = () => (
	<div className="agenda--form_barra_acciones">
		<Guardar className="satisfactorio" texto="Guardar" />
		<Limpiar className="limpiar" texto="Limpiar" />
	</div>
);

export default BarraDeAcciones;
