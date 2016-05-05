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
      page: 'catalog',
      products: catalogProducts,
      cart: [],
      orderDetails: {},
      orderErrors: {}
    }
  },

  navigate(newPage){
    this.setState({ page: newPage });
  },

  handleAddToCart({product}){
    let cartItems = this.state.cart;
    //is the same product already in cart?
    let existingProduct = cartItems.filter(i => i.id === product.id)[0] || null;
    if(existingProduct){
      cartItems = cartItems.map(item => {
        if(item.id === product.id) {
          item.qty++;
        }
        return item;
      });
      this.setState({ cart: cartItems });
    }
    else {
      let newItem = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        qty: 1
      };
      this.setState({ cart: cartItems.concat(newItem )});
    }
    this.navigate('cart');
  },

  handleQuantityChange({ product, qty }){
    let cartItems = this.state.cart.map(item => {
      if(item.id === product.id){
        item.qty = qty;
      }
      return item;
    });
    //filter out items with 0 qty
    let remainingItems = cartItems.filter(p => p.qty > 0);
    this.setState({
      cart: remainingItems
    });
  },

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
      //everything ok! empty cart and navigate to thankyou page
      this.setState({
        cart: [],
        orderDetails: order,
        orderErrors: {},
        page: 'thankyou'
      });
    }
    else {
      //stay on the same page, display errors
      this.setState({
        orderErrors: errors
      });
    }
  },

  getComponentForPage(page){
    switch(page){
    case 'catalog':
      return <Catalog
        items={ this.state.products }
        onNavigate={ this.navigate }
        onAddToCart={ this.handleAddToCart } />
    case 'cart':
      return <Cart
        items={ this.state.cart }
        onNavigate={ this.navigate }
        onCartQuantityChange={ this.handleQuantityChange } />;
    case 'checkout':
      return (
        <Checkout
          errors={ this.state.orderErrors }
          onProcessOrder={ this.handleCheckout }
          onBackToCart={ () => this.navigate('cart')} />
      )
    case 'thankyou':
      return (
        <ThankYou
          orderDetails={ this.state.orderDetails }
          onBackToShopping={ () => this.navigate('catalog') } />
      )
    default:
      return <NotFound onBackToCatalog={ () => this.navigate('catalog')} />
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