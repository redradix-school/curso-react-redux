import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Ecommerce from './components/ecommerce';

const store = configureStore();
render(
  <Provider store={ store }>
    <Ecommerce />
  </Provider>
  ,
  document.getElementById('app')
);