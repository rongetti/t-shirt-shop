import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import AppRoutes from './AppRoutes'

module.exports = function render(req, res, initialState) {
  // Model the initial state
  const context = {};
  const store = configureStore(initialState);
  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url} context={context}>
          <AppRoutes />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  return {content, preloadedState};
};
