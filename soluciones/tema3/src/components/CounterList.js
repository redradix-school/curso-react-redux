/*

  Un ejemplo algo más complejo del Contador
  Una lista dinámica de contadores que podemos añadir o quitar

*/
import React, { Component, PropTypes } from 'react';

// Contador básico sin estado, recibe todo vía props
class Counter extends Component {
  render(){
    const { id, value, onClick, buttonStyle } = this.props;
    return (
      <button style={ buttonStyle } id={ id } onClick={ onClick }>
        { value }
      </button>
    )
  }
}
Counter.propTypes = {
  buttonStyle: PropTypes.object,
  id: PropTypes.number,
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

//Estilos
const commonStyle = {
  padding: '4px',
  borderRadius: '5px',
  fontSize: '16px',
  minWidth: '100px'
}

// Spread operator ... requiere babel-preset-stage-0 instalado y configurado en .babelrc!
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

//  Lista dinámica de contadores
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

  // Actualiza un contador (suma 1) dado su índice
  updateCounter(e){
    const index = parseInt(e.target.id),
          counters = this.state.counters;

    this.setState({
      counters: counters.map((value, i) => {
        return i === index ? value + 1 : value
      })
    });
  }

  //  Añade un nuevo contador a la lista
  handleAddCounter(){
    this.setState({
      counters: [ ...this.state.counters, 0 ]
    });
  }

  //  Elimina un contador de la lista
  handleRemoveCounter(e){
    const index = parseInt(e.target.id),
          counters = this.state.counters;

    this.setState({
      counters: counters.filter((value,i) => i !== index)
    });
  }

  render(){
    const { counters } = this.state;
    const counterComponents = counters.map((value,i) =>
      <div key={ i }>
        <Counter
          id={ i }
          value={ value }
          buttonStyle={ value > 5 ? redStyle : normalStyle }
          onClick={ this.updateCounter } />
        <button id={ i } onClick={ this.handleRemoveCounter }>Quitar</button>
      </div>
    );

    return (
      <div>
        <h1>Counter list</h1>
        <p><button onClick={ this.handleAddCounter }>Añadir</button></p>
        { counterComponents }
      </div>
    )
  }
}

export default CounterList;