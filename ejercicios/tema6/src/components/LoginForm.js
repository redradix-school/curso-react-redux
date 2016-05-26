import React, { Component } from 'react';

/* Ejemplo form no controlado */
class LoginForm extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    let username, password;
    e.preventDefault();
    username = this.refs.usuario.value;
    password = this.refs.pwd.value;
    console.log('Iniciando sesión para', username, password);
  }
  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <p>
          Usuario: <br />
          <input type='text' ref='usuario' />
          </p>
          <p>
          Password:<br />
          <input type='password' name='pwd' ref='pwd' />
          </p>
          <p><button type='submit'>Iniciar sesión</button></p>
        </form>
      </div>
    )
  }
}

export default LoginForm;