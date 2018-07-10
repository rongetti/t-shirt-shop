import { UPDATE_CURRENCY } from '../actions/types';
import initialSettings from '../../../initialSettings.json';

const initialState = initialSettings.currency;

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
