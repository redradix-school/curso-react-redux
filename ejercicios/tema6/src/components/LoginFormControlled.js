import React, { Component } from 'react';

/* Ejemplo form controlado */
class LoginFormControlled extends Component {
  constructor(props){
    super(props)
    this.state = {
      usuario: props.usuario,
      password: props.password
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log('Ctor!', this.props, this.state);
  }
  componentWillMount(){
    console.log('CWM')
  }
  componentDidMount(){
    console.log('CDM')
  }
  componentWillReceiveProps(nextProps){
    console.log('CWRP', nextProps);
  }
  componentWillUpdate(nextProps, nextState){
    console.log('CWUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState){
    console.log('CDidUpdate', prevProps, prevState);
  }
  handleSubmit(e){
    e.preventDefault();
    const { usuario, password } = this.state;
    console.log('Iniciando sesión para', usuario, password);
  }
  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  render(){
    console.log('render')
    const { usuario, password } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <p>
          Usuario: <br />
          <input type='text' id='usuario' value={ usuario } onChange={ this.handleChange } />
          </p>
          <p>
          Password:<br />
          <input type='password' id='password' value={ password } onChange={ this.handleChange } />
          </p>
          <p><button type='submit'>Iniciar sesión</button></p>
        </form>
      </div>
    )
  }
}

LoginFormControlled.defaultProps = {
  usuario: '',
  password: ''
}

export default LoginFormControlled;