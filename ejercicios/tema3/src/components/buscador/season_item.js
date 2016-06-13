import React from 'react';

const SeasonItem = (props) => (
  <div className='season-option' key={ props.season }>
    <strong>{ props.season }</strong>
    <input type="checkbox" id={ props.season } checked={ props.isChecked } value={ props.season } onChange={ props.onChange } />
  </div>
);

SeasonItem.propTypes = {
  season: React.PropTypes.number.isRequired,
  isChecked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default SeasonItem;