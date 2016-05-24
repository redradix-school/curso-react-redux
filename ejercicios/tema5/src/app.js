import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import Ecommerce from './components/ecommerce';

// importar browserHistory de react-router y pasarlo como
// prop a Ecommerce
import { browserHistory } from 'react-router';

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