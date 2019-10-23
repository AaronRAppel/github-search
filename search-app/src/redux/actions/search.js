import { IS_FETCHING, SEARCH } from '../actionTypes';
import { addError, removeErrors } from './errors';

const ERROR_TIMEOUT = 5000;
const BASE_URL = 'http://localhost:8000';

const isFetching = isFetching => ({
  type: IS_FETCHING,
  payload: isFetching
});

const search = data => ({
  type: SEARCH,
  payload: data
});

export const searchAsync = (text, sortBy) => async (dispatch) => {
  dispatch(isFetching(true));
  const response = await fetch(`${BASE_URL}/search?text=${text}&sortBy=${sortBy}`);
  const json = await response.json();
  dispatch(search(json));
  dispatch(isFetching(false));

  if (json.errors) {
    dispatch(addError(json.message));
    setTimeout(() => dispatch(removeErrors()), ERROR_TIMEOUT);
  }
};
