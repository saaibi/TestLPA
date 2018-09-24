import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Rows = ({ contactos }) => (
	<tbody>
		{
			contactos.map(
				(contacto, index) => <Row key={index} contacto={contacto} />
			)
		}
	</tbody>
);

Rows.propTypes = {
	contactos: PropTypes.array,
};

export default Rows;
