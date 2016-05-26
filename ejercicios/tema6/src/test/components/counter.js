import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
//node.js basic assertion lib
import assert from 'assert';
import { spy } from 'sinon';
//named import, not connected version!
import { Counter }  from '../../components/counter';

describe('Counter component', () => {
  let renderer, counter, dispatch = spy();
  // Ejemplo SIN skin-deep, usando createRenderer
  beforeEach(() => {
    renderer = createRenderer();
    renderer.render(<Counter clicks={ 5 } dispatch={ dispatch } />);
    counter = renderer.getRenderOutput();
  });

  afterEach(() => {
    dispatch.reset();
  })

  it('Should render a button', () => {
    assert.equal(counter.type, 'button');

  });

  it('Should render the number of clicks', () => {
    assert.equal(counter.props.children[1], 5);
  });

  it('Should dispatch INCREMENT action onClick', () => {
    const expectedAction = {
      type: 'INCREMENT'
    }
    //call the prop itself
    counter.props.onClick();
    assert.equal(dispatch.calledOnce, true);
    assert.deepEqual(dispatch.getCall(0).args[0], expectedAction);
  });
});