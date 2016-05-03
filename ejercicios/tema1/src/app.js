import React from 'react';
import ReactDOM from 'react-dom';
import HolaMundo from './holamundo';

window.onload = function(){

  ReactDOM.render(<HolaMundo />, document.getElementById('app'));
}