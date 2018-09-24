import { defineAction } from '../utils/defineAction';
import {REQUEST, SUCCESS,FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS,FAILURE];

// ESTADO LOCAL
export const ESTADO_CLIENT = defineAction('ESTADO_CLIENTS',
	['LIMPIAR_FORMULARIO', 'GUARDAR_NOMBRE', 'GUARDAR_CELULAR']
);
// PETICIONES AL SERVIDOR
export const OBTENER_CLIENT = defineAction('OBTENER_CLIENT', accionsHttp);
export const CREAR_CLIENT = defineAction('CREAR_CLIENT', accionsHttp);
export const ACTUALIZAR_CLIENT = defineAction('ACTUALIZAR_CLIENT', accionsHttp);
export const BORRAR_CLIENT = defineAction('BORRAR_CLIENT', accionsHttp);
