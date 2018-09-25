import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Rows = ({ clients }) => (
	<tbody>
		{
			clients.map(
				(client, index) => <Row key={index} client={client} />
			)
		}
	</tbody>
);

Rows.propTypes = {
	clients: PropTypes.array,
};

export default Rows;
