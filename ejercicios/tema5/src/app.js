import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Ecommerce from './components/ecommerce';

//TODO: paso 1, importar browserHistory de react-router y pasarlo como
//prop a Ecommerce

const store = configureStore();
render(
  <Provider store={ store }>
    <Ecommerce />
  </Provider>
  ,
  document.getElementById('app')
);