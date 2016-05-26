import reducer from '../../modules/cart';
import * as actionTypes from '../../modules/cart/actionTypes';
import assert from 'assert';

describe('Cart module', () => {
  const initialState = {};
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
      const state = reducer(undefined, fakeAction);
      assert.deepEqual(state, initialState);
    });

    it('Handles ADD_TO_CART action', () => {
      const state = reducer(initialState, addToCart);
      assert.equal(1, state["1"]);
    });

    it('Handles REMOVE_FROM_CART action', () => {
      const state = reducer({ "1": 1 }, removeFromCart);
      assert.deepEqual(state, initialState);
    });

    it('Handles CHANGE_QUANTITY action', () => {
      const state = reducer({ "1" : 1}, changeQuantity);
      assert.equal(10, state["1"]);
    });

    it('Removes items with CHANGE_QUANTITY = 0', () => {
      const action = { type: actionTypes.CHANGE_QUANTITY, payload: {
        id: 1,
        quantity: 0
      }};
      const state = reducer({ "1": 10 }, action);
      assert.deepEqual(state, initialState);
    });

    it('Handles EMPTY_CART action', () => {
      const state = reducer({ "1": 25 }, emptyCart);
      assert.deepEqual(state, initialState);
    });

  })

})