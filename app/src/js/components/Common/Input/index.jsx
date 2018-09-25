import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, type, valor,name, placeholder, onChange }) => {
	return (
		<input
			className={ className }
			type={ type }
			onChange={ onChange }
			placeholder={ placeholder }
			value={ valor }
			name={name}
		/>
	);
};

Input.defaultProps = {
	className: '',
	type: 'text'
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	onChange : PropTypes.func,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	placeholder: PropTypes.string,
};

export default Input;
