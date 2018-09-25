import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-materialize';

import Edit from '../../../Common/Button';
import Delete from '../../../Common/Button';
import View from '../../../Common/Button';


const ActionBarGrid = ({ id, onEdit, onDelete, onView }) => (
	<div>
		<Modal
			header='Edit'
			trigger={<Edit
				className="btn-floating green pulse"
				texto="+"
				onClick={onEdit}
			/>}>
			<p>L est laborum</p>
		</Modal>

		<Delete
			className="btn-floating red"
			texto="-"
			onClick={onDelete}
		/>
		<View
			className="btn-floating cyan "
			texto="º"
			onClick={onView}
		/>
	</div>
);

ActionBarGrid.propTypes = {
	id: PropTypes.number,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default ActionBarGrid;
