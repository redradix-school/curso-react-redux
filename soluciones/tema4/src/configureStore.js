import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import catalog from './modules/catalog';
import cart from './modules/cart';
import order from './modules/order';
import route from './modules/route';
import thunkMiddleware from 'redux-thunk';
import logger from './middlewares/logger';

export default function configureStore(){
  const appReducer = combineReducers({
    catalog,
    cart,
    order,
    route
  });

  return createStore(appReducer, applyMiddleware(thunkMiddleware, logger));

  //con devtools
  // return createStore(appReducer, compose(
  //   applyMiddleware(thunkMiddleware),
  //   window.devToolsExtension ? window.devToolsExtension() : f => f)
  // );
}