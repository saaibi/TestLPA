import React from 'react';

import FirtsName from '../../../Common/Input';
import LastsName from '../../../Common/Input';
import Id from '../../../Common/Input';

const Fields = () => (
	<div>
		<div className="input-field col s12">
			<FirtsName />
			<label htmlFor="firts_name">Firts Name</label>
		</div>
		<div className="input-field col s12">
			<LastsName className="" />
			<label htmlFor="last_name">Last Name</label>
		</div>
		<div className="input-field col s12">
			<Id className="" />
			<label htmlFor="id">Id</label>
		</div>
	</div>
);

export default Fields;
