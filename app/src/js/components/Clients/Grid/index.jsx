import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = (props) => {
	const { clients } = props;
	return (
		<table className="striped centered">
			<Columns />
			<Rows clients={clients} />
		</table>
	);
}

Grid.propTypes = {
	clients: PropTypes.array,
};

export default Grid;
