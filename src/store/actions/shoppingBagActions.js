import { UPDATE_BAG, UPDATE_ITEM } from './types';
import persistentCart from '../../persistentCart';

export const updateBag = items => dispatch => {

  persistentCart().persist(items);

  dispatch({
    type: UPDATE_BAG,
    payload: items,
  });

};

export const updateItem = item => dispatch => {

  const items = JSON.parse(localStorage.getItem('cartProducts'));
  items[item.atIndex].qty = item.qty;
  persistentCart().persist(items);

  dispatch({
    type: UPDATE_ITEM,
    atIndex: item.atIndex,
    payload: item.qty
  });

};
