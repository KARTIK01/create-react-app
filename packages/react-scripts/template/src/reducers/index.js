import { combineReducers } from 'redux';

import UserSays from './my_new_reducer';

const reducers = {
  UserSays,
};
const combined = combineReducers(reducers);
module.exports = combined;
