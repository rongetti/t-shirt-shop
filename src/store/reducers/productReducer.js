import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions/types';

const initialState = {
  items: [],
  isFetching: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}
