//babel-polyfill para ES5 en navegadores antiguos
require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

//Ecommerce
import configureStore from './configureStore';
import Counter from './components/counter';
import Ecommerce from './components/ecommerce';


window.onload = function(){
  const store = configureStore();
  ReactDOM.render(<Counter store={ store } />, document.getElementById('app'));
}
