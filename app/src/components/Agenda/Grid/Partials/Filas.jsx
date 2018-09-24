import React from 'react';
import PropTypes from 'prop-types';

import Fila from './Fila';

const Filas = ({ contactos }) => (
	<div className=" ">
		{/* {
			contactos.map(
				(contacto, index) => <Fila key={ index } contacto={ contacto } />
			)
		} */}
	</div>
);

Filas.propTypes = {
	contactos: PropTypes.array,
};

export default Filas;
