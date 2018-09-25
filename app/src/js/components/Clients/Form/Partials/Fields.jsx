import React from 'react';

import FirtsName from '../../../Common/Input';
import LastsName from '../../../Common/Input';
import Id from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<div className="input-field col s12">
			<FirtsName name="firstName" onChange={props.loadClient}/>
			<label htmlFor="firts_name">Firts Name</label>
		</div>
		<div className="input-field col s12">
			<LastsName name="lastName" className="" onChange={props.loadClient} />
			<label htmlFor="last_name">Last Name</label>
		</div>
		<div className="input-field col s12">
			<Id name="lastName" className=""  onChange={props.loadClient}/>
			<label htmlFor="id">Id</label>
		</div>
	</div>
);

export default Fields;
