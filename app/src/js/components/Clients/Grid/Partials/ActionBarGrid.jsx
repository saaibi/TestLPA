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
				icon="edit"
				classNameIcon="prefix"
				onClick={onEdit}
			/>}>
			<p>L est laborum</p>
		</Modal>

		<Delete
			className="btn-floating red"
			icon="delete_forever"
			classNameIcon="prefix"
			onClick={onDelete}
		/>
		<View
			className="btn-floating cyan "
			icon="visibility"
			classNameIcon="prefix"
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
