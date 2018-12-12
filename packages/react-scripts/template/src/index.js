/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import '@kartikag01/antd/dist/@kartikag01/antd.css';
import CrashReporter from './libs/crashReporter';
import applicationRoutes from './routes';

CrashReporter.initialize();

render(
  <Provider store={store}>{applicationRoutes}</Provider>,
  document.getElementById('root')
);
