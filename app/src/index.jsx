import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

const AppLPA = () => (
	<Provider store={ store }>
		<App />
	</Provider>
);

render(<AppLPA />, document.getElementById('app'));
