import React, { PropTypes } from 'react';

// El encabezado común a todas las páginas
const Header = (props) =>
  <div className='shop-header'>
    <h2>{ props.text }</h2>
  </div>;

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header;
