import { get } from '../../lib/api';

export const LOAD_CATALOG_ATTEMPTED = 'LOAD_CATALOG_ATTEMPTED';
export const LOAD_CATALOG_SUCCEEDED = 'LOAD_CATALOG_SUCCEEDED';
export const LOAD_CATALOG_FAILED = 'LOAD_CATALOG_FAILED';
export function fetchProducts(){
  return (dispatch, getState) => {
    //para spinner!
    dispatch({
      type: LOAD_CATALOG_ATTEMPTED
    });

    // NOTA: Requiere el archivo del catálogo en formato JSON, en ./dist
    get('/api/products.json')
    .then(products => {
      dispatch({
        type: LOAD_CATALOG_SUCCEEDED,
        payload: products
      });
    })
    .catch(err => dispatch({
      type: LOAD_CATALOG_FAILED,
      error: err
    }));
  }
}