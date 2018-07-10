import { combineReducers } from 'redux';

import productReducer from './productReducer';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';
import currencyReducer from './currencyReducer';
import detailsReducer from './detailsReducer';
import floatBagReducer from './floatBagReducer';
import shoppingBagReducer from './shoppingBagReducer';

export default combineReducers({
  products: productReducer,
  filters: filterReducer,
  sort: sortReducer,
  currency: currencyReducer,
  details: detailsReducer,
  floatBag: floatBagReducer,
  shoppingBag: shoppingBagReducer
});
