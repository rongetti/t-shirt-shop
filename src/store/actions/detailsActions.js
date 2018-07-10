import { SELECT_SIZE, SELECT_COLOR, SELECT_QTY } from './types';

export const selectSize = (size) => dispatch => {
  dispatch({
    type: SELECT_SIZE,
    payload: size,
  });
};

export const selectColor = (color) => dispatch => {
  dispatch({
    type: SELECT_COLOR,
    payload: color,
  });
};

export const selectQty = (qty) => dispatch => {
  dispatch({
    type: SELECT_QTY,
    payload: qty,
  });
};
