import React from 'react';
import PropTypes from 'prop-types';

import BarraDeAcciones from './BarraDeAcciones';

const Fila = ({ contacto, onEdit, onDelete }) => (
	<tr>
		<td>{contacto.nombre}</td>
		<td>{contacto.celular}</td>
		<td><BarraDeAcciones
			id={contacto.id}
			onEdit={onEdit}
			onDelete={onDelete}
		/></td>
	</tr>
);

Fila.propTypes = {
	contacto: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default Fila;
