import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import DevTools from './components/devTools';
import reducers from './modules/reducers';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';


const appReducer = combineReducers({
  ...reducers,
  routing
});
//devtools manual
//const enhancer = compose(applyMiddleware(thunk), DevTools.instrument());
//devtools extension


export default function configureStore(){
  const enhancer = compose(applyMiddleware(thunk, routerMiddleware(browserHistory)), window.devToolsExtension ? window.devToolsExtension() : f => f);
  return createStore(appReducer, enhancer);
}