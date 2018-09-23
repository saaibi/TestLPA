import React from 'react';
import PropTypes from 'prop-types';

import Columnas from './Partials/Columnas';
import Filas from './Partials/Filas';
import contactos from "../../../reducers/contactos";

const Grid = ({ contactos }) => (
	<div className="agenda--grid">
		<Columnas />
		<Filas contactos={ contactos } />
	</div>
);

Grid.propTypes = {
	contactos: PropTypes.array,
};

export default Grid;
