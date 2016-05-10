import React, { PropTypes } from 'react';
import Header from './header';

// Página de Pedido completado
const ThankYou = (props) => {
  const { orderDetails, onBackToShopping } = props;
  return (
    <div className="thank-you">
      <Header text={'Gracias por tu compra ' + orderDetails.firstName } />
      <p>Te llegará en breve a { orderDetails.address }</p>
      <p><button className="button" onClick={ (e) => onBackToShopping() }>Volver a la tienda</button></p>
    </div>
  );
}

ThankYou.propTypes = {
  orderDetails: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired,
  onBackToShopping: PropTypes.func.isRequired
}

export default ThankYou;