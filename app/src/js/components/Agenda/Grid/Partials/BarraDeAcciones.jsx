import React from 'react';
import PropTypes from 'prop-types';

import Editar from '../../../Common/Button';
import Borrar from '../../../Common/Button';

const BarraDeAcciones = ({ id, onEdit, onDelete }) => (
	<div className="agenda--form_barra_acciones">
		<Editar
			className="borde-primario"
			texto="Editar"
			onClick={ onEdit }
		/>
		<Borrar
			className="borde-error"
			texto="Borrar"
			onClick={ onDelete }
		/>
	</div>
);

BarraDeAcciones.propTypes = {
	id: PropTypes.number,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default BarraDeAcciones;
