import React, { PropTypes } from 'react';

const CartItem = React.createClass({
  propTypes: {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired
    }),
    onQuantityChange: PropTypes.func.isRequired
  },
  handleRemove(e){
    e.preventDefault();
    this.props.onQuantityChange({
      product: this.props.product,
      qty: 0
    });
  },
  handleIncQty(e){
    //TODO
  },
  handleDecQty(e){
    //TODO
  },
  render(){
    const product = this.props.product;
    return (
      <tr>
        <td className="qty">{ product.qty }</td>
        <td className="description">
          <h3>{ product.name }</h3>
           <p>{ product.description }</p>
        </td>
        <td className="unit-price">{ product.price} &euro;</td>
        <td className="subtotal">{ (product.price * product.qty).toFixed(2) } &euro;</td>
        <td className="actions">
          <a className="button" onClick={ this.handleIncQty }>+ 1</a>
          <a className="button" onClick={ this.handleDecQty }>- 1</a>
          <a className="button" onClick={ this.handleRemove }>Eliminar</a>
        </td>
      </tr>
    )
  }
});

export default CartItem;