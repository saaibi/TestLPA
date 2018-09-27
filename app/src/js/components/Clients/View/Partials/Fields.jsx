import React from 'react';

import creditValue from '../../../Common/Input';

const Fields = (props) => (
	<creditValue
		id="credit_value"
		name="creditValue"
		// value={props.client.firstName ? props.client.firstName: "" }
		text="Firts Name"
		autoFocus={true}
		icon="account_circle"
		classNameIcon="prefix"
		onChange={(e) => props.loadClient(e)}
	/>
);

export default Fields;
