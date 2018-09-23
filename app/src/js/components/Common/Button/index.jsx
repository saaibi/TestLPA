import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, texto, onClick }) => {
	return (
		<button
			className={ `${className}` }
			onClick={ onClick }
		>
			{ texto }
		</button>
	);
};

Button.defaultProps = {
	className: '',
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	value: PropTypes.string,
};

export default Button;
