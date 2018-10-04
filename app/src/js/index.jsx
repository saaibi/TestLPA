import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import '../style/index.scss';

import { store } from './store/store';
import { RouterComp } from './RouterComp';

const AppLPA = () => (
	<Provider store={ store }>
		<RouterComp />
	</Provider>
);

render(<AppLPA />, document.getElementById('app'));
