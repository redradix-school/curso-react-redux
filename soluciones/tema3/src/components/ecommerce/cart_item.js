import React, { Component, PropTypes } from 'react';

// Un producto en el carrito
class CartItem extends Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleIncQty = this.handleIncQty.bind(this);
    this.handleDecQty = this.handleDecQty.bind(this);
  }

  // Elimina el producto del carrito
  handleRemove(e){
    e.preventDefault();
    this.props.onQuantityChange({
      product: this.props.product,
      qty: 0
    });
  }

  // Incrementa la cantidad del producto
  handleIncQty(e){
    e.preventDefault();
    this.props.onQuantityChange({
      product: this.props.product,
      qty: this.props.product.qty+1
    });
  }

  //  Decrementa la cantidad del producto
  handleDecQty(e){
    e.preventDefault();
    this.props.onQuantityChange({
      product: this.props.product,
      qty: this.props.product.qty-1
    });
  }

  render(){
    const { name, description, qty, price }  = this.props.product,
          subTotal = (price * qty).toFixed(2);

    return (
      <tr>
        <td className="qty">{ qty }</td>
        <td className="description">
          <h3>{ name }</h3>
           <p>{ description }</p>
        </td>
        <td className="unit-price">{ price } &euro;</td>
        <td className="subtotal">{ subTotal } &euro;</td>
        <td className="actions">
          <a className="button" onClick={ this.handleIncQty }>+ 1</a>
          <a className="button" onClick={ this.handleDecQty }>- 1</a>
          <a className="button" onClick={ this.handleRemove }>Eliminar</a>
        </td>
      </tr>
    )
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired
  }),
  onQuantityChange: PropTypes.func.isRequired
}

export default CartItem;