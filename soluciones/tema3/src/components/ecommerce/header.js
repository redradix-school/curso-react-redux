import React, { PropTypes } from 'react';

// El encabezado común a todas las páginas
const ShopHeader = (props) =>
  <div className='shop-header'>
    <h2>{ props.text }</h2>
  </div>;

ShopHeader.propTypes = {
  text: PropTypes.string.isRequired
}

export default ShopHeader;
