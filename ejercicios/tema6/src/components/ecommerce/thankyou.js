import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from './header';

// Página de Pedido completado
export const ThankYou = ({ details, dispatch }) => {
  return (
    <div className="thank-you">
      <Header text={'Gracias por tu compra ' + details.firstName } />
      <p>Te llegará en breve a { details.address }</p>
      <p><button className="button" onClick={ (e) => dispatch(push('/')) }>Volver a la tienda</button></p>
    </div>
  );
}

ThankYou.propTypes = {
  details: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    details: state.order.details
  }
}

export default connect(mapStateToProps)(ThankYou);