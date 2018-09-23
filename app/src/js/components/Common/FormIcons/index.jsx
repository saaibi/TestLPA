import React from 'react';
import PropTypes from 'prop-types';

const FormIcons = ({ visible , className, icon  }) => visible && (
     <i className={ `${className}` }>{ icon }</i>
);

FormIcons.defaultProps = {
	className: '',
};

FormIcons.propTypes = {
    visible: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
};

export default FormIcons;
