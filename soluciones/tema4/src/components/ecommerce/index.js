import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import NotFound from './notfound';

export class Shop extends  Component {
  // Devuelve el componente apropiado para
  // la página actual
  getComponentForPage(page){
    switch(page){
    case 'catalog':
      return (
        <Catalog />
      );
    case 'cart':
      return (
        <Cart />
      );
    case 'checkout':
      return (
        <Checkout />
      );
    case 'thankyou':
      return (
        <ThankYou />
      );
    default:
      return (
        <NotFound />
      );
    }
  }

  render(){
    const component = this.getComponentForPage(this.props.page);
    return (
      <div className='shopping-cart'>
        { component }
      </div>
    )
  }
}

Shop.propTypes = {
  page: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    page: state.route
  }
}

export default connect(mapStateToProps)(Shop);