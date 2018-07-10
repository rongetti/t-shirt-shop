import { TOGGLE_FLOAT } from '../actions/types';
import initialSettings from '../../../initialSettings.json';

const initialState = initialSettings.floatBag;

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FLOAT:
      return {
        ...state,
        isOpen: action.payload
      };
    default:
      return state;
  }
};
