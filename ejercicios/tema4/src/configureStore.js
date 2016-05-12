import { createStore, combineReducers, applyMiddleware } from 'redux';

//... importar reducers de modulos

//reducer de ejemplo, contador
function counter(state=0, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

export default function configureStore(){
  const store = createStore(counter);
  return store;
}