import React from 'react';
import PropTypes from 'prop-types';

import Editar from '../../../Common/Button';
import Borrar from '../../../Common/Button';

const ActionBarGrid = ({ id, onEdit, onDelete }) => (
	<div>
		<Editar
			className="btn-floating"
			texto="+"
			onClick={ onEdit }
		/>
		<Borrar
			className="btn-floating red"
			texto="-"
			onClick={ onDelete }
		/>
	</div>
);

ActionBarGrid.propTypes = {
	id: PropTypes.number,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default ActionBarGrid;
