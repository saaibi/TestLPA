import React from 'react';

import EtiquetaActualizacion from './Partials/EtiquetaActualizacion';
import Campos from './Partials/Campos';
import Actions from './Partials/Actions';

const Form = (dispatch) => (
	<div className="">
		<EtiquetaActualizacion visible />
		<div className="">
			<Campos />
			<Actions dispatch={dispatch} />
		</div>
	</div>
);

export default Form;
