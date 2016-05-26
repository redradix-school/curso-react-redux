import React, { Component, PropTypes } from 'react';
import ResultsItem from './results_item';

class Results extends Component {
  render(){
    const { items } = this.props;
    const resultItems = items.map(r => {
      return <ResultsItem key={r.name} item={ r } />
    });

    return (
      <div className="search-results">
        <table>
          <thead>
            <tr>
              <th>Personaje</th>
              <th>Actor</th>
              <th className="center">Temporadas</th>
              <th className="center">Vivo</th>
            </tr>
          </thead>
          <tbody>
            { resultItems }
          </tbody>
        </table>
        <div className="search-results-summary">
          <div className="row">
            Encontrados <span className="search-results-total">{ items.length }</span> personajes
          </div>
        </div>
    </div>
    )
  }
}

Results.propTypes = {
  items: React.PropTypes.array
}

Results.defaultProps = {
  items: []
}

export default Results;