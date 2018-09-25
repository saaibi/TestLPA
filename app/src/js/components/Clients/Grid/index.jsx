import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = (props) => {
	const { clients } = props;
	console.log(clients)
	return (
		<table className="striped centered">
			<Columns />
			<Rows contactos={clients} />
		</table>
	);
}

Grid.propTypes = {
	contactos: PropTypes.array,
};

export default Grid;
