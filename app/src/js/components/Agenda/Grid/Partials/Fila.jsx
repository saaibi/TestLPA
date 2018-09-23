import React from 'react';
import PropTypes from 'prop-types';

import BarraDeAcciones from './BarraDeAcciones';

const Fila = ({ contacto, onEdit, onDelete }) => (
	<div className="agenda--grid_fila">
		<div className="agenda--grid_celda delimiter-right grid--25">
			{ contacto.nombre }
		</div>
		<div className="agenda--grid_celda align-center delimiter-right grid--25">
			{ contacto.celular }
		</div>
		<div className="agenda--grid_celda align-center grid--50">
			<BarraDeAcciones
				id={ contacto.id }
				onEdit={ onEdit }
				onDelete={ onDelete }
			/>
		</div>
	</div>
);

Fila.propTypes = {
	contacto: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default Fila;
