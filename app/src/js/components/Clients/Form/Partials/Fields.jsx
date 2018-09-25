import React from 'react';

import FirtsName from '../../../Common/Input';
import LastsName from '../../../Common/Input';
import Id from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<FirtsName
			id="firts_name"
			name="firstName"
			text="Firts Name"
			icon="account_circle"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>
	
		<LastsName
			id="last_name"
			name="lastName"
			text="Last Name"
			icon="perm_identity"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>
		<Id
			id="client_id"
			name="client_id"
			text="Id"
			icon="fingerprint"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>
		
	</div>
);

export default Fields;
