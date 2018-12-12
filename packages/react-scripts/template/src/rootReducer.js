import { combineReducers } from 'redux';
import filterState from './reducers/my_new_reducer';

const rootReducer = combineReducers({
  users: ticketsReducer,
});

export default rootReducer;
