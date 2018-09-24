import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, type, valor, placeholder }) => {
	return (
		<input
			className={ className }
			type={type}
			placeholder={ placeholder }
			value={ valor }
		/>
	);
};

Input.defaultProps = {
	className: '',
	type: 'text'
};

Input.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	placeholder: PropTypes.string,
};

export default Input;
