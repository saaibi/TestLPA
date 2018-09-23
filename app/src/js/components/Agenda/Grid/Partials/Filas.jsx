import React from 'react';
import PropTypes from 'prop-types';

import Fila from './Fila';

const Filas = ({ contactos }) => (
	<div className="agenda--grid_filas">
		{
			contactos.map(
				(contacto, index) => <Fila key={ index } contacto={ contacto } />
			)
		}
	</div>
);

Filas.propTypes = {
	contactos: PropTypes.array,
};

export default Filas;
