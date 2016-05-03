import React, { Component } from 'react';

class HolaMundo extends Component {
  render(){
    return (
      <div>
        <h1>Hola Mundo con hot reloading</h1>
        <p>React funciona!</p>
      </div>
    );
  }
}

export default HolaMundo;


//Version ES2015

// const HolaMundo = React.createClass({
//   render(){
//     return (
//       <div>
//         <h1>Hola Mundo con hot reloading</h1>
//         <p>React funciona!</p>
//       </div>
//     )
//   }
// });

