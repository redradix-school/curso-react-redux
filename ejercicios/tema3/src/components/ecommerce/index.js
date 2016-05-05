import React from 'react';
import { products as catalogProducts } from '../../data/catalog';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import NotFound from './notfound';

const Shop = React.createClass({
  getInitialState(){
    return {
      //página actual, usaremos
      //"catalog", "cart", "checkout", "thankyou"
      page: 'catalog',
      //productos del catálogo
      products: catalogProducts,
      //productos en el carrito (con cantidad de cada uno)
      cart: [],
      //datos personales del pedido
      orderDetails: {},
      //errores en los datos del pedido
      orderErrors: {}
    }
  },

  navigate(newPage){
    //TODO: cambiar la página actual
  },

  handleAddToCart({product}){
    var cartItems = this.state.cart;
    //TODO: Comprobar si el producto ya está
    var existingProduct = null;
    if(existingProduct){
      //aumentamos la cantidad de ese producto
      this.handleQuantityChange({ product, qty: existingProduct.qty+1});
    }
    else {
      //lo añadimos al carrito, copiamos propiedades y añadimos QTY
      var newItem = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        qty: 1
      };
      this.setState({ cart: cartItems.concat(newItem )});
    }
    //mostramos la página del carrito
    this.navigate('cart');
  },

  handleQuantityChange({ product, qty }){
    //TODO: cambiar la cantidad de un item en el carrito
    //TODO: filter out items with 0 qty
    //TODO: guardar en state
  },

  handleCheckout({ order }){
    var errors = {};
    /** TODO - validacion */
    if(Object.keys(errors).length === 0){
      //everything ok! empty cart and navigate to thankyou page
      //TODO
    }
    else {
      //stay on the same page, display errors
      //TODO
    }
  },

  getComponentForPage(page){
    switch(page){
    case 'catalog':
      return <Catalog
        items={ this.state.products }
        onNavigate={ this.navigate }
        onAddToCart={ this.handleAddToCart } />

    //TODO: resto pantallas
    case 'cart':
      break;

    case 'checkout':
      break;

    case 'thankyou':
      break;

    default:
      return <NotFound onBackToCatalog={ () => this.navigate('catalog') } />
    }
  },

  render(){
    const component = this.getComponentForPage(this.state.page);
    return (
      <div className='shopping-cart'>
        { component }
      </div>
    )
  }
});

export default Shop;