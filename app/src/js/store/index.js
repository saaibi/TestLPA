import { createStore, applyMiddleware, compose } from 'redux';
import { contactosLimpiarFormMiddleware } from '../middlewares/contactos';
import thunk from 'redux-thunk';

import reducers from '../reducers';
// Crea una función que componente Middlewares & Redux Dev Tools con el createStore
const DEVELOPMENT = 'development';

const ambienteDev = process.env.NODE_ENV === DEVELOPMENT;
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = ambienteDev && reduxDevTools ? reduxDevTools : compose;

const createStoreWithMiddleware = composeEnhancers(
	applyMiddleware(thunk, contactosLimpiarFormMiddleware),
)(createStore);
// Crea el store con los middlewares
export default createStoreWithMiddleware(reducers);
