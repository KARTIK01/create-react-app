/* global document */
import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from '@reach/router';
import './index.css';
import NoMatch from './components/PageNotFound';
import CrashReporter from './libs/crashReporter';
import App from './App';
import reducer from './reducers';
// import * as serviceWorker from './serviceWorker';

CrashReporter.initialize();

const middleware = [thunk];
let storeEnhancer = null;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { createLogger } = require('redux-logger');
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { composeWithDevTools } = require('redux-devtools-extension');
  middleware.push(createLogger());
  storeEnhancer = composeWithDevTools(applyMiddleware(...middleware));
} else {
  storeEnhancer = applyMiddleware(...middleware);
}

const store = createStore(
  combineReducers({
    reducer,
  }),
  storeEnhancer
);

render(
  <Provider store={store}>
    <Router>
      <App path="/bots/:botID" />
      <App path="/bots/:botID/u/:userID/m/:messageID" />
      <App path="/bots/:botID/u/:userID/" />
      <NoMatch default />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
