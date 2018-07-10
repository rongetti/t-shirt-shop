import { REQUEST_DETAILS, SELECT_SIZE, SELECT_COLOR, SELECT_QTY } from '../actions/types';
import initialSettings from '../../../initialSettings.json';

const initialState = initialSettings.details;

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_DETAILS:
      return {
        ...state,
        product: action.payload
      };
    case SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload
      };
    case SELECT_COLOR:
      return {
        ...state,
        selectedColor: action.payload
      };
    case SELECT_QTY:
      return {
        ...state,
        selectedQty: action.payload
      };
    default:
      return state;
  }
}
