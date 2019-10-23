import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import Search from './components/Search';
import ErrorNotification from './components/ErrorNotification';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorNotification />
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
