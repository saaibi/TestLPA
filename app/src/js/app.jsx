import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../style/index.scss';

import store from './store';
import AppLPA from './components';

const App = () => (
	<Provider store={ store }>
		<AppLPA />
	</Provider>
);

render(<App />, document.getElementById('root'));
