import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import '../style/index.scss';

import store from './store';
import { Routes } from './routes';

const AppLPA = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
);

render(<AppLPA />, document.getElementById('app'));
