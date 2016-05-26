import reducer, { fetchProducts, LOAD_CATALOG_ATTEMPTED, LOAD_CATALOG_SUCCEEDED, LOAD_CATALOG_FAILED } from '../../modules/catalog';
import assert from 'assert';
import { spy } from 'sinon';
import 'isomorphic-fetch';
//fetch mock
import fetchMock from 'fetch-mock';

describe('Catalog module', () => {
  after(() =>{
    fetchMock.restore();
  });

  const mockItems = [
    { id: 1, name: 'test product 1' },
    { id: 2, name: 'test product 2' },
    { id: 3, name: 'test product 3' },
  ]

  describe('Actions', () => {
    let dispatch = spy(),
        getState = spy();

    beforeEach(() => {
      dispatch.reset();
      fetchMock.reset();
      fetchMock.restore();
    });

    it('Should fetch /api/products.json and dispatch LOAD_CATALOG_SUCCEEDED on success', (done) => {
      const thunk = fetchProducts();
      //prepare response
      fetchMock.mock('/api/products.json', mockItems);
      //call thunk
      thunk(dispatch, getState).then(() => {
        //asert fetch was called
        assert.equal(true, fetchMock.called('/api/products.json'));
        assert.equal(dispatch.callCount, 2);
        assert.equal(dispatch.getCall(0).args[0].type, LOAD_CATALOG_ATTEMPTED);
        assert.equal(dispatch.getCall(1).args[0].type, LOAD_CATALOG_SUCCEEDED);
        done();
      });
    });

    it('Should fetch /api/products.json and dispatch LOAD_CATALOG_FAILED on error', (done) => {
      const thunk = fetchProducts();
      //prepare response
      fetchMock.mock('/api/products.json', { status: 400, throws: 'BOOM' });
      //call thunk
      thunk(dispatch, getState).then(() => {
        //asert fetch was called
        assert.equal(true, fetchMock.called('/api/products.json'));
        assert.equal(dispatch.callCount, 2);
        assert.equal(dispatch.getCall(0).args[0].type, LOAD_CATALOG_ATTEMPTED);
        assert.equal(dispatch.getCall(1).args[0].type, LOAD_CATALOG_FAILED);
        done();
      });
    });
  });

  describe('Reducer', () => {
    const fakeAction = { type: '@@INIT' },
          loadAttempted = { type: LOAD_CATALOG_ATTEMPTED },
          loadSucceeded = { type: LOAD_CATALOG_SUCCEEDED, payload: [1, 2, 3] },
          loadFailed = { type: LOAD_CATALOG_FAILED, error: { status: 404, text: 'Not found' } };

    const initialState = {
      data: [],
      isFetching: false,
      error: {}
    };

    it('Should return valid initial state', () => {
      var state = reducer(undefined, fakeAction);
      assert.deepEqual(state, initialState);
    });

    it('Should activate isFetching flag with load attempt', () => {
      var state = reducer(undefined, loadAttempted);
      assert.equal(state.isFetching, true);
    })

    it('Should de-activate isFetching flag with load success', () => {
      var state = { ...initialState, isFetching: true };
      state = reducer(state, loadSucceeded);
      assert.equal(state.isFetching, false);
    })

    it('Should de-active isFetching flag with load failed', () => {
      var state = { ...initialState, isFetching: true };
      state = reducer(state, loadFailed);
      assert.equal(state.isFetching, false);
    });

    it('Should save the action payload with load succeess', () => {
      var state = { ...initialState, isFetching: true };
      state = reducer(state, loadSucceeded);
      assert.deepEqual(state.data, [1, 2, 3]);
    });

    it('Should return existing state with unknown action', () => {
      let state = reducer('test', fakeAction);
      assert.equal(state, 'test');
    })
  })
})