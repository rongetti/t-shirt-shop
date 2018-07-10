import React from 'react';
import {hydrate} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import configureStore from './store';
// import persistentCart from './persistentCart';
import AppRoutes from './AppRoutes'

const state = window.__STATE__;
delete window.__STATE__;

// const cartItems = persistentCart().get();
const cartItems = JSON.parse(localStorage.getItem('cartProducts') || '[]');
state.shoppingBag.items = cartItems;

const store = configureStore(state);

hydrate(
    <Provider store={store} >
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>,
  document.querySelector('#app')
);
