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
      //shallow render del componente Cart sin props
      const { tree } = shallowRender(Cart, {});
      // TODO
      // Encontrar el componente Header
      // Verificar que tiene la prop "text" correcta

    });

    it('Should render the cart contents table', () => {
      // TODO - shallow render, buscar la TABLE y asertar que existe
    });

    it('Should render one row per product in the cart', () => {
      // TODO - shallow render con items, bucear hasta obtener la lista de CartItems
      // Asertar que hay tantos CartItems como items
    });

    it('Should render the total price', () => {
      // TODO - shallow render con items, encontrar la celda con el total
      // asertar su texto es correcto "10.00"

    });

    it('Should render the Link back to catalog', () => {
      // TODO - shallow render, buscar el primer Link y asertar sobre su prop "to"
    });

    it('Should render the Checkout button only if cart is NOT empty', () => {
      // TODO - shallow render con items, comprobar que hay dos Link
      // y que el segundo lleva a "checkout"
    });

    it('Should NOT render the Checkout button if cart is empty', () => {
      const { tree } = shallowRender(Cart);
      // buscamos todos los Link dentro de div.footer
      const links = tree.subTree('.footer').everySubTree('Link');
      // solo puede haber uno sin items
      assert.equal(1, links.length);
    });

  });

  describe('Behaviour', () => {
    let instance,
        //para el e.preventDefault() en los handlers
        mockEvent = { preventDefault: () => {} },
        //mocks de action creators
        goToCatalog = spy(),
        goToCheckout = spy(),
        changeQuantity = spy();

    beforeEach(() => {
      //reiniciamos estadísticas
      goToCatalog.reset();
      goToCheckout.reset();
      changeQuantity.reset();
      const output = shallowRender(Cart, { goToCatalog, goToCheckout, changeQuantity });
      // instancia disponible para todos los tests
      instance = output.instance;
    });

    it('Should call goToCatalog action creator on Back button click', () => {
      // TODO - llamar al método apropiado en la instancia
      // asertar que el espía apropiado ha sido llamado
    });

    it('Should call goToCheckout action creator on Checkout button click', () => {
      // TODO - llamar al método apropiado en la instancia
      // asertar que el espía apropiado ha sido llamado
    });

    it('Should call changeQuantity action creator with product id and new quantity', () => {
      const params = { id: 1, quantity: 500 };
      // TODO - llamar al método apropiado en la instancia
      // asertar que se llama al espía apropiado con los argumentos correctos
    })
  })
})
