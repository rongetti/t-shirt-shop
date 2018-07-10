import fetch from 'node-fetch';
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from './types';

const productsAPI = 'http://t-shirt.gizarovski.com/assets/products.json';

const compare = {
  'lowestprice': (a, b) => {
    if (a['price'] < b['price'])
      return -1;
    if (a['price'] > b['price'])
      return 1;
    return 0;
  },
  'highestprice': (a, b) => {
    if (a['price'] > b['price'])
      return -1;
    if (a['price'] < b['price'])
      return 1;
    return 0;
  }
};

export const fetchProducts = (filters, sortBy) => dispatch => {

  dispatch({
    type: REQUEST_PRODUCTS
  });

  fetch(productsAPI, {mode: 'cors'})
      .then(response =>
        response.json()
      )
      .then(data => {
        let products = data;

        products = products.filter(p => p['price'] >= filters['priceRange'].min && p['price'] <= filters['priceRange'].max);

        if (!!filters && filters['sizes'].length > 0) {
          products = products.filter(p => filters['sizes'].find(f => p['available_sizes'].find(size => size === f)))
        }

        if (!!filters && filters['colors'].length > 0) {
          products = products.filter(p => filters['colors'].find(f => p['available_colors'].find(size => size === f)))
        }

        if (!!sortBy) {
          products = products.sort(compare[sortBy]);
        }

        return dispatch({
          type: RECEIVE_PRODUCTS,
          payload: products
        });
      })
      .catch(err => {
        console.log(err);
      });

};
