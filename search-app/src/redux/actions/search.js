import { SEARCH } from '../actionTypes';

const BASE_URL = 'http://localhost:8000';

const search = data => ({
  type: SEARCH,
  payload: data
});

export const searchAsync = (text, sortBy) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/search?text=${text}&sortBy=${sortBy}`);
  const json = await response.json();
  dispatch(search(json));
};
