import store from './index';
import { guardarNombre, guardarCelular, crearContactoCompletado } from "../actions/contactos";

// > babel-node app/src/js/store/demo.js
console.log('=========  Estado Inicial  =========');
console.log(store.getState());
console.log('=====  End of Estado Inicial>  =====');

const cancelarSuscripcion = store.subscribe(() => {
	console.log(`=========  Nuevo Estado  =========`);
	console.log(store.getState());
	console.log('=====  End of Nuevo Estado>  =====');
});

store.dispatch(guardarNombre('Jane'));
store.dispatch(guardarCelular('22-11-00-11'));
store.dispatch(crearContactoCompletado({ name: 'Jane', celular: '22-11-44-22' }));
cancelarSuscripcion();
