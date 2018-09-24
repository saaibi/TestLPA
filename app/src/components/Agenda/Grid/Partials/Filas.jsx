import React from 'react';
import PropTypes from 'prop-types';

import Fila from './Fila';

const Filas = ({ contactos }) => (
	<tbody>
		{
			contactos.map(
				(contacto, index) => <Fila key={index} contacto={contacto} />
			)
		}
	</tbody>
);

Filas.propTypes = {
	contactos: PropTypes.array,
};

export default Filas;
