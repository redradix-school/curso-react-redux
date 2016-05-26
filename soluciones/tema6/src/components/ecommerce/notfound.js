import React from 'react';
import Header from './header';
import { withRouter } from 'react-router';

// Página de "No encontrado"
const NotFound = (props) => {
  const { router } = props;
  return (
    <div className='not-found'>
      <Header text='Page not found' />
      <p>Ooops! Not ready yet</p>
      <p>
        <a className='button' onClick={ () => { router.push('/') } }>
          Back to Shop
        </a>
      </p>
    </div>
  );
}

export default withRouter(NotFound);