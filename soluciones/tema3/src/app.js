import React from 'react';
import ReactDOM from 'react-dom';
//ejercicios
import Cronometro from './components/cronometro';
import CounterList from './components/CounterList';
import Buscador from './components/buscador';
import Ecommerce from './components/ecommerce';

window.onload = function(){
  ReactDOM.render(<CounterList />, document.getElementById('app'));
}
