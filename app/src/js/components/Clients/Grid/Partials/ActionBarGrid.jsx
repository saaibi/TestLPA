import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-materialize';

import Edit from '../../../Common/Button';
import Delete from '../../../Common/Button';
import View from '../../../Common/Button';

import Modal from '../../../Common/Modal';




const ActionBarGrid = ({ id, onEdit, onDelete, onView }) => (
	<div>
		<Button onClick={() => {
			$('#foo').modal('open')
		}}>Show Modal</Button>
	
		<Edit
			className="btn-floating green pulse"
			icon="edit"
			classNameIcon="prefix"
			onClick={onEdit}
		/>

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

		<Modal
			id="foo"
			content="#####"
		/>
	</div>
);

ActionBarGrid.propTypes = {
	id: PropTypes.number,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default ActionBarGrid;
