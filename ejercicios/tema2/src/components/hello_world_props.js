import React from 'react';

const nameStyle = {
  fontFamily: 'Helvetica, Geneva, sans-serif',
  fontSize: 14,
  backgroundColor: '#f93',
  color: '#fff',
  padding: '6px 4px',
  fontWeight: 'bold',
  borderRadius: 8
};

const HelloWorldProps = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render(){
    return (
      <div>
        <h1>Hola Mundo con hot reloading</h1>
        <p>Te saludo <span style={nameStyle}>{this.props.name}</span>, tu nombre tiene {this.props.name.length} letras.</p>
      </div>
    )
  }
});

export default HelloWorldProps;