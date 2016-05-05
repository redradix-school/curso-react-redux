import React, { Component, PropTypes } from 'react';

class ResultsItem extends Component {
  render(){
    /* TODO - pintar una fila de la tabla */
    return null;
  }
}

ResultsItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    seasons: PropTypes.arrayOf(PropTypes.number).isRequired,
    alive: PropTypes.bool.isRequired
  }).isRequired
}

export default ResultsItem;