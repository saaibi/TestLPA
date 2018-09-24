import React from 'react';

import EtiquetaActualizacion from './Partials/EtiquetaActualizacion';
import Campos from './Partials/Campos';
import BarraDeAcciones from './Partials/BarraDeAcciones';

const Form = () => (
	<div >
		<EtiquetaActualizacion visible />
		<div className="row">
			<Campos />
			<BarraDeAcciones />
		</div>
	</div>
);

export default Form;
