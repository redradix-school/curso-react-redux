import { SAVE_CATALOG } from './actions';
export * from './actions';


export default function catalog(state=[], action){
  switch(action.type){
  case SAVE_CATALOG:
    return [ ...action.payload ]
  default:
    return state;
  }
}