import React, { PropTypes } from 'react';
import Header from './header';

const NotFound = React.createClass({
  propTypes: {
    onBackToCatalog: PropTypes.func.isRequired
  },
  render(){
    return (
      <div className='not-found'>
        <Header text='Page not found' />
        <p>Ooops! Not ready yet</p>
        <p><a className='button' onClick={this.props.onBackToCatalog}>Back to Shop</a></p>
      </div>
    )
  }
});
export default NotFound;