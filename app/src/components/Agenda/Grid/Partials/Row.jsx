import React from 'react';
import PropTypes from 'prop-types';

import ActionBarGrid from './ActionBarGrid';

const Row = ({ contacto, onEdit, onDelete }) => (
	<tr>
		<td>{contacto.nombre}</td>
		<td>{contacto.celular}</td>
		<td>
			<ActionBarGrid
				id={contacto.id}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		</td>
	</tr>
);

Row.propTypes = {
	contacto: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default Row;
