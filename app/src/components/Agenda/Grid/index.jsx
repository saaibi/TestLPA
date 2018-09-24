import React from 'react';
import PropTypes from 'prop-types';

import Columnas from './Partials/Columnas';
import Filas from './Partials/Filas';
// import contactos from "../../../reducers/contactos";

const Grid = (props) => {
	const { clients } = props;
	console.log(clients)
	return (
		<table className="striped centered">
			<Columnas />
			<Filas contactos={clients} />
		</table>
	);
}

Grid.propTypes = {
	contactos: PropTypes.array,
};

export default Grid;
