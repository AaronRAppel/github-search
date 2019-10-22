import { SEARCH } from '../actionTypes';

const initialState = {
  results: []
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
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

    default:
      return state;
  }
}