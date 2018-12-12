/* global window */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];
let storeEnhancer = null;

const isDevelop = process.env.NODE_ENV !== 'production';
if (isDevelop) {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { createLogger } = require('redux-logger');
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { composeWithDevTools } = require('redux-devtools-extension');
  middleware.push(createLogger());
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const immutableCheck = require('redux-immutable-state-invariant').default();
  middleware.push(immutableCheck);
  storeEnhancer = composeWithDevTools(applyMiddleware(...middleware));
} else {
  storeEnhancer = applyMiddleware(...middleware);
}

const store = createStore(rootReducer, storeEnhancer);

if (isDevelop) {
  window.store = store;
}

export default store;
