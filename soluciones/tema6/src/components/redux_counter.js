import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

function counter(state=0, action){
  switch(action.type){
  case 'INCREMENT':
    return state + 1;
  default:
    return state;
  }
}
const store = createStore(counter);


const App = ({ clicks, dispatch }) => {
  return (
    <button onClick={ () => dispatch({ type: 'INCREMENT' }) }>
      Has hecho click { clicks } veces
    </button>
  )
}

const mapStateToProps = state => {
  return {
    clicks: state
  }
}
import { connect, Provider } from 'react-redux';
const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={ store }>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
