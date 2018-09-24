import { OBTENER_CLIENT, BORRAR_CLIENT } from '../constants/client.constans';

const etateInicial = {
  clients: [],
  isLoading: false,
  error: '',
};


export function client(state = etateInicial, action) {
  const { type, payload } = action;
  switch (type) {
    case OBTENER_CLIENT.REQUEST:
    case OBTENER_CLIENT.SUCCESS:
    case OBTENER_CLIENT.FAILURE:
      return {
        ...state,
        ...payload,
      };
    case BORRAR_CLIENT.REQUEST:
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case BORRAR_CLIENT.SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case BORRAR_CLIENT.FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}