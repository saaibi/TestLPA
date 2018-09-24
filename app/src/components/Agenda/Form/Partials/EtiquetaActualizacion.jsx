import React from 'react';
import PropTypes from 'prop-types';

const EtiquetaActualizacion = ({ visible }) => visible && (
	<div className=" ">
		<span className="etiqueta">Actualizar</span>
	</div>
);

EtiquetaActualizacion.propTypes = {
	visible: PropTypes.bool,
};

export default EtiquetaActualizacion;
