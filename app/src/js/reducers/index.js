import { combineReducers } from 'redux';

import { client } from './client.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  client,
  alert
});

export default rootReducer;