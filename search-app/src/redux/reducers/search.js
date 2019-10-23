import { IS_FETCHING, SEARCH } from '../actionTypes';

const initialState = {
  results: [],
  isFetching: false
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      if (!action.payload.items) return { ...state, results: [] };

      return {
        ...state,
        results: action.payload.items.map(({
          id,
          name,
          description,
          score,
          stargazers_count,
          language,
          owner: { login }
        }) => ({
          id,
          name,
          description,
          score,
          stars: stargazers_count,
          language,
          ownerName: login
        }))
      };
    }

    case IS_FETCHING:
      return { ...state, isFetching: action.payload };

    default:
      return state;
  }
}