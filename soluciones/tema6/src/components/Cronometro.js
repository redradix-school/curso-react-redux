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
const Screen = function({ time }){
  return (
    <div className="timer">
      <span className="timer-hours">{ time.minutes }</span>:
      <span className="timer-minutes">{ time.seconds }</span>:
      <span className="timer-seconds">{ time.milliseconds }</span>
    </div>
  )
}
Screen.propTypes = {
  time: PropTypes.shape({
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
    milliseconds: PropTypes.string
  }).isRequired
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
      isRunning: false,
      start: 0,
      value: 0
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }
  handleStart(){
    const { isRunning } = this.state;
    if(!isRunning){
      this.setState({
        isRunning: true,
        start: Date.now(),
        interval: setInterval(() => this.setState({ value: Date.now() }), 50)
      });
      console.log('Cronometro arrancado!');
    }
  }
  handleStop(){
    const { isRunning } = this.state;
    if(isRunning){
      console.log('Cronometro parado!');
      clearInterval(this.state.interval);
      this.setState({ isRunning: false });
    }
    else {
      console.log('Cronometro reseteado!');
      this.setState({
        start: 0,
        value: 0
      })
    }
  }
  render(){
    const time = extractTimeParts(this.state.value - this.state.start);
    return (
      <div className="crono">
        <Header text='Cronómetro' />
        <div className="content">
          <Screen time={ time } />
          <Buttons
            onStart={ this.handleStart }
            onStop={ this.handleStop } />
        </div>
      </div>
    )
  }

}

export default Cronometro;