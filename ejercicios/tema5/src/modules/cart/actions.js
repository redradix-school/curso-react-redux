import * as actionTypes from './actionTypes';

export function addToCart(id){
  return {
    type: actionTypes.ADD_TO_CART,
    payload: id
  }
}

export function removeFromCart(id){
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  }
}

export function changeQuantity(id, quantity){
  return {
    type: actionTypes.CHANGE_QUANTITY,
    payload: {
      id,
      quantity
    }
  }
}

export function emptyCart(){
  return {
    type: actionTypes.EMPTY_CART
  }
}