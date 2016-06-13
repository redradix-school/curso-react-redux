import React, { Component, PropTypes } from 'react';
import { extractTimeParts } from '../lib/utils';

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
  const redStyle = {
    color: '#f00'
  }
  const style = props.minutes === '00' && props.isRunning ?
    redStyle : {}
  return (
    <div className="timer" style={ style }>
      <span>{ props.minutes }</span>:
      <span>{ props.seconds }</span>:
      <span>{ props.milliseconds }</span>
    </div>
  )
}

Screen.propTypes = {
  isRunning: PropTypes.bool,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  milliseconds: PropTypes.string
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
class CountDown extends Component {
  constructor(){
    super();
    this.state = {
      isRunning: false,
      current: 0,
      end: 0
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }
  handleStart(){
    if(!this.state.isRunning){
      let minutes = parseInt(window.prompt('¿Cuántos minutos?')),
          destDate = new Date();

      destDate.setMinutes(destDate.getMinutes() + minutes);

      this.setState({
        isRunning: true,
        end: destDate.getTime(),
        current: Date.now()
      });

      this._interval = setInterval(() => {
        if(Date.now() > this.state.end) {
          clearInterval(this._interval);
          this.setState({
            isRunning: false,
            end: 0,
            current: 0

          })
          return;
        }
        else {
          this.setState({
            current: Date.now()
          });
        }
      });
    }
  }
  handleStop(){
    /* TODO - detener o resetear el cronómetro */
    if(this.state.isRunning){
      clearInterval(this._interval)
      this.setState({
        isRunning: false
      })
    }
    else {
      this.setState({
        end: 0,
        current: 0
      })
    }
  }
  render(){
    const bigStyle = {
      fontSize: '2em'
    }
    const { isRunning, current, end } = this.state;
    const diff = end - current;
    const { minutes, seconds, milliseconds } = extractTimeParts(diff);
    return (
      <div className="crono">
        <Header text='CountDown!' />
        <div className="content">
          <Screen
            isRunning={ isRunning }
            minutes={ minutes }
            seconds={ seconds }
            milliseconds={ milliseconds } />
          <Buttons
            onStart={ this.handleStart }
            onStop={ this.handleStop } />
        </div>
      </div>
    )
  }

}

export default CountDown;
