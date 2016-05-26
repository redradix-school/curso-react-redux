import assert from 'assert';
import thunk from 'redux-thunk';
import { spy } from 'sinon';

describe('Redux Thunk middleware', () => {
  const mockStore = {
    getState: spy(),
    dispatch: spy()
  };

  const next = spy();
  // middleware = store => next => action
  // aquí nos quedamos con la tercera función (la más "interna")
  const thunkRunner = thunk(mockStore)(next);

  beforeEach(() => {
    mockStore.getState.reset();
    mockStore.dispatch.reset();
    next.reset();
  })

  it('Should call the thunk with dispatch, getState if action type is a Function', () => {
    let thunkActionCreator = (dispatch, getState) => {
      dispatch({ type: 'FOO' });
      getState();
    }

    thunkRunner(thunkActionCreator);

    assert.equal(mockStore.dispatch.calledOnce, true);
    assert.equal(mockStore.getState.calledOnce, true);
    assert.equal(next.callCount, 0);

  });

  it('Should relay to next middleware if action is an Object', () => {
    let action = { type: 'FOO' }
    thunkRunner(action);
    assert.equal(mockStore.dispatch.callCount, 0);
    assert.equal(next.calledOnce, true);
  });


});