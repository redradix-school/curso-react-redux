import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import Ecommerce from './components/ecommerce';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

window.store = store;


render(
  <Provider store={ store }>
      <Ecommerce history={ history } />
  </Provider>
  ,
  document.getElementById('app')
);