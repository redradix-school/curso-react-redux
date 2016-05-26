import React, { PropTypes } from 'react';

const Title = ({ text }) => (
  <div className='search-title'>
    <div className='row'>
      <h1>{ text }</h1>
    </div>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired
}


export default Title;