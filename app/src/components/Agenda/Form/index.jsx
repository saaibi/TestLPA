import React from 'react';

import EtiquetaActualizacion from './Partials/EtiquetaActualizacion';
import Campos from './Partials/Campos';
import BarraDeAcciones from './Partials/BarraDeAcciones';

const Form = () => (
	<div className="agenda--form">
		<EtiquetaActualizacion visible />
		<div className="agenda--form_contenedor">
			<Campos />
			<BarraDeAcciones />
		</div>
	</div>
);

export default Form;
