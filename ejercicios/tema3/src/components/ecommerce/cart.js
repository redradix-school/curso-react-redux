import React, { Component, PropTypes } from 'react';
import Header from './header';
import CartItem from './cart_item';

// Carrito
class Cart extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  // Calcula el importe total del carrito
  calculateTotal(){
    /* TODO */
    return 0.toFixed(2);

  }

  // Gestiona el "Volver atrás"
  handleBack(e){
    e.preventDefault();
    this.props.onNavigate('catalog');
  }

  // Gestiona el botón "Finalizar compra"
  handleCheckout(e){
    e.preventDefault();
    this.props.onNavigate('checkout');
  }

  render(){
    // TODO: mapear elementos del carrito a componentes
    const cartItems = [];

    return (
      <div className='cart'>
        <Header text='Tu compra' />
        <div className='cart-contents'>
          <table>
            <thead>
              <tr>
                <th className="qty">Cant</th>
                <th className="description">Producto</th>
                <th className="unit-price">Precio</th>
                <th className="subtotal">Total</th>
                <th className="actions"></th>
              </tr>
            </thead>
            <tbody>
              { cartItems }
              <tr className='summary'>
                <td colSpan="4" className="total">
                  { this.calculateTotal() } &euro;
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer">
          <a className="button" onClick={ this.handleBack }>Seguir comprando</a>
          { cartItems.length === 0 ? null : <a className="button" onClick={ this.handleCheckout }>Finalizar compra</a> }
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNavigate: PropTypes.func.isRequired,
  onCartQuantityChange: PropTypes.func.isRequired
}

export default Cart;
