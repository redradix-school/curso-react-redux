import React from 'react';

//Un componente como una función!!
const ShopHeader = (props) =>
  <div className='shop-header'>
    <h2>{ props.text }</h2>
  </div>;

ShopHeader.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default ShopHeader;
