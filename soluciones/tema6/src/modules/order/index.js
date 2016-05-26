import { combineReducers } from 'redux';
import { SAVE_ORDER_ERRORS, SAVE_ORDER_DETAILS } from './actions';
export * from './actions';

function errors(state={}, action){
  switch(action.type){
  case SAVE_ORDER_ERRORS:
    return action.errors;
  default:
    return state;
  }
}

function details(state={}, action){
  switch(action.type){
  case SAVE_ORDER_DETAILS:
    return {
      ...state,
      ...action.payload
    }
  default:
    return state;
  }
}

export default combineReducers({
  errors,
  details
});