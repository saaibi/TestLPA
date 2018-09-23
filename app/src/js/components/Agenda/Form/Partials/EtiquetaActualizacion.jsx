import React from 'react';
import PropTypes from 'prop-types';

const EtiquetaActualizacion = ({ visible }) => visible && (
	<div className="agenda--form_etiqueta_actualizacion">
		<span className="etiqueta">Actualizar</span>
	</div>
);

EtiquetaActualizacion.propTypes = {
	visible: PropTypes.bool,
};

export default EtiquetaActualizacion;
