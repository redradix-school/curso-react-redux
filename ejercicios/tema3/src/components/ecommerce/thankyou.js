import React, { PropTypes } from 'react';
import Header from './header';

const ThankYou = React.createClass({
  propTypes: {
    orderDetails: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired
    }).isRequired,
    onBackToShopping: PropTypes.func.isRequired
  },
  handleBackClick(e){
    e.preventDefault();
    this.props.onBackToShopping();
  },
  render(){
    return (
      <div className="thank-you">
      <Header text={'Gracias por tu compra ' + this.props.orderDetails.firstName } />
      <p>Te llegará en breve a { this.props.orderDetails.address }</p>
      <p><button className="button" onClick={ this.handleBackClick }>Volver a la tienda</button></p>
    </div>
    )
  }
});

export default ThankYou;