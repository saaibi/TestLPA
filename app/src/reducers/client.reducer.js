import { CLIENT_GET, CLIENT_CREATE, CLIENT_UPDATE, CLIENT_DELETE } from '../constants/client.constans';

const etateInicial = {
  clients: [],
  isLoading: false,
  error: '',
};


export function client(state = etateInicial, action) {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_GET.REQUEST:
    case CLIENT_GET.SUCCESS:
    case CLIENT_GET.FAILURE:
      return {
        ...state,
        ...payload,
      };
    case CLIENT_DELETE.REQUEST:
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case CLIENT_DELETE.SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case CLIENT_DELETE.FAILURE:
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