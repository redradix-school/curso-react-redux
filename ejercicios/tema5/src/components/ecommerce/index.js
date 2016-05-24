import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import routes from './routes';

export class Shop extends  Component {
  render(){
    return (
      <Router history={ this.props.history } routes={ routes }></Router>
    )
  }
}

Shop.propTypes = {
  history: PropTypes.object
}

export default Shop;