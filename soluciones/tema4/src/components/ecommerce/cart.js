import React, { Component, PropTypes } from 'react';
import { changeQuantity, removeFromCart, selectors } from '../../modules/cart';
import { goToCatalog, goToCheckout } from '../../modules/route';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './header';
import CartItem from './cart_item';

// Carrito
export class Cart extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  // Gestiona el "Volver atrás"
  handleBack(e){
    e.preventDefault();
    this.props.goToCatalog();
  }

  // Gestiona el botón "Finalizar compra"
  handleCheckout(e){
    e.preventDefault();
    this.props.goToCheckout();
  }

  // Gestiona el cambio de cantidad de los componentes CartItem
  handleQuantityChange({ id, quantity }){
    this.props.changeQuantity(id, quantity);
  }

  render(){
    const { items, total } = this.props;
    // elementos del carrito
    const cartItems = items.map(item =>
      <CartItem
        key={item.id} product={item}
        onQuantityChange={ this.handleQuantityChange } />);

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
                  { total } &euro;
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
  total: PropTypes.string.isRequired,
  changeQuantity: PropTypes.func.isRequired,
  goToCatalog: PropTypes.func.isRequired,
  goToCheckout: PropTypes.func.isRequired
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeQuantity,
    goToCatalog,
    goToCheckout
  }, dispatch);
}

export default connect(selectors.cartState, mapDispatchToProps)(Cart);
