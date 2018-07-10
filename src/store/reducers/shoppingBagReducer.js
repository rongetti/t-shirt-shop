import update from 'immutability-helper';

import { UPDATE_BAG, UPDATE_ITEM } from '../actions/types';
import persistentCart from '../../persistentCart';

const initialState = {
    items: persistentCart().get()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BAG:
      return {
        ...state,
        items: [...action.payload]
      };
    case UPDATE_ITEM:
      return update(state, {
        items: {
          [action.atIndex]: {
            qty: {$set: action.payload}
          }
        }
      });
    default:
      return state;
  }
};
