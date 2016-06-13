import React from 'react';

const Summary = (props) => (
  <div className="search-results-summary">
    <div className="row">
      Encontrados <span className="search-results-total">{ props.total }</span> personajes
    </div>
  </div>
);

Summary.propTypes = {
  total: React.PropTypes.number.isRequired
}

export default Summary;