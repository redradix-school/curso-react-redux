import reducer from '../../modules/cart';
import * as actionTypes from '../../modules/cart/actionTypes';
import assert from 'assert';

describe('Cart module', () => {
  // estado inicial
  const initialState = {};
  // acciones para probar el reducer
  const addToCart = { type: actionTypes.ADD_TO_CART, payload: 1 },
        removeFromCart = { type: actionTypes.REMOVE_FROM_CART, payload: 1},
        changeQuantity = { type: actionTypes.CHANGE_QUANTITY, payload: {
          id: 1,
          quantity: 10
        }},
        emptyCart = { type: actionTypes.EMPTY_CART },
        fakeAction = { type: '@@INIT' };

  describe('Reducer', () => {
    it('Returns an empty object as initial state', () => {
      // TODO - llamar al reducer con estado indefinido y acción falsa
      // asertar que el resultado coincide con el estado inicial
    });

    it('Handles ADD_TO_CART action', () => {
      // TODO - llamar al reducer con estado inicial y la acción addToCart
      // asertar que el estado resultante contiene [id]: 1
    });

    it('Handles REMOVE_FROM_CART action', () => {
      // TODO - llamar al reducer con un estado que incluya el product 1 (cantidad 1)
      // asertar que el estado resultante es el inicial (no quedan productos)
    });

    it('Handles CHANGE_QUANTITY action', () => {
      // TODO - llamar al reducer con estado con productos, y acción changeQuantity
      // asertar que el estado resultante contiene la cantidad correcta del producto 1
    });

    it('Removes items with CHANGE_QUANTITY = 0', () => {
      const action = { type: actionTypes.CHANGE_QUANTITY, payload: {
        id: 1,
        quantity: 0
      }};
      // TODO - llamar al reducer con estado con products y acción "action"
      // asertar que cambiar la cantidad a 0 vacía el carrito
    });

    it('Handles EMPTY_CART action', () => {
      // TODO - ya deberías saberlo :)
    });

  })

})