import { UPDATE_SORT } from '../actions/types';
import initialSettings from '../../../initialSettings.json';

const initialState = initialSettings.sort;

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
