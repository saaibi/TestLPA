import React from 'react';
import PropTypes from 'prop-types';

import Edit from '../../../Common/Button';
import Delete from '../../../Common/Button';
import View from '../../../Common/Button';


const ActionBarGrid = ({ id, onEdit, onDelete, onView }) => (
	<div>
		<Edit
			className="btn-floating green pulse"
			icon="edit"
			classNameIcon="prefix"
			onClick={(e) => onEdit(id)}
		/>

		<Delete
			className="btn-floating red"
			icon="delete_forever"
			classNameIcon="prefix"
			onClick={(e) => onDelete(id)}
		/>
		
		<View
			className="btn-floating cyan "
			icon="visibility"
			classNameIcon="prefix"
			onClick={(e) => onView(id)}
		/>
	</div>
);

ActionBarGrid.propTypes = {
	id: PropTypes.string,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
	onView: PropTypes.func,
};

export default ActionBarGrid;
