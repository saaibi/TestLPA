import { CLIENT_GET, CLIENT_CREATE, CLIENT_UPDATE, CLIENT_DELETE } from '../constants/client.constans';

const initialState = {
  clients: [],
  isLoading: false,
  error: '',
};


export function client(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_GET.REQUEST:
    case CLIENT_GET.SUCCESS:
    case CLIENT_GET.FAILURE:
    case CLIENT_CREATE.REQUEST:
    case CLIENT_CREATE.FAILURE:
      return {
        ...state,
        ...payload,
      };

    case CLIENT_CREATE.SUCCESS: {
      const { client } = payload;
      return {
        ...state,
        clients: [...state.clients, client]
      };
    }

    case CLIENT_UPDATE.SUCCESS: {
      const { contacto, index, ...propEstados } = payload;
      return {
        ...state,
        ...propEstados,
        contactos: [
          ...state.contactos.slice(0, index),
          contacto,
          ...state.contactos.slice(index + 1),
        ],
      };
    }

    case CLIENT_DELETE.SUCCESS: {
      const { index, ...propEstados } = payload;
      return {
        ...state,
        ...propEstados,
        contactos: [
          ...state.contactos.slice(0, index),
          ...state.contactos.slice(index + 1),
        ],
      };
    }

    default:
      return state
  }
}