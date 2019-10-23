import { ADD_ERROR, REMOVE_ERRORS } from '../actionTypes';

export const addError = error => ({
  type: ADD_ERROR,
  payload: error
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});
