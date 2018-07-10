import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store'
import AppRoutes from './AppRoutes'

const store = configureStore();

render(
  <Provider store={store} >
     <AppRoutes />
  </Provider>,
  document.querySelector('#app')
);
