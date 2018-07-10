import { UPDATE_FILTER } from '../actions/types';
import initialSettings from '../../../initialSettings.json';

const initialState = initialSettings.filters;

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
