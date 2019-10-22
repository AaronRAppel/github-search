import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import createRootReducer from './redux/reducers/root';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );

  window.store = store;

  return store;
}
