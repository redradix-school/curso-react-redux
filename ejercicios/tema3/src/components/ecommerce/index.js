import React, { Component, PropTypes } from 'react';
import { products as catalogProducts } from '../../data/catalog';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import NotFound from './notfound';

class Shop extends  Component {
  constructor(props){
    super(props);
    // TODO: estado inicial de la aplicación
    this.state = {
      //página o "ruta" actual

      // lista de productos

      // lista de productos en el carrito

      // datos del pedido

      // errores de pedido

    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  //  Cambia la página actual
  handleNavigate(newPage){
    /* TODO */
  }

  // Añade un producto al carrito
  handleAddToCart({product}){
    let cartItems = this.state.cart;
    // TODO - añadir un producto al carrito
    // si ya estaba, sumar 1 a la cantidad
    // finalmente, navegar al carrito
    this.handleNavigate('cart');
  }

  // Modifica la cantidad de un producto en el carrito
  handleQuantityChange({ product, qty }){
    //TODO: modificar la cantidad de un elemento en el carrito
    //TODO: Filtrar elementos que queden con cantidad 0
    // y gardar en el estado!
  }

  // Recibe los datos personales del pedido y lo valida,
  // navegando a la página final si es correcto
  handleCheckout({ order }){
    let errors = {};
    if(order.firstName.trim() === ''){
      errors.firstName = 'El nombre es obligatorio';
    }
    if(order.lastName.trim() === ''){
      errors.lastName = 'El apellido es obligatorio';
    }
    if(order.email.trim() === ''){
      errors.email = 'Debe introducir un email';
    }
    if(order.address.trim() === ''){
      errors.address = 'Debe introducir una dirección de entrega';
    }
    if(Object.keys(errors).length === 0){
      //TODO: todo bien, limpiar datos y navegar a ThankYou

    }
    else {
      //TODO: nos quedamos en la misma página para mostrar los errores
    }
  }

  // Devuelve el componente apropiado para
  // la página actual
  getComponentForPage(page){
    switch(page){
    case 'catalog':
      return (
        <Catalog
          items={ this.state.products }
          onAddToCart={ this.handleAddToCart } />
      );
    case 'cart':
      return (
        <Cart
          items={ this.state.cart }
          onNavigate={ this.handleNavigate }
          onCartQuantityChange={ this.handleQuantityChange } />
      );
    case 'checkout':
      return (
        <Checkout
          errors={ this.state.orderErrors }
          onProcessOrder={ this.handleCheckout }
          onBackToCart={ () => this.handleNavigate('cart')} />
      );
    case 'thankyou':
      return (
        <ThankYou
          orderDetails={ this.state.orderDetails }
          onBackToShopping={ () => this.handleNavigate('catalog') } />
      );
    default:
      return (
        <NotFound
          onBackToCatalog={ () => this.handleNavigate('catalog') } />
      );
    }
  }

  render(){
    const component = this.getComponentForPage(this.state.page);
    return (
      <div className='shopping-cart'>
        { component }
      </div>
    )
  }
}

export default Shop;