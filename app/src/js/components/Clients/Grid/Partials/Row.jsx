import React from 'react';
import PropTypes from 'prop-types';

import ActionBarGrid from './ActionBarGrid';

const Row = ({ client, onEdit, onDelete }) => (
	<tr>
		<td>{client.firstName}</td>
		<td>{client.lastName}</td>
		<td>
			<ActionBarGrid
				id={client.id}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		</td>
	</tr>
);

Row.propTypes = {
	client: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default Row;
