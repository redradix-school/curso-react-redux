import { LOAD_CATALOG_ATTEMPTED, LOAD_CATALOG_SUCCEEDED, LOAD_CATALOG_FAILED } from './actions';
export * from './actions';

const initialState = {
  data: [],
  isFetching: false,
  error: {}
}

export default function catalog(state=initialState, action){
  switch(action.type){
  case LOAD_CATALOG_ATTEMPTED:
    return {
      ...state,
      isFetching: true
    }
  case LOAD_CATALOG_SUCCEEDED:
    return {
      data: [ ...action.payload ],
      isFetching: false,
      error: {}
    }
  case LOAD_CATALOG_FAILED:
    return {
      data: [],
      isFetching: false,
      error: action.error
    };
  default:
    return state;
  }
}