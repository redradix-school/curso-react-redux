import { get } from '../../lib/api';

export const SAVE_CATALOG = 'SAVE_CATALOG';
export function saveProducts(data){
  return {
    type: SAVE_CATALOG,
    payload: data
  }
}

export const LOAD_CATALOG = 'LOAD_CATALOG';
export function fetchProducts(){
  return (dispatch, getState) => {
    //para spinner!
    dispatch({
      type: LOAD_CATALOG
    });

    // NOTA: Requiere el archivo del catálogo en formato JSON, en ./dist
    get('/products.json')
    .then(products => {
      dispatch(saveCatalog(products));
    });
  }
}