import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import Ecommerce from './components/ecommerce';

const store = configureStore();
//TODO - ejercicio
// sincronizar store con history
render(
  <Provider store={ store }>
    <Ecommerce history={ browserHistory } />
  </Provider>
  ,
  document.getElementById('app')
);