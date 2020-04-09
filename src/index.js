import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import STORE from './Redux';
import { ActionCableProvider } from 'react-actioncable-provider';
import * as serviceWorker from './serviceWorker';
import API from './API_CONSTANTS';

ReactDOM.render(
  <ActionCableProvider url={API.WS_BASE}>
    <Provider store={STORE}>
      <App />
    </Provider>
  </ActionCableProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
