import React, { Component, PropTypes } from 'react';
import { extractTimeParts } from '../lib/timeUtils';

/* HEADER */
const Header = function({ text }){
  return (
    <div className="header">
      <h2>{ text }</h2>
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

/* SCREEN */
const Screen = function(props){
  /* TODO: pintar valores reales! */
  return (
    <div className="timer">
      <span className="timer-hours">00</span>:
      <span className="timer-minutes">00</span>:
      <span className="timer-seconds">000</span>
    </div>
  )
}
Screen.propTypes = {
  /* TODO */
}

/* BUTTONS */
const Buttons = function({ onStart, onStop }){
  return (
    <div className="actions">
      <button onClick={ onStop }>STOP</button>
      <button onClick={ onStart }>START</button>
    </div>
  )
}
Buttons.propTypes = {
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

/* CRONOMETRO Container */
class Cronometro extends Component {
  constructor(){
    super();
    this.state = {
      /* TODO */
    }
  }
  handleStart(){
    /* TODO - iniciar el cronómetro */
  }
  handleStop(){
    /* TODO - detener o resetear el cronómetro */
  }
  render(){
    /* TODO - conectar state a props de componentes */
    return (
      <div className="crono">
        <Header text='Cronómetro' />
        <div className="content">
          <Screen />
          <Buttons
            onStart={ this.handleStart }
            onStop={ this.handleStop } />
        </div>
      </div>
    )
  }

}

export default Cronometro;