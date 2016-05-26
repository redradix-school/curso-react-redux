import reducer, {
  changeField, saveOrder, SAVE_ORDER_ERRORS, CLEAR_ORDER_ERRORS, SAVE_ORDER_DETAILS
} from '../../modules/order';
import { EMPTY_CART } from '../../modules/cart/actionTypes';
import { push } from 'react-router-redux';

import assert from 'assert';
import { spy } from 'sinon';

describe('Order Module', () => {
  describe('Reducer', () => {

    it('Should return proper initial state', () => {
      const state = reducer(undefined, { type: 'foo' });
      assert.deepEqual(state.errors, {});
      assert.deepEqual(state.details, {
        firstName: '',
        lastName: '',
        email: '',
        address: ''
      });
    });

    it('Should save partial details when handling SAVE_ORDER_DETAILS', () => {
      const action = {
        type: SAVE_ORDER_DETAILS,
        payload: {
          firstName: 'Test'
        }
      }

      const state = reducer(undefined, action);
      assert.equal(state.details.firstName, 'Test');

    });

    it('Should save complete details when handling SAVE_ORDER_DETAILS', () => {
      const details = {
        firstName: 'John',
        lastName: 'Goodman',
        email: 'john@john.com',
        address: 'home'
      }
      const action = {
        type: SAVE_ORDER_DETAILS,
        payload: details
      }

      const state = reducer(undefined, action);
      assert.deepEqual(state.details, details);
    });

    it('Should save errors when handling SAVE_ORDER_ERRORS', () => {
      const errors = {
        firstName: 'Fail'
      }
      const action = {
        type: SAVE_ORDER_ERRORS,
        errors
      }

      const state = reducer(undefined, action);
      assert.deepEqual(state.errors, errors);
    });

    it('Should clear errors when handling CLEAR_ORDER_ERRORS', () => {
      const prevState = {
        errors: {
          firstName: 'Fail'
        }
      }
      const action = {
        type: CLEAR_ORDER_ERRORS
      }

      const state = reducer(prevState, action);
      assert.deepEqual(state.errors, {});
    });

  });

  describe('Actions', () => {
    const dispatch = spy(),
          getState = spy();

    beforeEach(() => {
      dispatch.reset();
      getState.reset();
    });

    it('changeField should generate an action with the change data as payload', () => {
      const patch = {
        foo: 'bar'
      };
      const action = changeField(patch);
      assert.equal(action.type, SAVE_ORDER_DETAILS);
      assert.deepEqual(action.payload, patch);
    });

    it('saveOrder should generate save details and generate errors if data is invalid', () => {
      const details = {
        firstName: ''
      }

      const thunk = saveOrder(details);

      thunk(dispatch, getState);

      assert.equal(dispatch.callCount, 2);
      assert.equal(dispatch.args[0][0].type, SAVE_ORDER_DETAILS);
      assert.equal(dispatch.args[1][0].type, SAVE_ORDER_ERRORS);
      //hay 4 mensajes de error
      assert.equal(Object.keys(dispatch.args[1][0].errors).length, 4);

    });

    it('saveOrder should save details, clear order errors, empty cart and push thankyou route if data is valid', () => {
      const details = {
        firstName: 'f',
        lastName: 'l',
        email: 'e',
        address: 'a'
      }

      const pushAction = push('thankyou');
      const thunk = saveOrder(details);

      thunk(dispatch, getState);

      assert.equal(dispatch.callCount, 4);
      assert.equal(dispatch.getCall(0).args[0].type, SAVE_ORDER_DETAILS);
      assert.equal(dispatch.getCall(1).args[0].type, CLEAR_ORDER_ERRORS);
      assert.equal(dispatch.getCall(2).args[0].type, EMPTY_CART);
      assert.deepEqual(dispatch.getCall(3).args[0], pushAction);

    })
  });
})