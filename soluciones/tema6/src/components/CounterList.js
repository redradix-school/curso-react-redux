import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Counter extends Component {
  render(){
    const { style, id, onClick, value } = this.props;
    return (
      <button style={ style } id={ id } onClick={ onClick }>
        { value }
      </button>
    )
  }
}

const commonStyle = {
  padding: '10px',
  borderRadius: '5px',
  fontSize: '16px',
  minWidth: '100px'
}

// THis requires babel-preset-stage-0
const redStyle = {
  ...commonStyle,
  backgroundColor: 'red',
  color: 'white'
}
const normalStyle = {
  ...commonStyle,
  backgroundColor: 'blue',
  color: 'white'
}

class CounterList extends Component {
  constructor(props){
    super(props);
    this.state = {
      counters: []
    }
    this.handleAddCounter = this.handleAddCounter.bind(this);
    this.handleRemoveCounter = this.handleRemoveCounter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }
  updateCounter(e){
    const index = parseInt(e.target.id),
          counters = this.state.counters;

    counters[index]++;

    this.setState({
      counters
    });
  }
  handleAddCounter(){
    this.setState({
      counters: this.state.counters.concat(0)
    });
  }
  handleRemoveCounter(e){
    const index = parseInt(e.target.id),
          counters = this.state.counters;

    this.setState({
      counters: counters.filter((value,i) => i !== index)
    });
  }
  componentDidUpdate(){
    console.log(this.refs)
  }
  render(){
    const { counters } = this.state;
    const counterComponents = counters.map((value,i) =>
      <div key={ i }>
        <Counter
          ref={ 'counter' + i }
          id={ i }
          value={ value }
          style={ value > 5 ? redStyle : normalStyle }
          onClick={ this.updateCounter } />
        <button id={ i } onClick={ this.handleRemoveCounter }>Quitar</button>
      </div>
    );

    return (
      <div>
        <h1>Counter list</h1>
        <p><button ref='button' onClick={ this.handleAddCounter }>Añadir</button></p>
        { counterComponents }
      </div>
    )
  }
}

export default CounterList;