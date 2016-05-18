import React, { PropTypes } from 'react';
import Header from './header';

// Página de "No encontrado"
const NotFound = (props) => {
  return (
    <div className='not-found'>
      <Header text='Page not found' />
      <p>Ooops! Not ready yet</p>
      <p><a className='button' onClick={ props.onBackToCatalog }>Back to Shop</a></p>
    </div>
  );
}

NotFound.propTypes = {
  onBackToCatalog: PropTypes.func.isRequired
}

export default NotFound;