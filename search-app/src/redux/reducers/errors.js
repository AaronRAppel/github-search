import { ADD_ERROR, REMOVE_ERRORS } from '../actionTypes';

const initialState = [];

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, action.payload];

    case REMOVE_ERRORS:
      return [];

    default:
      return state;
  }
}