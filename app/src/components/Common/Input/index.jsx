import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, type, valor, placeholder, onChange }) => {
	return (
		<input
			className={ className }
			type={ type }
			onChange={ onChange }
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
	onChange : PropTypes.func,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	placeholder: PropTypes.string,
};

export default Input;
