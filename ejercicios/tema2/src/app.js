import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello_world';
import HelloWorldProps from './components/hello_world_props';
import Counter from './components/counter';

window.onload = function(){

  ReactDOM.render(<Counter />, document.getElementById('app'));
}