import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import search from './search';
import errors from './errors';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  search,
  errors
});

export default createRootReducer;
