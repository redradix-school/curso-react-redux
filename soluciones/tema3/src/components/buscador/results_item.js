import React, { Component, PropTypes } from 'react';

class ResultsItem extends Component {
  shouldComponentUpdate(){
    return false;
  }

  render(){
    const { name, actor, seasons, alive } = this.props.item;
    return (
      <tr>
        <td>{ name }</td>
        <td>{ actor }</td>
        <td className="center">{ seasons.join(', ') }</td>
        <td className="center">{ alive ? "Sí" : "No" }</td>
      </tr>
    )
  }
}

ResultsItem.propTypes = {
  item: PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    actor: React.PropTypes.string.isRequired,
    seasons: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    alive: React.PropTypes.bool.isRequired
  })
}

export default ResultsItem;