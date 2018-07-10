import { UPDATE_CURRENCY } from './types';

export const updateCurency = currency => dispatch => {

  dispatch({
    type: UPDATE_CURRENCY,
    payload: currency,
  });

};
