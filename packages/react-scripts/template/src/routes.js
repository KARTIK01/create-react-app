import React from 'react';
import { Router } from '@reach/router';
import App from './App';
import NoMatch from './components/PageNotFound';

const routes = [
  {
    path: 'bots/:botId/tickets/',
    key: 1,
  },
  {
    path: 'bots/:botId/tickets/:ticketId',
    key: 2,
  },
];

const applicationRoutes = (
  <Router>
    {routes.map(route => (
      <App {...route} />
    ))}
    <NoMatch default />
  </Router>
);

export default applicationRoutes;
