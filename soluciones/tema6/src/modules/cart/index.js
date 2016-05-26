import * as actionTypes from './actionTypes';
export * from './actions';
export * as selectors from './selectors';

function addToCart(items, id){
  const existingItem = items[id];
  if(existingItem){
    return {
      ...items,
      ...{ [id]: items[id] + 1}
    }
  }

  return {
    ...items,
    ...{ [id]: 1 }
  }
}

function removeFromCart(items, id){
  //con reduce - creamos un nuevo objeto con todas las claves menos la q eliminamos
  return Object.keys(items).reduce((acc, productId) => {
    if(productId !== id.toString()){
      acc[productId] = items[productId];
    }
    return acc;
  },{});
}

function changeQuantity(items, action){
  const { id, quantity } = action.payload;
  if(quantity === 0){
    return removeFromCart(items, id);
  }

  return {
    ...items,
    ...{ [id]: quantity }
  }
}

export default function cart(state={}, action){
  switch(action.type){
  case actionTypes.ADD_TO_CART:
    return addToCart(state, action.payload);
  case actionTypes.REMOVE_FROM_CART:
    return removeFromCart(state, action.payload);
  case actionTypes.CHANGE_QUANTITY:
    return changeQuantity(state, action);
  case actionTypes.EMPTY_CART:
    return {};
  default:
    return state;
  }
}