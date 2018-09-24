import React from 'react';
import PropTypes from 'prop-types';

import Edit from '../../../Common/Button';
import Delete from '../../../Common/Button';
import View from '../../../Common/Button';

const ActionBarGrid = ({ id, onEdit, onDelete }) => (
	<div>
		<Edit
			className="btn-floating green"
			texto="+"
			onClick={ onEdit }
		/>
		<Delete
			className="btn-floating red"
			texto="-"
			onClick={ onDelete }
		/>
		<View
			className="btn-floating cyan pulse"
			texto="º"
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
