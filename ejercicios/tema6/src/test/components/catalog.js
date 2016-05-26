import React from 'react';
import { shallowRender } from '../helpers';
//node.js basic assertion lib
import assert from 'assert';
import { spy } from 'sinon';
//named import, not connected version!
import { Catalog }  from '../../components/ecommerce/catalog';

describe('Catalog component', () => {
  let dispatch = spy();
  const items = [
      {
        id: 1,
        name: 'test product 1',
        description: '',
        price: 1
      },
      {
        id: 2,
        name: 'test product 2',
        description: '',
        price: 1
      },
      {
        id: 3,
        name: 'test product 3',
        description: '',
        price: 1
      }
    ];

  describe('Output', () => {
    it('Should render a Header and a catalog list', () => {
      const { tree, instance } = shallowRender(Catalog);

      const Header = tree.subTree('Header'),
            list = tree.subTree('.catalog-list');

      //existe un Header
      assert(Header);
      //Con el texto correcto configurado
      assert.equal(Header.props.text, 'Products');
      //existe un div.catalog-list
      assert(list);
    });

    it('Should render one CatalogItem per catalog item', () => {
      const { tree, instance } = shallowRender(Catalog, { items });

      let itemList = tree
        .subTree('.catalog')
        .subTree('.catalog-list')
        .everySubTree('CatalogItem');

      assert.equal(itemList.length, items.length);
    });

    it('Should render loading message if fetch is in process', () => {
      const { tree, instance } = shallowRender(Catalog, { isFetching: true }),
            loadingMessage = tree.subTree('.catalog-list');
      //ignore case option i to RegEx
      assert(/cargando/i.test(loadingMessage.text()));
    });

    it('Should render error message if fetch failed', () => {
      const error = {
        status: 'foo',
        text: 'error'
      }
      const { tree } = shallowRender(Catalog, { error }),
            errorMessage = tree.subTree('.catalog-list').textIn();

      assert(/error/.test(errorMessage));
    });

  });

  describe('Behaviour', () => {

    beforeEach(() => {
      dispatch.reset();
    });

    it('Should dispatch fetchProducts on mount if items is empty', () => {
      const fetchProducts = spy();
      const { tree, instance } = shallowRender(Catalog, { fetchProducts });
      //we need to manually call componentDidMount on the instance
      //because it's not called as part of the shallow render cycle
      instance.componentDidMount();
      assert.equal(fetchProducts.calledOnce, true);
    });

    it('Should NOT dispatch fetchProducts on mount if items is empty', () => {
      const fetchProducts = spy();
      const { tree, instance } = shallowRender(Catalog, { fetchProducts, items });
      //we need to manually call componentDidMount on the instance
      //because it's not called as part of the shallow render cycle
      instance.componentDidMount();
      assert.equal(fetchProducts.calledOnce, false);
    });

    it('Should dispatch addToCart and push in handleAddToCart', () => {
      const push = spy(),
            addToCart = spy();
      const { tree, instance } = shallowRender(Catalog, { push, addToCart });

      //call the instance method
      instance.handleAddToCart(2);

      assert.equal(addToCart.calledOnce, true);
      assert.equal(addToCart.getCall(0).args[0], 2);
      assert.equal(push.calledOnce, true);
      assert.equal(push.getCall(0).args[0], 'cart');
    });
  });


})