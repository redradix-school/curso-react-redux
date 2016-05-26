import React, { Component } from 'react';

const style = {
  color: 'blue',
  border: '1px solid #000'
}

class HolaMundo extends Component {
  render(){
    return (
      <h1 style={ style }>Hola mundo!</h1>
    )
  }
}

export default HolaMundo;