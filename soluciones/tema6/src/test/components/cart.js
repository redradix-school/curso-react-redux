import React from 'react';
import { shallowRender } from '../helpers';
//node.js basic assertion lib
import assert from 'assert';
import { spy } from 'sinon';
//named import, not connected version!
import { Cart }  from '../../components/ecommerce/cart';

describe('Cart container', () => {
  describe('Output', () => {
    const cartItems = [{ id: 1, quantity: 1, name: 'Test', price: 10 }];
    it('Should render a Header component with text "Tu compra"', () => {
      const { tree } = shallowRender(Cart);
      const headerComp = tree.subTree('Header');
      assert(headerComp);
      assert.equal(headerComp.props.text, 'Tu compra')
    });

    it('Should render the cart contents table', () => {
      const { tree } = shallowRender(Cart);
      assert(tree.subTree('.cart-contents').subTree('table'));
    });

    it('Should render one row per product in the cart', () => {
      const { tree } = shallowRender(Cart, { items: cartItems, total: (10).toFixed(2) });
      assert.equal(
        1,
        tree.dive(['.cart-contents', 'table', 'tbody'])
          .everySubTree('CartItem').length
      );
    });

    it('Should render the total price', () => {
      const { tree } = shallowRender(Cart, { items: cartItems, total: (10).toFixed(2) });
      const totalSpan = tree.dive(['.cart-contents', 'tbody', '.summary', '.total']);
      assert.equal('10.00', totalSpan.textIn());
    });

    it('Should render the Link back to catalog', () => {
      const { tree } = shallowRender(Cart);
      const backLink = tree.dive(['.footer', 'Link']);
      assert(backLink);
    });

    it('Should render the Checkout button only if cart is NOT empty', () => {
      const { tree } = shallowRender(Cart, { items: cartItems });
      const checkoutLink = tree.subTree('.footer').everySubTree('Link')[1];
      assert(checkoutLink);
    });

    it('Should NOT render the Checkout button if cart is empty', () => {
      const { tree } = shallowRender(Cart);
      const links = tree.subTree('.footer').everySubTree('Link');
      assert.equal(1, links.length);
    });

  });

  describe('Behaviour', () => {
    let instance,
        mockEvent = { preventDefault: () => {} },
        goToCatalog = spy(),
        goToCheckout = spy(),
        changeQuantity = spy();

    beforeEach(() => {
      goToCatalog.reset();
      goToCheckout.reset();
      changeQuantity.reset();
      const output = shallowRender(Cart, { goToCatalog, goToCheckout, changeQuantity });
      instance = output.instance;
    });

    it('Should call goToCatalog action creator on Back button click', () => {
      instance.handleBack(mockEvent);
      assert(goToCatalog.calledOnce);
    });

    it('Should call goToCheckout action creator on Checkout button click', () => {
      instance.handleCheckout(mockEvent);
      assert(goToCheckout.calledOnce);
    });

    it('Should call changeQuantity action creator with product id and new quantity', () => {
      const params = { id: 1, quantity: 500 };
      instance.handleQuantityChange(params);
      assert(changeQuantity.calledOnce);
      let calledArgs = changeQuantity.getCall(0).args;
      assert.equal(params.id, calledArgs[0]);
      assert.equal(params.quantity, calledArgs[1]);
    })
  })
})
