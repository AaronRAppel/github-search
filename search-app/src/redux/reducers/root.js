import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import search from './search';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  search
});

export default createRootReducer;
