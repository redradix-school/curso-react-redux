import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import catalog from './modules/catalog';
import cart from './modules/cart';
import order from './modules/order';
import route from './modules/route';
import thunkMiddleware from 'redux-thunk';
import logger from './middlewares/logger';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';

export default function configureStore(){
  const appReducer = combineReducers({
    catalog,
    cart,
    order,
    routing
  });

  //con Redux DevTools instaladas en Chrome

  //TODO ejercicio - integrar middleware
  return createStore(appReducer, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
  );
}