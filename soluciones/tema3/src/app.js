import React from 'react';
import ReactDOM from 'react-dom';
//ejercicios
import Cronometro from './components/cronometro';
import Buscador from './components/buscador';
import MixinComponent from './components/mixin_component';
import RandomList from './components/random_list';
import Ecommerce from './components/ecommerce';

window.onload = function(){
  ReactDOM.render(<Buscador />, document.getElementById('app'));
}
