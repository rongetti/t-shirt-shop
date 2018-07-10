import { TOGGLE_FLOAT } from './types';

export const toggleFloat = isOpen => dispatch => {

  dispatch({
    type: TOGGLE_FLOAT,
    payload: isOpen,
  });

};
