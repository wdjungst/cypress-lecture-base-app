import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import entries from './entries';
import filter from './filter';

const rootReducer = combineReducers({
  user,
  flash,
  entries,
  filter,
});

export default rootReducer;

